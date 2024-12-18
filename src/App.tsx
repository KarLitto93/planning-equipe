import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { fr } from 'date-fns/locale';
import { 
  Box, 
  AppBar, 
  Toolbar, 
  Button, 
  Typography, 
  Dialog, 
  DialogContent,
  IconButton,
  Collapse,
  Divider,
  CssBaseline
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Schedule from './components/Schedule';
import { Login } from './components/Login';
import { AbsenceDashboard } from './components/absences/AbsenceDashboard';
import { PendingUsers } from './components/PendingUsers';
import { WeekNavigation } from './components/WeekNavigation';
import { AdminDashboard } from './components/AdminDashboard';
import { ScheduleService } from './services/ScheduleService';
import { AuthService } from './services/AuthService';
import type { WeekSchedule, Vacation } from './types';
import type { UserInfo } from './types/user';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

function App() {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [weekSchedule, setWeekSchedule] = useState<WeekSchedule | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [vacations, setVacations] = useState<Vacation[]>([]);
  const [showUserManagement, setShowUserManagement] = useState(false);

  useEffect(() => {
    const schedule = ScheduleService.getWeekSchedule(currentDate);
    if (schedule && Object.keys(schedule.schedule).length > 0) {
      setWeekSchedule(schedule);
    }
  }, [currentDate]);

  useEffect(() => {
    const unsubscribe = AuthService.onAuthStateChanged((user) => {
      setUserInfo(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = useCallback(() => {
    AuthService.logout()
      .then(() => setUserInfo(null))
      .catch((error: Error) => console.error('Logout failed', error));
  }, []);

  const handleLoginSuccess = useCallback((user: UserInfo) => {
    setUserInfo(user);
  }, []);

  if (!userInfo) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  if (!weekSchedule) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography>Chargement...</Typography>
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Planning Équipe
              </Typography>
              <Typography sx={{ mr: 2 }}>
                {userInfo.username} ({userInfo.role})
              </Typography>
              <Button color="inherit" onClick={() => setShowChangePassword(true)}>
                Changer le mot de passe
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Déconnexion
              </Button>
            </Toolbar>
          </AppBar>

          <Box sx={{ p: 3 }}>
            <Routes>
              <Route path="/" element={
                <>
                  <WeekNavigation
                    currentDate={currentDate}
                    onDateChange={setCurrentDate}
                  />
                  <Box sx={{ mt: 3 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
                      <Schedule weekSchedule={weekSchedule} />
                    </LocalizationProvider>
                  </Box>
                </>
              } />
              <Route path="/absences" element={<AbsenceDashboard />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;