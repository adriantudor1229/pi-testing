import type { FeedAction } from '../types';

const memberNames = ['The Fool', 'The Justice', 'The Sun', 'The Hanged Man'];

const actions: { action: FeedAction; messages: string[] }[] = [
  {
    action: 'task_created',
    messages: [
      'Created a new task',
      'Added a task to the backlog',
      'Opened a new feature request',
      'Started a fresh task',
      'Added a refinement story',
    ],
  },
  {
    action: 'task_moved',
    messages: [
      'Moved a task to In Progress',
      'Pushed a task to Review',
      'Promoted a task to the next column',
      'Moved a card to the Review board',
      'Picked up a task from the backlog',
    ],
  },
  {
    action: 'task_completed',
    messages: [
      'Completed a task',
      'Marked a task as done ✓',
      'Finished their assigned work',
      'Wrapped up a feature',
      'Closed out a bug fix',
    ],
  },
  {
    action: 'task_deleted',
    messages: [
      'Removed a stale task',
      'Cleaned up a duplicate ticket',
      'Archived an outdated item',
    ],
  },
  {
    action: 'comment_added',
    messages: [
      'Commented on a task',
      'Left feedback on a pull request',
      'Replied to a discussion',
      'Added implementation notes',
      'Reviewed a colleague\'s work',
    ],
  },
  {
    action: 'user_joined',
    messages: [
      'Joined the project',
      'Came online',
    ],
  },
];

export function startFeedSimulation(
  onEvent: (event: { member: string; action: FeedAction; message: string }) => void,
  intervalMs: number = 8000
): () => void {
  const timer = setInterval(() => {
    const member = memberNames[Math.floor(Math.random() * memberNames.length)];
    const actionGroup = actions[Math.floor(Math.random() * actions.length)];
    const message = actionGroup.messages[Math.floor(Math.random() * actionGroup.messages.length)];

    onEvent({
      member,
      action: actionGroup.action,
      message,
    });
  }, intervalMs);

  return () => clearInterval(timer);
}
