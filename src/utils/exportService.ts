import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { WeekSchedule, DaySchedule } from '../types';
import { COLORS } from '../config/constants';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => void;
  }
}

export class ExportService {
  static async exportToPDF(weekSchedule: WeekSchedule): Promise<void> {
    const doc = new jsPDF();
    const { startDate, remplacant } = weekSchedule;

    // Titre
    doc.setFontSize(16);
    doc.text('Planning Équipe', 14, 15);
    
    // Informations de la semaine
    doc.setFontSize(12);
    doc.text(
      `Semaine du ${format(startDate, 'dd MMMM yyyy', { locale: fr })}`,
      14, 25
    );
    doc.text(`Remplaçant : ${remplacant}`, 14, 32);

    // Tableau du planning
    const tableData = Object.entries(weekSchedule.schedule).map(([dateStr, daySchedules]) => {
      const date = new Date(dateStr);
      return [
        format(date, 'EEEE dd/MM', { locale: fr }),
        ...daySchedules.map((schedule: DaySchedule) => 
          `${schedule.chef} (${schedule.poste}${schedule.vacationType ? ` - ${schedule.vacationType}` : ''})`
        )
      ];
    });

    doc.autoTable({
      head: [['Jour', 'Équipe']],
      body: tableData,
      startY: 40,
      styles: { fontSize: 10 },
      theme: 'grid'
    });

    doc.save(`planning_${format(startDate, 'yyyy-MM-dd')}.pdf`);
  }

  static async exportToExcel(weekSchedule: WeekSchedule): Promise<void> {
    const { startDate } = weekSchedule;

    // Préparer les données pour Excel
    const data = Object.entries(weekSchedule.schedule).map(([dateStr, daySchedules]) => {
      const date = new Date(dateStr);
      return {
        'Jour': format(date, 'EEEE dd/MM', { locale: fr }),
        ...daySchedules.reduce((acc: Record<string, string>, schedule: DaySchedule, index: number) => {
          acc[`Chef ${index + 1}`] = `${schedule.chef} (${schedule.poste}${schedule.vacationType ? ` - ${schedule.vacationType}` : ''})`;
          return acc;
        }, {})
      };
    });

    // Créer le workbook
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);

    // Ajouter la feuille au workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Planning');

    // Sauvegarder le fichier
    XLSX.writeFile(wb, `planning_${format(startDate, 'yyyy-MM-dd')}.xlsx`);
  }
}
