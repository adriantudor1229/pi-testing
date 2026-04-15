---
name: react-core
description: Core React development patterns — components, hooks, props, state management, forms, API layer, error handling, routing
type: skill
---

# React Core

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
- Prefix event handler props with `on`
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
// Use ternary, not && — avoids rendering falsy values like 0
{isLoggedIn ? <UserMenu /> : null}
{isLoggedIn ? <UserMenu /> : <LoginButton />}

// Multiple conditions — extract or early return
const content = (() => {
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <EmptyState />;
  return <DataList items={data} />;
})();
```

### Don't Define Components Inside Components

```tsx
// BAD: new component every render, destroys state
function Parent() {
  function Child() { return <div>child</div>; }
  return <Child />;
}

// GOOD: module level
function Child() { return <div>child</div>; }
function Parent() { return <Child />; }
```

---

## Hooks

### Rules
- Only call at the top level (never inside conditions or loops)
- Only call from React functions
- Prefix custom hooks with `use`

### Data Fetching Hook

```tsx
function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetchUser(userId)
      .then((data) => { if (!cancelled) setUser(data); })
      .catch((err) => { if (!cancelled) setError(err); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [userId]);

  return { user, loading, error };
}
```

### Debounced Value Hook

```tsx
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
- Always include cleanup when subscribing
- Keep dependency arrays accurate
- Prefer derived state over effects that sync state
- Put interaction logic in event handlers, not effects
- Use primitive dependencies
- Split hooks with independent dependencies

```tsx
// BAD: syncing state
const [items, setItems] = useState([]);
const [count, setCount] = useState(0);
useEffect(() => { setCount(items.length); }, [items]);

// GOOD: derive it
const count = items.length;
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
| Server data | TanStack Query |
| URL state | URL search params / router |
| Form state | React Hook Form |

### Principles
- Lift state only when two siblings need it
- Colocate state with the component that owns it
- Don't put everything in global state

### TanStack Query

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
    mutationFn: (data: CreateUserDto) => api.createUser(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }),
  });
}
```

---

## API Layer

```tsx
const API_BASE = import.meta.env.VITE_API_URL;

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
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

---

## Forms (React Hook Form + Zod)

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

  const onSubmit = (data: LoginForm) => { /* handle login */ };

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

// Wrap at route or feature level
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <Dashboard />
</ErrorBoundary>
```

---

## Routing (React Router)

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'users/:id', element: <UserProfile /> },
    { path: '*', element: <NotFound /> },
  ]},
]);

function App() {
  return <RouterProvider router={router} />;
}
```

### Protected Routes

```tsx
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
}
```
