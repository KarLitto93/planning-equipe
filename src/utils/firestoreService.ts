import { db } from '../firebase';
import { 
    collection, 
    doc, 
    setDoc, 
    getDoc, 
    updateDoc, 
    query, 
    where, 
    getDocs 
} from 'firebase/firestore';

interface FirestoreUser {
    username: string;
    role: 'admin' | 'user';
    status: 'pending' | 'active' | 'rejected';
    lastPasswordChange: number;
    createdAt: number;
}

interface FirestoreUserData {
    username: string;
    role: 'admin' | 'user';
    status: 'pending' | 'active' | 'rejected';
    lastPasswordChange: number;
    createdAt: number;
}
interface User extends FirestoreUserData {
    password: string
}

export class FirestoreService {
    private static readonly USERS_COLLECTION = 'users';

    static async createUser(userData: FirestoreUser) {
        try {
            await setDoc(doc(db, this.USERS_COLLECTION, userData.username), userData);
            return true;
        } catch (error) {
            console.error('Erreur lors de la création utilisateur Firestore:', error);
            return false;
        }
    }

    static async getUser(username: string) {
        try {
            const userDoc = await getDoc(doc(db, this.USERS_COLLECTION, username));
            return userDoc.exists() ? userDoc.data() as FirestoreUser : null;
        } catch (error) {
            console.error('Erreur lors de la récupération utilisateur:', error);
            return null;
        }
    }

    static async updateUserStatus(username: string, status: 'active' | 'rejected') {
        try {
            await updateDoc(doc(db, this.USERS_COLLECTION, username), { status });
            return true;
        } catch (error) {
            console.error('Erreur lors de la mise à jour du statut:', error);
            return false;
        }
    }

    static async getPendingUsers() {
        try {
            const q = query(
                collection(db, this.USERS_COLLECTION), 
                where("status", "==", "pending")
            );
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => doc.data() as FirestoreUser);
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs en attente:', error);
            return [];
        }
    }
}