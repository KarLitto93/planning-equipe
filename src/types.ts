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
  chef: Chef;
  poste: Poste;
  vacation?: Vacation;
  needsAttention?: boolean;
  isRecuperation?: boolean;
  isAbsent?: boolean;
  isReplacing?: boolean;
  replacedChef?: Chef;
  vacationType?: VacationType;
}

export interface WeekSchedule {
  startDate: Date;
  cycleNumber: number;
  weekInCycle: number;
  remplacant: Chef;
  schedule: Record<string, DaySchedule[]>;
}

export interface UserInfo {
  id: string;
  username: string;
  role: 'admin' | 'user' | 'chef';
  chef?: Chef;
  email: string;
  lastPasswordChange?: Date;
  status: 'active' | 'pending' | 'inactive' | 'rejected';
  createdAt?: Date;
}
