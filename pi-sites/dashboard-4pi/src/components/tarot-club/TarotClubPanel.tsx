import { ProjectWidget } from './ProjectWidget';
import { TeamGrid } from './TeamGrid';
import { ReflectionsPanel } from './ReflectionsPanel';
import { TokenUsageTracker } from './TokenUsageTracker';

export function TarotClubPanel() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Tarot Club</h1>
      <ProjectWidget />
      <TeamGrid />
      <TokenUsageTracker />
      <ReflectionsPanel />
    </div>
  );
}
