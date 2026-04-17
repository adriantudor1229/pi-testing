import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ThemeState, ThemeMode } from '../types';

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'dark' as ThemeMode,

      toggleTheme: () => {
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark',
        }));
      },

      setTheme: (theme: ThemeMode) => {
        set({ theme });
      },
    }),
    {
      name: 'dashboard-theme',
    }
  )
);
