export interface UserInfo {
  uid: string;
  username: string;
  displayName: string;
  role: 'admin' | 'user';
  status: 'active' | 'pending' | 'rejected';
  email: string;
  lastPasswordChange?: Date;
  createdAt?: Date;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface PasswordResetRequest {
  email: string;
  token: string;
  newPassword: string;
}
