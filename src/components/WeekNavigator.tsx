import React from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { format, addWeeks, startOfWeek, endOfWeek } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Tooltip, IconButton } from '@mui/material';
import { CYCLE_WEEKS } from '../config/constants';

interface WeekNavigatorProps {
  currentDate: Date;
  cycle: number;
  week: number;
  onPreviousWeek: () => void;
  onNextWeek: () => void;
  onTodayClick: () => void;
}

export function WeekNavigator({
  currentDate,
  cycle,
  week,
  onPreviousWeek,
  onNextWeek,
  onTodayClick,
}: WeekNavigatorProps) {
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
  const nextWeekDate = addWeeks(currentDate, 1);
  const prevWeekDate = addWeeks(currentDate, -1);

  return (
    <div className="flex items-center justify-between mb-4 bg-white p-4 rounded-lg shadow">
      <div className="flex items-center gap-2">
        <Tooltip title={format(prevWeekDate, "'Semaine du' dd MMMM yyyy", { locale: fr })} arrow>
          <IconButton onClick={onPreviousWeek} className="hover:bg-gray-100">
            <ChevronLeft className="w-6 h-6" />
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Aller à aujourd'hui" arrow>
          <IconButton onClick={onTodayClick} className="hover:bg-gray-100">
            <Calendar className="w-5 h-5" />
          </IconButton>
        </Tooltip>
        
        <Tooltip title={format(nextWeekDate, "'Semaine du' dd MMMM yyyy", { locale: fr })} arrow>
          <IconButton onClick={onNextWeek} className="hover:bg-gray-100">
            <ChevronRight className="w-6 h-6" />
          </IconButton>
        </Tooltip>
      </div>
      
      <div className="text-center flex-grow">
        <h2 className="text-xl font-semibold">
          {format(weekStart, 'd', { locale: fr })} - {format(weekEnd, 'd MMMM yyyy', { locale: fr })}
        </h2>
        <div className="text-gray-600 flex items-center justify-center gap-2">
          <span className="bg-blue-100 px-2 py-1 rounded">
            Cycle {cycle}
          </span>
          <span className="bg-green-100 px-2 py-1 rounded">
            Semaine {week}/{CYCLE_WEEKS}
          </span>
        </div>
      </div>

      <div className="w-[88px]" /> {/* Spacer pour centrer le texte */}
    </div>
  );
}