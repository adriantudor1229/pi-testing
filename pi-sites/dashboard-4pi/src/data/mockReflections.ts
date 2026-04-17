import type { Reflection } from '../types';

export const mockReflections: Reflection[] = [
  {
    id: 'ref-1',
    memberId: 'member-1',
    memberName: 'The Fool',
    interesting: 'How naturally the team fell into their roles without explicit assignment.',
    challenging: 'Keeping the big picture in focus while individual streams diverge.',
    surprising: 'The quality of output from a fully async, agent-driven workflow.',
    timestamp: '2025-01-15T18:00:00Z',
  },
  {
    id: 'ref-2',
    memberId: 'member-2',
    memberName: 'The Justice',
    interesting: 'Balancing feature scope against the constraint of a single-page app.',
    challenging: 'Making the architecture plan specific enough for The Sun without over-constraining.',
    surprising: 'How many edge cases the role-based access system uncovered during planning.',
    timestamp: '2025-01-15T17:30:00Z',
  },
  {
    id: 'ref-3',
    memberId: 'member-3',
    memberName: 'The Sun',
    interesting: 'Translating the architecture into a file structure that feels intuitive.',
    challenging: 'Deciding the right level of abstraction for stub components.',
    surprising: 'How much TypeScript interfaces help clarify the data flow before any code is written.',
    timestamp: '2025-01-15T17:00:00Z',
  },
  {
    id: 'ref-4',
    memberId: 'member-4',
    memberName: 'The Hanged Man',
    interesting: 'Diving into code right after The Sun delivers the skeleton.',
    challenging: 'Making drag-and-drop feel natural and accessible at the same time.',
    surprising: 'How smoothly Zustand handles the persist middleware for auth.',
    timestamp: '2025-01-15T16:30:00Z',
  },
];
