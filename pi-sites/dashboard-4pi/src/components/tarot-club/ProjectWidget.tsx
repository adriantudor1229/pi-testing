import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { useTaskStore } from '../../stores/taskStore';
import { mockTeam } from '../../data/mockTeam';
import { GitBranch, Users, Layers } from 'lucide-react';

export function ProjectWidget() {
  const tasks = useTaskStore((s) => s.tasks);
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((t) => t.column === 'done').length;
  const memberCount = mockTeam.length;
  const progressPercent = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Tarot Club Dashboard
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            A self-aware project management dashboard built by the Tarot Club team.
          </p>
        </div>
        <Badge variant="info">In Progress</Badge>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>{doneTasks} of {totalTasks} tasks complete</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className="h-2 rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex gap-6 text-sm text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1.5">
          <Layers className="h-4 w-4" /> {totalTasks} tasks
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="h-4 w-4" /> {memberCount} members
        </span>
        <span className="flex items-center gap-1.5">
          <GitBranch className="h-4 w-4" /> Phase: Build
        </span>
      </div>
    </Card>
  );
}
