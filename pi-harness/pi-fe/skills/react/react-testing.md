---
name: react-testing
description: React testing patterns with Vitest and Testing Library — component tests, hooks, async, mocking
type: skill
---

# React Testing

## Stack
- **Runner**: Vitest
- **DOM**: @testing-library/react
- **User events**: @testing-library/user-event
- **Assertions**: Vitest built-in + @testing-library/jest-dom

## Principles

- Test behavior, not implementation (what the user sees)
- Use `getByRole`, `getByLabelText`, `getByText` over `getByTestId`
- Mock API calls, not internal functions
- One assertion per behavior (multiple `expect` is fine for one flow)
- Tests should break when behavior changes, not when code is refactored

## Component Test

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

  it('calls onSubmit with form data', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    render(<LoginForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /login/i }));

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });
});
```

## Testing Async / Loading States

```tsx
import { render, screen, waitFor } from '@testing-library/react';

it('shows loading then data', async () => {
  render(<UserList />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
});
```

## Mocking API Calls

```tsx
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: '1', name: 'John Doe' },
    ]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('renders users from API', async () => {
  render(<UserList />);
  expect(await screen.findByText('John Doe')).toBeInTheDocument();
});
```

## Testing Custom Hooks

```tsx
import { renderHook, waitFor } from '@testing-library/react';

it('returns debounced value after delay', async () => {
  const { result, rerender } = renderHook(
    ({ value }) => useDebouncedValue(value, 300),
    { initialProps: { value: 'hello' } }
  );

  rerender({ value: 'world' });
  expect(result.current).toBe('hello');

  await waitFor(() => {
    expect(result.current).toBe('world');
  });
});
```

## Testing with Providers

```tsx
function renderWithProviders(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    </QueryClientProvider>
  );
}
```

## What to Test

| Test | Priority |
|------|----------|
| User can complete the main flow | HIGH |
| Validation errors show correctly | HIGH |
| Loading and error states render | MEDIUM |
| Edge cases (empty lists, long text) | MEDIUM |
| Keyboard navigation works | LOW |
| Responsive behavior | LOW |

## What NOT to Test

- Implementation details (internal state values)
- Third-party library internals
- Snapshot tests of large components (brittle)
- CSS class names or styles directly
