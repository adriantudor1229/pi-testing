import { useState, useCallback } from 'react';
import { DndContext, PointerSensor, KeyboardSensor, useSensor, useSensors, closestCorners, DragOverlay } from '@dnd-kit/core';
import type { DragStartEvent, DragEndEvent } from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { useTaskStore } from '../../stores/taskStore';
import { useFeedStore } from '../../stores/feedStore';
import { useAuthStore } from '../../stores/authStore';
import { KanbanColumn } from './KanbanColumn';
import { TaskCard } from './TaskCard';
import { TaskModal } from './TaskModal';
import { Button } from '../ui/Button';
import { Plus } from 'lucide-react';
import type { TaskColumn as ColumnType, Task } from '../../types';

const columns: { id: ColumnType; title: string }[] = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'review', title: 'Review' },
  { id: 'done', title: 'Done' },
];

export function KanbanBoard() {
  const tasks = useTaskStore((s) => s.tasks);
  const moveTask = useTaskStore((s) => s.moveTask);
  const deleteTask = useTaskStore((s) => s.deleteTask);
  const addItem = useFeedStore((s) => s.addItem);
  const user = useAuthStore((s) => s.user);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      setActiveId(null);

      if (!over) return;

      const taskId = String(active.id);
      // The over.id could be a column id or another task id
      // Check if over.id matches a column
      const overId = String(over.id);
      const columnMatch = columns.find((c) => c.id === overId);

      const task = tasks.find((t) => t.id === taskId);
      if (!task) return;

      let targetColumn: ColumnType | null = null;

      if (columnMatch) {
        targetColumn = columnMatch.id;
      } else {
        // Dropped on a task — find that task's column
        const overTask = tasks.find((t) => t.id === overId);
        if (overTask) {
          targetColumn = overTask.column;
        }
      }

      if (targetColumn && task.column !== targetColumn) {
        const oldColumn = task.column;
        moveTask(taskId, targetColumn);
        const colTitle = columns.find((c) => c.id === targetColumn)?.title || targetColumn;
        addItem({
          member: user?.name || 'Unknown',
          action: targetColumn === 'done' ? 'task_completed' : 'task_moved',
          message: `Moved "${task.title}" from ${columns.find((c) => c.id === oldColumn)?.title} to ${colTitle}`,
        });
      }
    },
    [tasks, moveTask, addItem, user]
  );

  const handleDeleteTask = useCallback(
    (task: Task) => {
      deleteTask(task.id);
      addItem({
        member: user?.name || 'Unknown',
        action: 'task_deleted',
        message: `Deleted task "${task.title}"`,
      });
    },
    [deleteTask, addItem, user]
  );

  const handleEditTask = useCallback((task: Task) => {
    setEditingTask(task);
  }, []);

  const activeTask = activeId ? tasks.find((t) => t.id === activeId) : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Kanban Board</h1>
          <Button onClick={() => setModalOpen(true)}>
            <Plus className="mr-1 h-4 w-4" /> Add Task
          </Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {columns.map((col) => (
            <KanbanColumn
              key={col.id}
              id={col.id}
              title={col.title}
              tasks={tasks.filter((t) => t.column === col.id)}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>

        <TaskModal
          isOpen={modalOpen || !!editingTask}
          task={editingTask}
          onClose={() => {
            setModalOpen(false);
            setEditingTask(null);
          }}
        />
      </div>

      <DragOverlay>
        {activeTask ? (
          <div className="w-72 opacity-90 rotate-2">
            <TaskCard task={activeTask} isDragging />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
