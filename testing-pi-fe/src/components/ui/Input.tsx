import { cn } from "../../utils/cn";

type InputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-medium uppercase tracking-wide text-on-surface/60"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "rounded border border-on-surface/10 bg-surface px-3 py-2 text-sm text-on-surface placeholder:text-on-surface/30 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50",
          error && "border-error focus:border-error focus:ring-error/50",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  );
}
