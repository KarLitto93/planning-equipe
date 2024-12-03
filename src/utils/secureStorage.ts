import { Vacation } from '../types';

// Clés de stockage
const STORAGE_KEYS = {
  EUGENE_WORKED_SATURDAY: 'eugeneWorkedSaturday',
  VACATIONS: 'vacations',
} as const;

// Fonction pour encoder les données avant le stockage
const encodeData = (data: any): string => {
  try {
    // Convertit les données en chaîne JSON et encode en base64
    return btoa(JSON.stringify(data));
  } catch (error) {
    console.error('Erreur lors de l\'encodage des données:', error);
    return '';
  }
};

// Fonction pour décoder les données stockées
const decodeData = <T>(encodedData: string | null): T | null => {
  if (!encodedData) return null;
  
  try {
    // Décode le base64 et parse le JSON
    const jsonString = atob(encodedData);
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Erreur lors du décodage des données:', error);
    return null;
  }
};

// Validation des données
const isValidDate = (date: any): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
};

const isValidVacation = (vacation: any): boolean => {
  return (
    vacation &&
    typeof vacation.chef === 'string' &&
    isValidDate(new Date(vacation.startDate)) &&
    isValidDate(new Date(vacation.endDate)) &&
    typeof vacation.type === 'string'
  );
};

export const secureStorage = {
  // Méthodes génériques
  setItem(key: string, value: any) {
    try {
      const encodedValue = encodeData(value);
      localStorage.setItem(key, encodedValue);
    } catch (error) {
      console.error('Erreur lors du stockage des données:', error);
    }
  },

  getItem(key: string): any | null {
    try {
      const encodedValue = localStorage.getItem(key);
      return decodeData(encodedValue);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      return null;
    }
  },

  removeItem(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Erreur lors de la suppression des données:', error);
    }
  },

  // Gestion de la date du samedi travaillé par Eugène
  setEugeneWorkedSaturday: (date: Date) => {
    if (!isValidDate(date)) {
      console.error('Date invalide');
      return;
    }
    secureStorage.setItem(
      STORAGE_KEYS.EUGENE_WORKED_SATURDAY,
      date.toISOString()
    );
  },

  getEugeneWorkedSaturday: (): Date | null => {
    const dateStr = secureStorage.getItem(STORAGE_KEYS.EUGENE_WORKED_SATURDAY);
    if (!dateStr) return null;
    
    const date = new Date(dateStr);
    return isValidDate(date) ? date : null;
  },

  removeEugeneWorkedSaturday: () => {
    secureStorage.removeItem(STORAGE_KEYS.EUGENE_WORKED_SATURDAY);
  },

  // Gestion des vacances
  setVacations: (vacations: Vacation[]) => {
    // Validation des données
    if (!Array.isArray(vacations) || !vacations.every(isValidVacation)) {
      console.error('Données de vacances invalides');
      return;
    }

    // Nettoyage des données sensibles potentielles
    const sanitizedVacations = vacations.map(v => ({
      chef: v.chef,
      startDate: v.startDate,
      endDate: v.endDate,
      type: v.type
    }));

    secureStorage.setItem(STORAGE_KEYS.VACATIONS, sanitizedVacations);
  },

  getVacations: (): Vacation[] => {
    const vacations = secureStorage.getItem(STORAGE_KEYS.VACATIONS);
    return Array.isArray(vacations) && vacations.every(isValidVacation)
      ? vacations
      : [];
  },

  // Fonction utilitaire pour effacer toutes les données
  clearAll: () => {
    Object.values(STORAGE_KEYS).forEach(key => {
      secureStorage.removeItem(key);
    });
  }
};
