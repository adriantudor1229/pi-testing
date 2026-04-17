import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { useChartTheme, useFilteredTasks } from '../../hooks/useChartTheme';

// Distinct priority colors — each priority gets its own unmistakable color
const PRIORITY_COLORS = {
  light: {
    Low: '#8b5cf6',       // violet
    Medium: '#3b82f6',    // blue
    High: '#f59e0b',      // amber
    Critical: '#ef4444',  // red
  },
  dark: {
    Low: '#a78bfa',       // violet-light
    Medium: '#60a5fa',    // blue-light
    High: '#fbbf24',      // amber-light
    Critical: '#f87171',  // red-light
  },
};

export function PriorityBreakdownChart() {
  const { isDark, gridColor, textColor, tooltipStyle, tooltipLabelStyle, tooltipItemStyle, cursorFill } = useChartTheme();
  const tasks = useFilteredTasks();

  const data = [
    { priority: 'Low', count: tasks.filter((t) => t.priority === 'low').length },
    { priority: 'Medium', count: tasks.filter((t) => t.priority === 'medium').length },
    { priority: 'High', count: tasks.filter((t) => t.priority === 'high').length },
    { priority: 'Critical', count: tasks.filter((t) => t.priority === 'critical').length },
  ];

  const colorSet = isDark ? PRIORITY_COLORS.dark : PRIORITY_COLORS.light;

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey="priority" tick={{ fill: textColor, fontSize: 12 }} />
        <YAxis tick={{ fill: textColor, fontSize: 12 }} allowDecimals={false} />
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} itemStyle={tooltipItemStyle} cursor={{ fill: cursorFill }} />
        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
          {data.map((entry) => (
            <Cell key={entry.priority} fill={colorSet[entry.priority as keyof typeof colorSet]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
