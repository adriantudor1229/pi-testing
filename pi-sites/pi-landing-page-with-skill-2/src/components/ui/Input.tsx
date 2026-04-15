import { type InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-on-surface">{label}</label>}
      <input
        className={cn(
          'rounded-sm border border-border bg-surface-light px-3 py-2 text-on-surface outline-none transition-colors',
          'focus:border-primary',
          error && 'border-error',
          className
        )}
        {...props}
      />
      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
}

export { Input };
