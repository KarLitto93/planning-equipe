import React from 'react';
import { secureStorage } from '../utils/secureStorage';
import type { Vacation } from '../types';

interface DataManagerProps {
  vacations: Vacation[];
  onVacationsImport: (vacations: Vacation[]) => void;
}

export const DataManager: React.FC<DataManagerProps> = ({
  vacations,
  onVacationsImport,
}) => {
  const handleExport = () => {
    try {
      // Création de l'objet de données à exporter
      const exportData = {
        version: '1.0',
        timestamp: new Date().toISOString(),
        data: {
          vacations,
          eugeneWorkedSaturday: secureStorage.getEugeneWorkedSaturday()
        }
      };

      // Création du blob et du lien de téléchargement
      const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json'
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `planning-equipe-backup-${new Date().toISOString().split('T')[0]}.json`;
      
      // Déclencher le téléchargement
      document.body.appendChild(link);
      link.click();
      
      // Nettoyage
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors de l\'export:', error);
      alert('Erreur lors de l\'export des données');
    }
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const importData = JSON.parse(content);

        // Validation de la structure des données
        if (!importData.version || !importData.data) {
          throw new Error('Format de fichier invalide');
        }

        // Validation et import des vacances
        if (Array.isArray(importData.data.vacations)) {
          const validVacations = importData.data.vacations.filter((v: any) => {
            return (
              v &&
              typeof v.chef === 'string' &&
              v.startDate &&
              v.endDate &&
              typeof v.type === 'string'
            );
          }).map((v: any) => ({
            ...v,
            startDate: new Date(v.startDate),
            endDate: new Date(v.endDate)
          }));

          onVacationsImport(validVacations);
        }

        // Import de la date du samedi d'Eugène
        if (importData.data.eugeneWorkedSaturday) {
          const date = new Date(importData.data.eugeneWorkedSaturday);
          if (!isNaN(date.getTime())) {
            secureStorage.setEugeneWorkedSaturday(date);
          }
        }

        alert('Import réussi !');
      } catch (error) {
        console.error('Erreur lors de l\'import:', error);
        alert('Erreur lors de l\'import des données');
      }
    };

    reader.readAsText(file);
    // Réinitialiser l'input pour permettre de réimporter le même fichier
    event.target.value = '';
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <h3 className="text-lg font-semibold mb-4">Gestion des données</h3>
      
      <div className="space-y-4">
        <div>
          <button
            onClick={handleExport}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Exporter les données
          </button>
          <p className="text-sm text-gray-500 mt-1">
            Téléchargez une sauvegarde de toutes vos données
          </p>
        </div>

        <div>
          <label className="block">
            <span className="sr-only">Importer des données</span>
            <div className="relative">
              <button
                onClick={() => document.getElementById('file-import')?.click()}
                className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                Importer des données
              </button>
              <input
                id="file-import"
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </div>
          </label>
          <p className="text-sm text-gray-500 mt-1">
            Restaurez vos données à partir d'une sauvegarde
          </p>
        </div>
      </div>
    </div>
  );
};
