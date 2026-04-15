import { cn } from '../../utils/cn';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-md border border-border bg-surface-light p-6',
        className
      )}
    >
      {children}
    </div>
  );
}

function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn('text-lg font-semibold text-text', className)}>{children}</h3>;
}

function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('text-text-muted', className)}>{children}</div>;
}

function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mt-4 pt-4 border-t border-border', className)}>{children}</div>;
}

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Footer = CardFooter;

export { Card };
