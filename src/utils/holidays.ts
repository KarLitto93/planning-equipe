import { getYear } from 'date-fns';
import { Holiday } from '../types';

export function getFrenchHolidays(year: number): Holiday[] {
  return [
    { date: new Date(year, 0, 1), name: "Jour de l'an" },
    { date: new Date(year, 3, 1), name: 'Lundi de Pâques' },
    { date: new Date(year, 4, 1), name: 'Fête du Travail' },
    { date: new Date(year, 4, 8), name: 'Victoire 1945' },
    { date: new Date(year, 4, 9), name: "Jour de l'Ascension" },
    { date: new Date(year, 4, 20), name: 'Lundi de Pentecôte' },
    { date: new Date(year, 6, 14), name: 'Fête Nationale' },
    { date: new Date(year, 7, 15), name: 'Assomption' },
    { date: new Date(year, 10, 1), name: 'Toussaint' },
    { date: new Date(year, 10, 11), name: 'Armistice 1918' },
    { date: new Date(year, 11, 25), name: 'Noël' },
  ];
}

export function isHoliday(date: Date, holidays: Holiday[]): Holiday | undefined {
  return holidays.find(
    (holiday) =>
      holiday.date.getDate() === date.getDate() &&
      holiday.date.getMonth() === date.getMonth() &&
      holiday.date.getFullYear() === date.getFullYear()
  );
}