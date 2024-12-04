import { secureStorage } from './secureStorage';
import { SessionManager } from './sessionManager';
import { UserInfo } from '../types';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../firebase';
import { FirestoreService } from './firestoreService';
import { Firestore } from '@firebase/firestore';
import { collection, getDocs, doc, getDoc, setDoc, updateDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase';

interface FirestoreUserData {
  username: string;
  role: 'admin' | 'user';
  status: 'pending' | 'active' | 'rejected';
  lastPasswordChange: number;
  createdAt: number;
}

interface User {
  username: string;
  password: string;
  role: 'admin' | 'user';
  lastPasswordChange: number;
  status: 'pending' | 'active' | 'rejected';
  createdAt: number;
}

interface PendingNotification {
  type: 'new_user';
  username: string;
  timestamp: number;
}

interface AuthError extends Error {
  code: 'ACCOUNT_LOCKED' | 'ACCOUNT_PENDING' | 'ACCOUNT_REJECTED' | 'PASSWORD_EXPIRED' | 'INVALID_CREDENTIALS';
}

// Utilisateurs par défaut
const DEFAULT_USERS: User[] = [
  {
    username: 'admin',
    password: '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', // admin123
    role: 'admin',
    lastPasswordChange: Date.now(),
    status: 'active',
    createdAt: Date.now()
  },
  {
    username: 'lionel',
    password: '7fdc9f4d7295b790e497abe7cc09f86991e32a634a5a7c67f42c68e8d0c5f2c7', // lionel123
    role: 'admin',
    lastPasswordChange: Date.now(),
    status: 'active',
    createdAt: Date.now()
  }
];

export class AuthService {
  private static readonly USERS_KEY = 'planning_users';
  private static readonly CURRENT_USER_KEY = 'planning_current_user';
  private static readonly PASSWORD_EXPIRY_DAYS = 90;
  private static readonly PENDING_NOTIFICATIONS_KEY = 'planning_pending_notifications';
  
  static async initialize() {
    console.log('Initializing AuthService...');
    await this.migrateDefaultUsers();
    // Initialiser les utilisateurs par défaut s'ils n'existent pas
    const existingUsers = secureStorage.getItem(this.USERS_KEY);
    console.log('Existing users:', existingUsers);
    
    if (!existingUsers || !Array.isArray(existingUsers) || existingUsers.length === 0) {
      console.log('No valid users found, initializing with default users...');
      secureStorage.setItem(this.USERS_KEY, JSON.stringify(DEFAULT_USERS));
      console.log('Default users initialized:', DEFAULT_USERS);
    } else {
      // Vérifier que les utilisateurs existants ont tous les champs requis
      const hasInvalidUsers = existingUsers.some(user => 
        !user.username || !user.password || !user.role || !user.status
      );
      
      if (hasInvalidUsers) {
        console.log('Found invalid users, reinitializing with default users...');
        secureStorage.setItem(this.USERS_KEY, JSON.stringify(DEFAULT_USERS));
        console.log('Default users reinitialized:', DEFAULT_USERS);
      }
    }
    SessionManager.initSession();
  }

  static async register(username: string, password: string, role: 'admin' | 'user'): Promise<boolean> {
    try {
        // Vérifier si l'utilisateur existe dans Firestore
        const existingUser = await FirestoreService.getUser(username);
        if (existingUser) {
            return false;
        }

        // Créer l'utilisateur dans Firebase Auth
        const email = `${username}@planning-equipe.com`;
        await createUserWithEmailAndPassword(auth, email, password);

        // Hasher le mot de passe pour le stockage local
        const hashedPassword = await this.hashPassword(password);

        // Créer l'utilisateur dans Firestore
        const userData: FirestoreUserData = {
            username,
            role,
            status: 'pending',
            lastPasswordChange: Date.now(),
            createdAt: Date.now()
        };
        
        await FirestoreService.createUser(userData);

        // Conserver la compatibilité avec le stockage local
        const users: User[] = JSON.parse(secureStorage.getItem(this.USERS_KEY) || '[]');
        const newUser: User = {
            username,
            password: hashedPassword,
            role,
            status: 'pending',
            lastPasswordChange: Date.now(),
            createdAt: Date.now(),
        };
        users.push(newUser);
        secureStorage.setItem(this.USERS_KEY, JSON.stringify(users));

        // Ajouter une notification pour les admins
        this.addPendingNotification(username);

        return true;
    } catch (error) {
        console.error('Erreur lors de la création du compte:', error);
        return false;
    }
}

  private static addPendingNotification(username: string) {
    const notifications = this.getPendingNotifications();
    notifications.push({
      type: 'new_user',
      username,
      timestamp: Date.now()
    });
    secureStorage.setItem(this.PENDING_NOTIFICATIONS_KEY, JSON.stringify(notifications));
  }

  static getPendingNotifications(): PendingNotification[] {
    return JSON.parse(secureStorage.getItem(this.PENDING_NOTIFICATIONS_KEY) || '[]');
  }

  static clearNotification(username: string) {
    const notifications = this.getPendingNotifications();
    const updatedNotifications = notifications.filter(n => n.username !== username);
    secureStorage.setItem(this.PENDING_NOTIFICATIONS_KEY, JSON.stringify(updatedNotifications));
  }

  static async login(username: string, password: string): Promise<UserInfo> {
    try {
        if (SessionManager.isAccountLocked()) {
            const remainingTime = Math.ceil(SessionManager.getRemainingLockTime() / 1000 / 60);
            const error = new Error(`Compte temporairement verrouillé. Réessayez dans ${remainingTime} minutes.`) as AuthError;
            error.code = 'ACCOUNT_LOCKED';
            throw error;
        }

        // Firebase Auth login
        const email = `${username}@planning-equipe.com`;
        await signInWithEmailAndPassword(auth, email, password);

        // Récupérer les données utilisateur depuis Firestore
        const firestoreUser = await FirestoreService.getUser(username) as FirestoreUserData;
        if (!firestoreUser) {
            SessionManager.recordLoginAttempt(false);
            const error = new Error('Compte non trouvé') as AuthError;
            error.code = 'INVALID_CREDENTIALS';
            throw error;
        }

        // Vérifications de statut
        if (firestoreUser.status === 'pending') {
            const error = new Error('Votre compte est en attente de validation par un administrateur.') as AuthError;
            error.code = 'ACCOUNT_PENDING';
            throw error;
        }

        if (firestoreUser.status === 'rejected') {
            const error = new Error('Votre compte a été rejeté par un administrateur.') as AuthError;
            error.code = 'ACCOUNT_REJECTED';
            throw error;
        }

        if (this.isPasswordExpired(firestoreUser)) {
            const error = new Error('Votre mot de passe a expiré. Veuillez le changer.') as AuthError;
            error.code = 'PASSWORD_EXPIRED';
            throw error;
        }

        // Créer l'objet UserInfo
        const userInfo: UserInfo = {
            id: firestoreUser.username,
            username: firestoreUser.username,
            role: firestoreUser.role,
            status: firestoreUser.status,
            email: `${firestoreUser.username}@planning-equipe.com`,
            lastPasswordChange: new Date(firestoreUser.lastPasswordChange)
        };

        // Stocker l'utilisateur courant
        secureStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(userInfo));

        SessionManager.recordLoginAttempt(true);
        SessionManager.updateActivity();
        return userInfo;

    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        throw error;
    }
}

  static getCurrentUser(): UserInfo | null {
    const storedUser = secureStorage.getItem(this.CURRENT_USER_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  }

  static async validateUser(username: string, approved: boolean): Promise<boolean> {
    try {
      const users: User[] = JSON.parse(secureStorage.getItem(this.USERS_KEY) || '[]');
      const userIndex = users.findIndex(u => u.username === username);
      
      if (userIndex === -1) return false;

      users[userIndex].status = approved ? 'active' : 'rejected';
      secureStorage.setItem(this.USERS_KEY, JSON.stringify(users));
      
      this.clearNotification(username);
      return true;
    } catch (error) {
      console.error('Erreur lors de la validation du compte:', error);
      return false;
    }
  }

  static getPendingUsers(): Array<{username: string, createdAt: number}> {
    const users: User[] = JSON.parse(secureStorage.getItem(this.USERS_KEY) || '[]');
    return users
      .filter(u => u.status === 'pending')
      .map(({ username, createdAt }) => ({ username, createdAt }));
  }

  static async logout() {
    try {
        // Déconnexion Firebase Auth
        await signOut(auth);

        // Nettoyage du stockage local et de la session
        secureStorage.removeItem(this.CURRENT_USER_KEY);
        SessionManager.clearSession();
        
        // Vous pouvez ajouter ici d'autres nettoyages si nécessaire
        
    } catch (error) {
        console.error('Erreur lors de la déconnexion:', error);
        // Même en cas d'erreur Firebase, on nettoie le stockage local
        secureStorage.removeItem(this.CURRENT_USER_KEY);
        SessionManager.clearSession();
    }
}

  static isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  private static async migrateDefaultUsers() {
    try {
      // Migrer l'utilisateur admin par défaut
      try {
        const email = 'admin@planning-equipe.com';
        await createUserWithEmailAndPassword(auth, email, 'admin123');
        await FirestoreService.createUser({
          username: 'admin',
          role: 'admin',
          status: 'active',
          lastPasswordChange: Date.now(),
          createdAt: Date.now()
        });
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          console.error('Erreur migration admin:', error);
        }
      }
      // Migrer l'utilisateur lionel
      try {
        const email = 'lionel@planning-equipe.com';
        await createUserWithEmailAndPassword(auth, email, 'lionel123');
        await FirestoreService.createUser({
          username: 'lionel',
          role: 'admin',
          status: 'active',
          lastPasswordChange: Date.now(),
          createdAt: Date.now()
        });
      } catch (error: any) {
        if (error.code !== 'auth/email-already-in-use') {
          console.error('Erreur migration lionel:', error);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la migration des utilisateurs:', error);
    }
  }

  private static async migrateUserToFirebase(username: string, password: string) {
    try {
        const email = `${username}@planning-equipe.com`;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
            return null;
        }
        throw error;
    }
  }

  private static isPasswordExpired(user: User | FirestoreUserData): boolean {
    if (!user.lastPasswordChange) return true;
    
    const now = Date.now();
    const daysSinceChange = (now - user.lastPasswordChange) / (1000 * 60 * 60 * 24);
    return daysSinceChange > this.PASSWORD_EXPIRY_DAYS;
  }

  static async hashPassword(password: string): Promise<string> {
    try {
      // Check if crypto.subtle is available
      if (window.crypto && window.crypto.subtle) {
        const msgBuffer = new TextEncoder().encode(password);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
      } else {
        throw new Error('Crypto API not available');
      }
    } catch (error) {
      console.error('Error hashing password:', error);
      throw error;
    }
  }

  static async changePassword(username: string, oldPassword: string, newPassword: string): Promise<boolean> {
    try {
      const hashedOldPassword = await this.hashPassword(oldPassword);
      const hashedNewPassword = await this.hashPassword(newPassword);
      
      const users: User[] = JSON.parse(secureStorage.getItem(this.USERS_KEY) || '[]');
      const userIndex = users.findIndex(u => 
        u.username === username && 
        u.password === hashedOldPassword
      );

      if (userIndex !== -1) {
        users[userIndex].password = hashedNewPassword;
        users[userIndex].lastPasswordChange = Date.now();
        secureStorage.setItem(this.USERS_KEY, JSON.stringify(users));
        return true;
      }

      return false;
    } catch (error) {
      console.error('Erreur lors du changement de mot de passe:', error);
      return false;
    }
  }

  static async resetPassword(email: string): Promise<boolean> {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      console.error('Erreur lors de la réinitialisation de mot de passe:', error);
      return false;
    }    
  }

  static async getAllUsers(): Promise<UserInfo[]> {
    try {
      // Obtenir tous les utilisateurs depuis Firestore
      const usersCollection = collection(db, 'users');
      const querySnapshot = await getDocs(usersCollection);

      const users: UserInfo[] =  querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: data.username,
          username: data.username,
          role: data.role,
          status: data.status === 'rejected' ? 'inactive' : data.status,
          email: `${data.username}@planning-equipe.com`,
          lastPasswordChange: new Date(data.lastPasswordChange)
        };
      });

      return users;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      return []; // Retourne un tableau vide en cas d'erreur
    }
  }

  static async deleteUser(username: string): Promise<boolean> {
    try {
      const users: User[] = JSON.parse(secureStorage.getItem(this.USERS_KEY) || '[]');
      
      // Ne pas permettre la suppression des comptes admin par défaut
      if (['admin', 'lionel'].includes(username)) {
        return false;
      }

      const filteredUsers = users.filter(user => user.username !== username);
      secureStorage.setItem(this.USERS_KEY, JSON.stringify(filteredUsers));
      return true;
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur:', error);
      return false;
    }
  }

  static async updateUserStatus(username: string, status: 'active' | 'rejected'): Promise<boolean> {
    try {
        // Ne pas permettre la modification des comptes admin par défaut
        if (['admin', 'lionel'].includes(username)) {
            return false;
        }

        // Mettre à jour dans Firestore
        const success = await FirestoreService.updateUserStatus(username, status);
        if (!success) {
            return false;
        }

        // Maintenir la cohérence avec le stockage local
        const users: User[] = JSON.parse(secureStorage.getItem(this.USERS_KEY) || '[]');
        const userIndex = users.findIndex(u => u.username === username);
        
        if (userIndex === -1) return false;

        users[userIndex].status = status;
        secureStorage.setItem(this.USERS_KEY, JSON.stringify(users));
        
        if (status === 'active') {
            this.clearNotification(username);
        }
        
        return true;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du statut:', error);
        return false;
    }
}

  static resetAuth() {
    console.log('Réinitialisation de l\'authentification...');
    secureStorage.removeItem(this.USERS_KEY);
    secureStorage.removeItem(this.CURRENT_USER_KEY);
    secureStorage.removeItem(this.PENDING_NOTIFICATIONS_KEY);
    SessionManager.clearSession();
    this.initialize(); // Réinitialise avec les utilisateurs par défaut
    console.log('Réinitialisation terminée');
  }
}

export type { UserInfo } from '../types';
