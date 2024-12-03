import React, { useEffect, useState } from 'react';
import { AuthService } from '../utils/authService';

interface PendingUser {
  username: string;
  createdAt: number;
}

export const PendingUsers: React.FC = () => {
  const [pendingUsers, setPendingUsers] = useState<PendingUser[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    loadPendingUsers();
    loadNotifications();
  }, []);

  const loadPendingUsers = () => {
    const users = AuthService.getPendingUsers();
    setPendingUsers(users);
  };

  const loadNotifications = () => {
    const notifs = AuthService.getPendingNotifications();
    setNotifications(notifs);
  };

  const handleValidation = async (username: string, approved: boolean) => {
    const success = await AuthService.validateUser(username, approved);
    if (success) {
      loadPendingUsers();
      loadNotifications();
    }
  };

  if (pendingUsers.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 neon-card p-6 rounded-lg shadow-lg max-w-md z-50 border border-cyan-500">
      <h3 className="text-xl font-bold mb-6 neon-text text-center">Utilisateurs en attente</h3>
      <div className="space-y-6">
        {pendingUsers.map((user) => (
          <div key={user.username} className="border border-cyan-500/30 p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm">
            <p className="font-medium text-cyan-300 text-lg">{user.username}</p>
            <p className="text-sm text-cyan-500/70 mb-4">
              Demande créée le {new Date(user.createdAt).toLocaleDateString()}
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => handleValidation(user.username, true)}
                className="neon-button px-4 py-2 rounded-md text-sm font-medium bg-emerald-900/50 hover:bg-emerald-800/50 border border-emerald-500 text-emerald-300 hover:text-emerald-200 transition-all duration-300"
              >
                Approuver
              </button>
              <button
                onClick={() => handleValidation(user.username, false)}
                className="neon-button-danger px-4 py-2 rounded-md text-sm font-medium bg-red-900/50 hover:bg-red-800/50 border border-red-500 text-red-300 hover:text-red-200 transition-all duration-300"
              >
                Rejeter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
