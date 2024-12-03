import { POSTES, CHEFS } from '../config/constants';
import { VacationType } from './index';

export type Position = typeof POSTES[keyof typeof POSTES];
export type Chef = typeof CHEFS[number];

export interface DaySchedule {
  chef: Chef;
  poste: Position;
  isWeekend?: boolean;
  isRecuperation?: boolean;
  vacation?: Vacation;
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

export interface ScheduleState {
  currentWeek: WeekSchedule;
  loading: boolean;
  error?: string;
}

export interface Vacation {
  id: string;
  chef: Chef;
  startDate: Date;
  endDate: Date;
  type: VacationType;
}

export interface Holiday {
  name: string;
  date: Date;
}
