import React, { useState } from 'react';
import { format, addDays, addWeeks, subWeeks } from 'date-fns';
import { fr } from 'date-fns/locale';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Box, Typography, Paper, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import { ScheduleService } from '../services/ScheduleService';
import { PDFService } from '../services/PDFService';
import type { WeekSchedule, DaySchedule } from '../types';
import { POSTES, CHEFS } from '../config/constants';
import '../styles/Schedule.css';

const ScheduleCell: React.FC<{ schedule: DaySchedule }> = ({ schedule }) => {
  const getScheduleClass = (schedule: DaySchedule) => {
    if (schedule.isRecup) return 'schedule-recuperation';
    if (schedule.isAbsent) return 'schedule-conge';
    if (schedule.isReplacing) return 'schedule-remplacant';

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

  const getLabel = (schedule: DaySchedule) => {
    if (schedule.isRecup) return 'Récup';
    if (schedule.isAbsent) return schedule.vacationType || 'Congé';
    if (schedule.isReplacing) return `Remplace ${schedule.replacedChef}`;
    return schedule.poste;
  };

  const scheduleClass = getScheduleClass(schedule);
  const label = getLabel(schedule);

  return (
    <Paper 
      elevation={3}
      className={`schedule-cell ${scheduleClass}`}
      sx={{ 
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
        {schedule.chef}
      </Typography>
      <Typography variant="body2">
        {label}
      </Typography>
    </Paper>
  );
};

const DaySchedule: React.FC<{ date: Date; schedules: DaySchedule[] }> = ({ date, schedules }) => {
  const positionOrder = [POSTES.MAT1, POSTES.MAT2, POSTES.AM1, POSTES.AM2, POSTES.REMPLACANT];

  const sortedSchedules = [...schedules].sort((a, b) => {
    const posA = positionOrder.indexOf(a.poste);
    const posB = positionOrder.indexOf(b.poste);
    return posA - posB;
  });

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      p: 2,
      bgcolor: 'background.paper',
      borderRadius: 1
    }}>
      {sortedSchedules.map((schedule, index) => (
        <ScheduleCell key={index} schedule={schedule} />
      ))}
    </Box>
  );
};

const Legend: React.FC = () => {
  const legendItems = [
    { label: 'MAT1', class: 'schedule-mat1' },
    { label: 'MAT2', class: 'schedule-mat2' },
    { label: 'AM1', class: 'schedule-am1' },
    { label: 'AM2', class: 'schedule-am2' },
    { label: 'Remplaçant', class: 'schedule-remplacant' },
    { label: 'Récupération', class: 'schedule-recuperation' },
    { label: 'Congé', class: 'schedule-conge' }
  ];

  return (
    <Box sx={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 2,
      p: 2
    }}>
      {legendItems.map((item) => (
        <Paper
          key={item.label}
          className={`legend-item ${item.class}`}
          sx={{
            p: 1,
            textAlign: 'center',
            borderRadius: 1
          }}
        >
          {item.label}
        </Paper>
      ))}
    </Box>
  );
};

const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [exportStartDate, setExportStartDate] = useState<Date | null>(null);
  const [exportEndDate, setExportEndDate] = useState<Date | null>(null);
  const [selectedChefForExport, setSelectedChefForExport] = useState<string>('');

  const weekSchedule = ScheduleService.getWeekSchedule(selectedDate);

  const handlePreviousWeek = () => {
    setSelectedDate(subWeeks(selectedDate, 1));
  };

  const handleNextWeek = () => {
    setSelectedDate(addWeeks(selectedDate, 1));
  };

  const handleExportClick = () => {
    setExportStartDate(selectedDate);
    setExportEndDate(addWeeks(selectedDate, 1));
    setSelectedChefForExport('');
    setExportDialogOpen(true);
  };

  const handleExportConfirm = () => {
    if (exportStartDate && exportEndDate) {
      PDFService.exportScheduleToPDF(weekSchedule, exportStartDate, exportEndDate, selectedChefForExport);
      setExportDialogOpen(false);
    }
  };

  const handleAbsenceClick = () => {
    navigate('/absences');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 3,
        gap: 2 
      }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            onClick={handlePreviousWeek}
            startIcon={<NavigateBeforeIcon />}
          >
            Semaine précédente
          </Button>
          <Button
            variant="contained"
            onClick={handleNextWeek}
            endIcon={<NavigateNextIcon />}
          >
            Semaine suivante
          </Button>
        </Box>
        
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
          <DatePicker
            label="Sélectionner une date"
            value={selectedDate}
            onChange={(newValue) => newValue && setSelectedDate(newValue)}
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 1,
              '& .MuiInputBase-root': {
                color: 'white',
              },
              '& .MuiInputLabel-root': {
                color: 'white',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          />
        </LocalizationProvider>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleAbsenceClick}
            startIcon={<EventBusyIcon />}
            sx={{ 
              bgcolor: 'error.main',
              '&:hover': {
                bgcolor: 'error.dark',
              }
            }}
          >
            Absences
          </Button>
          <Button
            variant="contained"
            onClick={handleExportClick}
            startIcon={<PictureAsPdfIcon />}
            sx={{ 
              bgcolor: 'secondary.main',
              '&:hover': {
                bgcolor: 'secondary.dark',
              }
            }}
          >
            Exporter en PDF
          </Button>
        </Box>
      </Box>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: 2,
        mb: 4
      }}>
        {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day, index) => {
          const date = addDays(weekSchedule.startDate, index);
          const dateStr = format(date, 'yyyy-MM-dd');
          const daySchedules = weekSchedule.schedule[dateStr] || [];
          
          return (
            <Box 
              key={day}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>
                {day}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: 'white' }}>
                {format(date, 'dd/MM/yyyy')}
              </Typography>
              <DaySchedule date={date} schedules={daySchedules} />
            </Box>
          );
        })}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, color: 'white', textAlign: 'center' }}>
          Légende
        </Typography>
        <Legend />
      </Box>

      <Dialog open={exportDialogOpen} onClose={() => setExportDialogOpen(false)}>
        <DialogTitle>Exporter le planning</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Chef</InputLabel>
              <Select
                value={selectedChefForExport}
                onChange={(e) => setSelectedChefForExport(e.target.value)}
              >
                <MenuItem value="">Tous les chefs</MenuItem>
                {Object.values(CHEFS).map((chef) => (
                  <MenuItem key={chef} value={chef}>{chef}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
              <DatePicker
                label="Date de début"
                value={exportStartDate}
                onChange={setExportStartDate}
              />
              <DatePicker
                label="Date de fin"
                value={exportEndDate}
                onChange={setExportEndDate}
                minDate={exportStartDate || undefined}
              />
            </LocalizationProvider>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setExportDialogOpen(false)}>Annuler</Button>
          <Button onClick={handleExportConfirm} variant="contained" color="primary">
            Exporter
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Schedule;
