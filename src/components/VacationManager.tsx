import React, { useState, useCallback, memo } from 'react';
import { VacationForm } from './VacationForm';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Vacation, Chef, VacationType } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface VacationManagerProps {
  vacations: Vacation[];
  onVacationChange: (vacations: Vacation[]) => void;
  onAddClick: () => void;
}

const VacationItem = memo(({ 
  vacation, 
  onDelete, 
  getVacationTypeLabel 
}: { 
  vacation: Vacation; 
  onDelete: (id: string) => void;
  getVacationTypeLabel: (type: VacationType) => string;
}) => (
  <div className="neon-card p-4 rounded-lg flex justify-between items-center">
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
      onClick={() => onDelete(vacation.id)}
      className="neon-button-danger px-3 py-1 rounded"
    >
      Supprimer
    </button>
  </div>
));

export const VacationManager = memo(({ 
  vacations, 
  onVacationChange, 
  onAddClick 
}: VacationManagerProps) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddVacation = (vacation: Omit<Vacation, 'id'>) => {
    const newVacation: Vacation = {
      ...vacation,
      id: uuidv4()
    };
    onVacationChange([...vacations, newVacation]);
    setShowForm(false);
  };

  const handleDelete = useCallback((id: string) => {
    onVacationChange(vacations.filter((v) => v.id !== id));
  }, [vacations, onVacationChange]);

  const getVacationTypeLabel = useCallback((type: VacationType) => {
    switch (type) {
      case 'CP': return 'Congés payés';
      case 'RTT': return 'RTT';
      case 'Maladie': return 'Maladie';
      case 'Formation': return 'Formation';
      case 'Congé': return 'Congé';
      case 'Récupération': return 'Récupération';
      default: return 'Autre';
    }
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold neon-text">Gestion des absences</h2>
        <button
          onClick={() => {
            onAddClick();
            setShowForm(true);
          }}
          className="neon-button px-4 py-2 rounded"
        >
          Ajouter une absence
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center overflow-y-auto z-[9999]">
          <div className="min-h-screen py-8 px-4 w-full flex items-start justify-center">
            <div className="neon-card p-6 max-w-md w-full my-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold neon-text">Nouvelle absence</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="neon-button-danger p-2 rounded-full"
                >
                  ✕
                </button>
              </div>
              <VacationForm
                onSubmit={handleAddVacation}
                onCancel={() => setShowForm(false)}
              />
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        {vacations.map((vacation) => (
          <VacationItem
            key={vacation.id}
            vacation={vacation}
            onDelete={handleDelete}
            getVacationTypeLabel={getVacationTypeLabel}
          />
        ))}
      </div>
    </div>
  );
});