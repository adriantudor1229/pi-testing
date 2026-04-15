import { cn } from '../../utils/cn';

type BadgeProps = {
  variant?: 'primary' | 'secondary' | 'success' | 'error';
  children: React.ReactNode;
  className?: string;
};

const variants = {
  primary: 'bg-primary/20 text-primary',
  secondary: 'bg-secondary/20 text-secondary',
  success: 'bg-success/20 text-success',
  error: 'bg-error/20 text-error',
};

function Badge({ variant = 'primary', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export { Badge };
export type { BadgeProps };
