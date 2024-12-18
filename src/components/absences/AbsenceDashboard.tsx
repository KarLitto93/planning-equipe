import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Tab,
  Tabs,
  useTheme,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fr } from 'date-fns/locale';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AbsenceCalendar } from './AbsenceCalendar';
import { AbsenceList } from './AbsenceList';
import { AbsenceFilters } from './AbsenceFilters';
import { AbsenceStats } from './AbsenceStats';
import { AbsenceService } from '../../services/AbsenceService';
import { CHEFS } from '../../config/constants';
import type { Absence, AbsenceFilters as FilterType } from '../../types';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`absence-tabpanel-${index}`}
      aria-labelledby={`absence-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export const AbsenceDashboard: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [filters, setFilters] = useState<FilterType>({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedChef, setSelectedChef] = useState('');
  const [absenceStartDate, setAbsenceStartDate] = useState<Date | null>(null);
  const [absenceEndDate, setAbsenceEndDate] = useState<Date | null>(null);
  const [absenceType, setAbsenceType] = useState('CONGE');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleFilterChange = (newFilters: FilterType) => {
    setFilters(newFilters);
  };

  const handleAddAbsence = () => {
    setDialogOpen(true);
  };

  const handleAbsenceConfirm = () => {
    if (selectedChef && absenceStartDate && absenceEndDate && absenceType) {
      AbsenceService.addAbsence({
        chef: selectedChef,
        startDate: absenceStartDate,
        endDate: absenceEndDate,
        type: absenceType,
      });
      setDialogOpen(false);
      // Réinitialiser les valeurs
      setSelectedChef('');
      setAbsenceStartDate(null);
      setAbsenceEndDate(null);
      setAbsenceType('CONGE');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 3 
      }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          sx={{ mr: 2 }}
        >
          Retour au planning
        </Button>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddAbsence}
        >
          Nouvelle Absence
        </Button>
      </Box>

      <Typography variant="h4" sx={{ mb: 3 }}>
        Gestion des Absences
      </Typography>

      <Paper sx={{ mb: 3 }}>
        <AbsenceFilters onFilterChange={handleFilterChange} />
      </Paper>

      <Paper sx={{ width: '100%', mb: 3 }}>
        <AbsenceStats filters={filters} />
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} textColor="secondary" indicatorColor="secondary" aria-label="absence tabs">
          <Tab label="Calendrier" />
          <Tab label="Liste" />
        </Tabs>
      </Box>

      <Paper sx={{ width: '100%' }}>
        <TabPanel value={tabValue} index={0}>
          <AbsenceCalendar filters={filters} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <AbsenceList filters={filters} />
        </TabPanel>
      </Paper>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Ajouter une absence</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Chef</InputLabel>
              <Select
                value={selectedChef}
                onChange={(e) => setSelectedChef(e.target.value)}
              >
                {Object.values(CHEFS).map((chef) => (
                  <MenuItem key={chef} value={chef}>{chef}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Type d'absence</InputLabel>
              <Select
                value={absenceType}
                onChange={(e) => setAbsenceType(e.target.value)}
              >
                <MenuItem value="CONGE">Congé</MenuItem>
                <MenuItem value="MALADIE">Maladie</MenuItem>
                <MenuItem value="FORMATION">Formation</MenuItem>
                <MenuItem value="AUTRE">Autre</MenuItem>
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
              <DatePicker
                label="Date de début"
                value={absenceStartDate}
                onChange={setAbsenceStartDate}
              />
              <DatePicker
                label="Date de fin"
                value={absenceEndDate}
                onChange={setAbsenceEndDate}
                minDate={absenceStartDate || undefined}
              />
            </LocalizationProvider>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Annuler</Button>
          <Button onClick={handleAbsenceConfirm} variant="contained" color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
