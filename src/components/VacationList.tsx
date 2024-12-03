import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { Vacation } from '../types';

interface VacationListProps {
  vacations: Vacation[];
  onDelete: (vacation: Vacation) => void;
}

export const VacationList: React.FC<VacationListProps> = ({ vacations, onDelete }) => {
  if (vacations.length === 0) {
    return (
      <div className="text-gray-500 text-center py-4">
        Aucune absence enregistrée
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {vacations.map((vacation, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
        >
          <div className="flex-1">
            <div className="font-medium">{vacation.chef}</div>
            <div className="text-sm text-gray-600">
              {vacation.type}
            </div>
            <div className="text-sm text-gray-500">
              Du {format(vacation.startDate, 'dd MMMM yyyy', { locale: fr })} au{' '}
              {format(vacation.endDate, 'dd MMMM yyyy', { locale: fr })}
            </div>
          </div>
          <button
            onClick={() => onDelete(vacation)}
            className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded"
            title="Supprimer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};
