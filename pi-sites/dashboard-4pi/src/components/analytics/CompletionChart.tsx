import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useChartTheme, useFilteredTasks } from '../../hooks/useChartTheme';
import { format, subDays, startOfDay, isSameDay } from 'date-fns';

export function CompletionChart() {
  const { gridColor, textColor, tooltipStyle, tooltipLabelStyle, tooltipItemStyle, cursorFill } = useChartTheme();
  const tasks = useFilteredTasks();

  const completedTasks = tasks.filter((t) => t.column === 'done');

  // Build last 7 days of data
  const today = startOfDay(new Date());
  const data = Array.from({ length: 7 }, (_, i) => {
    const day = subDays(today, 6 - i);
    const count = completedTasks.filter((t) => isSameDay(new Date(t.updatedAt), day)).length;
    return {
      day: format(day, 'EEE'),
      date: format(day, 'MMM d'),
      completed: count,
    };
  });

  const barColor = '#3b82f6';

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey="day" tick={{ fill: textColor, fontSize: 12 }} />
        <YAxis tick={{ fill: textColor, fontSize: 12 }} allowDecimals={false} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} itemStyle={tooltipItemStyle} cursor={{ fill: cursorFill }} labelFormatter={(_, payload) => {
          if (payload?.[0]?.payload?.date) return payload[0].payload.date;
          return '';
        }} />
        <Bar dataKey="completed" fill={barColor} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
