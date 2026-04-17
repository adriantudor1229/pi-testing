import { mockReflections } from '../../data/mockReflections';
import { ReflectionCard } from './ReflectionCard';

export function ReflectionsPanel() {
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
        Reflections
      </h2>
      <div className="space-y-4">
        {mockReflections.map((reflection) => (
          <ReflectionCard key={reflection.id} reflection={reflection} />
        ))}
      </div>
    </div>
  );
}
