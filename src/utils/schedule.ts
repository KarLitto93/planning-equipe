import { addWeeks, startOfWeek, isSameDay } from 'date-fns';
import { Chef, Poste, Absence, Holiday } from '../types';
const CHEFS: Chef[] = ['Lionel', 'Eugène', 'Stephane', 'Philippe', 'Nassim'];
const POSITIONS: Poste[] = ['MAT1', 'MAT2', 'AM1', 'AM2', 'REMPLACANT'];
const REFERENCE_DATE = new Date('2024-10-14');
const WEEKS_IN_CYCLE = 20;

export function calculateCycleAndWeek(currentDate: Date): { cycle: number; week: number } {
  const weeksDiff = Math.floor((currentDate.getTime() - REFERENCE_DATE.getTime()) / (7 * 24 * 60 * 60 * 1000));
  const cycle = Math.floor(weeksDiff / WEEKS_IN_CYCLE) + 1;
  const week = (weeksDiff % WEEKS_IN_CYCLE) + 1;
  return { cycle, week };
}

export function getBasePosition(chef: Chef, week: number): Poste {
  const chefIndex = CHEFS.indexOf(chef);
  const positionIndex = (chefIndex + week - 1) % POSITIONS.length;
  return POSITIONS[positionIndex];
}

export function getWeekDates(date: Date): Date[] {
  const weekStart = startOfWeek(date, { weekStartsOn: 1 });
  return Array.from({ length: 7 }, (_, i) => addWeeks(weekStart, i));
}

export function calculateDayAssignments(
  date: Date,
  week: number,
  absences: Absence[],
  holidays: Holiday[]
): Record<Poste, Chef> {
  const assignments: Partial<Record<Poste, Chef>> = {};
  const availableChefs = CHEFS.filter(
    (chef) => !absences.some((v) => v.chef === chef && isSameDay(date, v.startDate))
  );

  // First, assign base positions
  availableChefs.forEach((chef) => {
    const basePosition = getBasePosition(chef, week);
    assignments[basePosition] = chef;
  });

  // Handle replacements for absences
  const missingPositions = POSITIONS.filter((pos) => !assignments[pos]);
  const replacementChef = availableChefs.find((chef) => !Object.values(assignments).includes(chef));

  if (replacementChef && missingPositions.length > 0) {
    missingPositions.forEach((pos) => {
      assignments[pos] = replacementChef;
    });
  }

  return assignments as Record<Poste, Chef>;
}

export const POSITION_COLORS: Record<Poste, string> = {
  MAT1: '#bbdefb',
  MAT2: '#90caf9',
  AM1: '#fff59d',
  AM2: '#ffcc80',
  REMPLACANT: '#b0bec5'
};