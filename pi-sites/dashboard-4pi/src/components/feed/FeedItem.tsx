import type { FeedItem as FeedItemType } from '../../types';
import { formatRelative } from '../../utils/dateUtils';
import { Card } from '../ui/Card';
import {
  Plus,
  ArrowRight,
  CheckCircle,
  Trash2,
  LogIn,
  MessageSquare,
} from 'lucide-react';

const actionConfig: Record<string, { icon: React.ReactNode; colorClass: string }> = {
  task_created: {
    icon: <Plus className="h-4 w-4" />,
    colorClass: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
  },
  task_moved: {
    icon: <ArrowRight className="h-4 w-4" />,
    colorClass: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
  },
  task_completed: {
    icon: <CheckCircle className="h-4 w-4" />,
    colorClass: 'text-green-500 bg-green-50 dark:bg-green-900/20',
  },
  task_deleted: {
    icon: <Trash2 className="h-4 w-4" />,
    colorClass: 'text-red-500 bg-red-50 dark:bg-red-900/20',
  },
  user_joined: {
    icon: <LogIn className="h-4 w-4" />,
    colorClass: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
  },
  comment_added: {
    icon: <MessageSquare className="h-4 w-4" />,
    colorClass: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20',
  },
};

interface FeedItemProps {
  item: FeedItemType;
  animate?: boolean;
}

export function FeedItem({ item, animate = false }: FeedItemProps) {
  const config = actionConfig[item.action] || {
    icon: <Plus className="h-4 w-4" />,
    colorClass: 'text-gray-500 bg-gray-50 dark:bg-gray-900/20',
  };

  return (
    <Card className={`flex items-start gap-3 py-3 ${animate ? 'animate-in slide-in-from-bottom-2' : ''}`}>
      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${config.colorClass}`}>
        {config.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-semibold">{item.member}</span>{' '}
          <span>{item.message}</span>
        </p>
        <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
          {formatRelative(item.timestamp)}
        </p>
      </div>
    </Card>
  );
}
