import React from 'react';
import { format, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import type { WeekSchedule, DaySchedule } from '../types';
import { POSTES } from '../config/constants';
import '../styles/neon.css';

interface ScheduleProps {
  weekSchedule: WeekSchedule;
}

export const Schedule: React.FC<ScheduleProps> = ({ weekSchedule }) => {
  const getScheduleClass = (schedule: DaySchedule) => {
    if (schedule.isAbsent) return 'schedule-conge';
    if (schedule.isRecuperation) return 'schedule-recuperation';
    
    switch (schedule.poste) {
      case POSTES.MAT1:
        return 'schedule-mat1';
      case POSTES.MAT2:
        return 'schedule-mat2';
      case POSTES.AM1:
        return 'schedule-am1';
      case POSTES.AM2:
        return 'schedule-am2';
      case POSTES.REMPLACANT:
        return 'schedule-remplacant';
      default:
        return '';
    }
  };

  const renderDayCell = (daySchedule: DaySchedule) => {
    const scheduleClass = getScheduleClass(daySchedule);
    let label = daySchedule.chef;

    if (daySchedule.isRecuperation) {
      label += ' - Récupération';
    } else if (daySchedule.isReplacing) {
      label += ` - ${daySchedule.poste}`;
    } else if (!daySchedule.isAbsent) {
      label += ` - ${daySchedule.poste}`;
    }

    return (
      <div className={`schedule-cell ${scheduleClass} neon-text`}>
        {label}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="mb-4">
        <h2 className="neon-text text-xl font-bold mb-2">
          Cycle {weekSchedule.cycleNumber} - Semaine {weekSchedule.weekInCycle}
        </h2>
        <div className="neon-text text-sm opacity-80">
          Du {format(weekSchedule.startDate, 'dd/MM/yyyy')} au{' '}
          {format(addDays(weekSchedule.startDate, 6), 'dd/MM/yyyy')}
        </div>
      </div>

      <div className="space-y-4">
        {Object.entries(weekSchedule.schedule).map(([dateStr, daySchedules]) => {
          const date = new Date(dateStr);
          const positionOrder = [POSTES.MAT1, POSTES.REMPLACANT, POSTES.MAT2, POSTES.AM1, POSTES.AM2];
          
          const sortedSchedules = [...daySchedules].sort((a, b) => {
            const posA = a.poste;
            const posB = b.poste;
            return positionOrder.indexOf(posA) - positionOrder.indexOf(posB);
          });

          return (
            <div key={dateStr} className="neon-card p-4 rounded-lg">
              <div className="neon-text font-medium mb-3">
                {format(date, 'EEEE dd/MM', { locale: fr })}
              </div>
              <div className="schedule-grid">
                {sortedSchedules.map((schedule, index) => (
                  <div key={index} className="schedule-day">
                    {renderDayCell(schedule)}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="neon-card p-4 rounded-lg">
        <div className="neon-text font-medium mb-3">Légende</div>
        <div className="schedule-grid">
          <div className="schedule-cell schedule-mat1 neon-text">MAT1</div>
          <div className="schedule-cell schedule-mat2 neon-text">MAT2</div>
          <div className="schedule-cell schedule-am1 neon-text">AM1</div>
          <div className="schedule-cell schedule-am2 neon-text">AM2</div>
          <div className="schedule-cell schedule-remplacant neon-text">Remplaçant</div>
        </div>
        <div className="schedule-grid mt-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <div className="schedule-cell schedule-conge neon-text">En congé</div>
          <div className="schedule-cell schedule-recuperation neon-text">Récupération</div>
        </div>
      </div>
    </div>
  );
};
