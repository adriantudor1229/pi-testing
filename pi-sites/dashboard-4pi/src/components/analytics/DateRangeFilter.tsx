import { useAnalyticsStore } from '../../stores/analyticsStore';
import { Button } from '../ui/Button';

const presets = [
  { label: '7d', days: 7 },
  { label: '14d', days: 14 },
  { label: '30d', days: 30 },
  { label: 'All', days: 0 },
];

export function DateRangeFilter() {
  const active = useAnalyticsStore((s) => s.dateRangeDays);
  const setDays = useAnalyticsStore((s) => s.setDateRangeDays);

  return (
    <div className="flex gap-1">
      {presets.map((p) => (
        <Button
          key={p.days}
          variant={active === p.days ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setDays(p.days)}
        >
          {p.label}
        </Button>
      ))}
    </div>
  );
}
