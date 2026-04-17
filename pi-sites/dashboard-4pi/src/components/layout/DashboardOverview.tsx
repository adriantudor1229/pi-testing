import { useTaskStore } from '../../stores/taskStore';
import { useAuthStore } from '../../stores/authStore';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { mockUsers } from '../../data/mockUsers';
import {
  ListTodo,
  Loader2,
  Eye,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const columnConfig = [
  { key: 'todo' as const, label: 'To Do', icon: ListTodo, color: 'text-gray-600 dark:text-gray-300' },
  { key: 'in-progress' as const, label: 'In Progress', icon: Loader2, color: 'text-blue-600 dark:text-blue-400' },
  { key: 'review' as const, label: 'In Review', icon: Eye, color: 'text-yellow-600 dark:text-yellow-400' },
  { key: 'done' as const, label: 'Done', icon: CheckCircle2, color: 'text-green-600 dark:text-green-400' },
];

const priorityVariant: Record<string, 'default' | 'info' | 'warning' | 'danger'> = {
  low: 'default',
  medium: 'info',
  high: 'warning',
  critical: 'danger',
};

export function DashboardOverview() {
  const tasks = useTaskStore((s) => s.tasks);
  const user = useAuthStore((s) => s.user);

  const total = tasks.length;
  const done = tasks.filter((t) => t.column === 'done').length;

  // Recent tasks (last 5 updated)
  const recentTasks = [...tasks]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Dashboard
        </h1>
        {user && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Welcome back, {user.name}
          </p>
        )}
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {columnConfig.map(({ key, label, icon: Icon, color }) => {
          const count = tasks.filter((t) => t.column === key).length;
          return (
            <Card key={key}>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <p className={`text-3xl font-bold ${color}`}>{count}</p>
            </Card>
          );
        })}
      </div>

      {/* Progress */}
      <Card>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Overall Progress</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {done} / {total} tasks
          </span>
        </div>
        <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-3 rounded-full bg-green-500 dark:bg-green-400 transition-all duration-500"
            style={{ width: `${total > 0 ? Math.round((done / total) * 100) : 0}%` }}
          />
        </div>
      </Card>

      {/* Recent Tasks + Welcome */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recent Tasks</h2>
            <Link
              to="/kanban"
              className="flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="space-y-2">
            {recentTasks.map((task) => {
              const assignee = mockUsers.find((u) => u.id === task.assignee);
              return (
                <Card key={task.id} className="flex items-center gap-3 py-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                      {task.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                      {task.column.replace('-', ' ')}
                    </p>
                  </div>
                  <Badge variant={priorityVariant[task.priority]}>{task.priority}</Badge>
                  {assignee && <Avatar fallback={assignee.avatar} size="sm" />}
                </Card>
              );
            })}
          </div>
        </div>

        <Card>
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
            🃏 About This Dashboard
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            This project was built by the <strong>Tarot Club team</strong> — a self-aware project
            management dashboard that showcases the team and process that created it. Four agents
            collaborated asynchronously: <em>The Fool</em> (Leader), <em>The Justice</em> (Planner),
            <em> The Sun</em> (Architect), and <em>The Hanged Man</em> (Coder).
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="info">React 18</Badge>
            <Badge variant="info">TypeScript</Badge>
            <Badge variant="info">Zustand</Badge>
            <Badge variant="info">Recharts</Badge>
            <Badge variant="info">@dnd-kit</Badge>
            <Badge variant="info">Tailwind v4</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
