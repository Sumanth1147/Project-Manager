# Interview revision notes

## Naming

- PascalCase = type or React component
- camelCase = values / variables
- Component file matches component name: `Button/Button.tsx`
- Type-only files use `.ts`, not `.tsx` (`.tsx` exists only to enable JSX parsing)

## Rendering & JSX

- `&&` is safe for strings/objects, **dangerous for numbers**. `0 && <p/>` returns `0`, and React renders `0` on screen. Use `length > 0 &&` or a ternary.
- **`&&` subtlety:** `condition && 'value'` returns the value or **`false`**, never `true` — that's why `cn()` types allow `false` and `filter(Boolean)` drops it.
- React renders `undefined`, `null`, `false` as nothing — no DOM node, no warning.
- **Guard when wrapping, don't guard when passing through.** `{message && <p>{message}</p>}` needs the guard (avoids an empty `<p>`); `{action}` does not.
- JSX attribute value must be a quoted string or an expression in braces. `disabled=true` is a parse error; `disabled` alone means `true`.

## TypeScript

- Use union types, not `enum` (`erasableSyntaxOnly` forbids enums; unions are the team norm anyway).
- With `verbatimModuleSyntax`, type-only imports must be `import type { X } from '...'`.
- Import `ReactNode` / `ComponentProps` directly; the `React.` namespace is not in scope in a module file.
- `useParams()` values are always `string | undefined`. The generic only constrains key names — it does **not** remove `undefined`.
- Never silence the compiler with `!` or `as`. Guard at runtime; TypeScript is pointing at a real case.
- Type narrowing follows **control flow** — a guard only narrows if the block exits (`return`/`throw`).
- `find()` returns `T | undefined`. Let the lookup absorb the param check instead of writing two guards.
- `?.` for maybe-missing, `??` for the fallback. Use `??` not `||` — `||` also replaces `''` and `0`.
- Type predicate to narrow after filter: `.filter((u): u is User => u !== undefined)`.
- Prefer the library's exported types (`NavLinkRenderProps`) over hand-written structural annotations.
- Extract a named type alias as soon as a union repeats or gets long.
- `tsc` passing means types are **consistent**, not that code is **correct**.
- **Same-signature blind spot:** functions with the same parameter types (e.g. both `(status: TaskStatus) => string`) compile even if you pass the wrong one — TypeScript can't tell them apart. Defense: name functions clearly (`getStatusLabel` vs `getPriorityLabel`) and call the right one deliberately; types alone won't catch a swapped helper.

## Component API design

- **Inside a component:** hooks → guards → derived values → JSX. Lookups that need a guard (`project`) go before it; values that need the guarded object (`owner`, `members`) go after.
- Pass the whole domain object (`project`), not three separate fields.
- **Composition over configuration:** accept `action?: ReactNode` instead of `actionLabel` + `onActionClick`. Avoids the slide into `actionVariant`, `secondaryActionLabel`, …
- Extend native props so consumers get `aria-*`, `title`, handlers for free:
  `interface ButtonProps extends ComponentProps<'button'> { variant?: ButtonVariant }`
- **Concrete payoff:** `extends ComponentProps<'button'>` lets callers pass `aria-label` (and any native button attr) without you adding a prop for each one — `{...rest}` forwards it to the DOM.
- **Override vs merge** decides prop-spread order:
  - `type` only needs overriding → placing it before `{...rest}` is enough
  - `className` needs merging → must be destructured out and combined manually
- Default `type="button"`, because HTML defaults a button inside a form to `submit` (causes accidental page reloads).
- Keep shared components non-interactive unless that's their job. A component that's sometimes a div and sometimes a button gets messy.
- **Clickable card — `Link` vs `div`:** no actions inside → wrap the whole card in `<Link>` (one clean click target). The moment you add delete/archive/edit buttons → switch to a `<div>` card and link only the part that should navigate. `<button>` inside `<a>` is invalid HTML — screen readers get confused, and clicking the button also fires navigation.

## `components/` vs `features/`

- **Shared UI** (`components/`): knows nothing about the domain. No `Project`, `Task`, `User` imports.
- **Feature** (`features/`): imports a domain type and knows product rules (what to show, where to link).
- Rule: **if it imports a domain type, it is a feature. If it does not, it is shared UI.**
- Barrel `index.ts` per component folder, so consumers import from the folder, not the file.

## The four states of every list

- `<ul>` + `<li>`, not a pile of `<div>`s. Screen readers announce "list, 2 items" and let users jump between entries; div soup announces nothing. Free a11y and semantically honest — it is a list.
- Loading / Error / **Empty** / Populated — juniors build only the last one.
- Keep "no data yet" separate from "no results for this filter" separate from "request failed". Different message, different action.
- A blank screen is ambiguous: loading? broken? filtered out? genuinely empty?
- The empty state is where the primary call to action belongs — it's onboarding, not an apology.

## App structure

| File                | Owns                                                    |
| ------------------- | ------------------------------------------------------- |
| `main.tsx`          | mounting React to the DOM                               |
| `App.tsx`           | providers (router, later Redux / Query / ErrorBoundary) |
| `app/router.tsx`    | route → component mapping                               |
| `app/AppLayout.tsx` | persistent chrome (nav, sidebar)                        |

## Routing (React Router v7)

- Pathless layout route: `{ element: <AppLayout/>, children: [...] }` — shared UI without adding a URL segment.
- Child paths are **relative**: `'dashboard'`, not `'/dashboard'`.
- `index: true` matches the parent's path exactly.
- `'*'` is the catch-all; a literal `'notfound'` only matches `/notfound`. Keep `'*'` last.
- `<Navigate replace/>` swaps the history entry so Back doesn't loop.
- `Link`, never `<a href>` — an anchor reloads the bundle and destroys app state.
- `NavLink` gives `{ isActive }` for active styling.
- Auth pages live **outside** the app layout, so `ProtectedRoute` later wraps the layout instead of every page.
- On "not found", render inline — don't redirect. A redirect throws away the URL the user typed.
- REST-style URLs: `/projects` for the list, `/projects/:id` for one member.

## Normalized data

- Store IDs (`ownerId`, `assigneeId`), not nested objects. Join at render time.
- Resolve IDs to objects: `memberIds.map(id => users.find(u => u.id === id)).filter((u): u is User => u !== undefined)` — `find` returns `User | undefined`; the type predicate drops misses and narrows to `User[]`.
- Why: one source of truth, no duplication, matches what APIs/DBs return.
- Cost: lookups. `find` inside `map` is O(n×m) — fine for 3 users, build a `Map` at ~thousands.
- Mock data must be referentially consistent, or you debug phantom `undefined`s.
- Sets up `createEntityAdapter` in Redux Toolkit later.

## CSS

- Design tokens in `:root` (colors, spacing, radius); dark mode overrides **only** colors, never spacing.
- `--bg` = page, `--surface` = anything raised above it (card, modal, dropdown). Inverts in dark mode.
- A component owns its own styles, colocated: `Button/Button.css`.
- `index.css` = reset + tokens only.
- **Components control their inside; parents control their outside.** No `width`/`margin` on a shared component.
- `gap` on the flex parent, `margin: 0` on children — parent owns spacing between children.
- Use classes, not element selectors (`nav { }` will hit a future sidebar nav).
- CSS keywords are never quoted: `cursor: pointer`, not `cursor: 'pointer'`.
- `border: 2px` is invalid — shorthand needs a style (`2px solid transparent`).
- Buttons/inputs don't inherit fonts. Set `font-family: inherit`.
- Never remove a focus outline without replacing it. Use `:focus-visible` (keyboard only, not mouse clicks).
- `max-width: 40ch` for readable text width; `ch` ≈ one character.
- Dashed border = placeholder/empty; solid border = real content.

## Tooling

- `npm run format` — Prettier writes; `npm run format:check` — CI-safe, fails instead of rewriting.
- Format-on-save only touches files you save; run Prettier once across the repo after installing it.
- When a rule has both a core and a `@typescript-eslint` version, turn the core one **off**:
  ```js
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',
  ```
- Keep the dev server terminal visible. A Vite transform error means HMR was **discarded** — the browser is running old code, so hard-refresh (`Ctrl+Shift+R`) after fixing a parse error.
- `console.log` over `alert` — `alert` blocks the event loop and gets throttled by the browser.
- Prettier format: `npx prettier --write src eslint.config.js`
- Git SSL issuer error (local workaround): `$env:GIT_SSL_NO_VERIFY = "true"`

## How to say it in an interview

- "Generic pieces stay reusable. Feature components compose them and own domain knowledge."
- "I keep presentational components dumb so I don't leak domain types into the design system."
- "For every list I handle four states: loading, error, empty, and populated."
- "Route config lives in one file, so adding code splitting later doesn't touch the pages."
- "`useParams` can't know which route matched, so I guard at runtime rather than asserting with `!`."
- "I built a CSS custom property token layer, so theming and density changes don't touch component code."
