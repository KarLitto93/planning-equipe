import React from 'react';
import { format, isWeekend } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Tooltip } from '@mui/material';
import { DaySchedule, WeekSchedule } from '../types/planning';
import { COLORS, POSTES } from '../config/constants';
import { isHoliday, getFrenchHolidays } from '../utils/holidays';

interface ScheduleGridProps {
  weekSchedule: WeekSchedule;
}

const getTooltipContent = (poste: string) => {
  const descriptions: { [key: string]: string } = {
    [POSTES.MAT1]: 'Matin Poste 1 - Travaille le samedi, récupération le lundi',
    [POSTES.MAT2]: 'Matin Poste 2',
    [POSTES.AM1]: 'Après-midi Poste 1',
    [POSTES.AM2]: 'Après-midi Poste 2',
    [POSTES.REMPLACANT]: 'Poste de remplacement - Remplace MAT1 le lundi',
  };
  return descriptions[poste] || poste;
};

export function ScheduleGrid({ weekSchedule }: ScheduleGridProps) {
  const { startDate, cycleNumber, weekInCycle, remplacant, schedule } = weekSchedule;
  const holidays = getFrenchHolidays(startDate.getFullYear());

  const renderCell = (date: Date, daySchedule: DaySchedule) => {
    const holiday = isHoliday(date, holidays);
    const isRecup = daySchedule.isRecuperation;
    const backgroundColor = COLORS[daySchedule.poste];
    
    return (
      <Tooltip 
        title={
          <>
            {holiday && <div className="font-bold">{holiday.name}</div>}
            <div>{daySchedule.chef}</div>
            <div>{getTooltipContent(daySchedule.poste)}</div>
            {isRecup && <div>En récupération</div>}
          </>
        }
        arrow
      >
        <div
          className={`p-3 text-center transition-colors ${
            isWeekend(date) ? 'bg-opacity-50' : ''
          } ${holiday ? 'border-red-500 border-2' : ''} ${
            isRecup ? 'italic' : ''
          }`}
          style={{ backgroundColor }}
        >
          {daySchedule.chef}
          {daySchedule.chef === remplacant && 
            <span className="ml-1 text-xs bg-green-100 px-1 rounded">R</span>
          }
        </div>
      </Tooltip>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="bg-gray-100 p-3 border-b text-center">
        <div className="text-lg font-bold">
          Cycle {cycleNumber} - Semaine {weekInCycle}
        </div>
        <div className="text-sm text-gray-600">
          Remplaçant de la semaine : {remplacant}
        </div>
      </div>

      <div className="grid grid-cols-8 border-b">
        <div className="p-3 font-semibold bg-gray-50">Poste</div>
        {Object.keys(schedule).map((dateStr) => {
          const date = new Date(dateStr);
          return (
            <div
              key={dateStr}
              className={`p-3 text-center font-semibold ${
                isWeekend(date) ? 'bg-gray-100' : 'bg-gray-50'
              }`}
            >
              <div>{format(date, 'EEEE', { locale: fr })}</div>
              <div className="text-sm text-gray-600">
                {format(date, 'd MMM', { locale: fr })}
              </div>
            </div>
          );
        })}
      </div>

      {Object.values(POSTES).map((poste) => (
        <div key={poste} className="grid grid-cols-8 border-b last:border-b-0">
          <Tooltip title={getTooltipContent(poste)} arrow>
            <div
              className="p-3 font-medium border-r cursor-help"
              style={{ backgroundColor: COLORS[poste] }}
            >
              {poste}
            </div>
          </Tooltip>
          {Object.entries(schedule).map(([dateStr, daySchedules]) => {
            const date = new Date(dateStr);
            const daySchedule = daySchedules.find(ds => ds.poste === poste);
            return (
              <div key={`${poste}-${dateStr}`}>
                {daySchedule && renderCell(date, daySchedule)}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}