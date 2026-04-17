import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthState, User, UserRole } from '../types';
import { mockUsers, mockPasswords } from '../data/mockUsers';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      token: null,

      login: (email: string, password: string) => {
        const user = mockUsers.find((u) => u.email === email);
        if (user && mockPasswords[email] === password) {
          set({
            user,
            isAuthenticated: true,
            token: `mock-jwt-${user.id}-${Date.now()}`,
          });
          return true;
        }
        return false;
      },

      signup: (name: string, email: string, _password: string) => {
        if (mockUsers.find((u) => u.email === email)) {
          return false;
        }
        const newUser: User = {
          id: `user-${Date.now()}`,
          name,
          email,
          role: 'developer' as UserRole,
          avatar: '👤',
        };
        set({
          user: newUser,
          isAuthenticated: true,
          token: `mock-jwt-${newUser.id}-${Date.now()}`,
        });
        return true;
      },

      logout: () => {
        set({ user: null, isAuthenticated: false, token: null });
      },

      resetPassword: (_email: string) => {
        // Mock — always succeeds
        return true;
      },
    }),
    {
      name: 'dashboard-auth',
    }
  )
);
