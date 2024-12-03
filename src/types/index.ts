export type Position = 'MAT1' | 'MAT2' | 'AM1' | 'AM2' | 'REMPLACANT';

export type Chef = 'Lionel' | 'Eugène' | 'Stephane' | 'Philippe' | 'Nassim';

export type VacationType = 'CP' | 'RTT' | 'Maladie' | 'Formation' | 'Autre' | 'Congé' | 'Récupération';

export interface DaySchedule {
  chef: Chef;
  poste: Position;
  isWeekend?: boolean;
  isRecup?: boolean;
  vacationType?: VacationType;
  originalChef?: Chef; // Chef qui est remplacé
}

export interface WeekSchedule {
  startDate: Date;
  cycleNumber: number;
  weekInCycle: number;
  remplacant: Chef;
  schedule: Record<string, DaySchedule[]>;
}

export interface Vacation {
  id: string;
  chef: Chef;
  startDate: Date;
  endDate: Date;
  type: VacationType;
}

export interface Holiday {
  date: Date;
  name: string;
}