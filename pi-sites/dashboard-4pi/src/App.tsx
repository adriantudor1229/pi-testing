import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { AppShell } from './components/layout/AppShell';
import { DashboardOverview } from './components/layout/DashboardOverview';
import { SettingsPage } from './components/layout/SettingsPage';
import { LoginPage } from './components/auth/LoginPage';
import { SignupPage } from './components/auth/SignupPage';
import { PasswordResetPage } from './components/auth/PasswordResetPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { RoleGate } from './components/auth/RoleGate';
import { KanbanBoard } from './components/kanban/KanbanBoard';
import { ActivityFeed } from './components/feed/ActivityFeed';
import { AnalyticsDashboard } from './components/analytics/AnalyticsDashboard';
import { TarotClubPanel } from './components/tarot-club/TarotClubPanel';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/reset-password" element={<PasswordResetPage />} />

          {/* Protected routes inside AppShell layout */}
          <Route
            element={
              <ProtectedRoute>
                <AppShell />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/kanban" element={<KanbanBoard />} />
            <Route path="/feed" element={<ActivityFeed />} />
            <Route path="/analytics" element={<AnalyticsDashboard />} />
            <Route
              path="/tarot-club"
              element={
                <RoleGate roles={['admin', 'manager']} fallback={
                  <div className="text-center py-12">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Access Denied</h2>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      You don't have permission to view the Tarot Club panel.
                    </p>
                  </div>
                }>
                  <TarotClubPanel />
                </RoleGate>
              }
            />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
