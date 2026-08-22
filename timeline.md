# DevBoard — Build Timeline & Progress Tracker

**Goal:** build a full project management app (frontend → backend → auth → state → optimization → deploy) to reach a solid mid-level frontend bar.

| | |
|---|---|
| Start date | Mon 17 Aug 2026 |
| Target end date | Sat 16 Jan 2027 |
| Total duration | 22 weeks (~5 months) |
| Budget | 10 hours/week = **220 hours** |
| Working days | Mon–Sat (132 days) |
| Sundays | DSA only — no project work |

**Jump to:** [How to use](#how-to-use-this-file) · [Weekly rhythm](#weekly-rhythm) · [Progress Dashboard](#progress-dashboard) · [Week Tracker](#week-tracker) · [Phase Checklists](#phase-checklists) · [Interview story bank](#interview-story-bank) · [Rules](#rules)

---

## Daily Step Tracker

`Planned step` is your reference — don't edit it. Fill `Actual step`, `Hrs`, and `Note` each day.

### Week 1 · 17–22 Aug 2026 — Phase 1: setup → router

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 17 Aug | Mon | P1 S0–S1 · Clean starter, types + mock data | S0–S1 done | | |
| 18 Aug | Tue | P1 S2 · Button component | S2 done | | |
| 19 Aug | Wed | P1 S2 · CSS fixes, focus-visible, barrel export | S2 done | | Vite parse error cost time |
| 20 Aug | Thu | P1 S3.1–3.2 · Router API choice, 8 page shells | **S3.6 done** | | Ahead of plan — also did 3.3 (index.css + Prettier), 3.4 router.tsx, 3.5 RouterProvider, 3.6 AppLayout + NavLink + Outlet |
| 21 Aug | Fri | P1 S3.3 · Rebuild `index.css`, install Prettier | | | Already done 20 Aug — use this slot for S3.7 `useParams` guards |
| 22 Aug | Sat | P1 S3.4–3.8 · `router.tsx`, `AppLayout`, `RouterProvider`, `useParams` guards | | | Only S3.8 left: fix route paths, add `*` catch-all, run verify checklist |

### Week 2 · 24–29 Aug — Phase 1: projects list & detail

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 24 Aug | Mon | P1 S4.1 · `Card` component | | | |
| 25 Aug | Tue | P1 S4.2 · ProjectsPage list (`map`, keys, `Link`) | | | |
| 26 Aug | Wed | P1 S4.3 · `EmptyState` component | | | |
| 27 Aug | Thu | P1 S4.4 · ProjectPage lookup by id + not-found | | | |
| 28 Aug | Fri | P1 S5.1 · `Badge` component (status + priority) | | | |
| 29 Aug | Sat | P1 S5.2–5.3 · `TaskCard` + `KanbanColumn` | | | |

### Week 3 · 31 Aug – 5 Sep — Phase 1: Kanban board

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 31 Aug | Mon | P1 S5.4 · `KanbanBoard` + `useState` | | | |
| 1 Sep | Tue | P1 S5.5 · Move task between columns immutably | | | |
| 2 Sep | Wed | P1 S5.6 · `Avatar` + assignee on card | | | |
| 3 Sep | Thu | P1 S5.7 · Board layout polish (4 columns) | | | |
| 4 Sep | Fri | P1 S5.8 · Derive columns from a config array | | | |
| 5 Sep | Sat | P1 S6.1–6.2 · `Input` component + LoginPage controlled inputs | | | |

### Week 4 · 7–12 Sep — Phase 1: forms

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 7 Sep | Mon | P1 S6.3 · Login validation + error display | | | |
| 8 Sep | Tue | P1 S6.4 · Fake auth, `useNavigate`, localStorage | | | |
| 9 Sep | Wed | P1 S6.5 · `Modal` component | | | |
| 10 Sep | Thu | P1 S6.6 · `Dropdown` component | | | |
| 11 Sep | Fri | P1 S6.7 · Create Task form (fields + state) | | | |
| 12 Sep | Sat | P1 S6.7–6.8 · Create Task submit + RegisterPage | | | |

### Week 5 · 14–19 Sep — Phase 1: task detail & comments

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 14 Sep | Mon | P1 S7.1 · TaskPage detail view | | | |
| 15 Sep | Tue | P1 S7.2 · `Comment` type + mock data | | | |
| 16 Sep | Wed | P1 S7.3 · Comment list rendering | | | |
| 17 Sep | Thu | P1 S7.4 · Add comment form | | | |
| 18 Sep | Fri | P1 S7.5 · Task activity/history list | | | |
| 19 Sep | Sat | P1 S8.1–8.2 · Search input + `useMemo` filtering | | | |

### Week 6 · 21–26 Sep — Phase 1: filters, dashboard, hook

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 21 Sep | Mon | P1 S8.3 · Status + priority filters | | | |
| 22 Sep | Tue | P1 S8.4–8.5 · Sort dropdown + `useDebounce` hook | | | |
| 23 Sep | Wed | P1 S8.6 · Sync filters to URL search params | | | |
| 24 Sep | Thu | P1 S9 · Dashboard stats + `Spinner` with fake delay | | | |
| 25 Sep | Fri | P1 S10.1 · ProfilePage edit + `ErrorMessage` | | | |
| 26 Sep | Sat | P1 S10.2 · Extract `useTasks` hook + Phase 1 cleanup | | | |

### Week 7 · 28 Sep – 3 Oct — Phase 2: backend

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 28 Sep | Mon | P2.1 · Express + TypeScript scaffold | | | |
| 29 Sep | Tue | P2.2 · MongoDB connection + `.env` | | | |
| 30 Sep | Wed | P2.3 · Models: User, Project, Task, Comment | | | |
| 1 Oct | Thu | P2.4 · Project CRUD endpoints | | | |
| 2 Oct | Fri | P2.5 · Task CRUD endpoints (part 1) | | | |
| 3 Oct | Sat | P2.5–2.7 · Task endpoints finish, comments, seed script | | | |

### Week 8 · 5–10 Oct — Phase 2: API layer

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 5 Oct | Mon | P2.8 · Test all endpoints (Postman / Thunder) | | | |
| 6 Oct | Tue | P2.9 · `services/http.ts` fetch wrapper | | | |
| 7 Oct | Wed | P2.10 · `ApiError` normalizing + typed responses | | | |
| 8 Oct | Thu | P2.11 · `projectApi.ts` | | | |
| 9 Oct | Fri | P2.12 · `taskApi.ts` | | | |
| 10 Oct | Sat | P2.13–2.14 · `userApi.ts` + replace mocks in ProjectsPage | | | |

### Week 9 · 12–17 Oct — Phase 2: wire it up

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 12 Oct | Mon | P2.15 · Replace mocks in board + task detail | | | |
| 13 Oct | Tue | P2.16 · Loading states on every screen | | | |
| 14 Oct | Wed | P2.17 · Error states on every screen | | | |
| 15 Oct | Thu | P2.18 · Empty states on every screen | | | |
| 16 Oct | Fri | P2.19 · `AbortController` on unmount | | | |
| 17 Oct | Sat | P2.20–2.21 · CORS + `VITE_API_URL`, delete `src/data` | | | |

### Week 10 · 19–24 Oct — Phase 3: auth backend

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 19 Oct | Mon | P3.1 · bcrypt + register endpoint | | | |
| 20 Oct | Tue | P3.2 · Login endpoint + JWT | | | |
| 21 Oct | Wed | P3.3 · HTTP-only cookie setup | | | |
| 22 Oct | Thu | P3.4 · Auth middleware on protected endpoints | | | |
| 23 Oct | Fri | P3.5 · `/me` endpoint | | | |
| 24 Oct | Sat | P3.6–3.7 · `AuthContext` provider + `useAuth` hook | | | |

### Week 11 · 26–31 Oct — Phase 3: auth frontend

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 26 Oct | Mon | P3.8 · LoginPage real auth | | | |
| 27 Oct | Tue | P3.9 · RegisterPage real auth | | | |
| 28 Oct | Wed | P3.10 · `ProtectedRoute` wrapping the layout route | | | |
| 29 Oct | Thu | P3.11 · Redirect to intended page after login | | | |
| 30 Oct | Fri | P3.12 · Logout clears session everywhere | | | |
| 31 Oct | Sat | P3.13–3.14 · Token refresh on 401 + role-based UI | | | |

### Week 12 · 2–7 Nov — Phase 4: queries

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 2 Nov | Mon | P4.1 · Install Query, provider, devtools | | | |
| 3 Nov | Tue | P4.2 · Query key factory | | | |
| 4 Nov | Wed | P4.3 · `useProjects` + `useProject` | | | |
| 5 Nov | Thu | P4.4 · `useTasks` query | | | |
| 6 Nov | Fri | P4.5 · `staleTime` / `gcTime` tuning | | | |
| 7 Nov | Sat | P4.6–4.7 · Loading/error from Query, delete `useEffect` fetching | | | |

### Week 13 · 9–14 Nov — Phase 4: mutations

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 9 Nov | Mon | P4.8 · `useCreateTask` mutation | | | |
| 10 Nov | Tue | P4.9 · Cache invalidation | | | |
| 11 Nov | Wed | P4.10 · `useUpdateTask` mutation | | | |
| 12 Nov | Thu | P4.11 · Optimistic Kanban move | | | |
| 13 Nov | Fri | P4.12 · Rollback on error | | | |
| 14 Nov | Sat | P4.13 · Comments query + mutation | | | |

### Week 14 · 16–21 Nov — Phase 5: Redux store

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 16 Nov | Mon | P5.1 · Store setup | | | |
| 17 Nov | Tue | P5.2 · Typed `useAppSelector` / `useAppDispatch` | | | |
| 18 Nov | Wed | P5.3 · UI slice (sidebar open) | | | |
| 19 Nov | Thu | P5.4 · Theme slice + dark mode toggle | | | |
| 20 Nov | Fri | P5.5 · Persist theme to localStorage | | | |
| 21 Nov | Sat | P5.6–5.7 · Toast slice + `Toast` component | | | |

### Week 15 · 23–28 Nov — Phase 5 finish + buffer

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 23 Nov | Mon | P5.8 · Wire toasts to mutation success/error | | | |
| 24 Nov | Tue | P5.9 · Memoized selectors | | | |
| 25 Nov | Wed | P5.10 · Remove leftover prop drilling | | | |
| 26 Nov | Thu | P5.11 · Write the Redux-vs-Query note in README | | | |
| 27 Nov | Fri | Buffer · catch up or refactor | | | |
| 28 Nov | Sat | Buffer · catch up or refactor | | | |

### Week 16 · 30 Nov – 5 Dec — Phase 6: lazy loading & boundaries

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 30 Nov | Mon | P6.1 · `React.lazy` on all routes | | | |
| 1 Dec | Tue | P6.2 · `Suspense` fallbacks | | | |
| 2 Dec | Wed | P6.3 · Verify chunk splitting in build output | | | |
| 3 Dec | Thu | P6.4 · `ErrorBoundary` component | | | |
| 4 Dec | Fri | P6.5 · Route-level `errorElement` | | | |
| 5 Dec | Sat | P6.6 · Board-level boundary + deliberately break things | | | |

### Week 17 · 7–12 Dec — Phase 6: performance

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 7 Dec | Mon | P6.7 · Profiler baseline recording | | | |
| 8 Dec | Tue | P6.8 · Identify unnecessary re-renders | | | |
| 9 Dec | Wed | P6.9 · `memo` on `TaskCard` | | | |
| 10 Dec | Thu | P6.10 · `useCallback` on handlers passed down | | | |
| 11 Dec | Fri | P6.11 · Re-profile, write down before/after numbers | | | |
| 12 Dec | Sat | P6.12–6.13 · `Skeleton` component, replace spinners | | | |

### Week 18 · 14–19 Dec — Phase 6: accessibility

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 14 Dec | Mon | P6.14 · Modal focus trap | | | |
| 15 Dec | Tue | P6.15 · Escape to close + body scroll lock | | | |
| 16 Dec | Wed | P6.16 · Keyboard navigation on the board | | | |
| 17 Dec | Thu | P6.17 · ARIA roles + form label audit | | | |
| 18 Dec | Fri | P6.18 · axe DevTools pass | | | |
| 19 Dec | Sat | P6.19 · Colour contrast + focus visibility fixes | | | |

### Week 19 · 21–26 Dec — Phase 7: testing

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 21 Dec | Mon | P7.1 · Vitest + React Testing Library setup | | | |
| 22 Dec | Tue | P7.2 · First component test (`Button`) | | | |
| 23 Dec | Wed | P7.3 · Form validation test | | | |
| 24 Dec | Thu | P7.4 · Custom hook test | | | |
| 25 Dec | Fri | P7.5 · Reducer test *(holiday — skip if needed)* | | | |
| 26 Dec | Sat | P7.6–7.7 · MSW setup + login → dashboard integration test | | | |

### Week 20 · 28 Dec – 2 Jan 2027 — Phase 7: security

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 28 Dec | Mon | P7.8 · Coverage check, fill the gaps | | | |
| 29 Dec | Tue | P7.9 · XSS audit on user-generated content | | | |
| 30 Dec | Wed | P7.10 · CSRF protection | | | |
| 31 Dec | Thu | P7.11 · Upload file type + size validation | | | |
| 1 Jan | Fri | P7.12 · Friendly 401 / 429 UI *(holiday — skip if needed)* | | | |
| 2 Jan | Sat | P7.13–7.14 · Backend rate limiting + env var audit | | | |

### Week 21 · 4–9 Jan 2027 — Phase 8: deploy

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 4 Jan | Mon | P8.1 · Production build + local preview | | | |
| 5 Jan | Tue | P8.2 · Deploy API + MongoDB Atlas | | | |
| 6 Jan | Wed | P8.3 · Deploy frontend | | | |
| 7 Jan | Thu | P8.4 · Production env vars + CORS | | | |
| 8 Jan | Fri | P8.5 · Seed a demo account | | | |
| 9 Jan | Sat | P8.6 · README, architecture diagram, screenshots | | | |

### Week 22 · 11–16 Jan 2027 — stretch & interview prep

| Date | Day | Planned step | Actual step | Hrs | Note |
|---|---|---|---|---|---|
| 11 Jan | Mon | Stretch · drag and drop with `@dnd-kit` | | | |
| 12 Jan | Tue | Stretch · notification dropdown with unread count | | | |
| 13 Jan | Wed | Fill the interview story bank completely | | | |
| 14 Jan | Thu | Mock interview · walk through the architecture out loud | | | |
| 15 Jan | Fri | Fix whatever the walkthrough exposed | | | |
| 16 Jan | Sat | Final polish + record a demo video | | | |

---

## How to use this file

1. **Every day you work**, fill the `Actual step` and `Hrs` columns in the [Daily Step Tracker](#daily-step-tracker). Takes 20 seconds.
2. **Every Saturday**, sum the week's hours into the `Actual` column of the [Week Tracker](#week-tracker).
3. Compare `Cum. Actual` against `Cum. Planned`. That one number tells you if you're on pace.
4. Tick boxes in [Phase Checklists](#phase-checklists) as steps complete.
5. Fill the [Interview story bank](#interview-story-bank) at the end of each phase, while it's fresh.

**The point of two columns:** `Planned step` is fixed and never edited — it's your reference line. `Actual step` is what you really reached. When the gap grows to more than 3 days, you're drifting and need to cut scope.

**Log honest hours.** Two hours stuck on a bug is two hours.

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

Missing a weekday is normal and recoverable. Missing Saturday is what breaks the schedule — protect it.

---

## Progress Dashboard

| # | Phase | Weeks | Planned h | Actual h | Status |
|---|---|---|---|---|---|
| 1 | Foundation (UI + routing + mock data) | W1–W6 | 60 | | In progress |
| 2 | Real API (Express + Mongo + API layer) | W7–W9 | 30 | | Not started |
| 3 | Authentication & roles | W10–W11 | 20 | | Not started |
| 4 | TanStack Query | W12–W13 | 20 | | Not started |
| 5 | Redux Toolkit (client state) | W14–W15 | 20 | | Not started |
| 6 | Optimization & resilience | W16–W18 | 30 | | Not started |
| 7 | Security & testing | W19–W20 | 20 | | Not started |
| 8 | Deploy & present | W21 | 10 | | Not started |
| — | Stretch & interview prep | W22 | 10 | | Not started |
| | **Total** | **22 weeks** | **220** | | |

Status values: `Not started` · `In progress` · `Done` · `Slipped`

---

## Week Tracker

Update `Actual` every Saturday. `Cum. Planned` is fixed — it's your pace line.

| Wk | Dates (Mon–Sat) | Focus | Planned | Actual | Cum. Planned | Cum. Actual |
|---|---|---|---|---|---|---|
| 1 | 17–22 Aug 2026 | Setup, types, Button, Router | 10 | | 10 | |
| 2 | 24–29 Aug | Projects list + detail, Card, Badge, TaskCard | 10 | | 20 | |
| 3 | 31 Aug – 5 Sep | Kanban board, immutable moves, Avatar | 10 | | 30 | |
| 4 | 7–12 Sep | Login form, validation, Modal, Dropdown | 10 | | 40 | |
| 5 | 14–19 Sep | Task detail, comments, search start | 10 | | 50 | |
| 6 | 21–26 Sep | Filters, sort, URL params, dashboard, `useTasks` | 10 | | 60 | |
| 7 | 28 Sep – 3 Oct | Express + Mongo, models, endpoints | 10 | | 70 | |
| 8 | 5–10 Oct | `http.ts` wrapper + API layer modules | 10 | | 80 | |
| 9 | 12–17 Oct | Replace mocks, loading/error/empty, CORS | 10 | | 90 | |
| 10 | 19–24 Oct | Register/login, JWT, cookies, auth context | 10 | | 100 | |
| 11 | 26–31 Oct | `ProtectedRoute`, refresh, logout, roles | 10 | | 110 | |
| 12 | 2–7 Nov | Query setup, queries, keys, `staleTime` | 10 | | 120 | |
| 13 | 9–14 Nov | Mutations, invalidation, optimistic move | 10 | | 130 | |
| 14 | 16–21 Nov | RTK store, typed hooks, UI + theme slice | 10 | | 140 | |
| 15 | 23–28 Nov | Toasts, selectors, cleanup, buffer | 10 | | 150 | |
| 16 | 30 Nov – 5 Dec | `React.lazy`, `Suspense`, error boundaries | 10 | | 160 | |
| 17 | 7–12 Dec | Profiler, `memo`, skeletons | 10 | | 170 | |
| 18 | 14–19 Dec | Accessibility: focus trap, keyboard, ARIA | 10 | | 180 | |
| 19 | 21–26 Dec | Vitest + RTL, MSW integration test | 10 | | 190 | |
| 20 | 28 Dec – 2 Jan 2027 | Security audit, XSS/CSRF, 401/429 | 10 | | 200 | |
| 21 | 4–9 Jan 2027 | Deploy frontend + API, README | 10 | | 210 | |
| 22 | 11–16 Jan 2027 | Stretch features, interview prep | 10 | | 220 | |

**Reading the pace line:** within 5 hours of plan is fine. More than 10 hours behind means cut scope, not sleep — drop a stretch feature rather than skipping tests or accessibility.

---

## Phase Checklists

### Phase 1 — Foundation (W1–W6)

- [x] S0 · Clean the Vite starter
- [x] S1 · Types (`user`, `project`, `task`) + mock data
- [x] S2 · `Button` component
- [ ] S3 · Router — `AppLayout`, `router.tsx`, `RouterProvider`, `useParams` guards
- [ ] S4 · Projects list + project detail
- [ ] S5 · Kanban board with immutable status moves
- [ ] S6 · Login form + Create Task modal
- [ ] S7 · Task detail page + comments
- [ ] S8 · Search / filter / sort with `useMemo` + URL params
- [ ] S9 · Dashboard statistics
- [ ] S10 · Extract `useTasks` hook, ProfilePage, cleanup
- [ ] Components: `Card`, `Badge`, `Avatar`, `Modal`, `Input`, `Dropdown`, `Spinner`, `EmptyState`, `ErrorMessage`
- [ ] Prettier installed, everything formatted

### Phase 2 — Real API (W7–W9)

- [ ] Express + MongoDB scaffolded
- [ ] Models: User, Project, Task, Comment
- [ ] REST endpoints for projects, tasks, comments
- [ ] `services/http.ts` wrapper (base URL, headers, error normalizing)
- [ ] `projectApi`, `taskApi`, `userApi`
- [ ] All mock data removed from components
- [ ] Loading / error / empty states everywhere
- [ ] `AbortController` on unmount
- [ ] CORS + `VITE_API_URL`

### Phase 3 — Authentication (W10–W11)

- [ ] Register + login with hashed passwords
- [ ] Token strategy decided and documented
- [ ] Auth context + `useAuth`
- [ ] `ProtectedRoute` wrapping the layout route
- [ ] Redirect to intended page after login
- [ ] Logout clears session
- [ ] Token refresh on 401
- [ ] Roles `admin | member | viewer` hiding destructive UI

### Phase 4 — TanStack Query (W12–W13)

- [ ] Query client + provider
- [ ] Projects, tasks, comments as `useQuery`
- [ ] Query key convention documented
- [ ] `staleTime` / `gcTime` tuned deliberately
- [ ] Mutations + cache invalidation
- [ ] Optimistic Kanban move with rollback
- [ ] All manual `useEffect` fetching deleted

### Phase 5 — Redux Toolkit (W14–W15)

- [ ] Store + typed hooks
- [ ] UI slice: sidebar
- [ ] Theme slice + dark mode, persisted
- [ ] Toast queue slice + component
- [ ] Memoized selectors
- [ ] Written note: why server data stays in Query

### Phase 6 — Optimization & resilience (W16–W18)

- [ ] `React.lazy` + `Suspense` per route
- [ ] Route `errorElement` + app-level error boundary
- [ ] Profiled **before** optimizing
- [ ] `memo` / `useCallback` only where measured
- [ ] Skeletons replace spinners
- [ ] Modal focus trap + Escape to close
- [ ] Keyboard navigation on the board
- [ ] Labels and ARIA on all form controls

### Phase 7 — Security & testing (W19–W20)

- [ ] Vitest + RTL configured
- [ ] Tests: component, form validation, hook, reducer
- [ ] MSW integration test for one full flow
- [ ] No `dangerouslySetInnerHTML` on user content
- [ ] CSRF protection if using cookies
- [ ] Upload type + size validation
- [ ] Friendly UI for 401 and 429
- [ ] No secrets in frontend env vars

### Phase 8 — Deploy & present (W21)

- [ ] Frontend deployed
- [ ] API deployed + MongoDB Atlas
- [ ] Production env vars + CORS working
- [ ] README: architecture diagram, screenshots, tradeoffs
- [ ] Demo credentials for a seeded account

---

## Interview story bank

Fill one line as soon as you finish the relevant phase, while it's fresh. This is what you'll actually say in interviews.

| Topic | My story from DevBoard |
|---|---|
| How I structure a React app | |
| Override vs merge when spreading props | |
| Why `useParams` returns `string \| undefined` | |
| Local vs URL vs server vs global state | |
| Why an API layer instead of `fetch` in components | |
| Auth approach and why I chose it | |
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
6. **If a week slips, cut scope, not quality.** Drop a stretch feature, never the tests.
