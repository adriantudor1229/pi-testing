import { Card } from '../ui/Card';
import { CompletionChart } from './CompletionChart';
import { ProductivityChart } from './ProductivityChart';
import { TaskDistributionChart } from './TaskDistributionChart';
import { PriorityBreakdownChart } from './PriorityBreakdownChart';
import { DateRangeFilter } from './DateRangeFilter';
import { useFilteredTasks } from '../../hooks/useChartTheme';
import { ListChecks, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export function AnalyticsDashboard() {
  const tasks = useFilteredTasks();
  const total = tasks.length;
  const done = tasks.filter((t) => t.column === 'done').length;
  const inProgress = tasks.filter((t) => t.column === 'in-progress' || t.column === 'review').length;
  const critical = tasks.filter((t) => t.priority === 'critical' && t.column !== 'done').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Analytics</h1>
        <DateRangeFilter />
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-50 p-2 dark:bg-blue-900/30">
            <ListChecks className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total Tasks</p>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{total}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3">
          <div className="rounded-lg bg-green-50 p-2 dark:bg-green-900/30">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Completed</p>
            <p className="text-xl font-bold text-green-600 dark:text-green-400">{done}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3">
          <div className="rounded-lg bg-yellow-50 p-2 dark:bg-yellow-900/30">
            <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Active</p>
            <p className="text-xl font-bold text-yellow-600 dark:text-yellow-400">{inProgress}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-3">
          <div className="rounded-lg bg-red-50 p-2 dark:bg-red-900/30">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Critical Open</p>
            <p className="text-xl font-bold text-red-600 dark:text-red-400">{critical}</p>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Tasks Completed (Last 7 Days)
          </h2>
          <CompletionChart />
        </Card>
        <Card>
          <h2 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Team Productivity (Weekly)
          </h2>
          <ProductivityChart />
        </Card>
        <Card>
          <h2 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Task Distribution by Status
          </h2>
          <TaskDistributionChart />
        </Card>
        <Card>
          <h2 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Priority Breakdown
          </h2>
          <PriorityBreakdownChart />
        </Card>
      </div>
    </div>
  );
}
