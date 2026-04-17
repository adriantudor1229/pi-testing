import { create } from 'zustand';
import type { TaskStore, Task, TaskColumn } from '../types';
import { mockTasks } from '../data/mockTasks';

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [...mockTasks],

  addTask: (taskData) => {
    const now = new Date().toISOString();
    const task: Task = {
      ...taskData,
      id: `task-${Date.now()}`,
      createdAt: now,
      updatedAt: now,
    };
    set((state) => ({ tasks: [...state.tasks, task] }));
  },

  updateTask: (id, updates) => {
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, ...updates, updatedAt: new Date().toISOString() } : t
      ),
    }));
  },

  deleteTask: (id) => {
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) }));
  },

  moveTask: (id, column) => {
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, column, updatedAt: new Date().toISOString() } : t
      ),
    }));
  },

  getTasksByColumn: (column: TaskColumn) => {
    return get().tasks.filter((t) => t.column === column);
  },
}));
