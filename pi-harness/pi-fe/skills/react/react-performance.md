---
name: react-performance
description: React performance optimization — async waterfalls, bundle size, re-renders, rendering, JS performance (based on Vercel's 70 rules)
type: skill
---

# React Performance

Rules ordered by impact: CRITICAL > HIGH > MEDIUM > LOW.

## Eliminating Async Waterfalls (CRITICAL)

- **Check cheap conditions before awaiting** — check a sync boolean before calling an async API
- **Defer await into branches** — move `await` to only the branch that uses the result
- **Parallelize independent operations** — `Promise.all()` instead of sequential awaits
- **Start promises early, await late** — kick off the fetch at the top, await where needed
- **Use Suspense boundaries** to stream content

```tsx
// BAD: sequential
const user = await getUser(id);
const posts = await getPosts(id);

// GOOD: parallel
const [user, posts] = await Promise.all([getUser(id), getPosts(id)]);
```

## Bundle Size (CRITICAL)

- **Import directly, avoid barrel files** — `import { Button } from './Button'` not `from './components'`
- **Use statically analyzable import paths** — no dynamic string concatenation
- **Dynamic import heavy components** — `React.lazy(() => import('./HeavyChart'))`
- **Defer third-party scripts** — load analytics/logging after hydration
- **Load modules conditionally** — only import when a feature is activated
- **Preload on hover/focus** — for perceived instant navigation

```tsx
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

## Re-render Optimization (MEDIUM)

- **Don't subscribe to state only used in callbacks** — pass via ref
- **Extract expensive work into memoized components** — only when profiled
- **Hoist default non-primitive props** — define `const defaults = {}` outside
- **Subscribe to derived booleans, not raw values** — `isOpen` not full object
- **Derive state during render, not in effects**
- **Use functional setState** — `setCount(c => c + 1)` avoids deps
- **Lazy state init** — `useState(() => computeExpensive())`
- **Don't memo simple primitives** — `a + b` is cheaper than memo overhead
- **Split hooks with independent dependencies**
- **Put interaction logic in event handlers, not effects**
- **Use `startTransition` for non-urgent updates**
- **Use `useDeferredValue`** to defer expensive child renders
- **Use refs for transient frequent values** — mouse position, scroll offset
- **Never define components inside components**

```tsx
// BAD: new object every render breaks memo
<Child options={{}} />

// GOOD: stable reference
const defaultOptions = {};
<Child options={defaultOptions} />
```

## Rendering Performance (MEDIUM)

- **Use `content-visibility: auto`** for long lists below the fold
- **Virtualize long lists** with `@tanstack/react-virtual`
- **Hoist static JSX** outside components
- **Animate a div wrapper, not the SVG element**
- **Reduce SVG coordinate precision** — 2 decimal places
- **Use ternary for conditionals** — not `&&` (avoids rendering `0`)
- **Prefer `useTransition` for loading states**
- **Use React DOM resource hints** — `<link rel="preload">`

## JavaScript Performance (LOW-MEDIUM)

- **Build Map/Set for repeated lookups** — O(1) vs O(n)
- **Cache object property access in loops**
- **Combine iterations** — one `reduce` instead of `filter().map()`
- **Use `flatMap`** to map and filter in one pass
- **Use `toSorted()`** for immutable sorting
- **Check array length before expensive comparison**
- **Return early from functions**
- **Hoist RegExp outside loops**
- **Use `requestIdleCallback`** for non-critical work
- **Group CSS changes** via classes or `cssText`
- **Cache localStorage/sessionStorage reads**

```tsx
// BAD: multiple passes
const result = items.filter(x => x.active).map(x => x.name);

// GOOD: single pass
const result = items.flatMap(x => x.active ? [x.name] : []);
```

## Advanced Patterns (LOW)

- **Don't put `useEffectEvent` results in effect deps**
- **Store event handlers in refs** for stable references
- **Initialize app singletons once** — module-level flag, not effect
- **Use `useLatest`** for stable callback refs

## Client-Side Data Tips

- Use SWR or TanStack Query for request deduplication
- Deduplicate global event listeners (resize, scroll)
- Use passive listeners for scroll/touch
- Version and minimize localStorage data
