import { type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

type InputProps = {
  label?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={id} className="text-text-muted text-[13px] font-medium uppercase tracking-wide">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'rounded-sm border border-border bg-surface-light px-3 py-2 text-text placeholder:text-text-muted/50 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary',
            error && 'border-error',
            className
          )}
          {...props}
        />
        {error && <span className="text-error text-sm">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
export type { InputProps };
