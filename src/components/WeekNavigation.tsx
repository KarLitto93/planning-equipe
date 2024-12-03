import React from 'react';
import { format, addWeeks, subWeeks } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import '../styles/neon.css';

interface WeekNavigationProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

export const WeekNavigation: React.FC<WeekNavigationProps> = ({
  currentDate,
  onDateChange,
}) => {
  const handlePreviousWeek = () => {
    onDateChange(subWeeks(currentDate, 1));
  };

  const handleNextWeek = () => {
    onDateChange(addWeeks(currentDate, 1));
  };

  const weekStart = format(currentDate, 'dd/MM/yyyy', { locale: fr });
  const weekEnd = format(addWeeks(currentDate, 1), 'dd/MM/yyyy', { locale: fr });

  return (
    <div className="flex items-center justify-between p-2">
      <button
        onClick={handlePreviousWeek}
        className="neon-button px-4 py-2 rounded-md text-sm"
      >
        ← Semaine précédente
      </button>
      
      <div className="flex items-center space-x-4">
        <div className="neon-text text-lg font-medium">
          {weekStart} - {weekEnd}
        </div>
        
        <div className="neon-card p-1 rounded-md">
          <DatePicker
            value={dayjs(currentDate)}
            onChange={(newDate) => newDate && onDateChange(newDate.toDate())}
            format="DD/MM/YYYY"
            className="date-picker-field"
            slotProps={{
              textField: {
                size: "small",
                className: "date-picker-field",
                inputProps: {
                  'aria-label': 'Sélectionner une date'
                }
              },
              openPickerButton: {
                className: "neon-button p-1 rounded-md",
              }
            }}
          />
        </div>
      </div>
      
      <button
        onClick={handleNextWeek}
        className="neon-button px-4 py-2 rounded-md text-sm"
      >
        Semaine suivante →
      </button>
    </div>
  );
};
