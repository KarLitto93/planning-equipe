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
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-md">
      <h3 className="text-lg font-semibold mb-4">Utilisateurs en attente</h3>
      <div className="space-y-4">
        {pendingUsers.map((user) => (
          <div key={user.username} className="border p-3 rounded">
            <p className="font-medium">{user.username}</p>
            <p className="text-sm text-gray-500">
              Demande créée le {new Date(user.createdAt).toLocaleDateString()}
            </p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleValidation(user.username, true)}
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Approuver
              </button>
              <button
                onClick={() => handleValidation(user.username, false)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
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
