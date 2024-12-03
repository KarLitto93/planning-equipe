export const CHEFS = ['Lionel', 'Eugène', 'Stephane', 'Philippe', 'Nassim'] as const;

export const POSTES = {
  MAT1: 'MAT1',
  MAT2: 'MAT2',
  AM1: 'AM1',
  AM2: 'AM2',
  REMPLACANT: 'REMPLACANT',
} as const;

export const COLORS = {
  MAT1: '#bbdefb',
  MAT2: '#90caf9',
  AM1: '#fff59d',
  AM2: '#fff176',
  REMPLACANT: '#c8e6c9',
  ALERT: '#ffcdd2',  // Rouge clair pour l'alerte
} as const;

export const CYCLE_WEEKS = 20;
export const CONSECUTIVE_WEEKS = 4;
export const REFERENCE_DATE = new Date('2024-10-14');

export const ROTATION_ORDER = [
  POSTES.MAT1,
  POSTES.MAT2,
  POSTES.AM1,
  POSTES.AM2,
  POSTES.REMPLACANT,
] as const;
