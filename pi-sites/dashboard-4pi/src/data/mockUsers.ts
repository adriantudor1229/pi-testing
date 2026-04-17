import type { User } from '../types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'The Fool',
    email: 'fool@tarot.club',
    role: 'admin',
    avatar: '🃏',
  },
  {
    id: 'user-2',
    name: 'The Justice',
    email: 'justice@tarot.club',
    role: 'manager',
    avatar: '⚖️',
  },
  {
    id: 'user-3',
    name: 'The Sun',
    email: 'sun@tarot.club',
    role: 'developer',
    avatar: '☀️',
  },
  {
    id: 'user-4',
    name: 'The Hanged Man',
    email: 'hangedman@tarot.club',
    role: 'developer',
    avatar: '🔵',
  },
];

export const mockPasswords: Record<string, string> = {
  'fool@tarot.club': 'admin123',
  'justice@tarot.club': 'manager123',
  'sun@tarot.club': 'dev123',
  'hangedman@tarot.club': 'dev123',
};
