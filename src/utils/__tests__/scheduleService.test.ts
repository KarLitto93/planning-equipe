import { ScheduleService } from '../scheduleService';
import { CHEFS, POSTES, REFERENCE_DATE } from '../../config/constants';
import { addWeeks, startOfWeek } from 'date-fns';
import { DaySchedule } from '../../types/planning';

describe('ScheduleService', () => {
  describe('getWeekSchedule', () => {
    it('should return correct cycle and week numbers', () => {
      const schedule = ScheduleService.getWeekSchedule(REFERENCE_DATE);
      expect(schedule.cycleNumber).toBe(1);
      expect(schedule.weekInCycle).toBe(1);
    });

    it('should calculate correct cycle after 20 weeks', () => {
      const date = addWeeks(REFERENCE_DATE, 20);
      const schedule = ScheduleService.getWeekSchedule(date);
      expect(schedule.cycleNumber).toBe(2);
      expect(schedule.weekInCycle).toBe(1);
    });

    it('should assign one remplaçant per week', () => {
      const schedule = ScheduleService.getWeekSchedule(REFERENCE_DATE);
      const remplacant = schedule.remplacant;
      expect(CHEFS).toContain(remplacant);

      // Vérifier que seul le remplaçant a le poste REMPLACANT
      Object.values(schedule.schedule).forEach(daySchedules => {
        const remplacantCount = daySchedules.filter(
          ds => ds.poste === POSTES.REMPLACANT
        ).length;
        expect(remplacantCount).toBeLessThanOrEqual(1);
      });
    });

    it('should handle MAT1 special rules', () => {
      const schedule = ScheduleService.getWeekSchedule(REFERENCE_DATE);
      const monday = startOfWeek(REFERENCE_DATE, { weekStartsOn: 1 });
      const mondaySchedules = schedule.schedule[monday.toISOString()];

      // Vérifier la récupération du MAT1 le lundi
      const mat1Chef = mondaySchedules.find(
        ds => ds.poste === POSTES.MAT1 && ds.isRecup
      );
      expect(mat1Chef).toBeTruthy();

      // Vérifier que le remplaçant prend le poste MAT1 le lundi
      const remplacantMonday = mondaySchedules.find(
        ds => ds.chef === schedule.remplacant
      );
      expect(remplacantMonday?.poste).toBe(POSTES.MAT1);
    });

    it('should respect rotation order', () => {
      const firstWeek = ScheduleService.getWeekSchedule(REFERENCE_DATE);
      const fifthWeek = ScheduleService.getWeekSchedule(addWeeks(REFERENCE_DATE, 4));

      // Vérifier que les chefs changent de poste après 4 semaines
      const firstWeekAssignments = Object.values(firstWeek.schedule)[0];
      const fifthWeekAssignments = Object.values(fifthWeek.schedule)[0];

      firstWeekAssignments.forEach(assignment => {
        const sameChefFifthWeek = fifthWeekAssignments.find(
          a => a.chef === assignment.chef
        );
        if (assignment.poste !== POSTES.REMPLACANT) {
          expect(sameChefFifthWeek?.poste).not.toBe(assignment.poste);
        }
      });
    });
  });
});
