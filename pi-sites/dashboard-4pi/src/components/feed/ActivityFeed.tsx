import { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import { useFeedStore } from '../../stores/feedStore';
import { FeedItem } from './FeedItem';
import { FeedFilter } from './FeedFilter';
import { startFeedSimulation } from '../../utils/feedSimulator';

export function ActivityFeed() {
  const items = useFeedStore((s) => s.items);
  const filterMember = useFeedStore((s) => s.filter.member);
  const filterAction = useFeedStore((s) => s.filter.actionType);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (filterMember && item.member !== filterMember) return false;
      if (filterAction && item.action !== filterAction) return false;
      return true;
    });
  }, [items, filterMember, filterAction]);
  const addItem = useFeedStore((s) => s.addItem);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isUserScrolled, setIsUserScrolled] = useState(false);
  const prevItemCount = useRef(filteredItems.length);

  // Simulated real-time feed
  useEffect(() => {
    const stop = startFeedSimulation((event) => {
      addItem(event);
    });
    return stop;
  }, [addItem]);

  // Detect user scroll
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
    setIsUserScrolled(!isAtBottom);
  }, []);

  // Auto-scroll only when at bottom and new items arrive
  useEffect(() => {
    if (filteredItems.length > prevItemCount.current && !isUserScrolled) {
      scrollContainerRef.current?.scrollTo({
        top: scrollContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
    prevItemCount.current = filteredItems.length;
  }, [filteredItems.length, isUserScrolled]);

  // Initial scroll to bottom
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Activity Feed</h1>
        {filteredItems.length > 0 && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {filteredItems.length} event{filteredItems.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>
      <FeedFilter />
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="space-y-2 max-h-[calc(100vh-240px)] overflow-y-auto pr-1"
      >
        {filteredItems.length === 0 && (
          <div className="py-12 text-center text-sm text-gray-400 dark:text-gray-500">
            No activity yet. Events will appear here in real-time.
          </div>
        )}
        {filteredItems.map((item, index) => {
          // Only animate the most recent items (new arrivals)
          const isNew = index >= filteredItems.length - 1 || index >= prevItemCount.current;
          return <FeedItem key={item.id} item={item} animate={isNew} />;
        })}
      </div>
    </div>
  );
}
