import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Schedule from './components/Schedule';
import { ScheduleService } from './services/ScheduleService';
import { AuthService } from './services/AuthService';
import { Login } from './components/Login';
import { addWeeks, subWeeks } from 'date-fns';
import type { WeekSchedule, UserInfo } from './types';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fr } from 'date-fns/locale';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import { AbsenceDashboard } from './components/absences/AbsenceDashboard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00aaaa',
    },
    secondary: {
      main: '#00ffff',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
  },
});

function App() {
  const [currentDate, setCurrentDate] = useState(() => {
    const today = new Date();
    return today;
  });
  const [weekSchedule, setWeekSchedule] = useState<WeekSchedule | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const schedule = ScheduleService.getWeekSchedule(currentDate);
    setWeekSchedule(schedule);
  }, [currentDate]);

  useEffect(() => {
    const unsubscribe = AuthService.onAuthStateChanged((user) => {
      setUserInfo(user);
    });

    return () => unsubscribe();
  }, []);

  const handleDateChange = useCallback((newDate: Date) => {
    setCurrentDate(newDate);
  }, []);

  if (!userInfo) {
    return <Login onLogin={setUserInfo} />;
  }

  if (!weekSchedule) {
    return <div className="loading">Chargement...</div>;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
        <Router>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Button color="inherit" component={Link} to="/planning">
                  Planning
                </Button>
                <Button color="inherit" component={Link} to="/absences">
                  Absences
                </Button>
              </Toolbar>
            </AppBar>

            <Routes>
              <Route path="/" element={<Navigate to="/planning" replace />} />
              <Route
                path="/planning"
                element={
                  <div className="app bg-gray-900 min-h-screen">
                    <Schedule
                      weekSchedule={weekSchedule}
                      onDateChange={handleDateChange}
                      currentDate={currentDate}
                    />
                  </div>
                }
              />
              <Route path="/absences" element={<AbsenceDashboard />} />
            </Routes>
          </Box>
        </Router>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;