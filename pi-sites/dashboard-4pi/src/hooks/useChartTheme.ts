import { useMemo } from 'react';
import { useThemeStore } from '../stores/themeStore';
import { useTaskStore } from '../stores/taskStore';
import { useAnalyticsStore } from '../stores/analyticsStore';
import type { Task } from '../types';

export function useChartTheme() {
  const theme = useThemeStore((s) => s.theme);
  const isDark = theme === 'dark';

  return {
    isDark,
    gridColor: isDark ? '#374151' : '#e5e7eb',
    textColor: isDark ? '#9ca3af' : '#6b7280',
    tooltipStyle: {
      backgroundColor: isDark ? '#1f2937' : '#fff',
      border: `1px solid ${isDark ? '#4b5563' : '#d1d5db'}`,
      borderRadius: '8px',
      color: isDark ? '#f3f4f6' : '#111827',
      fontSize: '13px',
      boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.5)' : '0 2px 8px rgba(0,0,0,0.1)',
    },
    tooltipLabelStyle: {
      color: isDark ? '#f3f4f6' : '#111827',
      fontWeight: 600,
    },
    tooltipItemStyle: {
      color: isDark ? '#d1d5db' : '#374151',
    },
    cursorFill: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
  };
}

export function useFilteredTasks(): Task[] {
  const tasks = useTaskStore((s) => s.tasks);
  const dateRangeDays = useAnalyticsStore((s) => s.dateRangeDays);

  return useMemo(() => {
    if (dateRangeDays === 0) return tasks;

    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - dateRangeDays);
    start.setHours(0, 0, 0, 0);

    return tasks.filter((t) => {
      const d = new Date(t.updatedAt);
      return d >= start && d <= end;
    });
  }, [tasks, dateRangeDays]);
}
