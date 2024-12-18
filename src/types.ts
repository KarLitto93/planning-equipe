import { POSTES } from './config/constants';

export type Chef = 'Lionel' | 'Eugène' | 'Stephane' | 'Philippe' | 'Nassim';
export type Poste = typeof POSTES[keyof typeof POSTES];
export type VacationType = 'CP' | 'RTT' | 'Maladie' | 'Formation' | 'Autre' | 'Congé' | 'Récupération';

export interface Holiday {
  date: Date;
  name: string;
}

export interface Vacation {
  id: string;
  chef: Chef;
  startDate: Date;
  endDate: Date;
  type: VacationType;
}

export interface DaySchedule {
  chef: string;
  poste: string;
  isRecup: boolean;
  isAbsent: boolean;
  isReplacing: boolean;
  vacationType?: string;
  replacedChef?: string;
}

export interface WeekSchedule {
  startDate: Date;
  remplacant?: string;
  cycleNumber: number;
  weekInCycle: number;
  schedule: {
    [key: string]: DaySchedule[];
  };
}

export type AbsenceType = 'CONGE' | 'MALADIE' | 'FORMATION' | 'AUTRE';

export interface Absence {
  id: string;
  chef: string;
  startDate: Date;
  endDate: Date;
  type: AbsenceType;
  comment?: string;
  createdAt: Date;
}

export interface AbsenceFilters {
  chef?: string;
  type?: AbsenceType;
  startDate?: Date;
  endDate?: Date;
}

export type { UserInfo } from './types/user';
