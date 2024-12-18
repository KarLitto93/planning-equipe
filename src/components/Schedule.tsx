import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { 
  Box, 
  Button, 
  Typography, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import { PDFService } from '../services/PDFService';
import type { WeekSchedule, DaySchedule } from '../types';
import { POSTES, CHEFS } from '../config/constants';

interface ScheduleProps {
  weekSchedule: WeekSchedule;
}

const ScheduleCell: React.FC<{ schedule: DaySchedule }> = ({ schedule }) => {
  const getBorderColor = () => {
    if (schedule.isRecup) return '#FF9800';
    if (schedule.isAbsent) return '#FF69B4';
    if (schedule.isReplacing) return '#4CAF50';

    switch (schedule.poste) {
      case POSTES.MAT1: return '#1976D2';
      case POSTES.MAT2: return '#64B5F6';
      case POSTES.AM1: return '#FFC107';
      case POSTES.AM2: return '#FFE082';
      case POSTES.REMPLACANT: return '#66BB6A';
      default: return '#1976D2';
    }
  };

  const getBackgroundColor = () => 
    schedule.isAbsent ? 'rgba(255, 105, 180, 0.1)' : 'rgba(255, 255, 255, 0.1)';

  const getLabel = () => {
    if (schedule.isAbsent) return 'Absent';
    if (schedule.isRecup) return 'Récup';
    if (schedule.isReplacing) return `Remplaçant (${schedule.poste})`;
    return schedule.poste;
  };

  const borderColor = getBorderColor();
  const boxShadow = `
    0 0 2px ${borderColor}60,
    0 0 4px ${borderColor}40,
    0 0 6px ${borderColor}20,
    inset 0 0 0 2px ${borderColor}
  `;

  const hoverBoxShadow = `
    0 0 4px ${borderColor}80,
    0 0 8px ${borderColor}60,
    0 0 12px ${borderColor}40,
    inset 0 0 0 2px ${borderColor}
  `;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 1,
        m: 1,
        backgroundColor: getBackgroundColor(),
        borderRadius: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80px',
        boxShadow,
        transition: 'all 0.2s ease-in-out',
        position: 'relative',
        '&:hover': {
          boxShadow: hoverBoxShadow
        }
      }}
    >
      <Typography 
        variant="subtitle1"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 0.5,
          color: borderColor,
          textShadow: `0 0 2px ${borderColor}40`
        }}
      >
        {schedule.chef}
      </Typography>
      <Typography 
        variant="body2"
        sx={{
          textAlign: 'center',
          color: borderColor,
          textShadow: `0 0 2px ${borderColor}40`
        }}
      >
        {getLabel()}
      </Typography>
    </Paper>
  );
};

const Schedule: React.FC<ScheduleProps> = ({ weekSchedule }) => {
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [selectedChef, setSelectedChef] = useState('');
  const [exportDate, setExportDate] = useState<Date | null>(new Date());
  const navigate = useNavigate();

  const handleAbsenceClick = () => {
    navigate('/absences');
  };

  const handleExportClick = () => {
    setExportDialogOpen(true);
  };

  const handleExport = async () => {
    if (!selectedChef || !exportDate) return;

    try {
      await PDFService.exportSchedule(selectedChef, exportDate);
      setExportDialogOpen(false);
      setSelectedChef('');
      setExportDate(null);
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  const sortSchedules = (schedules: DaySchedule[]) => {
    const positionMap: Record<string, number> = {
      [POSTES.MAT1]: 1,
      'RECUP': 1,
      [POSTES.MAT2]: 2,
      [POSTES.AM1]: 3,
      [POSTES.AM2]: 4,
      [POSTES.REMPLACANT]: 5,
    };

    return [...schedules].sort((a, b) => {
      const aPosition = a.isRecup ? positionMap['RECUP'] : (positionMap[a.poste] || 999);
      const bPosition = b.isRecup ? positionMap['RECUP'] : (positionMap[b.poste] || 999);

      if (aPosition !== bPosition) {
        return aPosition - bPosition;
      }

      if (aPosition === positionMap['RECUP']) {
        if (a.isRecup && !b.isRecup) return 1;
        if (!a.isRecup && b.isRecup) return -1;
      }

      if (a.isAbsent && !b.isAbsent) return 1;
      if (!a.isAbsent && b.isAbsent) return -1;

      return 0;
    });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button 
            variant="contained" 
            onClick={handleAbsenceClick} 
            color="error" 
            startIcon={<EventBusyIcon />}
          >
            Gérer les absences
          </Button>
          <Button 
            variant="contained" 
            onClick={handleExportClick} 
            startIcon={<PictureAsPdfIcon />}
          >
            Exporter en PDF
          </Button>
        </Box>
      </Box>

      <Box 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 2,
          '& > *': {
            minWidth: 0
          }
        }}
      >
        {Object.entries(weekSchedule.schedule).map(([day, daySchedules]) => {
          const date = addDays(weekSchedule.startDate, parseInt(day));
          const sortedSchedules = sortSchedules(daySchedules);
          
          return (
            <Box key={day} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                {format(date, 'EEEE', { locale: fr })}
              </Typography>
              <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>
                {format(date, 'dd/MM/yyyy')}
              </Typography>
              <Paper 
                elevation={0}
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 1,
                  p: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1
                }}
              >
                {sortedSchedules.map((schedule, idx) => (
                  <ScheduleCell key={idx} schedule={schedule} />
                ))}
              </Paper>
            </Box>
          );
        })}
      </Box>

      <Dialog 
        open={exportDialogOpen} 
        onClose={() => setExportDialogOpen(false)}
      >
        <DialogTitle>Exporter le planning</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 1 }}>
            <FormControl fullWidth>
              <InputLabel>Chef</InputLabel>
              <Select
                value={selectedChef}
                onChange={(e) => setSelectedChef(e.target.value)}
                label="Chef"
              >
                {CHEFS.map((chef) => (
                  <MenuItem key={chef} value={chef}>
                    {chef}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <DatePicker
              label="Date"
              value={exportDate}
              onChange={(newValue) => setExportDate(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setExportDialogOpen(false)}>Annuler</Button>
          <Button onClick={handleExport} variant="contained">
            Exporter
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Schedule;
