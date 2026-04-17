import { useState, useEffect } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useTaskStore } from '../../stores/taskStore';
import { useFeedStore } from '../../stores/feedStore';
import { useAuthStore } from '../../stores/authStore';
import { mockUsers } from '../../data/mockUsers';
import type { TaskPriority, TaskColumn, Task } from '../../types';
import { Trash2 } from 'lucide-react';
import { DeleteConfirmDialog } from './DeleteConfirmDialog';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  task?: Task | null;
}

export function TaskModal({ isOpen, onClose, task }: TaskModalProps) {
  const addTask = useTaskStore((s) => s.addTask);
  const updateTask = useTaskStore((s) => s.updateTask);
  const deleteTask = useTaskStore((s) => s.deleteTask);
  const addItem = useFeedStore((s) => s.addItem);
  const user = useAuthStore((s) => s.user);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<TaskPriority>('medium');
  const [assignee, setAssignee] = useState(user?.id || '');
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const isEditing = !!task;

  // Populate form when editing
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
      setAssignee(task.assignee);
    } else {
      setTitle('');
      setDescription('');
      setPriority('medium');
      setAssignee(user?.id || '');
    }
  }, [task, user?.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !user) return;

    if (isEditing && task) {
      updateTask(task.id, {
        title: title.trim(),
        description: description.trim(),
        priority,
        assignee,
      });
      addItem({
        member: user.name,
        action: 'task_moved',
        message: `Updated task "${title.trim()}"`,
      });
    } else {
      addTask({
        title: title.trim(),
        description: description.trim(),
        priority,
        assignee,
        column: 'todo' as TaskColumn,
      });
      addItem({
        member: user.name,
        action: 'task_created',
        message: `Created task "${title.trim()}"`,
      });
    }

    handleClose();
  };

  const handleDelete = () => {
    if (!task || !user) return;
    deleteTask(task.id);
    addItem({
      member: user.name,
      action: 'task_deleted',
      message: `Deleted task "${task.title}"`,
    });
    setDeleteConfirmOpen(false);
    handleClose();
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setPriority('medium');
    setAssignee(user?.id || '');
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen && !deleteConfirmOpen} onClose={handleClose} title={isEditing ? 'Edit Task' : 'Create Task'}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
            required
          />
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Task description"
              rows={3}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900
                placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2
                focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
                dark:placeholder:text-gray-500 dark:focus:border-blue-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as TaskPriority)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900
                dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Assignee</label>
            <select
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900
                dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
            >
              {mockUsers.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.avatar} {u.name} ({u.role})
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between gap-2 pt-2">
            {isEditing && (
              <Button
                type="button"
                variant="danger"
                size="sm"
                onClick={() => setDeleteConfirmOpen(true)}
              >
                <Trash2 className="mr-1 h-3.5 w-3.5" /> Delete
              </Button>
            )}
            <div className="flex gap-2 ml-auto">
              <Button variant="ghost" type="button" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit">{isEditing ? 'Update' : 'Create'}</Button>
            </div>
          </div>
        </form>
      </Modal>

      {isEditing && task && (
        <DeleteConfirmDialog
          isOpen={deleteConfirmOpen}
          onClose={() => setDeleteConfirmOpen(false)}
          onConfirm={handleDelete}
          taskTitle={task.title}
        />
      )}
    </>
  );
}
