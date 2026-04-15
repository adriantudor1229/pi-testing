import { cn } from '../../utils/cn';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <div className={cn('rounded-md border border-border bg-surface-light p-6', className)}>
      {children}
    </div>
  );
}

function CardTitle({ children, className }: CardProps) {
  return <h3 className={cn('text-lg font-semibold text-on-surface', className)}>{children}</h3>;
}

function CardBody({ children, className }: CardProps) {
  return <div className={cn('mt-2 text-sm text-on-surface-muted', className)}>{children}</div>;
}

Card.Title = CardTitle;
Card.Body = CardBody;

export { Card };
