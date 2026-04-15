import { Card, CardHeader, CardTitle } from "./ui/Card";

type Stat = {
  label: string;
  value: string;
  change?: string;
  up?: boolean;
};

const stats: Stat[] = [
  { label: "Open Tasks", value: "23", change: "3 since yesterday", up: true },
  { label: "PRs Merged", value: "12", change: "This week" },
  { label: "Deployments", value: "8", change: "2 today", up: true },
  { label: "Build Time", value: "1m 42s", change: "12s faster", up: false },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label}>
          <p className="text-xs font-medium uppercase tracking-wide text-on-surface/50">
            {s.label}
          </p>
          <p className="mt-1 text-2xl font-semibold text-on-surface">{s.value}</p>
          <p className="mt-1 text-xs text-on-surface/40">{s.change}</p>
        </Card>
      ))}
    </div>
  );
}
