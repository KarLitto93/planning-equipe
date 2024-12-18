import { UserInfo, UserCredentials, PasswordResetRequest } from '../types/user';

export class AuthService {
  private static currentUser: UserInfo | null = null;
  private static listeners: ((user: UserInfo | null) => void)[] = [];

  static initialize() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      this.notifyListeners();
    }
  }

  static getCurrentUser(): UserInfo | null {
    return this.currentUser;
  }

  static onAuthStateChanged(callback: (user: UserInfo | null) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  private static notifyListeners() {
    this.listeners.forEach(listener => listener(this.currentUser));
  }

  static async login(credentials: UserCredentials): Promise<UserInfo> {
    // Simulation d'une requête API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username && credentials.password) {
          const user: UserInfo = {
            uid: crypto.randomUUID(),
            username: credentials.username,
            displayName: credentials.username,
            role: credentials.username === 'admin' ? 'admin' : 'user',
            status: 'active',
            email: `${credentials.username}@example.com`,
            lastPasswordChange: new Date(),
            createdAt: new Date()
          };
          this.currentUser = user;
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.notifyListeners();
          resolve(user);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  static async logout(): Promise<void> {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.notifyListeners();
    return Promise.resolve();
  }

  static async resetPassword(email: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  static isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  static hasRole(role: string): boolean {
    return this.currentUser?.role === role;
  }

  static async checkPermission(permission: string): Promise<boolean> {
    if (!this.currentUser) return false;
    if (this.currentUser.role === 'admin') return true;
    return false;
  }
}
