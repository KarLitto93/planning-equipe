import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import type { Absence, AbsenceFilters } from '../../types';

interface Props {
  filters: AbsenceFilters;
}

export const AbsenceList: React.FC<Props> = ({ filters }) => {
  // TODO: Récupérer les absences filtrées depuis le service
  const absences: Absence[] = [];

  const handleEdit = (absence: Absence) => {
    // TODO: Implémenter la modification
    console.log('Edit absence:', absence);
  };

  const handleDelete = (absence: Absence) => {
    // TODO: Implémenter la suppression
    console.log('Delete absence:', absence);
  };

  if (absences.length === 0) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          Aucune absence trouvée
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="absence table">
        <TableHead>
          <TableRow>
            <TableCell>Chef</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Date de début</TableCell>
            <TableCell>Date de fin</TableCell>
            <TableCell>Commentaire</TableCell>
            <TableCell>Date de création</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {absences.map((absence) => (
            <TableRow
              key={absence.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {absence.chef}
              </TableCell>
              <TableCell>{absence.type}</TableCell>
              <TableCell>
                {format(absence.startDate, 'dd/MM/yyyy', { locale: fr })}
              </TableCell>
              <TableCell>
                {format(absence.endDate, 'dd/MM/yyyy', { locale: fr })}
              </TableCell>
              <TableCell>{absence.comment || '-'}</TableCell>
              <TableCell>
                {format(absence.createdAt, 'dd/MM/yyyy HH:mm', { locale: fr })}
              </TableCell>
              <TableCell align="right">
                <Tooltip title="Modifier">
                  <IconButton
                    onClick={() => handleEdit(absence)}
                    size="small"
                    color="primary"
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Supprimer">
                  <IconButton
                    onClick={() => handleDelete(absence)}
                    size="small"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};