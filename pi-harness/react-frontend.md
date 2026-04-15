---
name: react-frontend
description: Complete React development skill covering component patterns, state management, hooks, styling, project structure, and performance optimization (includes Vercel's 70 performance rules)
type: skill
---

# React Frontend Development

## When to Use

- Building or modifying React components
- Setting up new React projects
- Working with state management, routing, or data fetching
- Styling components
- Writing frontend tests
- Reviewing or refactoring code for performance
- Optimizing bundle size or load times

## Project Structure

```
src/
  components/        # Reusable UI components
    Button/
      Button.tsx
      Button.test.tsx
      index.ts
  features/          # Feature-based modules
    auth/
      components/
      hooks/
      api.ts
      types.ts
      index.ts
  hooks/             # Shared custom hooks
  services/          # API clients and external services
  utils/             # Pure utility functions
  types/             # Shared TypeScript types
  App.tsx
  main.tsx
```

- Organize by feature, not by file type
- Each component gets its own folder when it has tests or sub-components
- Barrel exports (`index.ts`) for clean imports
- Keep files under 300 lines

---

## Component Patterns

### Functional Components Only

```tsx
function UserCard({ name, email }: UserCardProps) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
```

### Props

```tsx
type UserCardProps = {
  name: string;
  email: string;
  avatar?: string;
  onSelect?: (id: string) => void;
};
```

- Use `type` over `interface` for props (unless extending)
- Destructure props in the function signature
- Prefix event handler props with `on` (onClick, onSubmit, onSelect)
- Use `children: React.ReactNode` when accepting children

### Composition Over Configuration

```tsx
// GOOD: composable
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>

// AVOID: prop-heavy
<Card title="Title" body="Content" headerClass="..." bodyClass="..." />
```

### Conditional Rendering

```tsx
// Use ternary, not && — avoids rendering 0 or "" by accident
{isLoggedIn ? <UserMenu /> : null}

// Binary condition
{isLoggedIn ? <UserMenu /> : <LoginButton />}

// Multiple conditions - extract to a variable or early return
const content = (() => {
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <EmptyState />;
  return <DataList items={data} />;
})();
```

### Don't Define Components Inside Components

```tsx
// BAD: creates a new component on every render, destroys state
function Parent() {
  function Child() { return <div>child</div>; }
  return <Child />;
}

// GOOD: define at module level
function Child() { return <div>child</div>; }
function Parent() { return <Child />; }
```

### Hoist Static JSX

```tsx
// GOOD: static JSX defined outside to avoid re-creation
const emptyIcon = <Icon name="empty" />;

function EmptyState() {
  return <div>{emptyIcon}<p>No results</p></div>;
}
```

---

## Hooks

### Rules
- Only call hooks at the top level (never inside conditions or loops)
- Only call hooks from React functions (components or custom hooks)
- Prefix custom hooks with `use`

### Common Patterns

```tsx
// Data fetching hook
function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetchUser(userId)
      .then((data) => {
        if (!cancelled) setUser(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [userId]);

  return { user, loading, error };
}
```

```tsx
// Debounced value hook
function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
```

### useEffect Guidelines
- Always include a cleanup function when subscribing to something
- Keep dependency arrays accurate (don't lie about dependencies)
- If an effect runs too often, rethink what it depends on
- Prefer derived state over effects that sync state
- Put interaction logic in event handlers, not effects
- Use primitive dependencies in effects (not objects/arrays)

```tsx
// BAD: syncing state with an effect
const [items, setItems] = useState([]);
const [count, setCount] = useState(0);
useEffect(() => { setCount(items.length); }, [items]);

// GOOD: derive it
const [items, setItems] = useState([]);
const count = items.length;
```

### Split Hooks with Independent Dependencies

```tsx
// BAD: one effect doing two unrelated things
useEffect(() => {
  fetchUser(userId);
  logPageView(page);
}, [userId, page]);

// GOOD: separate effects for separate concerns
useEffect(() => { fetchUser(userId); }, [userId]);
useEffect(() => { logPageView(page); }, [page]);
```

---

## State Management

### Decision Guide

| Scope | Solution |
|-------|----------|
| Single component | `useState` |
| Parent-child (1-2 levels) | Props |
| Subtree (3+ levels) | Context |
| Complex local logic | `useReducer` |
| Global app state | Zustand or Redux Toolkit |
| Server data | TanStack Query (React Query) |
| URL state | URL search params / router |
| Form state | React Hook Form |

### Keep State Close to Where It's Used
- Lift state only when two siblings need the same data
- Colocate state with the component that owns it
- Don't put everything in global state

### Re-render Optimization for State

- **Don't subscribe to state only used in callbacks** — pass it via ref instead
- **Subscribe to derived booleans, not raw values** — `isOpen` instead of the full modal object
- **Use functional setState for stable callbacks** — `setCount(c => c + 1)` avoids deps on `count`
- **Pass a function to useState for expensive initial values** — `useState(() => computeExpensive())`
- **Don't wrap simple primitives in useMemo** — `a + b` is cheaper than memo overhead
- **Use refs for transient frequent values** — mouse position, scroll offset
- **Use `startTransition` for non-urgent updates** — keeps input responsive
- **Use `useDeferredValue` to defer expensive child renders**

### Server State with TanStack Query

```tsx
function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => api.getUsers(),
    staleTime: 5 * 60 * 1000,
  });
}

function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser: CreateUserDto) => api.createUser(newUser),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
```

---

## API Layer

```tsx
// services/api.ts - centralized API client
const API_BASE = import.meta.env.VITE_API_URL;

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new ApiError(response.status, await response.text());
  }

  return response.json();
}

export const api = {
  getUsers: () => request<User[]>('/users'),
  getUser: (id: string) => request<User>(`/users/${id}`),
  createUser: (data: CreateUserDto) =>
    request<User>('/users', { method: 'POST', body: JSON.stringify(data) }),
};
```

### Client-Side Data Fetching Tips
- Use SWR or TanStack Query for automatic request deduplication
- Deduplicate global event listeners (resize, scroll)
- Use passive listeners for scroll/touch events
- Version and minimize localStorage data — use a schema

---

## Styling

### Tailwind CSS (Preferred)

```tsx
function Button({ variant = 'primary', children }: ButtonProps) {
  const base = 'px-4 py-2 rounded font-medium transition-colors';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  return (
    <button className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}
```

- Use `clsx` or `cn` utility for conditional classes
- Extract repeated class combinations into component variables, not global CSS
- Use CSS variables for theming over Tailwind config when dynamic

### cn Utility

```tsx
// utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Forms

### React Hook Form + Zod

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    // handle login
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Error Handling

### Error Boundaries

```tsx
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// Wrap at route or feature level, not around every component
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <Dashboard />
</ErrorBoundary>
```

---

## Testing

### Component Tests with Vitest + Testing Library

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';

describe('LoginForm', () => {
  it('shows validation error for invalid email', async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(screen.getByLabelText(/email/i), 'not-an-email');
    await user.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByText(/invalid email/i)).toBeInTheDocument();
  });
});
```

### Testing Principles
- Test behavior, not implementation (what the user sees, not internal state)
- Use `getByRole`, `getByLabelText`, `getByText` over `getByTestId`
- Mock API calls, not internal functions
- One assertion per behavior (multiple `expect` is fine if testing one flow)

---

## Performance Optimization

Rules are ordered by impact: CRITICAL > HIGH > MEDIUM > LOW.

### Eliminating Async Waterfalls (CRITICAL)

- **Check cheap conditions before awaiting** — check a sync boolean before calling an async API
- **Defer await into branches** — move `await` to only the branch that uses the result
- **Parallelize independent operations** — use `Promise.all()` instead of sequential awaits
- **Start promises early, await late** — kick off the fetch at the top, await where needed

```tsx
// BAD: sequential
const user = await getUser(id);
const posts = await getPosts(id);

// GOOD: parallel
const [user, posts] = await Promise.all([getUser(id), getPosts(id)]);
```

- **Use Suspense boundaries** to stream content and avoid blocking the entire page

### Bundle Size (CRITICAL)

- **Import directly, avoid barrel files** — `import { Button } from './Button'` not `from './components'`
- **Use statically analyzable import paths** — no dynamic string concatenation in imports
- **Dynamic import heavy components** — `React.lazy(() => import('./HeavyChart'))`
- **Defer third-party scripts** — load analytics/logging after hydration
- **Load modules conditionally** — only import when a feature is actually activated
- **Preload on hover/focus** — for perceived instant navigation

```tsx
// Route-level code splitting
const Dashboard = lazy(() => import('./features/dashboard'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
```

### Re-render Optimization (MEDIUM)

- **Extract expensive work into memoized components** — only when profiling confirms the issue
- **Hoist default non-primitive props** — define `defaultOptions = {}` outside the component
- **Use `useMemo` / `useCallback`** for expensive computations or stable references to memoized children
- **Don't optimize prematurely** — measure with React DevTools Profiler first

```tsx
// BAD: new object on every render breaks memo
<Child options={{}} />

// GOOD: stable reference
const defaultOptions = {};
<Child options={defaultOptions} />
```

### Rendering Performance (MEDIUM)

- **Use `content-visibility: auto`** for long lists below the fold
- **Virtualize long lists** with `@tanstack/react-virtual`
- **Animate a div wrapper, not the SVG element** — avoids layout thrashing
- **Reduce SVG coordinate precision** — 2 decimal places is enough
- **Use ternary for conditional rendering** — not `&&` (avoids rendering falsy values like `0`)
- **Prefer `useTransition` for loading states** over manual boolean flags
- **Use React DOM resource hints** — `<link rel="preload">` for critical assets

### JavaScript Performance (LOW-MEDIUM)

- **Build a Map for repeated lookups** — O(1) vs O(n) array scanning
- **Use Set for membership checks** — `set.has(x)` over `array.includes(x)`
- **Cache object property access in loops** — `const len = arr.length`
- **Combine iterations** — one `reduce` instead of `filter().map()`
- **Use `flatMap`** to map and filter in one pass
- **Use `toSorted()`** for immutable sorting
- **Check array length before expensive comparison**
- **Return early from functions** — avoid deep nesting
- **Hoist RegExp creation outside loops**
- **Use `requestIdleCallback`** to defer non-critical work

```tsx
// BAD: multiple passes
const result = items
  .filter(item => item.active)
  .map(item => item.name);

// GOOD: single pass
const result = items.flatMap(item =>
  item.active ? [item.name] : []
);
```

### Advanced Patterns (LOW)

- **Don't put `useEffectEvent` results in effect deps**
- **Store event handlers in refs** when you need a stable reference without re-subscribing
- **Initialize app-level singletons once** — use a module-level flag, not an effect
- **Use `useLatest` pattern** for stable callback refs that always see latest closure values

---

## Checklist Before Marking Work Done

- [ ] Components are small and focused (under 200 lines)
- [ ] Props are typed
- [ ] No inline styles (use Tailwind or CSS modules)
- [ ] Loading and error states handled
- [ ] Forms validated with schema
- [ ] Key prop set on lists
- [ ] No console.log left in code
- [ ] Tests cover the main user flow
- [ ] No async waterfalls (independent fetches are parallelized)
- [ ] No barrel file imports in performance-sensitive paths
- [ ] Heavy components are lazy loaded
- [ ] No unnecessary re-renders (profiled if in doubt)
