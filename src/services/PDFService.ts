import { jsPDF } from 'jspdf';
import { format, eachDayOfInterval } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { WeekSchedule } from '../types';

export class PDFService {
  static exportScheduleToPDF(
    weekSchedule: WeekSchedule,
    startDate: Date,
    endDate: Date,
    selectedChef: string = ''
  ) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 15;
    const headerHeight = 10;
    const cellHeight = 35;
    const cellWidth = (pageWidth - 2 * margin) / 7;
    const lineHeight = 5;

    // Configuration de la police
    doc.setFont('helvetica');

    // Titre
    doc.setFontSize(14);
    const title = selectedChef 
      ? `Planning de ${selectedChef} du ${format(startDate, 'dd/MM/yyyy', { locale: fr })} au ${format(endDate, 'dd/MM/yyyy', { locale: fr })}`
      : `Planning du ${format(startDate, 'dd/MM/yyyy', { locale: fr })} au ${format(endDate, 'dd/MM/yyyy', { locale: fr })}`;
    doc.text(title, pageWidth / 2, margin + 5, { align: 'center' });

    // En-têtes des colonnes (jours de la semaine)
    let currentY = margin + 15;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    days.forEach((day, index) => {
      const x = margin + index * cellWidth;
      // Rectangle pour l'en-tête
      doc.setFillColor(240, 240, 240);
      doc.rect(x, currentY, cellWidth, headerHeight, 'F');
      doc.setDrawColor(180, 180, 180);
      doc.rect(x, currentY, cellWidth, headerHeight, 'S');
      // Texte du jour
      doc.text(day, x + cellWidth / 2, currentY + headerHeight - 2, { align: 'center' });
    });

    currentY += headerHeight;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);

    // Contenu du planning
    const dates = eachDayOfInterval({ start: startDate, end: endDate });

    dates.forEach((date) => {
      const dateStr = format(date, 'yyyy-MM-dd');
      const daySchedules = weekSchedule.schedule[dateStr] || [];
      
      // Filtrer les plannings si un chef est sélectionné
      const filteredSchedules = selectedChef
        ? daySchedules.filter(schedule => schedule.chef === selectedChef)
        : daySchedules;

      // Si on dépasse la page, créer une nouvelle page
      if (currentY + cellHeight > pageHeight - margin) {
        doc.addPage();
        currentY = margin;
        
        // Répéter les en-têtes sur la nouvelle page
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        days.forEach((day, index) => {
          const x = margin + index * cellWidth;
          doc.setFillColor(240, 240, 240);
          doc.rect(x, currentY, cellWidth, headerHeight, 'F');
          doc.setDrawColor(180, 180, 180);
          doc.rect(x, currentY, cellWidth, headerHeight, 'S');
          doc.text(day, x + cellWidth / 2, currentY + headerHeight - 2, { align: 'center' });
        });
        currentY += headerHeight;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
      }

      // Date et contenu de la cellule
      const dayIndex = date.getDay() === 0 ? 6 : date.getDay() - 1;
      const x = margin + dayIndex * cellWidth;
      
      // Rectangle pour la cellule
      doc.setDrawColor(180, 180, 180);
      doc.rect(x, currentY, cellWidth, cellHeight, 'S');
      
      // Date en haut de la cellule
      doc.setFont('helvetica', 'bold');
      doc.text(
        format(date, 'dd/MM', { locale: fr }),
        x + cellWidth / 2,
        currentY + lineHeight,
        { align: 'center' }
      );
      
      // Contenu de la cellule
      doc.setFont('helvetica', 'normal');
      let textY = currentY + lineHeight * 2;
      
      filteredSchedules.forEach(schedule => {
        const label = schedule.isRecup ? 'Récup' :
          schedule.isAbsent ? 'Absent' :
          schedule.isReplacing ? `Remplaçant (${schedule.poste})` :
          schedule.poste;
        
        doc.text(
          `${schedule.chef} - ${label}`,
          x + cellWidth / 2,
          textY,
          { align: 'center' }
        );
        textY += lineHeight;
      });
    });

    // Sauvegarde du fichier
    const fileName = selectedChef
      ? `planning_${selectedChef.toLowerCase()}_${format(startDate, 'yyyyMMdd')}.pdf`
      : `planning_${format(startDate, 'yyyyMMdd')}.pdf`;
    doc.save(fileName);
  }
}
