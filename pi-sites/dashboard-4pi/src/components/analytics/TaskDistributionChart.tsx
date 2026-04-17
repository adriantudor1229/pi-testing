import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useChartTheme, useFilteredTasks } from '../../hooks/useChartTheme';

const COLUMN_COLORS = {
  light: ['#6b7280', '#3b82f6', '#f59e0b', '#10b981'],
  dark: ['#9ca3af', '#60a5fa', '#fbbf24', '#34d399'],
};

const COLUMN_LABELS: Record<string, string> = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  review: 'Review',
  done: 'Done',
};

export function TaskDistributionChart() {
  const { isDark, textColor, tooltipStyle, tooltipLabelStyle, tooltipItemStyle } = useChartTheme();
  const tasks = useFilteredTasks();

  const columns = ['todo', 'in-progress', 'review', 'done'] as const;

  const data = columns.map((col) => ({
    name: COLUMN_LABELS[col],
    value: tasks.filter((t) => t.column === col).length,
  }));

  const colors = isDark ? COLUMN_COLORS.dark : COLUMN_COLORS.light;

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={85}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((_, idx) => (
            <Cell key={idx} fill={colors[idx]} />
          ))}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} itemStyle={tooltipItemStyle} />
        <Legend
          formatter={(value) => <span style={{ color: textColor, fontSize: 12 }}>{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
