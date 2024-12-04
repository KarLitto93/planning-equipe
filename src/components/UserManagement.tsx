import React, { useState, useEffect } from 'react';
import { AuthService } from '../utils/authService';
import { UserInfo } from '../types';

export const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInfo | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async() => {
    const allUsers = await AuthService.getAllUsers();
    setUsers(allUsers);
  };

  const handleStatusChange = async (username: string, status: 'active' | 'rejected') => {
    const success = await AuthService.updateUserStatus(username, status);
    if (success) {
      loadUsers();
    } else {
      setError(`Impossible de modifier le statut de ${username}`);
    }
  };

  const handleDeleteUser = async (username: string) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${username} ?`)) {
      const success = await AuthService.deleteUser(username);
      if (success) {
        loadUsers();
      } else {
        setError(`Impossible de supprimer l'utilisateur ${username}`);
      }
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Gestion des Utilisateurs</h2>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-800 rounded">
          {error}
          <button
            onClick={() => setError('')}
            className="ml-2 text-red-600 hover:text-red-800"
          >
            ×
          </button>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Utilisateur
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rôle
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date de création
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((user) => (
              <tr key={user.username}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {user.username}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {user.role === 'admin' ? 'Administrateur' : 'Utilisateur'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(user.status)}`}>
                    {user.status === 'active' ? 'Actif' : 
                     user.status === 'pending' ? 'En attente' : 'Rejeté'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(user.createdAt ?? '').toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  {!['admin', 'lionel'].includes(user.username) && (
                    <>
                      {user.status !== 'active' && (
                        <button
                          onClick={() => handleStatusChange(user.username, 'active')}
                          className="text-green-600 hover:text-green-900"
                        >
                          Activer
                        </button>
                      )}
                      {user.status !== 'rejected' && (
                        <button
                          onClick={() => handleStatusChange(user.username, 'rejected')}
                          className="text-red-600 hover:text-red-900"
                        >
                          Rejeter
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteUser(user.username)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Supprimer
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
