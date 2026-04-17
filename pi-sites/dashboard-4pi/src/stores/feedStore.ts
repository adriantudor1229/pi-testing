import { create } from 'zustand';
import type { FeedStore, FeedItem, FeedAction } from '../types';
import { mockFeed } from '../data/mockFeed';

export const useFeedStore = create<FeedStore>((set, get) => ({
  items: [...mockFeed],
  filter: {
    member: null,
    actionType: null,
  },

  addItem: (itemData) => {
    const item: FeedItem = {
      ...itemData,
      id: `feed-${Date.now()}`,
      timestamp: new Date().toISOString(),
    };
    set((state) => ({ items: [...state.items, item] }));
  },

  setFilter: (filter) => {
    set((state) => ({
      filter: { ...state.filter, ...filter },
    }));
  },

  clearFilter: () => {
    set({ filter: { member: null, actionType: null } });
  },

  getFilteredItems: () => {
    const { items, filter } = get();
    return items.filter((item) => {
      if (filter.member && item.member !== filter.member) return false;
      if (filter.actionType && item.action !== filter.actionType) return false;
      return true;
    });
  },
}));

// Re-export FeedAction for convenience
export type { FeedAction };
