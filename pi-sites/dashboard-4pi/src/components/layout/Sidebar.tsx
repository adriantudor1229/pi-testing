import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Columns3,
  Activity,
  BarChart3,
  Sparkles,
  Settings,
  PanelLeftClose,
  PanelLeft,
} from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/kanban', label: 'Kanban', icon: Columns3 },
  { to: '/feed', label: 'Feed', icon: Activity },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/tarot-club', label: 'Tarot Club', icon: Sparkles, roles: ['admin', 'manager'] },
  { to: '/settings', label: 'Settings', icon: Settings },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const user = useAuthStore((s) => s.user);

  const visibleItems = navItems.filter(
    (item) => !item.roles || (user && item.roles.includes(user.role))
  );

  return (
    <aside
      className={`flex flex-col border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800
        transition-all duration-200 ease-in-out shrink-0
        ${collapsed ? 'w-16' : 'w-64'}`}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-gray-200 px-4 dark:border-gray-700">
        <span className="text-2xl shrink-0">🃏</span>
        {!collapsed && (
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">
            Tarot Club
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2">
        {visibleItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            title={collapsed ? item.label : undefined}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors
              ${collapsed ? 'justify-center' : ''}
              ${
                isActive
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700/50'
              }`
            }
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="border-t border-gray-200 p-2 dark:border-gray-700">
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-center rounded-lg p-2 text-gray-400
            hover:bg-gray-100 hover:text-gray-600
            dark:hover:bg-gray-700 dark:hover:text-gray-300 transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <PanelLeft className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
        </button>
        {!collapsed && (
          <p className="mt-2 text-center text-xs text-gray-400 dark:text-gray-500">
            Built by the Tarot Club
          </p>
        )}
      </div>
    </aside>
  );
}
