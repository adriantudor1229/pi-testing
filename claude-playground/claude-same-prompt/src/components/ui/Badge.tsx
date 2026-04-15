import { cn } from '../../utils/cn';

type BadgeProps = {
  variant?: 'primary' | 'secondary' | 'success' | 'error';
  children: React.ReactNode;
  className?: string;
};

const variants = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/20 text-on-surface',
  success: 'bg-success/10 text-success',
  error: 'bg-error/10 text-error',
};

function Badge({ variant = 'primary', className, children }: BadgeProps) {
  return (
    <span className={cn('inline-block rounded-sm px-2.5 py-1 text-xs font-medium', variants[variant], className)}>
      {children}
    </span>
  );
}

export { Badge };
