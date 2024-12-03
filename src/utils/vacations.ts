import { isWithinInterval } from 'date-fns';
import { Chef, Vacation } from '../types';

export function isChefOnVacation(chef: Chef, date: Date, vacations: Vacation[]): Vacation | undefined {
  return vacations.find(
    (vacation) =>
      vacation.chef === chef &&
      isWithinInterval(date, { start: vacation.startDate, end: vacation.endDate })
  );
}

export function getAvailableReplacements(date: Date, chefs: Chef[], vacations: Vacation[]): Chef[] {
  return chefs.filter((chef) => !isChefOnVacation(chef, date, vacations));
}