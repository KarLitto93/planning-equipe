import { secureStorage } from './secureStorage';
import { SessionManager } from './sessionManager';
import { UserInfo } from '../types';

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

  static initialize() {
    console.log('Initializing AuthService...');
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
      // Vérifier si l'utilisateur existe déjà
      const users: User[] = JSON.parse(secureStorage.getItem(this.USERS_KEY) || '[]');
      if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
        return false;
      }

      // Hash le mot de passe
      const hashedPassword = await this.hashPassword(password);
      
      // Créer le nouvel utilisateur
      const newUser: User = {
        username,
        password: hashedPassword,
        role,
        lastPasswordChange: Date.now(),
        status: 'pending',
        createdAt: Date.now()
      };

      // Ajouter l'utilisateur à la liste
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

      console.log('Checking stored users...');
      const users: User[] = JSON.parse(secureStorage.getItem(this.USERS_KEY) || '[]');
      console.log('Stored users:', users);
      
      console.log('Looking for user:', username);
      const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
      console.log('Found user:', user);

      if (!user) {
        SessionManager.recordLoginAttempt(false);
        const error = new Error('Identifiants invalides') as AuthError;
        error.code = 'INVALID_CREDENTIALS';
        throw error;
      }

      console.log('Hashing input password...');
      const hashedInputPassword = await this.hashPassword(password);
      console.log('Hashed input password:', hashedInputPassword);
      console.log('Stored password:', user.password);
      
      if (user.password !== hashedInputPassword) {
        SessionManager.recordLoginAttempt(false);
        const error = new Error('Identifiants invalides') as AuthError;
        error.code = 'INVALID_CREDENTIALS';
        throw error;
      }

      if (user.status === 'pending') {
        const error = new Error('Votre compte est en attente de validation par un administrateur.') as AuthError;
        error.code = 'ACCOUNT_PENDING';
        throw error;
      }

      if (user.status === 'rejected') {
        const error = new Error('Votre compte a été rejeté par un administrateur.') as AuthError;
        error.code = 'ACCOUNT_REJECTED';
        throw error;
      }

      if (this.isPasswordExpired(user)) {
        const error = new Error('Votre mot de passe a expiré. Veuillez le changer.') as AuthError;
        error.code = 'PASSWORD_EXPIRED';
        throw error;
      }

      // Convert to UserInfo type
      const userInfo: UserInfo = {
        id: user.username, // Using username as id for now
        username: user.username,
        role: user.role,
        status: user.status,
        email: `${user.username}@example.com`, // You might want to update this with actual email logic
        lastPasswordChange: new Date(user.lastPasswordChange)
      };

      // Store current user
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

  static logout() {
    secureStorage.removeItem(this.CURRENT_USER_KEY);
    SessionManager.clearSession();
  }

  static isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  private static isPasswordExpired(user: User): boolean {
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

  static getAllUsers(): UserInfo[] {
    const users: User[] = JSON.parse(secureStorage.getItem(this.USERS_KEY) || '[]');
    return users.map(user => ({
      id: user.username,
      username: user.username,
      role: user.role,
      status: user.status === 'rejected' ? 'inactive' : user.status,
      email: `${user.username}@example.com`, // You might want to update this with actual email logic
      lastPasswordChange: new Date(user.lastPasswordChange)
    }));
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
      const users: User[] = JSON.parse(secureStorage.getItem(this.USERS_KEY) || '[]');
      const userIndex = users.findIndex(u => u.username === username);
      
      if (userIndex === -1) return false;

      // Ne pas permettre la modification des comptes admin par défaut
      if (['admin', 'lionel'].includes(username)) {
        return false;
      }

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
