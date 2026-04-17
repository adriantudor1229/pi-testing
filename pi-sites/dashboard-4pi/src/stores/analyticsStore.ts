import { create } from 'zustand';

interface AnalyticsStore {
  dateRangeDays: number; // 0 = all, 7/14/30 = days
  setDateRangeDays: (days: number) => void;
  getDateRange: () => { start: Date; end: Date } | null;
}

export const useAnalyticsStore = create<AnalyticsStore>((set, get) => ({
  dateRangeDays: 30,

  setDateRangeDays: (days) => set({ dateRangeDays: days }),

  getDateRange: () => {
    const days = get().dateRangeDays;
    if (days === 0) return null; // all time
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - days);
    start.setHours(0, 0, 0, 0);
    return { start, end };
  },
}));
