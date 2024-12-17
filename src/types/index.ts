export type Position = 'MAT1' | 'MAT2' | 'AM1' | 'AM2' | 'REMPLACANT';

export type Chef = string;

export type AbsenceType = 'CP' | 'RTT' | 'Maladie' | 'Formation' | 'Autre' | 'Congé' | 'Récupération';

export interface DaySchedule {
  chef: Chef;
  poste: Position;
  isWeekend?: boolean;
  isRecup?: boolean;
  isAbsent?: boolean;
  isReplacing?: boolean;
  replacedChef?: Chef;
  vacationType?: string;
}

export interface WeekSchedule {
  startDate: Date;
  schedule: Record<string, DaySchedule[]>;
}

export interface Absence {
  id: string;
  chef: Chef;
  startDate: Date;
  endDate: Date;
  type: AbsenceType;
  createdAt: Date;
}

export interface Holiday {
  date: Date;
  name: string;
}

export interface UserInfo {
  uid: string;
  username: string;
  displayName: string;
  role: 'admin' | 'user';
  status: string;
  email: string;
  lastPasswordChange?: Date;
  createdAt?: Date;
}