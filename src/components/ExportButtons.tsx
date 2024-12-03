import React from 'react';
import { Button, Tooltip } from '@mui/material';
import { FileText, FileSpreadsheet } from 'lucide-react';
import { WeekSchedule } from '../types';
import { ExportService } from '../utils/exportService';

interface ExportButtonsProps {
  weekSchedule: WeekSchedule;
}

export function ExportButtons({ weekSchedule }: ExportButtonsProps) {
  const handlePDFExport = async () => {
    try {
      await ExportService.exportToPDF(weekSchedule);
    } catch (error) {
      console.error('Erreur lors de l\'export PDF:', error);
      // TODO: Ajouter une notification d'erreur
    }
  };

  const handleExcelExport = async () => {
    try {
      await ExportService.exportToExcel(weekSchedule);
    } catch (error) {
      console.error('Erreur lors de l\'export Excel:', error);
      // TODO: Ajouter une notification d'erreur
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      <Tooltip title="Exporter en PDF" arrow>
        <Button
          variant="outlined"
          color="primary"
          onClick={handlePDFExport}
          startIcon={<FileText className="w-5 h-5" />}
        >
          PDF
        </Button>
      </Tooltip>

      <Tooltip title="Exporter en Excel" arrow>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleExcelExport}
          startIcon={<FileSpreadsheet className="w-5 h-5" />}
        >
          Excel
        </Button>
      </Tooltip>
    </div>
  );
}
