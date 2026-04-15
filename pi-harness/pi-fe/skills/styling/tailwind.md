---
name: tailwind
description: Tailwind CSS patterns — utility classes, conditional styling, cn helper, component patterns, responsive design
type: skill
---

# Tailwind CSS

## cn Utility (Required)

Always use `cn` for conditional and merged classes:

```tsx
// utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Component Styling

### Variant Pattern

```tsx
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
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
        'rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
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
```

### Accepting className Override

Always spread `className` last via `cn` so consumers can override:

```tsx
function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('rounded-lg border border-gray-200 bg-white p-6', className)}>
      {children}
    </div>
  );
}

// Consumer can override
<Card className="bg-gray-50 p-4">Custom card</Card>
```

## Conditional Classes

```tsx
<div className={cn(
  'flex items-center gap-2 rounded px-3 py-2',
  isActive && 'bg-blue-50 text-blue-700',
  isDisabled && 'opacity-50 cursor-not-allowed',
  !isActive && !isDisabled && 'bg-white text-gray-700 hover:bg-gray-50'
)} />
```

## Responsive Design

```tsx
// Mobile-first: base → sm → md → lg → xl
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>

// Hide/show at breakpoints
<nav className="hidden md:flex">Desktop nav</nav>
<nav className="flex md:hidden">Mobile nav</nav>
```

## Dark Mode

```tsx
// Use dark: prefix (assumes class strategy)
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  <p className="text-gray-600 dark:text-gray-400">Muted text</p>
</div>
```

## Common Patterns

### Centered Layout
```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {children}
</div>
```

### Truncated Text
```tsx
<p className="truncate">Long text that gets cut off...</p>
<p className="line-clamp-2">Text limited to 2 lines...</p>
```

### Divider
```tsx
<div className="border-t border-gray-200 dark:border-gray-700" />
```

### Stack (Vertical Spacing)
```tsx
<div className="flex flex-col gap-4">{children}</div>
```

### Inline Items
```tsx
<div className="flex items-center gap-2">{children}</div>
```

## Do's and Don'ts

- **Do** use `cn()` for all conditional or merged classes
- **Do** extract repeated class strings into variant objects
- **Do** accept `className` prop on reusable components
- **Do** use responsive prefixes mobile-first
- **Don't** use `@apply` in CSS files (defeats the purpose)
- **Don't** use arbitrary values (`w-[347px]`) when a design token exists
- **Don't** mix Tailwind with inline styles
- **Don't** create global CSS classes for things Tailwind handles
