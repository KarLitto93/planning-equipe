import React, { useMemo } from 'react';
import { WeekSchedule, DaySchedule } from '../types/planning';
import { COLORS, POSTES, CHEFS } from '../config/constants';

interface PlanningStatsProps {
  weekSchedule: WeekSchedule;
}

interface ChefStats {
  totalDays: number;
  postes: Record<string, number>;
  weekends: number;
  recuperations: number;
}

type ColorType = {
  [key in keyof typeof POSTES]: string;
} & { ALERT: string };

export function PlanningStats({ weekSchedule }: PlanningStatsProps) {
  const stats = useMemo(() => {
    const chefStats: Record<string, ChefStats> = {};
    
    // Initialiser les statistiques pour chaque chef
    CHEFS.forEach(chef => {
      chefStats[chef] = {
        totalDays: 0,
        postes: Object.values(POSTES).reduce((acc, poste) => ({ ...acc, [poste]: 0 }), {}),
        weekends: 0,
        recuperations: 0,
      };
    });

    // Calculer les statistiques
    Object.entries(weekSchedule.schedule).forEach(([dateStr, daySchedules]) => {
      const date = new Date(dateStr);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;

      daySchedules.forEach((schedule: DaySchedule) => {
        const stats = chefStats[schedule.chef];
        stats.totalDays++;
        stats.postes[schedule.poste]++;
        if (isWeekend) stats.weekends++;
        if (schedule.isRecuperation) stats.recuperations++;
      });
    });

    return chefStats;
  }, [weekSchedule]);

  const colors = COLORS as ColorType;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mt-4">
      <div className="p-4 bg-gray-50 border-b">
        <h3 className="text-lg font-semibold">Statistiques de la semaine</h3>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-6 gap-4">
          <div className="font-semibold">Chef</div>
          <div className="font-semibold">Jours travaillés</div>
          <div className="font-semibold">Postes</div>
          <div className="font-semibold">Week-ends</div>
          <div className="font-semibold">Récupérations</div>
          <div className="font-semibold">Statut</div>

          {CHEFS.map(chef => (
            <React.Fragment key={chef}>
              <div>{chef}</div>
              <div>{stats[chef].totalDays}</div>
              <div className="flex gap-1">
                {Object.entries(stats[chef].postes)
                  .filter(([_, count]) => count > 0)
                  .map(([poste, count]) => (
                    <span
                      key={poste}
                      className="px-2 py-1 rounded text-xs"
                      style={{ backgroundColor: colors[poste as keyof typeof POSTES] }}
                    >
                      {poste}: {count}
                    </span>
                  ))}
              </div>
              <div>{stats[chef].weekends}</div>
              <div>{stats[chef].recuperations}</div>
              <div>
                {/* Statut */}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
