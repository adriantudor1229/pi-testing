interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm
        dark:border-gray-700 dark:bg-gray-800
        ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}
        ${className}`}
    >
      {children}
    </div>
  );
}
