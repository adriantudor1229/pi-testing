import { type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: 'bg-primary text-white hover:opacity-90',
  secondary: 'bg-secondary text-on-surface hover:opacity-90',
  danger: 'bg-error text-white hover:opacity-90',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-sm font-medium transition-opacity cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
