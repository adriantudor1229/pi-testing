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

function Main({ children, className }: { children: React.ReactNode; className?: string }) {
  return <main className={cn('flex-1', className)}>{children}</main>;
}

Layout.Main = Main;

export { Layout };
