import type { TarotMember } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface MemberCardProps {
  member: TarotMember;
}

const phaseVariant: Record<string, 'default' | 'info' | 'warning' | 'success'> = {
  Planning: 'info',
  Build: 'warning',
  Review: 'default',
  Complete: 'success',
};

export function MemberCard({ member }: MemberCardProps) {
  const usagePercent = Math.round((member.tokenUsage / member.tokenLimit) * 100);

  const barColor =
    usagePercent > 85
      ? 'bg-red-500'
      : usagePercent > 60
        ? 'bg-yellow-500'
        : 'bg-green-500';

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{member.icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
            {member.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
        </div>
        <Badge variant={phaseVariant[member.phase] || 'default'}>{member.phase}</Badge>
      </div>
      <div>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Token usage</span>
          <span className="text-gray-700 dark:text-gray-200">{member.tokenUsage.toLocaleString()} / {member.tokenLimit.toLocaleString()}</span>
        </div>
        <div className="mt-1 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${barColor}`}
            style={{ width: `${usagePercent}%` }}
          />
        </div>
      </div>
    </Card>
  );
}
