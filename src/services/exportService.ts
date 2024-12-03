import { WeekSchedule, DaySchedule, Vacation } from '../types';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { POSTES } from '../config/constants';

interface ExportData {
  weekSchedule: WeekSchedule;
  vacations: Vacation[];
}

export const exportToCSV = (data: ExportData): string => {
  const { weekSchedule, vacations } = data;
  const rows: string[] = [];

  // En-tête
  rows.push('Date,Jour,Poste,Chef,Statut');

  // Données du planning
  Object.entries(weekSchedule.schedule).forEach(([dateStr, daySchedules]) => {
    const date = new Date(dateStr);
    const dayName = format(date, 'EEEE', { locale: fr });
    
    daySchedules.forEach((schedule: DaySchedule) => {
      let status = 'Présent';
      if (schedule.isAbsent) status = 'Absent';
      if (schedule.isRecuperation) status = 'Récupération';
      if (schedule.isReplacing) status = 'Remplaçant';

      rows.push(
        `${format(date, 'dd/MM/yyyy')},${dayName},${schedule.poste},${
          schedule.chef
        },${status}`
      );
    });
  });

  // Ligne vide de séparation
  rows.push('');

  // En-tête des absences
  rows.push('Absences');
  rows.push('Chef,Type,Date début,Date fin');

  // Données des absences
  vacations.forEach((vacation) => {
    rows.push(
      `${vacation.chef},${vacation.type},${format(
        new Date(vacation.startDate),
        'dd/MM/yyyy'
      )},${format(new Date(vacation.endDate), 'dd/MM/yyyy')}`
    );
  });

  return rows.join('\n');
};

export const exportToPDF = async (data: ExportData): Promise<Blob> => {
  const { weekSchedule, vacations } = data;
  
  // Création du contenu HTML pour le PDF
  let content = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f5f5f5; }
          .title { font-size: 24px; margin-bottom: 20px; }
          .subtitle { font-size: 18px; margin: 15px 0; }
          .vacation-type { font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="title">Planning de la semaine</div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Jour</th>
              <th>Poste</th>
              <th>Chef</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
  `;

  // Ajout des données du planning
  Object.entries(weekSchedule.schedule).forEach(([dateStr, daySchedules]) => {
    const date = new Date(dateStr);
    const dayName = format(date, 'EEEE', { locale: fr });

    daySchedules.forEach((schedule) => {
      let status = 'Présent';
      if (schedule.isAbsent) status = 'Absent';
      if (schedule.isRecuperation) status = 'Récupération';
      if (schedule.isReplacing) status = 'Remplaçant';

      content += `
        <tr>
          <td>${format(date, 'dd/MM/yyyy')}</td>
          <td>${dayName}</td>
          <td>${schedule.poste}</td>
          <td>${schedule.chef}</td>
          <td>${status}</td>
        </tr>
      `;
    });
  });

  content += `
          </tbody>
        </table>

        <div class="subtitle">Absences planifiées</div>
        <table>
          <thead>
            <tr>
              <th>Chef</th>
              <th>Type</th>
              <th>Date début</th>
              <th>Date fin</th>
            </tr>
          </thead>
          <tbody>
  `;

  // Ajout des données des absences
  vacations.forEach((vacation) => {
    content += `
      <tr>
        <td>${vacation.chef}</td>
        <td class="vacation-type">${vacation.type}</td>
        <td>${format(new Date(vacation.startDate), 'dd/MM/yyyy')}</td>
        <td>${format(new Date(vacation.endDate), 'dd/MM/yyyy')}</td>
      </tr>
    `;
  });

  content += `
          </tbody>
        </table>
      </body>
    </html>
  `;

  // Conversion en PDF (utilisation d'une bibliothèque PDF à implémenter)
  // Pour l'instant, on retourne juste un Blob HTML
  return new Blob([content], { type: 'text/html' });
};
