import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Grid,
  useTheme,
} from '@mui/material';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  subMonths,
  isSameDay,
  isWeekend,
  startOfWeek,
  endOfWeek,
  addDays,
} from 'date-fns';
import { fr } from 'date-fns/locale';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { AbsenceService } from '../../services/AbsenceService';
import type { AbsenceFilters } from '../../types';

interface Props {
  filters: AbsenceFilters;
}

export const AbsenceCalendar: React.FC<Props> = ({ filters }) => {
  const theme = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart, { locale: fr });
  const endDate = endOfWeek(monthEnd, { locale: fr });

  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const absences = AbsenceService.getAbsences(filters);

  const getAbsenceForDate = (date: Date) => {
    return absences.find(absence =>
      isSameDay(new Date(date), new Date(absence.startDate)) ||
      isSameDay(new Date(date), new Date(absence.endDate)) ||
      (date >= new Date(absence.startDate) && date <= new Date(absence.endDate))
    );
  };

  const getAbsenceColor = (type: string) => {
    switch (type) {
      case 'CONGE':
        return theme.palette.primary.main;
      case 'MALADIE':
        return theme.palette.error.main;
      case 'FORMATION':
        return theme.palette.success.main;
      default:
        return theme.palette.warning.main;
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <IconButton onClick={handlePreviousMonth}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant="h6">
          {format(currentDate, 'MMMM yyyy', { locale: fr })}
        </Typography>
        <IconButton onClick={handleNextMonth}>
          <ChevronRightIcon />
        </IconButton>
      </Box>

      <Grid container spacing={1}>
        {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day) => (
          <Grid item xs key={day}>
            <Paper
              sx={{
                p: 1,
                textAlign: 'center',
                bgcolor: theme.palette.grey[800],
              }}
            >
              <Typography variant="subtitle2">{day}</Typography>
            </Paper>
          </Grid>
        ))}

        {days.map((day, idx) => {
          const absence = getAbsenceForDate(day);
          const isCurrentMonth = day.getMonth() === currentDate.getMonth();

          return (
            <Grid item xs key={idx}>
              <Paper
                sx={{
                  p: 1,
                  height: '100px',
                  bgcolor: isCurrentMonth
                    ? absence
                      ? getAbsenceColor(absence.type)
                      : theme.palette.background.paper
                    : theme.palette.grey[900],
                  opacity: isCurrentMonth ? 1 : 0.5,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: isWeekend(day) ? theme.palette.error.main : 'inherit',
                  }}
                >
                  {format(day, 'd')}
                </Typography>
                {absence && (
                  <Typography variant="caption" noWrap>
                    {absence.chef}
                  </Typography>
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
