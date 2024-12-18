import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fr } from 'date-fns/locale';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import { CHEFS } from '../../config/constants';
import type { AbsenceFilters as AbsenceFiltersType, AbsenceType, Chef } from '../../types';

interface Props {
  filters: AbsenceFiltersType;
  onFilterChange: (newFilters: Partial<AbsenceFiltersType>) => void;
}

const absenceTypes: { value: AbsenceType; label: string }[] = [
  { value: 'conge' as AbsenceType, label: 'Congé' },
  { value: 'maladie' as AbsenceType, label: 'Maladie' },
  { value: 'formation' as AbsenceType, label: 'Formation' },
  { value: 'autre' as AbsenceType, label: 'Autre' },
];

export const AbsenceFilters: React.FC<Props> = ({ filters, onFilterChange }) => {
  const [chef, setChef] = useState<string | undefined>(filters.chef);
  const [type, setType] = useState<AbsenceType | undefined>(filters.type);
  const [startDate, setStartDate] = useState<Date | null>(filters.startDate || null);
  const [endDate, setEndDate] = useState<Date | null>(filters.endDate || null);

  const handleChefChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    const newChef = value === '' ? undefined : value;
    setChef(newChef);
    onFilterChange({ chef: newChef });
  };

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as AbsenceType | undefined;
    setType(value);
    onFilterChange({ ...filters, type: value });
  };

  const handleDateChange = (date: Date | null, field: 'startDate' | 'endDate') => {
    if (field === 'startDate') {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
    onFilterChange({ ...filters, [field]: date || undefined });
  };

  const handleClear = () => {
    setChef(undefined);
    setType(undefined);
    setStartDate(null);
    setEndDate(null);
    onFilterChange({});
  };

  return (
    <Box sx={{ p: 2, display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Chef</InputLabel>
        <Select
          value={chef}
          label="Chef"
          onChange={handleChefChange}
        >
          <MenuItem value="">Tous</MenuItem>
          {Object.values(CHEFS).map((chef) => (
            <MenuItem key={chef} value={chef}>
              {chef}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Type d'absence</InputLabel>
        <Select
          value={type}
          label="Type d'absence"
          onChange={handleTypeChange}
        >
          <MenuItem value="">Tous</MenuItem>
          {absenceTypes.map((type) => (
            <MenuItem key={type.value} value={type.value}>
              {type.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
        <DatePicker
          label="Date de début"
          value={startDate}
          onChange={(date) => handleDateChange(date, 'startDate')}
          sx={{ width: 200 }}
        />
        <DatePicker
          label="Date de fin"
          value={endDate}
          onChange={(date) => handleDateChange(date, 'endDate')}
          minDate={startDate || undefined}
          sx={{ width: 200 }}
        />
      </LocalizationProvider>

      <Button
        variant="outlined"
        startIcon={<FilterListIcon />}
        onClick={() => onFilterChange({ ...filters })}
      >
        Filtrer
      </Button>

      <Button
        variant="outlined"
        color="error"
        startIcon={<ClearIcon />}
        onClick={handleClear}
      >
        Réinitialiser
      </Button>
    </Box>
  );
};
