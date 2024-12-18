import { startOfWeek, differenceInWeeks, isWeekend, isSaturday, isMonday, isSunday, isWithinInterval, format } from 'date-fns';
import { CHEFS, POSTES, REFERENCE_DATE, CYCLE_WEEKS } from '../config/constants';
import type { WeekSchedule, Chef, Position, DaySchedule, Absence } from '../types/index';
import { secureStorage } from './secureStorage';

// Définition du cycle complet de 20 semaines
const CYCLE_SCHEDULE: Record<number, Record<Chef, Position>> = {
  1: { Lionel: POSTES.MAT2, 'Eugène': POSTES.AM2, Stephane: POSTES.AM1, Philippe: POSTES.MAT1, Nassim: POSTES.REMPLACANT },
  2: { Lionel: POSTES.MAT1, 'Eugène': POSTES.MAT2, Stephane: POSTES.AM2, Philippe: POSTES.AM1, Nassim: POSTES.REMPLACANT },
  3: { Lionel: POSTES.AM1, 'Eugène': POSTES.MAT1, Stephane: POSTES.MAT2, Philippe: POSTES.AM2, Nassim: POSTES.REMPLACANT },
  4: { Lionel: POSTES.AM2, 'Eugène': POSTES.AM1, Stephane: POSTES.MAT1, Philippe: POSTES.MAT2, Nassim: POSTES.REMPLACANT },
  5: { Lionel: POSTES.MAT2, 'Eugène': POSTES.AM2, Stephane: POSTES.AM1, Philippe: POSTES.REMPLACANT, Nassim: POSTES.MAT1 },
  6: { Lionel: POSTES.MAT1, 'Eugène': POSTES.MAT2, Stephane: POSTES.AM2, Philippe: POSTES.REMPLACANT, Nassim: POSTES.AM1 },
  7: { Lionel: POSTES.AM1, 'Eugène': POSTES.MAT1, Stephane: POSTES.MAT2, Philippe: POSTES.REMPLACANT, Nassim: POSTES.AM2 },
  8: { Lionel: POSTES.AM2, 'Eugène': POSTES.AM1, Stephane: POSTES.MAT1, Philippe: POSTES.REMPLACANT, Nassim: POSTES.MAT2 },
  9: { Lionel: POSTES.MAT2, 'Eugène': POSTES.AM2, Stephane: POSTES.REMPLACANT, Philippe: POSTES.AM1, Nassim: POSTES.MAT1 },
  10: { Lionel: POSTES.MAT1, 'Eugène': POSTES.MAT2, Stephane: POSTES.REMPLACANT, Philippe: POSTES.AM2, Nassim: POSTES.AM1 },
  11: { Lionel: POSTES.AM1, 'Eugène': POSTES.MAT1, Stephane: POSTES.REMPLACANT, Philippe: POSTES.MAT2, Nassim: POSTES.AM2 },
  12: { Lionel: POSTES.AM2, 'Eugène': POSTES.AM1, Stephane: POSTES.REMPLACANT, Philippe: POSTES.MAT1, Nassim: POSTES.MAT2 },
  13: { Lionel: POSTES.MAT2, 'Eugène': POSTES.REMPLACANT, Stephane: POSTES.AM2, Philippe: POSTES.AM1, Nassim: POSTES.MAT1 },
  14: { Lionel: POSTES.MAT1, 'Eugène': POSTES.REMPLACANT, Stephane: POSTES.MAT2, Philippe: POSTES.AM2, Nassim: POSTES.AM1 },
  15: { Lionel: POSTES.AM1, 'Eugène': POSTES.REMPLACANT, Stephane: POSTES.MAT1, Philippe: POSTES.MAT2, Nassim: POSTES.AM2 },
  16: { Lionel: POSTES.AM2, 'Eugène': POSTES.REMPLACANT, Stephane: POSTES.AM1, Philippe: POSTES.MAT1, Nassim: POSTES.MAT2 },
  17: { Lionel: POSTES.REMPLACANT, 'Eugène': POSTES.MAT2, Stephane: POSTES.AM2, Philippe: POSTES.AM1, Nassim: POSTES.MAT1 },
  18: { Lionel: POSTES.REMPLACANT, 'Eugène': POSTES.MAT1, Stephane: POSTES.MAT2, Philippe: POSTES.AM2, Nassim: POSTES.AM1 },
  19: { Lionel: POSTES.REMPLACANT, 'Eugène': POSTES.AM1, Stephane: POSTES.MAT1, Philippe: POSTES.MAT2, Nassim: POSTES.AM2 },
  20: { Lionel: POSTES.REMPLACANT, 'Eugène': POSTES.AM2, Stephane: POSTES.AM1, Philippe: POSTES.MAT1, Nassim: POSTES.MAT2 }
};

export class ScheduleService {
  static getWeekSchedule(date: Date, absences: Absence[] = []): WeekSchedule {
    // Normaliser les dates pour ignorer les heures et fuseaux horaires
    const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const normalizedRef = new Date(REFERENCE_DATE.getFullYear(), REFERENCE_DATE.getMonth(), REFERENCE_DATE.getDate());
    
    const startDate = startOfWeek(normalizedDate, { weekStartsOn: 1 });
    const refStartDate = startOfWeek(normalizedRef, { weekStartsOn: 1 });
    
    // Calculer la différence en millisecondes et convertir en semaines
    const diffTime = startDate.getTime() - refStartDate.getTime();
    const weeksSinceReference = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000));
    
    console.log('Date courante:', normalizedDate);
    console.log('Start of week:', startDate);
    console.log('Reference date:', refStartDate);
    console.log('Weeks since reference:', weeksSinceReference);
    
    // Calculer le numéro de semaine dans le cycle (1-20)
    const weekInCycle = ((weeksSinceReference % CYCLE_WEEKS) + CYCLE_WEEKS) % CYCLE_WEEKS + 1;
    
    // Calculer le numéro du cycle
    const cycleNumber = Math.floor(weeksSinceReference / CYCLE_WEEKS) + 1;

    console.log('Week in cycle:', weekInCycle);
    console.log('Cycle number:', cycleNumber);
    
    // Obtenir les affectations de la semaine
    const weekAssignments = CYCLE_SCHEDULE[weekInCycle];
    const remplacant = this.getReplacementChef(weekAssignments);

    // Générer le planning de la semaine
    const schedule: WeekSchedule['schedule'] = {};
    const currentDate = new Date(startDate);

    // Créer un tableau ordonné des chefs selon leur poste
    const orderedChefs = CHEFS.slice().sort((a, b) => {
      const posA = weekAssignments[a];
      const posB = weekAssignments[b];
      const order = [POSTES.MAT1, POSTES.MAT2, POSTES.AM1, POSTES.AM2, POSTES.REMPLACANT];
      return order.indexOf(posA) - order.indexOf(posB);
    });

    for (let i = 0; i < 7; i++) {
      const daySchedule = this.getDaySchedule(currentDate, weekAssignments, absences, orderedChefs);
      schedule[currentDate.toISOString()] = daySchedule;
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return {
      startDate,
      cycleNumber,
      weekInCycle,
      remplacant,
      schedule,
    };
  }

  private static getReplacementChef(weekAssignments: Record<Chef, Position>): Chef {
    return Object.entries(weekAssignments).find(([_, poste]) => poste === POSTES.REMPLACANT)?.[0] as Chef;
  }

  private static getDaySchedule(
    date: Date, 
    weekAssignments: Record<Chef, Position>, 
    absences: Absence[],
    orderedChefs: Chef[]
  ): DaySchedule[] {
    const remplacant = this.getReplacementChef(weekAssignments);
    const startOfWeekDate = startOfWeek(date, { weekStartsOn: 1 });
    
    // Compter combien de jours le remplaçant travaille cette semaine
    let remplacantWorkDays = 0;
    let currentDate = new Date(startOfWeekDate);
    for (let i = 0; i < 7; i++) {
      if (!isWeekend(currentDate) || (isSaturday(currentDate) && this.hasAbsentChef(currentDate, absences, orderedChefs))) {
        remplacantWorkDays++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Si c'est samedi et qu'il y a un absent, vérifier si le remplaçant a déjà travaillé lundi
    const isProblematicDay = (isSaturday(date) || isMonday(date)) && 
                            this.hasAbsentChef(date, absences, orderedChefs) && 
                            remplacantWorkDays > 5;

    // Gestion du weekend
    if (isWeekend(date)) {
      if (isSunday(date)) {
        return [];
      }
      
      const mat1Chef = orderedChefs.find(chef => weekAssignments[chef] === POSTES.MAT1)!;
      const absence = this.getAbsence(mat1Chef, date, absences);
      
      if (absence) {
        // Le samedi, on retourne seulement MAT1 et son remplaçant
        return [
          {
            chef: mat1Chef,
            poste: POSTES.MAT1,
            isAbsent: true,
            vacationType: absence.type,
            replacedChef: undefined,
            isRecup: false,
            isReplacing: false
          },
          {
            chef: remplacant,
            poste: POSTES.MAT1,
            isReplacing: true,
            replacedChef: mat1Chef,
            isAbsent: false,
            isRecup: false,
            vacationType: undefined
          }
        ];
      }

      if (mat1Chef === 'Eugène') {
        this.handleEugeneWorkedSaturday(date);
      }

      return [{
        chef: mat1Chef,
        poste: POSTES.MAT1
      }];
    }

    // Vérifier si Eugène a travaillé samedi et si c'est mercredi
    const isEugeneRecoveryDay = this.isEugeneRecoveryDay(date);

    // Si c'est mercredi et qu'Eugène doit récupérer, supprimer l'info du samedi
    if (isEugeneRecoveryDay) {
      secureStorage.removeEugeneWorkedSaturday();
    }

    const daySchedules: DaySchedule[] = [];
    const absentChef = orderedChefs.find(chef => this.getAbsence(chef, date, absences));
    const absentChefPosition = absentChef ? weekAssignments[absentChef] : null;

    for (const chef of orderedChefs) {
      const absence = this.getAbsence(chef, date, absences);
      const saturdayDate = new Date(date.getTime() - (isMonday(date) ? 2 : 4) * 24 * 60 * 60 * 1000);
      const isRecuperationDay = 
        weekAssignments[chef] === POSTES.MAT1 && 
        !this.getAbsence(chef, saturdayDate, absences) &&
        ((chef === 'Eugène' && isEugeneRecoveryDay) || 
         (chef !== 'Eugène' && isMonday(date)));

      if (chef === remplacant) {
        // Le remplaçant
        if (absentChef) {
          // Si quelqu'un est en congé, le remplaçant prend son poste
          daySchedules.push({
            chef,
            poste: absentChefPosition!,
            isReplacing: true,
            replacedChef: absentChef
          });
        } else if (isRecuperationDay && weekAssignments[chef] === POSTES.MAT1) {
          // Si c'est un jour de récupération MAT1, le remplaçant prend le poste MAT1
          daySchedules.push({
            chef,
            poste: POSTES.MAT1,
            isReplacing: true,
            replacedChef: chef
          });
        } else {
          // Sinon, position normale de remplaçant
          daySchedules.push({
            chef,
            poste: POSTES.REMPLACANT
          });
        }
      } else if (absence) {
        // Le chef est en congé
        daySchedules.push({
          chef,
          poste: weekAssignments[chef],
          isAbsent: true,
          vacationType: absence.type
        });
      } else if (isRecuperationDay && !absentChef) {
        // Le chef en récupération
        daySchedules.push({
          chef,
          poste: weekAssignments[chef],
          isRecup: true
        });
      } else if (chef !== absentChef) {
        // Cas normal
        daySchedules.push({
          chef,
          poste: weekAssignments[chef]
        });
      }
    }

    return daySchedules;
  }

  private static getAbsence(chef: Chef, date: Date, absences: Absence[]): Absence | undefined {
    return absences.find(absence => {
      const startDate = new Date(absence.startDate);
      const endDate = new Date(absence.endDate);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(23, 59, 59, 999);
      
      return absence.chef === chef && 
        isWithinInterval(date, { start: startDate, end: endDate });
    });
  }

  private static hasAbsentChef(date: Date, absences: Absence[], chefs: Chef[]): boolean {
    return chefs.some(chef => this.getAbsence(chef, date, absences) !== undefined);
  }

  private static handleEugeneWorkedSaturday(date: Date) {
    if (this.isEugeneWorkingSaturday(date)) {
      secureStorage.setEugeneWorkedSaturday(date);
    }
  }

  private static isEugeneRecoveryDay(date: Date): boolean {
    const eugeneWorkedSaturday = secureStorage.getEugeneWorkedSaturday();
    if (!eugeneWorkedSaturday) return false;

    const workedSaturdayStr = format(eugeneWorkedSaturday, 'yyyy-MM-dd');
    const currentDateStr = format(date, 'yyyy-MM-dd');

    if (workedSaturdayStr === currentDateStr) {
      secureStorage.removeEugeneWorkedSaturday();
      return false;
    }

    return true;
  }

  private static isEugeneWorkingSaturday(date: Date): boolean {
    return isSaturday(date) && this.hasAbsentChef(date, [], ['Eugène']) === false;
  }
}
