# DevBoard — Build Timeline & Progress Tracker

**Goal:** build a full project management app (frontend → backend → auth → state → optimization → deploy) to reach a solid mid-level frontend bar.

| | |
|---|---|
| Start date | Mon 17 Aug 2026 |
| Target end date | Sat 16 Jan 2027 |
| Total duration | 22 weeks (~5 months) |
| Budget | 10 hours/week = **220 hours** |
| Sundays | DSA only — no project work |

---

## How to use this file

1. **Every day you work**, add one row to the [Daily Log](#daily-log). Takes 20 seconds.
2. **Every Saturday**, sum the week's hours into the `Actual` column of the [Week Tracker](#week-tracker).
3. Compare `Cum. Actual` against `Cum. Planned`. That single number tells you if you're on pace.
4. Update the phase `Status` in the [Progress Dashboard](#progress-dashboard) when you finish a phase.
5. Tick the checkboxes in [Phase Checklists](#phase-checklists) as you complete each step.

**Log honest hours.** Two hours of staring at a bug is two hours. The tracker is only useful if it reflects reality.

---

## Weekly rhythm

| Day | Planned | Notes |
|---|---|---|
| Mon | 1.5 h | after work |
| Tue | 1.5 h | after work |
| Wed | 1.5 h | after work |
| Thu | 1.5 h | after work |
| Fri | 1.0 h | lighter, energy is low |
| Sat | 3.0 h | biggest block — save hard tasks for this |
| Sun | 0 h | **DSA** |
| **Total** | **10 h** | |

Missing a weekday is normal. Missing Saturday is what breaks the schedule — protect it.

---

## Progress Dashboard

| # | Phase | Weeks | Planned h | Actual h | Status |
|---|---|---|---|---|---|
| 1 | Foundation (UI + routing + mock data) | W1–W5 | 50 | | In progress |
| 2 | Real API (Express + Mongo + API layer) | W6–W8 | 30 | | Not started |
| 3 | Authentication & roles | W9–W10 | 20 | | Not started |
| 4 | TanStack Query | W11–W12 | 20 | | Not started |
| 5 | Redux Toolkit (client state) | W13–W14 | 20 | | Not started |
| 6 | Optimization & resilience | W15–W17 | 30 | | Not started |
| 7 | Security & testing | W18–W19 | 20 | | Not started |
| 8 | Deploy & present | W20 | 10 | | Not started |
| — | Buffer / stretch / interview prep | W21–W22 | 20 | | Not started |
| | **Total** | **22 weeks** | **220** | | |

Status values: `Not started` · `In progress` · `Done` · `Slipped`

---

## Week Tracker

Update `Actual` every Saturday. `Cum. Planned` is fixed — it's your pace line.

| Wk | Dates (Mon–Sat) | Focus | Planned | Actual | Cum. Planned | Cum. Actual | On pace? |
|---|---|---|---|---|---|---|---|
| 1 | 17–22 Aug 2026 | Setup, types, mock data, Button, Router | 10 | | 10 | | |
| 2 | 24–29 Aug | Projects list + detail, Kanban board, Card/Badge/EmptyState | 10 | | 20 | | |
| 3 | 31 Aug – 5 Sep | Forms: Login + Create Task. Modal/Input/Dropdown | 10 | | 30 | | |
| 4 | 7–12 Sep | Task detail + comments, search/filter/sort, `useMemo` | 10 | | 40 | | |
| 5 | 14–19 Sep | Dashboard stats, Profile, `useTasks` hook, cleanup | 10 | | 50 | | |
| 6 | 21–26 Sep | Express + Mongo setup, models, first endpoints | 10 | | 60 | | |
| 7 | 28 Sep – 3 Oct | `services/http.ts` + API layer, replace mock data | 10 | | 70 | | |
| 8 | 5–10 Oct | Full CRUD, loading/error states, `AbortController` | 10 | | 80 | | |
| 9 | 12–17 Oct | Register/login endpoints, JWT or cookies, auth context | 10 | | 90 | | |
| 10 | 19–24 Oct | `ProtectedRoute`, token refresh, roles, redirect-after-login | 10 | | 100 | | |
| 11 | 26–31 Oct | Install Query, convert projects + tasks, query keys, `staleTime` | 10 | | 110 | | |
| 12 | 2–7 Nov | Mutations, cache invalidation, optimistic Kanban move | 10 | | 120 | | |
| 13 | 9–14 Nov | RTK setup, typed hooks, UI slice (theme, sidebar) | 10 | | 130 | | |
| 14 | 16–21 Nov | Toast queue slice, selectors, remove prop drilling | 10 | | 140 | | |
| 15 | 23–28 Nov | `React.lazy` routes, `Suspense`, error boundaries | 10 | | 150 | | |
| 16 | 30 Nov – 5 Dec | Profiler, `memo`/`useCallback` where measured, skeletons | 10 | | 160 | | |
| 17 | 7–12 Dec | Accessibility: focus trap, keyboard nav, ARIA, labels | 10 | | 170 | | |
| 18 | 14–19 Dec | Vitest + RTL, test form validation, hook, reducer | 10 | | 180 | | |
| 19 | 21–26 Dec | MSW integration test, XSS/CSRF, 401/429, upload validation | 10 | | 190 | | |
| 20 | 28 Dec – 2 Jan 2027 | Deploy frontend + API, env vars, CORS, README + diagram | 10 | | 200 | | |
| 21 | 4–9 Jan 2027 | Buffer / stretch features (dnd-kit, dark mode, infinite scroll) | 10 | | 210 | | |
| 22 | 11–16 Jan 2027 | Interview stories, mock interviews, final polish | 10 | | 220 | | |

**Reading the pace line:** if `Cum. Actual` is within 5 hours of `Cum. Planned`, you're fine. More than 10 hours behind means cut scope, not sleep — drop a stretch feature rather than skipping tests or accessibility.

---

## Daily Log

Add a row every day you touch the project.

| Date | Hrs | Phase / Step | What I did | Blocker or note |
|---|---|---|---|---|
| 17 Aug | | P1 · Step 0–1 | Cleaned Vite starter, wrote types + mock data | |
| 17 Aug | | P1 · Step 2 | Button with `ComponentProps`, variants, CSS | |
| 18 Aug | | P1 · Step 2 | Fixed CSS, focus-visible, barrel import | Vite parse error cost time — keep terminal visible |
| 18 Aug | | P1 · Step 3 | Created 8 page shells | router.tsx + AppLayout.tsx still empty |
| 20 Aug | | P1 · Step 3 | | |
| | | | | |

> Backfill the hours for 17–20 Aug from memory, then keep it current.

---

## Phase Checklists

### Phase 1 — Foundation (W1–W5)

- [x] Step 0 · Clean the Vite starter
- [x] Step 1 · Types (`user`, `project`, `task`) + mock data
- [x] Step 2 · `Button` component
- [ ] Step 3 · Router — `AppLayout` + `router.tsx` + `RouterProvider`, `useParams` guards
- [ ] Step 4 · Projects list + project detail (`map`, keys, `find`)
- [ ] Step 5 · Kanban board with `useState`, immutable status moves
- [ ] Step 6 · Login form + Create Task modal (controlled inputs, validation)
- [ ] Step 7 · Task detail page + comments
- [ ] Step 8 · Search / filter / sort with `useMemo` + URL search params
- [ ] Step 9 · Dashboard statistics
- [ ] Step 10 · Extract `useTasks` custom hook
- [ ] Shared components: `Card`, `Badge`, `Avatar`, `Modal`, `Input`, `Dropdown`, `Spinner`, `EmptyState`, `ErrorMessage`
- [ ] Prettier installed and everything formatted

### Phase 2 — Real API (W6–W8)

- [ ] Express + MongoDB project scaffolded
- [ ] Models: User, Project, Task, Comment
- [ ] REST endpoints for projects and tasks
- [ ] `services/http.ts` fetch wrapper (base URL, headers, error normalizing)
- [ ] `projectApi`, `taskApi`, `userApi` modules
- [ ] All mock data removed from components
- [ ] Loading / error / empty states on every screen
- [ ] `AbortController` on unmount
- [ ] CORS + `.env` with `VITE_API_URL`

### Phase 3 — Authentication (W9–W10)

- [ ] Register + login endpoints with hashed passwords
- [ ] Token strategy decided (HTTP-only cookie preferred) and documented
- [ ] Auth context / provider
- [ ] `ProtectedRoute` wrapping the layout route
- [ ] Redirect to intended page after login
- [ ] Logout clears session everywhere
- [ ] Token refresh on 401
- [ ] Roles `admin | member | viewer` hiding destructive UI

### Phase 4 — TanStack Query (W11–W12)

- [ ] Query client + provider configured
- [ ] Projects, tasks, comments converted to `useQuery`
- [ ] Query key naming convention documented
- [ ] `staleTime` / `gcTime` tuned deliberately
- [ ] Mutations + cache invalidation
- [ ] Optimistic update on Kanban card move, with rollback on error
- [ ] All manual `useEffect` fetching deleted

### Phase 5 — Redux Toolkit (W13–W14)

- [ ] Store + typed `useAppSelector` / `useAppDispatch`
- [ ] UI slice: theme, sidebar open
- [ ] Toast/notification queue slice
- [ ] Memoized selectors
- [ ] Written note: why server data stays in Query, not Redux

### Phase 6 — Optimization & resilience (W15–W17)

- [ ] `React.lazy` + `Suspense` per route
- [ ] Route-level `errorElement` + an app-level error boundary
- [ ] Profiled with React DevTools **before** optimizing
- [ ] `memo` / `useCallback` applied only where measured
- [ ] Skeleton loaders replace spinners
- [ ] Modal focus trap + Escape to close
- [ ] Full keyboard navigation on the board
- [ ] Labels and ARIA on all form controls

### Phase 7 — Security & testing (W18–W19)

- [ ] Vitest + React Testing Library configured
- [ ] Tests: form validation, custom hook, reducer
- [ ] MSW integration test for one full flow
- [ ] No `dangerouslySetInnerHTML` on user content
- [ ] CSRF protection if using cookies
- [ ] File upload type + size validation
- [ ] Friendly UI for 401 and 429 responses
- [ ] Confirmed no secrets in frontend env vars

### Phase 8 — Deploy & present (W20)

- [ ] Frontend deployed (Vercel/Netlify)
- [ ] API deployed (Render/Railway) + MongoDB Atlas
- [ ] Production env vars + CORS working
- [ ] README: architecture diagram, screenshots, tradeoffs
- [ ] Demo credentials for a seeded account

---

## Interview story bank

Fill one line in as soon as you finish the relevant phase, while it's fresh. This is what you'll actually recite in interviews.

| Topic | My story from DevBoard |
|---|---|
| How I structure a React app | |
| Override vs merge when spreading props | |
| Why `useParams` returns `string \| undefined` | |
| Local vs URL vs server vs global state | |
| Why an API layer instead of `fetch` in components | |
| Auth approach and why | |
| A performance problem I found and fixed | |
| A bug that took me hours | |
| Something I'd refactor if I started over | |

---

## Rules

1. **Sunday is DSA.** Don't borrow from it — you need both tracks.
2. **Write the syntax yourself.** Copy-pasted code teaches nothing and shows in interviews.
3. **Don't skip ahead.** Redux before you've felt prop drilling is memorization.
4. **Commit small and often.** Your git history is evidence of how you work.
5. **Keep the dev server terminal visible.** A parse error already cost you an hour once.
6. **If a week slips, cut scope, not quality.** Drop a stretch feature.
