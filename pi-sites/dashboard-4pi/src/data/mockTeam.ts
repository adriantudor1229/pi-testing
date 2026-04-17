import type { TarotMember } from '../types';

export const mockTeam: TarotMember[] = [
  {
    id: 'member-1',
    icon: '🃏',
    name: 'The Fool',
    role: 'Leader',
    phase: 'Planning',
    tokenUsage: 12400,
    tokenLimit: 20000,
  },
  {
    id: 'member-2',
    icon: '⚖️',
    name: 'The Justice',
    role: 'Planner',
    phase: 'Planning',
    tokenUsage: 9800,
    tokenLimit: 20000,
  },
  {
    id: 'member-3',
    icon: '☀️',
    name: 'The Sun',
    role: 'Architect',
    phase: 'Build',
    tokenUsage: 15200,
    tokenLimit: 20000,
  },
  {
    id: 'member-4',
    icon: '🔵',
    name: 'The Hanged Man',
    role: 'Coder',
    phase: 'Build',
    tokenUsage: 18600,
    tokenLimit: 20000,
  },
];
