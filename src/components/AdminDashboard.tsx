import React, { useState, useEffect } from 'react';
import { AuthService } from '../utils/authService';
import { UserInfo } from '../types';
import '../styles/neon.css';

export const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const allUsers = AuthService.getAllUsers();
    setUsers(allUsers);
  };

  const handleDeleteUser = async (username: string) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${username} ?`)) {
      const success = await AuthService.deleteUser(username);
      if (success) {
        loadUsers();
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="neon-text text-2xl font-bold mb-6">Gestion des Utilisateurs</h2>
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.username} className="neon-card p-4 rounded-lg flex justify-between items-center">
            <div>
              <span className="neon-text font-medium">{user.username}</span>
              <span className="ml-4 text-sm opacity-70">{user.role}</span>
            </div>
            <button
              onClick={() => handleDeleteUser(user.username)}
              className="neon-button-danger px-4 py-2 rounded-md text-sm"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
