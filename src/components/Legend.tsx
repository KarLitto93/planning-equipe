import React, { memo } from 'react';
import { POSTES } from '../config/constants';

export const Legend = memo(() => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-2 mb-4">
        <div className="schedule-cell schedule-mat1 neon-text">
          {POSTES.MAT1}
        </div>
        <div className="schedule-cell schedule-mat2 neon-text">
          {POSTES.MAT2}
        </div>
        <div className="schedule-cell schedule-am1 neon-text">
          {POSTES.AM1}
        </div>
        <div className="schedule-cell schedule-am2 neon-text">
          {POSTES.AM2}
        </div>
        <div className="schedule-cell schedule-remplacant neon-text">
          {POSTES.REMPLACANT}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="schedule-cell schedule-conge neon-text">
          Congé
        </div>
        <div className="schedule-cell schedule-recuperation neon-text">
          Récupération
        </div>
      </div>
    </div>
  );
});
