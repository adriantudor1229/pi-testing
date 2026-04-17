import { mockTeam } from '../../data/mockTeam';
import { MemberCard } from './MemberCard';

export function TeamGrid() {
  return (
    <div>
      <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">Team</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockTeam.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
