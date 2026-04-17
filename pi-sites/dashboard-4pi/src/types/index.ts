// ============================================================
// Tarot Club Dashboard — TypeScript Interfaces
// ============================================================

// --- Auth & Users ---

export type UserRole = 'admin' | 'manager' | 'developer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => boolean;
  signup: (name: string, email: string, password: string) => boolean;
  logout: () => void;
  resetPassword: (email: string) => boolean;
}

// --- Tasks / Kanban ---

export type TaskPriority = 'low' | 'medium' | 'high' | 'critical';
export type TaskColumn = 'todo' | 'in-progress' | 'review' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  assignee: string; // user id
  column: TaskColumn;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

export interface TaskStore {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  moveTask: (id: string, column: TaskColumn) => void;
  getTasksByColumn: (column: TaskColumn) => Task[];
}

// --- Activity Feed ---

export type FeedAction =
  | 'task_created'
  | 'task_moved'
  | 'task_completed'
  | 'task_deleted'
  | 'user_joined'
  | 'comment_added';

export interface FeedItem {
  id: string;
  member: string; // user id or name
  action: FeedAction;
  message: string;
  timestamp: string; // ISO date
}

export interface FeedStore {
  items: FeedItem[];
  filter: {
    member: string | null;
    actionType: FeedAction | null;
  };
  addItem: (item: Omit<FeedItem, 'id' | 'timestamp'>) => void;
  setFilter: (filter: Partial<FeedStore['filter']>) => void;
  clearFilter: () => void;
  getFilteredItems: () => FeedItem[];
}

// --- Analytics ---

export interface DateRange {
  start: Date;
  end: Date;
}

// --- Theme ---

export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

// --- Tarot Club ---

export type MemberPhase = 'Planning' | 'Build' | 'Review' | 'Complete';

export interface TarotMember {
  id: string;
  icon: string;
  name: string;
  role: string;
  phase: MemberPhase;
  tokenUsage: number;
  tokenLimit: number;
}

export interface Reflection {
  id: string;
  memberId: string;
  memberName: string;
  interesting: string;
  challenging: string;
  surprising: string;
  timestamp: string;
}

// --- UI Helpers ---

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';
export type InputSize = 'sm' | 'md' | 'lg';
export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size?: ModalSize;
  children: React.ReactNode;
}
