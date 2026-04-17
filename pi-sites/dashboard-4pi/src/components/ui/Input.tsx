import type { InputSize } from '../../types';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inputSize?: InputSize;
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-4 py-3 text-base',
};

export function Input({
  label,
  error,
  inputSize = 'md',
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`rounded-lg border border-gray-300 bg-white text-gray-900
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:border-blue-500
          dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
          dark:placeholder:text-gray-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : ''}
          ${sizeClasses[inputSize]} ${className}`}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error && inputId ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={inputId ? `${inputId}-error` : undefined} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
