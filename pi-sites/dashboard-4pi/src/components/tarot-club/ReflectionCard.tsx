import type { Reflection } from '../../types';
import { Card } from '../ui/Card';
import { formatRelative } from '../../utils/dateUtils';
import { mockTeam } from '../../data/mockTeam';

interface ReflectionCardProps {
  reflection: Reflection;
}

export function ReflectionCard({ reflection }: ReflectionCardProps) {
  const member = mockTeam.find((m) => m.id === reflection.memberId);
  const icon = member?.icon || '🔮';

  return (
    <Card>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{icon}</span>
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {reflection.memberName}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500">
          {formatRelative(reflection.timestamp)}
        </span>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex gap-2">
          <span className="shrink-0 rounded-md bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Interesting
          </span>
          <span className="text-gray-600 dark:text-gray-400">{reflection.interesting}</span>
        </div>
        <div className="flex gap-2">
          <span className="shrink-0 rounded-md bg-yellow-50 px-2 py-0.5 text-xs font-semibold text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">
            Challenging
          </span>
          <span className="text-gray-600 dark:text-gray-400">{reflection.challenging}</span>
        </div>
        <div className="flex gap-2">
          <span className="shrink-0 rounded-md bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-600 dark:bg-green-900/30 dark:text-green-400">
            Surprising
          </span>
          <span className="text-gray-600 dark:text-gray-400">{reflection.surprising}</span>
        </div>
      </div>
    </Card>
  );
}
