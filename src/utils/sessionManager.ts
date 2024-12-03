import { secureStorage } from './secureStorage';

interface SessionData {
  lastActivity: number;
  loginAttempts: number;
  lastAttempt: number;
  isLocked: boolean;
  lockUntil: number;
}

export class SessionManager {
  private static readonly SESSION_KEY = 'planning_session';
  private static readonly INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes
  private static readonly MAX_LOGIN_ATTEMPTS = 3;
  private static readonly LOCK_DURATION = 15 * 60 * 1000; // 15 minutes

  static initSession() {
    const session: SessionData = {
      lastActivity: Date.now(),
      loginAttempts: 0,
      lastAttempt: 0,
      isLocked: false,
      lockUntil: 0
    };
    secureStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
  }

  static updateActivity() {
    const session = this.getSession();
    if (session) {
      session.lastActivity = Date.now();
      secureStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    }
  }

  static isSessionExpired(): boolean {
    const session = this.getSession();
    if (!session) return true;

    const now = Date.now();
    return now - session.lastActivity > this.INACTIVITY_TIMEOUT;
  }

  static recordLoginAttempt(success: boolean) {
    const session = this.getSession() || {
      lastActivity: Date.now(),
      loginAttempts: 0,
      lastAttempt: 0,
      isLocked: false,
      lockUntil: 0
    };

    if (success) {
      session.loginAttempts = 0;
      session.isLocked = false;
    } else {
      session.loginAttempts++;
      session.lastAttempt = Date.now();

      if (session.loginAttempts >= this.MAX_LOGIN_ATTEMPTS) {
        session.isLocked = true;
        session.lockUntil = Date.now() + this.LOCK_DURATION;
      }
    }

    secureStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
  }

  static isAccountLocked(): boolean {
    const session = this.getSession();
    if (!session) return false;

    const now = Date.now();
    if (session.isLocked && now < session.lockUntil) {
      return true;
    }

    if (session.isLocked && now >= session.lockUntil) {
      session.isLocked = false;
      session.loginAttempts = 0;
      secureStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    }

    return false;
  }

  static getRemainingLockTime(): number {
    const session = this.getSession();
    if (!session || !session.isLocked) return 0;

    const remaining = session.lockUntil - Date.now();
    return remaining > 0 ? remaining : 0;
  }

  static getSession(): SessionData | null {
    const sessionStr = secureStorage.getItem(this.SESSION_KEY);
    return sessionStr ? JSON.parse(sessionStr) : null;
  }

  static clearSession() {
    secureStorage.removeItem(this.SESSION_KEY);
  }
}
