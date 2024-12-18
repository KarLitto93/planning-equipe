import { Absence, AbsenceFilters, AbsenceType, Chef } from '../types';
import { ScheduleService } from './ScheduleService';

export class AbsenceService {
  private static absences: Absence[] = [];

  // Ajout d'une méthode privée pour générer des IDs uniques
  private static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  static createAbsence(absence: Omit<Absence, 'id' | 'createdAt'>): Absence {
    const newAbsence: Absence = {
      id: this.generateId(), // Utilisation de notre générateur d'ID
      createdAt: new Date(),
      ...absence,
    };
    this.absences.push(newAbsence);
    return newAbsence;
  }

  static updateAbsence(id: string, updates: Partial<Absence>): Absence | null {
    const index = this.absences.findIndex(a => a.id === id);
    if (index === -1) return null;
    
    this.absences[index] = { ...this.absences[index], ...updates };
    return this.absences[index];
  }

  static getAbsence(id: string): Absence | null {
    return this.absences.find(a => a.id === id) || null;
  }

  static getAbsences(filters: AbsenceFilters = {}): Absence[] {
    const { startDate, endDate, chef, type } = filters;
    let filteredAbsences = [...this.absences];

    if (chef) {
      filteredAbsences = filteredAbsences.filter((absence: Absence) => absence.chef === chef);
    }

    if (type) {
      filteredAbsences = filteredAbsences.filter((absence: Absence) => absence.type === type);
    }

    if (startDate) {
      filteredAbsences = filteredAbsences.filter((absence: Absence) => absence.startDate >= startDate);
    }

    if (endDate) {
      filteredAbsences = filteredAbsences.filter((absence: Absence) => absence.endDate <= endDate);
    }

    return filteredAbsences.sort((a: Absence, b: Absence) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  static deleteAbsence(id: string): boolean {
    const index = this.absences.findIndex(a => a.id === id);
    if (index === -1) return false;
    
    this.absences.splice(index, 1);
    return true;
  }
}