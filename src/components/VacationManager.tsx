import React, { useState } from 'react';
import { VacationForm } from './VacationForm';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Vacation, Chef, VacationType } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface VacationManagerProps {
  vacations: Vacation[];
  onVacationChange: (vacations: Vacation[]) => void;
}

export const VacationManager: React.FC<VacationManagerProps> = ({
  vacations,
  onVacationChange,
}) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddVacation = (vacation: Omit<Vacation, 'id'>) => {
    const newVacation: Vacation = {
      ...vacation,
      id: uuidv4()
    };
    onVacationChange([...vacations, newVacation]);
    setShowForm(false);
  };

  const handleDelete = (id: string) => {
    onVacationChange(vacations.filter((v) => v.id !== id));
  };

  const getVacationTypeLabel = (type: VacationType) => {
    switch (type) {
      case 'CP':
        return 'Congés payés';
      case 'RTT':
        return 'RTT';
      case 'Maladie':
        return 'Maladie';
      case 'Formation':
        return 'Formation';
      case 'Congé':
        return 'Congé';
      case 'Récupération':
        return 'Récupération';
      default:
        return 'Autre';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold neon-text">Gestion des absences</h2>
        <button
          onClick={() => setShowForm(true)}
          className="neon-button px-4 py-2 rounded"
        >
          Ajouter une absence
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="neon-card p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4 neon-text">Nouvelle absence</h3>
            <VacationForm
              onSubmit={handleAddVacation}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {vacations.map((vacation) => (
          <div
            key={vacation.id}
            className="neon-card p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <div className="font-medium neon-text">
                {vacation.chef} - {getVacationTypeLabel(vacation.type)}
              </div>
              <div className="text-sm text-cyan-300">
                {format(new Date(vacation.startDate), 'dd/MM/yyyy', { locale: fr })}
                {' → '}
                {format(new Date(vacation.endDate), 'dd/MM/yyyy', { locale: fr })}
              </div>
            </div>
            <button
              onClick={() => handleDelete(vacation.id)}
              className="neon-button-danger px-3 py-1 rounded"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};