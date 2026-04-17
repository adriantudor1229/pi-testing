import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Task } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { mockUsers } from '../../data/mockUsers';
import { Pencil, Trash2 } from 'lucide-react';

const priorityVariant: Record<string, 'default' | 'info' | 'warning' | 'danger'> = {
  low: 'default',
  medium: 'info',
  high: 'warning',
  critical: 'danger',
};

interface TaskCardProps {
  task: Task;
  isDragging?: boolean;
  onEdit?: (task: Task) => void;
  onDelete?: (task: Task) => void;
}

export function TaskCard({ task, isDragging = false, onEdit, onDelete }: TaskCardProps) {
  const assignee = mockUsers.find((u) => u.id === task.assignee);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card
        className={`group cursor-grab active:cursor-grabbing
          ${isSortableDragging || isDragging ? 'opacity-50 shadow-lg ring-2 ring-blue-400' : ''}`}
      >
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-tight">
              {task.title}
            </h3>
            <Badge variant={priorityVariant[task.priority]}>{task.priority}</Badge>
          </div>
          {task.description && (
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
              {task.description}
            </p>
          )}
          <div className="flex items-center justify-between">
            {assignee && (
              <div className="flex items-center gap-1.5">
                <Avatar fallback={assignee.avatar} size="sm" />
                <span className="text-xs text-gray-500 dark:text-gray-400">{assignee.name}</span>
              </div>
            )}
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {onEdit && (
                <button
                  onClick={(e) => { e.stopPropagation(); onEdit(task); }}
                  className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600
                    dark:hover:bg-gray-700 dark:hover:text-gray-300 transition-colors"
                  aria-label="Edit task"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
              )}
              {onDelete && (
                <button
                  onClick={(e) => { e.stopPropagation(); onDelete(task); }}
                  className="rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-500
                    dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors"
                  aria-label="Delete task"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
