import { UserInfo } from '../types';

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

  static async login(username: string, password: string): Promise<UserInfo> {
    const user: UserInfo = {
      id: '1',
      username,
      role: 'admin',
      email: 'admin@example.com',
      status: 'active',
      createdAt: new Date()
    };

    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.notifyListeners();
    return user;
  }

  static async logout(): Promise<void> {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.notifyListeners();
    return Promise.resolve();
  }

  static async isAuthenticated(): Promise<boolean> {
    return !!this.currentUser;
  }

  static async checkPermission(permission: string): Promise<boolean> {
    if (!this.currentUser) return false;
    if (this.currentUser.role === 'admin') return true;
    return false;
  }
}
