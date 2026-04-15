import { cn } from "../../utils/cn";

type BadgeProps = {
  variant?: "default" | "success" | "warning" | "danger";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const badgeVariants = {
  default: "bg-secondary/60 text-on-surface/80",
  success: "bg-emerald-500/20 text-emerald-400",
  warning: "bg-amber-500/20 text-amber-400",
  danger: "bg-error/20 text-error",
};

export function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2 py-0.5 text-xs font-medium",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
