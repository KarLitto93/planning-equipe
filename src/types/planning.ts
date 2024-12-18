import { POSTES, CHEFS } from '../config/constants';
import { Absence, AbsenceType } from './index';

export type Position = typeof POSTES[keyof typeof POSTES];
export type Chef = typeof CHEFS[number];

export interface DaySchedule {
  chef: Chef;
  poste: Position;
  isWeekend?: boolean;
  isRecuperation?: boolean;
  vacation?: Absence;
  isAbsent?: boolean;
  isReplacing?: boolean;
  replacedChef?: Chef;
}

export interface WeekSchedule {
  startDate: Date;
  cycleNumber: number;
  weekInCycle: number;
  remplacant: Chef;
  schedule: {
    [key: string]: DaySchedule[];
  };
}
