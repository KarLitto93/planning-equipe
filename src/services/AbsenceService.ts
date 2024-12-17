import { v4 as uuidv4 } from 'uuid';
import { ScheduleService } from './ScheduleService';
import type { Absence, AbsenceType, AbsenceFilters } from '../types';

export class AbsenceService {
  static addAbsence(absence: Omit<Absence, 'id' | 'createdAt'>): void {
    ScheduleService.addAbsence(absence);
  }

  static updateAbsence(id: string, updates: Partial<Absence>): Absence | null {
    return ScheduleService.updateAbsence(id, updates);
  }

  static deleteAbsence(id: string): boolean {
    return ScheduleService.deleteAbsence(id);
  }

  static getAbsence(id: string): Absence | null {
    return ScheduleService.getAbsence(id);
  }

  static getAbsences(filters: AbsenceFilters = {}): Absence[] {
    const absences = ScheduleService.getAllAbsences();
    
    let filteredAbsences = [...absences];

    if (filters.chef) {
      filteredAbsences = filteredAbsences.filter(a => a.chef === filters.chef);
    }

    if (filters.type) {
      filteredAbsences = filteredAbsences.filter(a => a.type === filters.type);
    }

    if (filters.startDate) {
      filteredAbsences = filteredAbsences.filter(a => a.startDate >= filters.startDate!);
    }

    if (filters.endDate) {
      filteredAbsences = filteredAbsences.filter(a => a.endDate <= filters.endDate!);
    }

    return filteredAbsences.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  static getStats(filters: AbsenceFilters = {}) {
    const absences = this.getAbsences(filters);
    const stats = {
      totalAbsences: absences.length,
      conges: 0,
      maladies: 0,
      formations: 0,
      autres: 0,
      joursRestants: 25,
      joursTotal: 25,
    };

    absences.forEach(absence => {
      const days = Math.ceil(
        (absence.endDate.getTime() - absence.startDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      switch (absence.type) {
        case 'CONGE':
          stats.conges += days;
          stats.joursRestants -= days;
          break;
        case 'MALADIE':
          stats.maladies += days;
          break;
        case 'FORMATION':
          stats.formations += days;
          break;
        case 'AUTRE':
          stats.autres += days;
          break;
      }
    });

    return stats;
  }

  // Méthode pour vérifier les chevauchements
  static checkOverlap(startDate: Date, endDate: Date, chef: string, excludeId?: string): boolean {
    return ScheduleService.checkOverlap(startDate, endDate, chef, excludeId);
  }
}
