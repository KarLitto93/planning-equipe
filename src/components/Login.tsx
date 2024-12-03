import React, { useState } from 'react';
import { AuthService } from '../utils/authService';
import { Register } from './Register';
import { UserInfo } from '../types';
import '../styles/neon.css';

interface LoginProps {
  onLoginSuccess: (user: UserInfo) => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await AuthService.login(username, password);
      onLoginSuccess(user);
    } catch (err: any) {
      setError(err.message || 'Erreur de connexion');
    }
  };

  const handleReset = () => {
    AuthService.resetAuth();
    setError('Authentification réinitialisée. Utilisez admin/admin123 pour vous connecter.');
  };

  if (showRegister) {
    return <Register onBack={() => setShowRegister(false)} />;
  }

  return (
    <div className="cyberpunk-bg flex items-center justify-center min-h-screen p-6">
      <div className="neon-card w-full max-w-md p-8 rounded-lg">
        <h2 className="neon-text text-3xl font-bold mb-8 text-center">Planning Équipe</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          
          <div>
            <label htmlFor="username" className="neon-text block text-sm font-medium mb-2">
              Nom d'utilisateur
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="neon-input w-full px-4 py-2 rounded-md bg-gray-900 border border-cyan-500 text-cyan-300 placeholder-cyan-700"
              required
              placeholder="Entrez votre nom d'utilisateur"
            />
          </div>

          <div>
            <label htmlFor="password" className="neon-text block text-sm font-medium mb-2">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="neon-input w-full px-4 py-2 rounded-md bg-gray-900 border border-cyan-500 text-cyan-300 placeholder-cyan-700"
              required
              placeholder="Entrez votre mot de passe"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="neon-button w-full py-2 px-4 rounded-md text-sm font-medium bg-cyan-900 hover:bg-cyan-800 border border-cyan-500 text-cyan-300"
            >
              Se connecter
            </button>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setShowRegister(true)}
                className="neon-text text-sm hover:text-cyan-400 transition-colors"
              >
                Créer un compte
              </button>
              
              <button
                type="button"
                onClick={handleReset}
                className="neon-text text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                Réinitialiser
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
