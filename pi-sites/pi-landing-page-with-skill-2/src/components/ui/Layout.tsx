import { cn } from '../../utils/cn';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn('flex min-h-screen flex-col bg-surface', className)}>
      {children}
    </div>
  );
}

function Header({ children, className }: LayoutProps) {
  return (
    <header className={cn('flex items-center justify-between border-b border-border px-4 py-3 sm:px-6 lg:px-8', className)}>
      {children}
    </header>
  );
}

function Main({ children, className }: LayoutProps) {
  return <main className={cn('flex-1', className)}>{children}</main>;
}

function Section({ children, className }: LayoutProps) {
  return (
    <section className={cn('mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8', className)}>
      {children}
    </section>
  );
}

function Footer({ children, className }: LayoutProps) {
  return (
    <footer className={cn('border-t border-border px-4 py-12 sm:px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </footer>
  );
}

Layout.Header = Header;
Layout.Main = Main;
Layout.Section = Section;
Layout.Footer = Footer;

export { Layout };
