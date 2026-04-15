import { Card, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";

type Task = {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  priority: "low" | "medium" | "high";
  project: string;
};

const tasks: Task[] = [
  { id: "1", title: "Fix auth token refresh race condition", status: "in-progress", priority: "high", project: "api" },
  { id: "2", title: "Add dark mode toggle to settings", status: "todo", priority: "medium", project: "frontend" },
  { id: "3", title: "Optimize database query for user search", status: "todo", priority: "high", project: "api" },
  { id: "4", title: "Write E2E tests for checkout flow", status: "done", priority: "medium", project: "qa" },
  { id: "5", title: "Update dependencies to latest versions", status: "todo", priority: "low", project: "infra" },
  { id: "6", title: "Implement WebSocket reconnection logic", status: "in-progress", priority: "high", project: "realtime" },
];

const statusBadge: Record<Task["status"], { variant: "default" | "success" | "warning"; label: string }> = {
  todo: { variant: "default", label: "To Do" },
  "in-progress": { variant: "warning", label: "In Progress" },
  done: { variant: "success", label: "Done" },
};

const priorityDot: Record<Task["priority"], string> = {
  low: "bg-on-surface/30",
  medium: "bg-amber-400",
  high: "bg-error",
};

export function TaskList() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Tasks</CardTitle>
        <Button size="sm">+ New Task</Button>
      </CardHeader>
      <div className="flex flex-col gap-1">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 rounded px-3 py-2.5 transition-colors hover:bg-on-surface/5 cursor-pointer"
          >
            <span className={`h-2 w-2 rounded-full shrink-0 ${priorityDot[task.priority]}`} />
            <span className="flex-1 truncate text-sm text-on-surface">
              {task.title}
            </span>
            <Badge variant={statusBadge[task.status].variant}>
              {statusBadge[task.status].label}
            </Badge>
            <span className="hidden text-xs text-on-surface/40 sm:inline">
              {task.project}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
