import React, { useState } from 'react';
import { AuthService } from '../utils/authService';
import '../styles/neon.css';

interface RegisterProps {
  onBack: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      await AuthService.register(username, password, 'user');
      setSuccess(true);
      setTimeout(() => {
        onBack();
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Erreur lors de l\'inscription');
    }
  };

  return (
    <div className="cyberpunk-bg flex items-center justify-center min-h-screen p-6">
      <div className="neon-card w-full max-w-md p-8 rounded-lg">
        <h2 className="neon-text text-3xl font-bold mb-8 text-center">Créer un compte</h2>

        {success ? (
          <div className="text-center">
            <p className="neon-text text-lg mb-4">
              Inscription réussie ! En attente de validation par un administrateur.
            </p>
            <button
              onClick={onBack}
              className="neon-button px-6 py-2 rounded-md"
            >
              Retour à la connexion
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="neon-text block text-sm font-medium mb-2">
                Nom d'utilisateur
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="neon-input w-full px-4 py-2 rounded-md"
                required
                autoComplete="username"
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
                className="neon-input w-full px-4 py-2 rounded-md"
                required
                autoComplete="new-password"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="neon-text block text-sm font-medium mb-2">
                Confirmer le mot de passe
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="neon-input w-full px-4 py-2 rounded-md"
                required
                autoComplete="new-password"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center animate-pulse">
                {error}
              </div>
            )}

            <div className="flex flex-col space-y-4">
              <button
                type="submit"
                className="neon-button w-full py-2 px-4 rounded-md text-sm font-medium"
              >
                S'inscrire
              </button>

              <button
                type="button"
                onClick={onBack}
                className="neon-button w-full py-2 px-4 rounded-md text-sm font-medium"
              >
                Retour
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
