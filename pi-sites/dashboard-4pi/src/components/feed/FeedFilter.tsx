import { useFeedStore } from '../../stores/feedStore';
import type { FeedAction } from '../../types';
import { Button } from '../ui/Button';

const actionTypes: { value: FeedAction | ''; label: string }[] = [
  { value: '', label: 'All actions' },
  { value: 'task_created', label: 'Created' },
  { value: 'task_moved', label: 'Moved' },
  { value: 'task_completed', label: 'Completed' },
  { value: 'task_deleted', label: 'Deleted' },
  { value: 'comment_added', label: 'Comments' },
];

export function FeedFilter() {
  const { filter, setFilter, clearFilter, items } = useFeedStore();

  const members = [...new Set(items.map((i) => i.member))];

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        value={filter.member || ''}
        onChange={(e) => setFilter({ member: e.target.value || null })}
        className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
      >
        <option value="">All members</option>
        {members.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <div className="flex gap-1">
        {actionTypes.map((at) => (
          <Button
            key={at.value}
            variant={filter.actionType === (at.value as FeedAction) || (!filter.actionType && at.value === '') ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setFilter({ actionType: (at.value as FeedAction) || null })}
          >
            {at.label}
          </Button>
        ))}
      </div>

      {(filter.member || filter.actionType) && (
        <Button variant="ghost" size="sm" onClick={clearFilter}>
          Clear
        </Button>
      )}
    </div>
  );
}
