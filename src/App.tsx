import React, { useState, useEffect } from 'react';
import { Schedule } from './components/Schedule';
import { VacationManager } from './components/VacationManager';
import { WeekNavigation } from './components/WeekNavigation';
import { DataManager } from './components/DataManager';
import { Login } from './components/Login';
import { AuthService } from './utils/authService';
import { ScheduleService } from './utils/scheduleService';
import { ChangePassword } from './components/ChangePassword';
import { PendingUsers } from './components/PendingUsers';
import { UserManagement } from './components/UserManagement';
import { AdminDashboard } from './components/AdminDashboard';
import type { Vacation, UserInfo } from './types';
import './styles/global.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date('2024-10-14'));
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);
  const [vacations, setVacations] = useState<Vacation[]>([]);
  const [showChangePassword, setShowChangePassword] = useState(false);

  useEffect(() => {
    AuthService.initialize();
    const storedUser = AuthService.getCurrentUser();
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const handleLoginSuccess = (user: UserInfo) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  if (!currentUser) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  const weekSchedule = ScheduleService.getWeekSchedule(currentDate, vacations);

  return (
    <div className="cyberpunk-bg min-h-screen">
      {currentUser.role === 'admin' && <PendingUsers />}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col space-y-6">
          <header className="neon-card p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="neon-text text-3xl font-bold">Planning Équipe</h1>
              <div className="flex items-center space-x-4">
                <span className="neon-text text-sm">
                  {currentUser.username} ({currentUser.role})
                </span>
                <button
                  onClick={() => setShowChangePassword(true)}
                  className="neon-button px-4 py-2 rounded-md text-sm"
                >
                  Changer le mot de passe
                </button>
                <button
                  onClick={handleLogout}
                  className="neon-button px-4 py-2 rounded-md text-sm"
                >
                  Déconnexion
                </button>
              </div>
            </div>
          </header>

          <div className="neon-card p-4 rounded-lg">
            <WeekNavigation
              currentDate={currentDate}
              onDateChange={setCurrentDate}
            />
          </div>

          {currentUser.role === 'admin' && (
            <>
              <div className="mb-6">
                <AdminDashboard />
              </div>
              <div className="neon-card p-4 rounded-lg">
                <UserManagement />
              </div>
            </>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="neon-card p-4 rounded-lg">
                <Schedule weekSchedule={weekSchedule} />
              </div>
            </div>
            <div className="space-y-6">
              <div className="neon-card p-4 rounded-lg">
                <VacationManager
                  vacations={vacations}
                  onVacationChange={setVacations}
                />
              </div>
              <div className="neon-card p-4 rounded-lg mt-6">
                <DataManager
                  vacations={vacations}
                  onVacationsImport={setVacations}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showChangePassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="neon-card p-6 rounded-lg w-full max-w-md">
            <ChangePassword onClose={() => setShowChangePassword(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;