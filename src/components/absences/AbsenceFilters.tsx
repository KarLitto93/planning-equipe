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
import type { AbsenceFilters as FilterType, AbsenceType } from '../../types';

interface Props {
  onFilterChange: (filters: FilterType) => void;
}

const absenceTypes: { value: AbsenceType; label: string }[] = [
  { value: 'CONGE', label: 'Congé' },
  { value: 'MALADIE', label: 'Maladie' },
  { value: 'FORMATION', label: 'Formation' },
  { value: 'AUTRE', label: 'Autre' },
];

export const AbsenceFilters: React.FC<Props> = ({ onFilterChange }) => {
  const [chef, setChef] = useState<string>('');
  const [type, setType] = useState<AbsenceType | ''>('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleChefChange = (event: SelectChangeEvent) => {
    setChef(event.target.value);
    applyFilters(event.target.value, type, startDate, endDate);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as AbsenceType);
    applyFilters(chef, event.target.value as AbsenceType, startDate, endDate);
  };

  const applyFilters = (
    chefValue: string,
    typeValue: string,
    startDateValue: Date | null,
    endDateValue: Date | null
  ) => {
    const filters: FilterType = {};
    if (chefValue) filters.chef = chefValue;
    if (typeValue) filters.type = typeValue as AbsenceType;
    if (startDateValue) filters.startDate = startDateValue;
    if (endDateValue) filters.endDate = endDateValue;
    onFilterChange(filters);
  };

  const handleClear = () => {
    setChef('');
    setType('');
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
          onChange={(date) => {
            setStartDate(date);
            applyFilters(chef, type, date, endDate);
          }}
          sx={{ width: 200 }}
        />
        <DatePicker
          label="Date de fin"
          value={endDate}
          onChange={(date) => {
            setEndDate(date);
            applyFilters(chef, type, startDate, date);
          }}
          minDate={startDate || undefined}
          sx={{ width: 200 }}
        />
      </LocalizationProvider>

      <Button
        variant="outlined"
        startIcon={<FilterListIcon />}
        onClick={() => applyFilters(chef, type, startDate, endDate)}
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
