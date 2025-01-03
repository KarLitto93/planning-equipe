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
  SelectChangeEvent,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AbsenceCalendar } from './AbsenceCalendar';
import { AbsenceList } from './AbsenceList';
import { AbsenceFilters } from './AbsenceFilters';
import { AbsenceStats } from './AbsenceStats';
import { AbsenceService } from '../../services/AbsenceService';
import { CHEFS } from '../../config/constants';
import type { Absence, AbsenceFilters as AbsenceFiltersType } from '../../types';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const AbsenceDashboard: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [absences, setAbsences] = useState<Absence[]>(AbsenceService.getAbsences());
  const [filters, setFilters] = useState<AbsenceFiltersType>({
    startDate: undefined,
    endDate: undefined,
    chef: undefined,
    type: undefined
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newAbsence, setNewAbsence] = useState<Partial<Absence>>({
    startDate: undefined,
    endDate: undefined,
    type: undefined,
    chef: undefined
  });

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleFilterChange = (newFilters: Partial<AbsenceFiltersType>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setAbsences(AbsenceService.getAbsences({ ...filters, ...newFilters }));
  };

  const handleAddAbsence = async () => {
    if (newAbsence.chef && newAbsence.startDate && newAbsence.endDate && newAbsence.type) {
      const createdAbsence = await AbsenceService.createAbsence(newAbsence as Omit<Absence, 'id' | 'createdAt'>);
      if (createdAbsence) {
        setAbsences(AbsenceService.getAbsences(filters));
        setDialogOpen(false);
        setNewAbsence({
          startDate: undefined,
          endDate: undefined,
          type: undefined,
          chef: undefined
        });
      }
    }
  };

  const handleDeleteAbsence = (id: string) => {
    AbsenceService.deleteAbsence(id);
    setAbsences(AbsenceService.getAbsences(filters));
  };

  const handleUpdateAbsence = (id: string, updates: Partial<Absence>) => {
    AbsenceService.updateAbsence(id, updates);
    setAbsences(AbsenceService.getAbsences(filters));
  };

  const handleDateChange = (date: Date | null, field: 'startDate' | 'endDate') => {
    if (date) {
      setNewAbsence((prev) => ({ ...prev, [field]: date }));
    }
  };

  const handleTypeChange = (e: SelectChangeEvent<Absence['type']>) => {
    const value = e.target.value as Absence['type'];
    setNewAbsence((prev) => ({ ...prev, type: value }));
  };

  const filteredAbsences = absences.filter((absence) => {
    if (filters.chef && absence.chef !== filters.chef) return false;
    if (filters.type && absence.type !== filters.type) return false;
    if (filters.startDate && absence.startDate < filters.startDate) return false;
    if (filters.endDate && absence.endDate > filters.endDate) return false;
    return true;
  });

  return (
    <Box sx={{ width: '100%', p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
        >
          Retour au planning
        </Button>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setDialogOpen(true)}
        >
          Nouvelle absence
        </Button>
      </Box>

      <Paper sx={{ width: '100%', mb: 3 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Calendrier" />
          <Tab label="Liste" />
          <Tab label="Statistiques" />
        </Tabs>
      </Paper>

      <AbsenceFilters filters={filters} onFilterChange={handleFilterChange} />

      <TabPanel value={tabValue} index={0}>
        <AbsenceCalendar
          absences={filteredAbsences}
          onDeleteAbsence={handleDeleteAbsence}
          onUpdateAbsence={handleUpdateAbsence}
          filters={filters}
        />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <AbsenceList
          absences={filteredAbsences}
          onDeleteAbsence={handleDeleteAbsence}
          onUpdateAbsence={handleUpdateAbsence}
          filters={filters}
        />
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <AbsenceStats absences={filteredAbsences} />
      </TabPanel>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Nouvelle absence</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Chef</InputLabel>
              <Select
                value={newAbsence.chef}
                onChange={(e) =>
                  setNewAbsence((prev) => ({ 
                    ...prev, 
                    chef: e.target.value as typeof CHEFS[number] 
                  }))
                }
              >
                {Object.values(CHEFS).map((chef) => (
                  <MenuItem key={chef} value={chef}>
                    {chef}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <DatePicker
              label="Date de début"
              value={newAbsence.startDate}
              onChange={(date) => handleDateChange(date, 'startDate')}
            />

            <DatePicker
              label="Date de fin"
              value={newAbsence.endDate}
              onChange={(date) => handleDateChange(date, 'endDate')}
              minDate={newAbsence.startDate || undefined}
            />

            <FormControl fullWidth>
              <InputLabel>Type d'absence</InputLabel>
              <Select
                value={newAbsence.type}
                onChange={handleTypeChange}
              >
                <MenuItem value="CP">Congés payés</MenuItem>
                <MenuItem value="RTT">RTT</MenuItem>
                <MenuItem value="MALADIE">Maladie</MenuItem>
                <MenuItem value="FORMATION">Formation</MenuItem>
                <MenuItem value="AUTRE">Autre</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Annuler</Button>
          <Button onClick={handleAddAbsence} variant="contained" color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
