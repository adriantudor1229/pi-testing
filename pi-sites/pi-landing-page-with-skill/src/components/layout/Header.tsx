import { cn } from '../../utils/cn';

function Header({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md',
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </header>
  );
}

function HeaderLogo({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('flex items-center gap-2 text-xl font-semibold', className)}>{children}</div>;
}

function HeaderNav({ children, className }: { children: React.ReactNode; className?: string }) {
  return <nav className={cn('hidden md:flex items-center gap-8', className)}>{children}</nav>;
}

function HeaderActions({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('flex items-center gap-4', className)}>{children}</div>;
}

Header.Logo = HeaderLogo;
Header.Nav = HeaderNav;
Header.Actions = HeaderActions;

export { Header };
