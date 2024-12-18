import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Schedule } from './Schedule';
import { format, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { POSTES } from '../config/constants';
import type { WeekSchedule, DaySchedule } from '../types';

interface PlanningExportProps {
  weekSchedule: WeekSchedule;
  onClose: () => void;
}

export const PlanningExport: React.FC<PlanningExportProps> = ({ weekSchedule, onClose }) => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Planning_Equipe',
  });

  const getScheduleLabel = (schedule: DaySchedule) => {
    let label = schedule.chef;

    if (schedule.isRecuperation) {
      label += ' - Récupération';
    } else if (schedule.isReplacing) {
      label += ` - ${schedule.poste}`;
    } else if (!schedule.isAbsent) {
      label += ` - ${schedule.poste}`;
    }

    return label;
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Ajout du titre
    doc.setFontSize(20);
    doc.text('Planning Équipe', pageWidth / 2, 15, { align: 'center' });
    
    // Ajout des dates
    doc.setFontSize(12);
    doc.text(`Période : ${startDate} - ${endDate}`, pageWidth / 2, 25, { align: 'center' });

    // Ajout du cycle et de la semaine
    doc.text(`Cycle ${weekSchedule.cycleNumber} - Semaine ${weekSchedule.weekInCycle}`, pageWidth / 2, 35, { align: 'center' });
    doc.text(`Du ${format(weekSchedule.startDate, 'dd/MM/yyyy')} au ${format(addDays(weekSchedule.startDate, 6), 'dd/MM/yyyy')}`, pageWidth / 2, 42, { align: 'center' });

    let yPosition = 55;

    // Création du planning jour par jour
    Object.entries(weekSchedule.schedule).forEach(([dateStr, daySchedules]) => {
      const date = new Date(dateStr);
      const positionOrder = [POSTES.MAT1, POSTES.REMPLACANT, POSTES.MAT2, POSTES.AM1, POSTES.AM2];
      
      const sortedSchedules = [...daySchedules].sort((a, b) => {
        const posA = a.poste;
        const posB = b.poste;
        return positionOrder.indexOf(posA) - positionOrder.indexOf(posB);
      });

      // Vérifier si on a besoin d'une nouvelle page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      // Titre du jour
      doc.setFontSize(12);
      doc.text(format(date, 'EEEE dd/MM', { locale: fr }), 14, yPosition);
      yPosition += 7;

      // Tableau des horaires du jour
      (doc as any).autoTable({
        startY: yPosition,
        head: [['Poste', 'Chef', 'Statut']],
        body: sortedSchedules.map(schedule => [
          schedule.poste,
          schedule.chef,
          schedule.isAbsent ? 'Absent' : 
          schedule.isRecuperation ? 'Récupération' :
          schedule.isReplacing ? `Remplace ${schedule.replacedChef}` : 'Présent'
        ]),
        theme: 'grid',
        styles: { 
          fontSize: 10,
          cellPadding: 2
        },
        columnStyles: {
          0: { cellWidth: 40 },
          1: { cellWidth: 40 },
          2: { cellWidth: 'auto' }
        },
        margin: { left: 14 }
      });

      yPosition = (doc as any).lastAutoTable.finalY + 10;
    });

    // Ajout de la légende
    if (yPosition > 250) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(12);
    doc.text('Légende', 14, yPosition);
    yPosition += 7;

    const legend = [
      ['MAT1', 'Matin 1'],
      ['MAT2', 'Matin 2'],
      ['AM1', 'Après-midi 1'],
      ['AM2', 'Après-midi 2'],
      ['REMPLACANT', 'Remplaçant']
    ];

    (doc as any).autoTable({
      startY: yPosition,
      body: legend,
      theme: 'grid',
      styles: { 
        fontSize: 10,
        cellPadding: 2
      },
      columnStyles: {
        0: { cellWidth: 40 },
        1: { cellWidth: 'auto' }
      },
      margin: { left: 14 }
    });

    // Sauvegarde du PDF
    doc.save(`Planning_${startDate}_${endDate}.pdf`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="neon-card p-6 rounded-lg w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold neon-text">Export Planning</h3>
          <button
            onClick={onClose}
            className="neon-button-danger p-2 rounded-full"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Date de début</label>
              <input
                type="date"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Date de fin</label>
              <input
                type="date"
                className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrint}
              className="neon-button px-4 py-2 rounded-md flex-1"
            >
              Imprimer
            </button>
            <button
              onClick={handleExportPDF}
              className="neon-button px-4 py-2 rounded-md flex-1"
            >
              Exporter en PDF
            </button>
          </div>
        </div>

        {/* Composant caché pour l'impression */}
        <div className="hidden">
          <div ref={componentRef}>
            <h1 className="text-2xl font-bold mb-4">Planning Équipe</h1>
            <p className="mb-4">Période : {startDate} - {endDate}</p>
            <Schedule weekSchedule={weekSchedule} />
          </div>
        </div>
      </div>
    </div>
  );
};
