import type { FeedItem } from '../types';

export const mockFeed: FeedItem[] = [
  {
    id: 'feed-1',
    member: 'The Fool',
    action: 'task_created',
    message: 'Created task "Design system color tokens"',
    timestamp: '2025-01-10T09:00:00Z',
  },
  {
    id: 'feed-2',
    member: 'The Sun',
    action: 'task_completed',
    message: 'Completed task "Design system color tokens"',
    timestamp: '2025-01-11T14:30:00Z',
  },
  {
    id: 'feed-3',
    member: 'The Hanged Man',
    action: 'task_created',
    message: 'Created task "Set up Zustand stores"',
    timestamp: '2025-01-10T10:00:00Z',
  },
  {
    id: 'feed-4',
    member: 'The Hanged Man',
    action: 'task_completed',
    message: 'Completed task "Set up Zustand stores"',
    timestamp: '2025-01-12T11:00:00Z',
  },
  {
    id: 'feed-5',
    member: 'The Justice',
    action: 'task_moved',
    message: 'Moved "Implement auth flow" to Review',
    timestamp: '2025-01-14T09:00:00Z',
  },
  {
    id: 'feed-6',
    member: 'The Hanged Man',
    action: 'task_created',
    message: 'Created task "Implement Kanban drag-and-drop"',
    timestamp: '2025-01-12T08:00:00Z',
  },
  {
    id: 'feed-7',
    member: 'The Sun',
    action: 'task_moved',
    message: 'Moved "Theme toggle" to Done',
    timestamp: '2025-01-11T09:30:00Z',
  },
  {
    id: 'feed-8',
    member: 'The Fool',
    action: 'user_joined',
    message: 'Project "Tarot Club Dashboard" was created',
    timestamp: '2025-01-10T08:00:00Z',
  },
  {
    id: 'feed-9',
    member: 'The Justice',
    action: 'task_moved',
    message: 'Moved "Add role-based access control" to Review',
    timestamp: '2025-01-14T11:00:00Z',
  },
  {
    id: 'feed-10',
    member: 'The Sun',
    action: 'comment_added',
    message: 'Commented on "Build Activity Feed component"',
    timestamp: '2025-01-13T15:00:00Z',
  },
];
