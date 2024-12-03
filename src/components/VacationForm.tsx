import React, { useState } from 'react';
import type { Chef, Vacation, VacationType } from '../types';

interface VacationFormProps {
  onSubmit: (vacation: Omit<Vacation, 'id'>) => void;
  onCancel: () => void;
}

const CHEFS: Chef[] = ['Lionel', 'Eugène', 'Stephane', 'Philippe', 'Nassim'];

export const VacationForm: React.FC<VacationFormProps> = ({ onSubmit, onCancel }) => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [type, setType] = useState<VacationType>('Congé');
  const [chef, setChef] = useState<Chef>('Lionel');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      chef,
      startDate,
      endDate,
      type
    });
    setStartDate(new Date());
    setEndDate(new Date());
    setType('Congé');
    setChef('Lionel');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1 neon-text">Chef</label>
        <select
          value={chef}
          onChange={(e) => setChef(e.target.value as Chef)}
          className="neon-input w-full p-2 rounded"
        >
          {CHEFS.map((chefName) => (
            <option key={chefName} value={chefName}>
              {chefName}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 neon-text">Type de congé</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as VacationType)}
          className="neon-input w-full p-2 rounded"
        >
          <option value="CP">Congés payés</option>
          <option value="RTT">RTT</option>
          <option value="Maladie">Maladie</option>
          <option value="Formation">Formation</option>
          <option value="Congé">Congé</option>
          <option value="Récupération">Récupération</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 neon-text">Date de début</label>
        <input
          type="date"
          value={startDate.toISOString().split('T')[0]}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="neon-input w-full p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 neon-text">Date de fin</label>
        <input
          type="date"
          value={endDate.toISOString().split('T')[0]}
          onChange={(e) => setEndDate(new Date(e.target.value))}
          className="neon-input w-full p-2 rounded"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="neon-button-secondary px-4 py-2 rounded"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="neon-button px-4 py-2 rounded"
        >
          Ajouter
        </button>
      </div>
    </form>
  );
};
