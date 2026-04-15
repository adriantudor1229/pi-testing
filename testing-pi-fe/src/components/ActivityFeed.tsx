import { Card, CardHeader, CardTitle } from "./ui/Card";

type Activity = {
  id: string;
  message: string;
  time: string;
  type: "commit" | "pr" | "deploy" | "alert";
};

const activities: Activity[] = [
  { id: "1", message: "Merged PR #142 — fix token refresh", time: "2m ago", type: "pr" },
  { id: "2", message: "Deployed api v2.4.1 to staging", time: "18m ago", type: "deploy" },
  { id: "3", message: "Commit abc8f32 — add rate limiter", time: "1h ago", type: "commit" },
  { id: "4", message: "Alert: CPU usage > 90% on worker-3", time: "2h ago", type: "alert" },
  { id: "5", message: "Deployed frontend v1.8.0 to production", time: "3h ago", type: "deploy" },
];

const typeColor: Record<Activity["type"], string> = {
  commit: "text-on-surface/40",
  pr: "text-primary",
  deploy: "text-emerald-400",
  alert: "text-error",
};

const typeSymbol: Record<Activity["type"], string> = {
  commit: "●",
  pr: "⊕",
  deploy: "▲",
  alert: "!",
};

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity</CardTitle>
      </CardHeader>
      <div className="flex flex-col gap-3">
        {activities.map((a) => (
          <div key={a.id} className="flex items-start gap-3">
            <span className={`mt-0.5 text-xs ${typeColor[a.type]}`}>
              {typeSymbol[a.type]}
            </span>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm text-on-surface">{a.message}</p>
              <p className="text-xs text-on-surface/40">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
