import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useChartTheme, useFilteredTasks } from '../../hooks/useChartTheme';
import { format, subWeeks, startOfWeek, isSameWeek } from 'date-fns';

export function ProductivityChart() {
  const { gridColor, textColor, tooltipStyle, tooltipLabelStyle, tooltipItemStyle, cursorFill } = useChartTheme();
  const tasks = useFilteredTasks();

  // Build last 6 weeks of data
  const data = Array.from({ length: 6 }, (_, i) => {
    const weekStart = startOfWeek(subWeeks(new Date(), 4 - i), { weekStartsOn: 1 });
    const weekLabel = format(weekStart, 'MMM d');

    const created = tasks.filter((t) => isSameWeek(new Date(t.createdAt), weekStart, { weekStartsOn: 1 })).length;
    const completed = tasks.filter((t) => t.column === 'done' && isSameWeek(new Date(t.updatedAt), weekStart, { weekStartsOn: 1 })).length;

    return { week: weekLabel, created, completed };
  });

  const createdColor = '#3b82f6';
  const completedColor = '#10b981';

  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey="week" tick={{ fill: textColor, fontSize: 12 }} />
        <YAxis tick={{ fill: textColor, fontSize: 12 }} allowDecimals={false} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} itemStyle={tooltipItemStyle} cursor={{ fill: cursorFill }} />
        <Legend formatter={(value) => <span style={{ color: textColor, fontSize: 12 }}>{value}</span>} />
        <Line
          type="monotone"
          dataKey="created"
          stroke={createdColor}
          strokeWidth={2}
          dot={{ fill: createdColor, r: 3 }}
          name="Created"
        />
        <Line
          type="monotone"
          dataKey="completed"
          stroke={completedColor}
          strokeWidth={2}
          dot={{ fill: completedColor, r: 3 }}
          name="Completed"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
