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
import { Card } from '../ui/Card';
import { useChartTheme } from '../../hooks/useChartTheme';
import { mockTeam } from '../../data/mockTeam';

const MEMBER_COLORS = ['#8b5cf6', '#3b82f6', '#f59e0b', '#10b981'];

export function TokenUsageTracker() {
  const { gridColor, textColor, tooltipStyle, tooltipLabelStyle, tooltipItemStyle, cursorFill } = useChartTheme();

  const data = mockTeam.map((m) => ({
    name: m.name.replace('The ', ''),
    used: m.tokenUsage,
  }));

  return (
    <Card>
      <h2 className="mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
        Token Usage
      </h2>

      {/* Visual progress bars */}
      <div className="space-y-3 mb-6">
        {mockTeam.map((member) => {
          const percent = Math.round((member.tokenUsage / member.tokenLimit) * 100);
          return (
            <div key={member.id} className="flex items-center gap-3">
              <span className="w-6 text-center text-lg">{member.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {member.name}
                  </span>
                  <span className="text-gray-700 dark:text-gray-200">
                    {member.tokenUsage.toLocaleString()} / {member.tokenLimit.toLocaleString()}
                  </span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      percent > 85 ? 'bg-red-500' : percent > 60 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bar chart */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="name" tick={{ fill: textColor, fontSize: 11 }} />
          <YAxis tick={{ fill: textColor, fontSize: 11 }} />
          <Tooltip contentStyle={tooltipStyle} labelStyle={tooltipLabelStyle} itemStyle={tooltipItemStyle} cursor={{ fill: cursorFill }} />
          <Bar dataKey="used" radius={[4, 4, 0, 0]} name="Tokens Used">
            {data.map((_, idx) => (
              <Cell key={idx} fill={MEMBER_COLORS[idx % MEMBER_COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
