import { cn } from '../../utils/cn';

function Footer({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <footer className={cn('border-t border-border bg-surface', className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {children}
      </div>
    </footer>
  );
}

function FooterGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4', className)}>{children}</div>;
}

function FooterSection({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(className)}>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text">{title}</h4>
      <div className="flex flex-col gap-2 text-text-muted">{children}</div>
    </div>
  );
}

function FooterBottom({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('mt-12 border-t border-border pt-8 text-center text-text-muted text-sm', className)}>
      {children}
    </div>
  );
}

Footer.Grid = FooterGrid;
Footer.Section = FooterSection;
Footer.Bottom = FooterBottom;

export { Footer };
