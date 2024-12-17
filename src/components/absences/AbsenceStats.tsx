import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
} from '@mui/material';
import type { AbsenceFilters } from '../../types';

interface Props {
  filters: AbsenceFilters;
}

interface StatCardProps {
  title: string;
  value: number;
  total?: number;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, total, color }) => {
  const progress = total ? (value / total) * 100 : 0;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div" sx={{ color }}>
          {value}
          {total && (
            <Typography variant="caption" sx={{ ml: 1 }}>
              / {total}
            </Typography>
          )}
        </Typography>
        {total && (
          <Box sx={{ mt: 2 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: 'grey.200',
                '& .MuiLinearProgress-bar': {
                  bgcolor: color,
                  borderRadius: 4,
                },
              }}
            />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export const AbsenceStats: React.FC<Props> = ({ filters }) => {
  // TODO: Récupérer les statistiques depuis le service
  const stats = {
    totalAbsences: 0,
    conges: 0,
    maladies: 0,
    formations: 0,
    autres: 0,
    joursRestants: 0,
    joursTotal: 25,
  };

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={2}>
          <StatCard
            title="Total Absences"
            value={stats.totalAbsences}
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <StatCard
            title="Congés"
            value={stats.conges}
            total={stats.joursTotal}
            color="#2196f3"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <StatCard
            title="Maladies"
            value={stats.maladies}
            color="#d32f2f"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <StatCard
            title="Formations"
            value={stats.formations}
            color="#388e3c"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <StatCard
            title="Autres"
            value={stats.autres}
            color="#ffa000"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <StatCard
            title="Jours Restants"
            value={stats.joursRestants}
            total={stats.joursTotal}
            color="#00796b"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
