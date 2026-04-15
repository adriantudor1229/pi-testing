import { StatsGrid } from "./StatsGrid";
import { TaskList } from "./TaskList";
import { ActivityFeed } from "./ActivityFeed";

export function Dashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-auto p-4 lg:p-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-on-surface">Dashboard</h1>
          <p className="text-xs text-on-surface/50">Welcome back, developer</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-on-surface/50">All systems operational</span>
        </div>
      </header>

      <StatsGrid />

      <div className="flex flex-col gap-4 lg:flex-row">
        <TaskList />
        <div className="lg:w-72 xl:w-80">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}
