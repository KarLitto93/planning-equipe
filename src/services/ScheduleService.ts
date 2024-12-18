import { startOfWeek, addDays, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { WeekSchedule, DaySchedule } from '../types';
import { POSTES } from '../config/constants';

const CHEFS = {
  LIONEL: 'Lionel',
  EUGENE: 'Eugène',
  STEPHANE: 'Stéphane',
  PHILIPPE: 'Philippe',
  NASSIM: 'Nassim'
} as const;

const CYCLE = [
  // Semaine 1
  {
    [CHEFS.LIONEL]: POSTES.MAT2,
    [CHEFS.EUGENE]: POSTES.AM2,
    [CHEFS.STEPHANE]: POSTES.AM1,
    [CHEFS.PHILIPPE]: POSTES.MAT1,
    [CHEFS.NASSIM]: POSTES.REMPLACANT
  },
  // Semaine 2
  {
    [CHEFS.LIONEL]: POSTES.MAT1,
    [CHEFS.EUGENE]: POSTES.MAT2,
    [CHEFS.STEPHANE]: POSTES.AM2,
    [CHEFS.PHILIPPE]: POSTES.AM1,
    [CHEFS.NASSIM]: POSTES.REMPLACANT
  },
  // Semaine 3
  {
    [CHEFS.LIONEL]: POSTES.AM1,
    [CHEFS.EUGENE]: POSTES.MAT1,
    [CHEFS.STEPHANE]: POSTES.MAT2,
    [CHEFS.PHILIPPE]: POSTES.AM2,
    [CHEFS.NASSIM]: POSTES.REMPLACANT
  },
  // Semaine 4
  {
    [CHEFS.LIONEL]: POSTES.AM2,
    [CHEFS.EUGENE]: POSTES.AM1,
    [CHEFS.STEPHANE]: POSTES.MAT1,
    [CHEFS.PHILIPPE]: POSTES.MAT2,
    [CHEFS.NASSIM]: POSTES.REMPLACANT
  },
  // Semaine 5
  {
    [CHEFS.LIONEL]: POSTES.MAT2,
    [CHEFS.EUGENE]: POSTES.AM2,
    [CHEFS.STEPHANE]: POSTES.AM1,
    [CHEFS.PHILIPPE]: POSTES.REMPLACANT,
    [CHEFS.NASSIM]: POSTES.MAT1
  },
  // Semaine 6
  {
    [CHEFS.LIONEL]: POSTES.MAT1,
    [CHEFS.EUGENE]: POSTES.MAT2,
    [CHEFS.STEPHANE]: POSTES.AM2,
    [CHEFS.PHILIPPE]: POSTES.REMPLACANT,
    [CHEFS.NASSIM]: POSTES.AM1
  },
  // Semaine 7
  {
    [CHEFS.LIONEL]: POSTES.AM1,
    [CHEFS.EUGENE]: POSTES.MAT1,
    [CHEFS.STEPHANE]: POSTES.MAT2,
    [CHEFS.PHILIPPE]: POSTES.REMPLACANT,
    [CHEFS.NASSIM]: POSTES.AM2
  },
  // Semaine 8
  {
    [CHEFS.LIONEL]: POSTES.AM2,
    [CHEFS.EUGENE]: POSTES.AM1,
    [CHEFS.STEPHANE]: POSTES.MAT1,
    [CHEFS.PHILIPPE]: POSTES.REMPLACANT,
    [CHEFS.NASSIM]: POSTES.MAT2
  },
  // Semaine 9
  {
    [CHEFS.LIONEL]: POSTES.MAT2,
    [CHEFS.EUGENE]: POSTES.AM2,
    [CHEFS.STEPHANE]: POSTES.REMPLACANT,
    [CHEFS.PHILIPPE]: POSTES.AM1,
    [CHEFS.NASSIM]: POSTES.MAT1
  },
  // Semaine 10
  {
    [CHEFS.LIONEL]: POSTES.MAT1,
    [CHEFS.EUGENE]: POSTES.MAT2,
    [CHEFS.STEPHANE]: POSTES.REMPLACANT,
    [CHEFS.PHILIPPE]: POSTES.AM2,
    [CHEFS.NASSIM]: POSTES.AM1
  },
  // Semaine 11
  {
    [CHEFS.LIONEL]: POSTES.AM1,
    [CHEFS.EUGENE]: POSTES.MAT1,
    [CHEFS.STEPHANE]: POSTES.REMPLACANT,
    [CHEFS.PHILIPPE]: POSTES.MAT2,
    [CHEFS.NASSIM]: POSTES.AM2
  },
  // Semaine 12
  {
    [CHEFS.LIONEL]: POSTES.AM2,
    [CHEFS.EUGENE]: POSTES.AM1,
    [CHEFS.STEPHANE]: POSTES.REMPLACANT,
    [CHEFS.PHILIPPE]: POSTES.MAT1,
    [CHEFS.NASSIM]: POSTES.MAT2
  },
  // Semaine 13
  {
    [CHEFS.LIONEL]: POSTES.MAT2,
    [CHEFS.EUGENE]: POSTES.REMPLACANT,
    [CHEFS.STEPHANE]: POSTES.AM2,
    [CHEFS.PHILIPPE]: POSTES.AM1,
    [CHEFS.NASSIM]: POSTES.MAT1
  },
  // Semaine 14
  {
    [CHEFS.LIONEL]: POSTES.MAT1,
    [CHEFS.EUGENE]: POSTES.REMPLACANT,
    [CHEFS.STEPHANE]: POSTES.MAT2,
    [CHEFS.PHILIPPE]: POSTES.AM2,
    [CHEFS.NASSIM]: POSTES.AM1
  },
  // Semaine 15
  {
    [CHEFS.LIONEL]: POSTES.AM1,
    [CHEFS.EUGENE]: POSTES.REMPLACANT,
    [CHEFS.STEPHANE]: POSTES.MAT1,
    [CHEFS.PHILIPPE]: POSTES.MAT2,
    [CHEFS.NASSIM]: POSTES.AM2
  },
  // Semaine 16
  {
    [CHEFS.LIONEL]: POSTES.AM2,
    [CHEFS.EUGENE]: POSTES.REMPLACANT,
    [CHEFS.STEPHANE]: POSTES.AM1,
    [CHEFS.PHILIPPE]: POSTES.MAT1,
    [CHEFS.NASSIM]: POSTES.MAT2
  },
  // Semaine 17
  {
    [CHEFS.LIONEL]: POSTES.REMPLACANT,
    [CHEFS.EUGENE]: POSTES.MAT2,
    [CHEFS.STEPHANE]: POSTES.AM2,
    [CHEFS.PHILIPPE]: POSTES.AM1,
    [CHEFS.NASSIM]: POSTES.MAT1
  },
  // Semaine 18
  {
    [CHEFS.LIONEL]: POSTES.REMPLACANT,
    [CHEFS.EUGENE]: POSTES.MAT1,
    [CHEFS.STEPHANE]: POSTES.MAT2,
    [CHEFS.PHILIPPE]: POSTES.AM2,
    [CHEFS.NASSIM]: POSTES.AM1
  },
  // Semaine 19
  {
    [CHEFS.LIONEL]: POSTES.REMPLACANT,
    [CHEFS.EUGENE]: POSTES.AM1,
    [CHEFS.STEPHANE]: POSTES.MAT1,
    [CHEFS.PHILIPPE]: POSTES.MAT2,
    [CHEFS.NASSIM]: POSTES.AM2
  },
  // Semaine 20
  {
    [CHEFS.LIONEL]: POSTES.REMPLACANT,
    [CHEFS.EUGENE]: POSTES.AM2,
    [CHEFS.STEPHANE]: POSTES.AM1,
    [CHEFS.PHILIPPE]: POSTES.MAT1,
    [CHEFS.NASSIM]: POSTES.MAT2
  }
];

const getRecuperationDay = (chef: string, poste: string): number => {
  // Seul le chef en MAT1 a un jour de récupération
  if (poste !== POSTES.MAT1) {
    return -1;
  }

  // Eugène a toujours son jour de récupération le mercredi quand il est en MAT1
  if (chef === CHEFS.EUGENE) {
    return 2; // Mercredi (0=lundi, 2=mercredi)
  }

  // Les autres chefs ont leur jour de récupération le lundi quand ils sont en MAT1
  return 0; // Lundi (0=lundi)
};

const generateId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export class ScheduleService {
  private static absences: {
    id: string;
    chef: string;
    startDate: Date;
    endDate: Date;
    type: string;
    createdAt: Date;
  }[] = [];

  static addAbsence(absence: {
    chef: string;
    startDate: Date;
    endDate: Date;
    type: string;
  }): void {
    const newAbsence = {
      ...absence,
      id: generateId(),
      createdAt: new Date(),
    };
    this.absences.push(newAbsence);
  }

  static getAllAbsences() {
    return this.absences;
  }

  static updateAbsence(id: string, updates: Partial<typeof this.absences[0]>) {
    const index = this.absences.findIndex(a => a.id === id);
    if (index === -1) return null;

    const updatedAbsence = {
      ...this.absences[index],
      ...updates,
    };
    this.absences[index] = updatedAbsence;
    return updatedAbsence;
  }

  static deleteAbsence(id: string) {
    const initialLength = this.absences.length;
    this.absences = this.absences.filter(a => a.id !== id);
    return this.absences.length !== initialLength;
  }

  static getAbsence(id: string) {
    return this.absences.find(a => a.id === id) || null;
  }

  static checkOverlap(startDate: Date, endDate: Date, chef: string, excludeId?: string) {
    return this.absences.some(absence => {
      if (excludeId && absence.id === excludeId) return false;
      if (absence.chef !== chef) return false;

      return (
        (startDate >= absence.startDate && startDate <= absence.endDate) ||
        (endDate >= absence.startDate && endDate <= absence.endDate) ||
        (startDate <= absence.startDate && endDate >= absence.endDate)
      );
    });
  }

  static getWeekSchedule(date: Date): WeekSchedule {
    const startDate = startOfWeek(date, { weekStartsOn: 1, locale: fr });
    const schedule: { [key: string]: DaySchedule[] } = {};

    // Calculer la semaine dans le cycle (0-19)
    const baseDate = new Date(2024, 9, 14); // 14 octobre 2024
    const weekDiff = Math.floor((date.getTime() - baseDate.getTime()) / (7 * 24 * 60 * 60 * 1000));
    const weekInCycle = ((weekDiff % 20) + 20) % 20;
    const weekAssignments = CYCLE[weekInCycle];

    // Générer le planning pour chaque jour
    for (let i = 0; i < 7; i++) {
      const currentDate = addDays(startDate, i);
      const daySchedules: DaySchedule[] = [];

      // Ajouter les assignations pour chaque chef
      Object.entries(weekAssignments).forEach(([chef, poste]) => {
        // Vérifier si le chef est absent ce jour-là
        const absence = this.absences.find(abs => 
          chef === abs.chef && 
          currentDate >= abs.startDate && 
          currentDate <= abs.endDate
        );

        if (absence) {
          daySchedules.push({
            chef,
            poste,
            isRecup: false,
            isAbsent: true,
            isReplacing: false,
            vacationType: absence.type,
            replacedChef: undefined
          });
          return;
        }

        const recupDay = getRecuperationDay(chef, poste);
        const isRecup = i === recupDay;

        // Ne pas ajouter de planning pour les jours de récupération
        if (!isRecup) {
          // Vérifier si c'est samedi (jour 5) et si le chef n'est pas MAT1
          if (i === 5 && poste !== POSTES.MAT1) {
            return; // Passer ce chef pour samedi
          }

          // Vérifier si c'est dimanche (jour 6)
          if (i === 6) {
            return; // Pas de travail le dimanche
          }

          daySchedules.push({
            chef,
            poste,
            isRecup: false,
            isAbsent: false,
            isReplacing: false,
            vacationType: undefined,
            replacedChef: undefined
          });
        } else {
          daySchedules.push({
            chef,
            poste,
            isRecup: true,
            isAbsent: false,
            isReplacing: false,
            vacationType: undefined,
            replacedChef: undefined
          });
        }
      });

      const dateStr = format(currentDate, 'yyyy-MM-dd');
      schedule[dateStr] = daySchedules;
    }

    return {
      startDate,
      schedule,
      cycleNumber: 1, // TODO: Replace with actual cycle number calculation
      weekInCycle: ((weekDiff % 20) + 20) % 20  // TODO: Replace with actual week in cycle calculation
    };
  }
}
