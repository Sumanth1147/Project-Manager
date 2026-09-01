# DevBoard — Build Timeline & Progress Tracker

**Goal:** build a full project management app (frontend → backend → auth → state → optimization → deploy) to reach a solid mid-level frontend bar.

|                 |                                                     |
| --------------- | --------------------------------------------------- |
| Start date      | Mon 17 Aug 2026                                     |
| Target end date | Sat 13 Feb 2027                                     |
| Total duration  | 26 weeks (~6 months)                                |
| Budget          | 10 h/week to 2 Sep, then 8.5 h/week = **224 hours** |
| Working days    | Mon–Sat to 2 Sep; then Mon, Tue, Wed, Fri, Sat      |
| Thursdays       | **Buffer from 3 Sep 2026 — office day**             |
| Sundays         | DSA only — no project work                          |

**Jump to:** [How to use](#how-to-use-this-file) · [Weekly rhythm](#weekly-rhythm) · [Progress Dashboard](#progress-dashboard) · [Week Tracker](#week-tracker) · [Phase Checklists](#phase-checklists) · [Interview story bank](#interview-story-bank) · [Rules](#rules)

---

## Daily Step Tracker

`Planned step` is your reference — don't edit it. Fill `Actual step`, `Hrs`, and `Note` each day.

**Thursday is a buffer day from 3 Sep 2026 onward** (office day). Planned work is zero. If you happen to get free time, use it to catch up on whatever slipped earlier in the week — never to pull work forward. Weeks 1–2 (17–29 Aug) still show Thursday as a working day, because that's how they were actually planned.

#### Carry-forward items

Small fixes that came out of a review but don't belong to a step. Clear these on a buffer day or at the start of a session. Delete the line when done.

| Item                                                                    | Raised | Why it matters                                                                                                     |
| ----------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| `index.css` dark-mode query is flipped to `prefers-color-scheme: light` | 29 Aug | Ships the theme backwards. Restore to `dark` and preview via DevTools → Rendering → Emulate `prefers-color-scheme` |
| `find` callback in `ProjectPage` is named `user` but iterates projects  | 29 Aug | Misleading name; rename to `project`                                                                               |
| Format-on-save not firing — Prettier run manually every time            | 25 Aug | Check the Prettier extension is installed/enabled; watch the "Prettier" Output panel on save                       |
| Path aliases (`@/lib/cn`)                                               | —      | Do it when `../../../` starts hurting, around S6                                                                   |

### Week 1 · 17–22 Aug 2026 — Phase 1: setup → router

| Date   | Day | Planned step                                                               | Actual step       | Hrs | Note                                                                                            |
| ------ | --- | -------------------------------------------------------------------------- | ----------------- | --- | ----------------------------------------------------------------------------------------------- |
| 17 Aug | Mon | S0–S1 · Clean starter, types + mock data                                   | S0–S1 done        |     |                                                                                                 |
| 18 Aug | Tue | S2 · `Button` component                                                    | S2 done           |     |                                                                                                 |
| 19 Aug | Wed | S2 · CSS fixes, `:focus-visible`, barrel export                            | S2 done           |     | Vite parse error cost time — HMR was serving stale code                                         |
| 20 Aug | Thu | S3.1–3.2 · Router API choice, page shells                                  | **S3.1–3.6 done** |     | Ahead of plan — also did 3.3 index.css, 3.4 `router.tsx`, 3.5 `RouterProvider`, 3.6 `AppLayout` |
| 21 Aug | Fri | S3.3 · Rebuild `index.css`, install Prettier                               | skipped           |     | No session                                                                                      |
| 22 Aug | Sat | S3.4–3.8 · `router.tsx`, `AppLayout`, `RouterProvider`, `useParams` guards | **S3.7–3.8 done** |     | Guards on ProjectPage + TaskPage, `*` catch-all, AppLayout polish                               |

### Week 2 · 24–29 Aug — Phase 1: shared components + projects list

| Date   | Day | Planned step                                             | Actual step          | Hrs | Note                                                                          |
| ------ | --- | -------------------------------------------------------- | -------------------- | --- | ----------------------------------------------------------------------------- |
| 24 Aug | Mon | S4.1–4.2 · `components/` vs `features/`, `Card`          | **S4.2 done**        |     | Card + CSS + barrel, `cn` util, Button refactored to `cn`, Prettier installed |
| 25 Aug | Tue | S4.3 · `EmptyState` component                            | **S4.3 in progress** |     | Design tokens added to `index.css`, EmptyState started                        |
| 26 Aug | Wed | S4.3 · `EmptyState` CSS + wire into ProjectsPage         | **S4.3 done**        |     | title / message / action slot, dashed border, `40ch` message width            |
| 27 Aug | Thu | S4.4 · `ProjectCard` + list with `map`/keys              | skipped              |     | No session — rolled to Sat                                                    |
| 28 Aug | Fri | S4.5–4.6 · `ProjectPage` `find` lookup + not-found state | **revision**         |     | `cn.ts` + `ClassValue` deep dive, project-learnings + timeline sync           |
| 29 Aug | Sat | S4.7 · Owner join with `?.`/`??` + metadata list         | **S4.4–4.7 done**    |     | Fixed relative-link bug (`project/` → `/projects/`); caught up all of 4.4–4.7 |

### Week 3 · 31 Aug – 5 Sep — Phase 1: Badge, TaskCard, board start

| Date   | Day | Planned step                                 | Actual step                  | Hrs | Note                                                                                                                                                                                                                                                                                                                            |
| ------ | --- | -------------------------------------------- | ---------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31 Aug | Mon | S4.8 · Members list with a type predicate    | **S4.8 done · S5.1 started** |     | Members list via `(user): user is User` predicate. Dropped `require_review` → `TaskStatus` is 3 values; renamed `assignedId` → `assigneeId`. New `features/tasks/taskStatus.ts`: `STATUS_LABELS` (`Record<TaskStatus, string>`), `STATUS_ORDER`, `getNextStatus` / `getPreviousStatus`. `Badge` component itself not built yet. |
| 1 Sep  | Tue | S5.1 · `Badge` component (status + priority) |                              |     |                                                                                                                                                                                                                                                                                                                                 |
| 2 Sep  | Wed | S5.2 · `TaskCard` (feature component)        |                              |     |                                                                                                                                                                                                                                                                                                                                 |
| 3 Sep  | Thu | **Buffer** · office day                      |                              |     |                                                                                                                                                                                                                                                                                                                                 |
| 4 Sep  | Fri | S5.3 · `KanbanColumn`                        |                              |     |                                                                                                                                                                                                                                                                                                                                 |
| 5 Sep  | Sat | S5.4 · `KanbanBoard` + first real `useState` |                              |     |                                                                                                                                                                                                                                                                                                                                 |

### Week 4 · 7–12 Sep — Phase 1: Kanban board

| Date   | Day | Planned step                                        | Actual step | Hrs | Note |
| ------ | --- | --------------------------------------------------- | ----------- | --- | ---- |
| 7 Sep  | Mon | S5.5 · Move task between columns **immutably**      |             |     |      |
| 8 Sep  | Tue | S5.6 · `Avatar` + assignee on card                  |             |     |      |
| 9 Sep  | Wed | S5.7 · Board layout (4 columns, horizontal scroll)  |             |     |      |
| 10 Sep | Thu | **Buffer** · office day                             |             |     |      |
| 11 Sep | Fri | S5.8 · Derive columns from a config array           |             |     |      |
| 12 Sep | Sat | S5.9 · `Spinner` + fake delay so loading UI is real |             |     |      |

### Week 5 · 14–19 Sep — Phase 1: forms

| Date   | Day | Planned step                                    | Actual step | Hrs | Note |
| ------ | --- | ----------------------------------------------- | ----------- | --- | ---- |
| 14 Sep | Mon | S6.1 · `Input` component (label, error, id)     |             |     |      |
| 15 Sep | Tue | S6.2 · LoginPage controlled inputs              |             |     |      |
| 16 Sep | Wed | S6.3 · Validation + error display               |             |     |      |
| 17 Sep | Thu | **Buffer** · office day                         |             |     |      |
| 18 Sep | Fri | S6.4 · Fake auth, `useNavigate`, `localStorage` |             |     |      |
| 19 Sep | Sat | S6.5 · `Modal` component                        |             |     |      |

### Week 6 · 21–26 Sep — Phase 1: create task, register

| Date   | Day | Planned step                                | Actual step | Hrs | Note |
| ------ | --- | ------------------------------------------- | ----------- | --- | ---- |
| 21 Sep | Mon | S6.6 · `Dropdown` component                 |             |     |      |
| 22 Sep | Tue | S6.7 · Create Task form (fields + state)    |             |     |      |
| 23 Sep | Wed | S6.8 · Create Task submit + append to board |             |     |      |
| 24 Sep | Thu | **Buffer** · office day                     |             |     |      |
| 25 Sep | Fri | S6.9 · RegisterPage                         |             |     |      |
| 26 Sep | Sat | S7.1 · TaskPage detail view                 |             |     |      |

### Week 7 · 28 Sep – 3 Oct — Phase 1: task detail & comments

| Date   | Day | Planned step                                  | Actual step | Hrs | Note |
| ------ | --- | --------------------------------------------- | ----------- | --- | ---- |
| 28 Sep | Mon | S7.2 · `Comment` type + mock data             |             |     |      |
| 29 Sep | Tue | S7.3 · Comment list rendering                 |             |     |      |
| 30 Sep | Wed | S7.4 · Add comment form                       |             |     |      |
| 1 Oct  | Thu | **Buffer** · office day                       |             |     |      |
| 2 Oct  | Fri | S7.5 · Task activity / history list           |             |     |      |
| 3 Oct  | Sat | S8.1–8.2 · Search input + `useMemo` filtering |             |     |      |

### Week 8 · 5–10 Oct — Phase 1: filters, dashboard, cleanup

| Date   | Day | Planned step                                          | Actual step | Hrs | Note |
| ------ | --- | ----------------------------------------------------- | ----------- | --- | ---- |
| 5 Oct  | Mon | S8.3 · Status + priority filters                      |             |     |      |
| 6 Oct  | Tue | S8.4 · Sort dropdown                                  |             |     |      |
| 7 Oct  | Wed | S8.5 · `useDebounce` custom hook                      |             |     |      |
| 8 Oct  | Thu | **Buffer** · office day                               |             |     |      |
| 9 Oct  | Fri | S8.6 + S9 · Filters in URL params, dashboard stats    |             |     |      |
| 10 Oct | Sat | S10 · Extract `useTasks`, ProfilePage, Phase 1 review |             |     |      |

### Week 9 · 12–17 Oct — Phase 2: backend

| Date   | Day | Planned step                                | Actual step | Hrs | Note |
| ------ | --- | ------------------------------------------- | ----------- | --- | ---- |
| 12 Oct | Mon | P2.1 · Express + TypeScript scaffold        |             |     |      |
| 13 Oct | Tue | P2.2 · MongoDB connection + `.env`          |             |     |      |
| 14 Oct | Wed | P2.3 · Models: User, Project, Task, Comment |             |     |      |
| 15 Oct | Thu | **Buffer** · office day                     |             |     |      |
| 16 Oct | Fri | P2.4 · Project CRUD endpoints               |             |     |      |
| 17 Oct | Sat | P2.5 · Task CRUD endpoints                  |             |     |      |

### Week 10 · 19–24 Oct — Phase 2: endpoints → API layer

| Date   | Day | Planned step                                     | Actual step | Hrs | Note |
| ------ | --- | ------------------------------------------------ | ----------- | --- | ---- |
| 19 Oct | Mon | P2.6 · Comment endpoints                         |             |     |      |
| 20 Oct | Tue | P2.7 · Seed script                               |             |     |      |
| 21 Oct | Wed | P2.8 · Test every endpoint (Postman / Thunder)   |             |     |      |
| 22 Oct | Thu | **Buffer** · office day                          |             |     |      |
| 23 Oct | Fri | P2.9 · `services/http.ts` fetch wrapper          |             |     |      |
| 24 Oct | Sat | P2.10 · `ApiError` normalizing + typed responses |             |     |      |

### Week 11 · 26–31 Oct — Phase 2: API modules

| Date   | Day | Planned step                                 | Actual step | Hrs | Note |
| ------ | --- | -------------------------------------------- | ----------- | --- | ---- |
| 26 Oct | Mon | P2.11 · `projectApi.ts`                      |             |     |      |
| 27 Oct | Tue | P2.12 · `taskApi.ts`                         |             |     |      |
| 28 Oct | Wed | P2.13 · `userApi.ts`                         |             |     |      |
| 29 Oct | Thu | **Buffer** · office day                      |             |     |      |
| 30 Oct | Fri | P2.14 · Replace mocks in ProjectsPage        |             |     |      |
| 31 Oct | Sat | P2.15 · Replace mocks in board + task detail |             |     |      |

### Week 12 · 2–7 Nov — Phase 2: states & config

| Date  | Day | Planned step                                          | Actual step | Hrs | Note |
| ----- | --- | ----------------------------------------------------- | ----------- | --- | ---- |
| 2 Nov | Mon | P2.16 · Loading states on every screen                |             |     |      |
| 3 Nov | Tue | P2.17 · Error states on every screen                  |             |     |      |
| 4 Nov | Wed | P2.18 · Empty states on every screen                  |             |     |      |
| 5 Nov | Thu | **Buffer** · office day                               |             |     |      |
| 6 Nov | Fri | P2.19 · `AbortController` on unmount                  |             |     |      |
| 7 Nov | Sat | P2.20–2.21 · CORS + `VITE_API_URL`, delete `src/data` |             |     |      |

### Week 13 · 9–14 Nov — Phase 3: auth backend

| Date   | Day | Planned step                               | Actual step | Hrs | Note |
| ------ | --- | ------------------------------------------ | ----------- | --- | ---- |
| 9 Nov  | Mon | P3.1 · bcrypt + register endpoint          |             |     |      |
| 10 Nov | Tue | P3.2 · Login endpoint + JWT                |             |     |      |
| 11 Nov | Wed | P3.3 · HTTP-only cookie setup              |             |     |      |
| 12 Nov | Thu | **Buffer** · office day                    |             |     |      |
| 13 Nov | Fri | P3.4 · Auth middleware on protected routes |             |     |      |
| 14 Nov | Sat | P3.5–3.6 · `/me` endpoint + `AuthContext`  |             |     |      |

### Week 14 · 16–21 Nov — Phase 3: auth frontend

| Date   | Day | Planned step                                                  | Actual step | Hrs | Note |
| ------ | --- | ------------------------------------------------------------- | ----------- | --- | ---- |
| 16 Nov | Mon | P3.7 · `useAuth` hook                                         |             |     |      |
| 17 Nov | Tue | P3.8 · LoginPage real auth                                    |             |     |      |
| 18 Nov | Wed | P3.9 · RegisterPage real auth                                 |             |     |      |
| 19 Nov | Thu | **Buffer** · office day                                       |             |     |      |
| 20 Nov | Fri | P3.10 · `ProtectedRoute` wrapping the layout route            |             |     |      |
| 21 Nov | Sat | P3.11–3.14 · Redirect after login, logout, 401 refresh, roles |             |     |      |

### Week 15 · 23–28 Nov — Phase 4: queries

| Date   | Day | Planned step                             | Actual step | Hrs | Note |
| ------ | --- | ---------------------------------------- | ----------- | --- | ---- |
| 23 Nov | Mon | P4.1 · Install Query, provider, devtools |             |     |      |
| 24 Nov | Tue | P4.2 · Query key factory                 |             |     |      |
| 25 Nov | Wed | P4.3 · `useProjects` + `useProject`      |             |     |      |
| 26 Nov | Thu | **Buffer** · office day                  |             |     |      |
| 27 Nov | Fri | P4.4 · `useTasks` query                  |             |     |      |
| 28 Nov | Sat | P4.5 · `staleTime` / `gcTime` tuning     |             |     |      |

### Week 16 · 30 Nov – 5 Dec — Phase 4: mutations

| Date   | Day | Planned step                                  | Actual step | Hrs | Note |
| ------ | --- | --------------------------------------------- | ----------- | --- | ---- |
| 30 Nov | Mon | P4.6 · Loading / error driven by Query        |             |     |      |
| 1 Dec  | Tue | P4.7 · Delete all manual `useEffect` fetching |             |     |      |
| 2 Dec  | Wed | P4.8 · `useCreateTask` mutation               |             |     |      |
| 3 Dec  | Thu | **Buffer** · office day                       |             |     |      |
| 4 Dec  | Fri | P4.9 · Cache invalidation                     |             |     |      |
| 5 Dec  | Sat | P4.10 · `useUpdateTask` mutation              |             |     |      |

### Week 17 · 7–12 Dec — Phase 4 finish → Phase 5 start

| Date   | Day | Planned step                                    | Actual step | Hrs | Note |
| ------ | --- | ----------------------------------------------- | ----------- | --- | ---- |
| 7 Dec  | Mon | P4.11 · Optimistic Kanban move                  |             |     |      |
| 8 Dec  | Tue | P4.12 · Rollback on error                       |             |     |      |
| 9 Dec  | Wed | P4.13 · Comments query + mutation               |             |     |      |
| 10 Dec | Thu | **Buffer** · office day                         |             |     |      |
| 11 Dec | Fri | P4 review · write the caching notes down        |             |     |      |
| 12 Dec | Sat | P5.1–5.2 · Store setup + typed `useAppSelector` |             |     |      |

### Week 18 · 14–19 Dec — Phase 5: Redux slices

| Date   | Day | Planned step                          | Actual step | Hrs | Note |
| ------ | --- | ------------------------------------- | ----------- | --- | ---- |
| 14 Dec | Mon | P5.3 · UI slice (sidebar open)        |             |     |      |
| 15 Dec | Tue | P5.4 · Theme slice + dark mode toggle |             |     |      |
| 16 Dec | Wed | P5.5 · Persist theme to localStorage  |             |     |      |
| 17 Dec | Thu | **Buffer** · office day               |             |     |      |
| 18 Dec | Fri | P5.6 · Toast queue slice              |             |     |      |
| 19 Dec | Sat | P5.7 · `Toast` component              |             |     |      |

### Week 19 · 21–26 Dec — Phase 5 finish

| Date   | Day | Planned step                                    | Actual step | Hrs | Note |
| ------ | --- | ----------------------------------------------- | ----------- | --- | ---- |
| 21 Dec | Mon | P5.8 · Wire toasts to mutation success/error    |             |     |      |
| 22 Dec | Tue | P5.9 · Memoized selectors                       |             |     |      |
| 23 Dec | Wed | P5.10 · Remove leftover prop drilling           |             |     |      |
| 24 Dec | Thu | **Buffer** · office day                         |             |     |      |
| 25 Dec | Fri | _Holiday — skip_                                |             |     |      |
| 26 Dec | Sat | P5.11 · Write the Redux-vs-Query note in README |             |     |      |

### Week 20 · 28 Dec – 2 Jan 2027 — Phase 6: lazy loading & boundaries

| Date   | Day | Planned step                                  | Actual step | Hrs | Note |
| ------ | --- | --------------------------------------------- | ----------- | --- | ---- |
| 28 Dec | Mon | P6.1 · `React.lazy` on all routes             |             |     |      |
| 29 Dec | Tue | P6.2 · `Suspense` fallbacks                   |             |     |      |
| 30 Dec | Wed | P6.3 · Verify chunk splitting in build output |             |     |      |
| 31 Dec | Thu | **Buffer** · office day                       |             |     |      |
| 1 Jan  | Fri | _Holiday — skip_                              |             |     |      |
| 2 Jan  | Sat | P6.4 · `ErrorBoundary` component              |             |     |      |

### Week 21 · 4–9 Jan 2027 — Phase 6: performance

| Date  | Day | Planned step                                      | Actual step | Hrs | Note |
| ----- | --- | ------------------------------------------------- | ----------- | --- | ---- |
| 4 Jan | Mon | P6.5 · Route-level `errorElement`                 |             |     |      |
| 5 Jan | Tue | P6.6 · Board boundary + deliberately break things |             |     |      |
| 6 Jan | Wed | P6.7 · Profiler baseline recording                |             |     |      |
| 7 Jan | Thu | **Buffer** · office day                           |             |     |      |
| 8 Jan | Fri | P6.8 · Identify unnecessary re-renders            |             |     |      |
| 9 Jan | Sat | P6.9–6.10 · `memo` on `TaskCard`, `useCallback`   |             |     |      |

### Week 22 · 11–16 Jan — Phase 6: skeletons & a11y

| Date   | Day | Planned step                                          | Actual step | Hrs | Note |
| ------ | --- | ----------------------------------------------------- | ----------- | --- | ---- |
| 11 Jan | Mon | P6.11 · Re-profile, write down before/after numbers   |             |     |      |
| 12 Jan | Tue | P6.12 · `Skeleton` component                          |             |     |      |
| 13 Jan | Wed | P6.13 · Replace spinners with skeletons               |             |     |      |
| 14 Jan | Thu | **Buffer** · office day                               |             |     |      |
| 15 Jan | Fri | P6.14 · Modal focus trap                              |             |     |      |
| 16 Jan | Sat | P6.15–6.16 · Escape + scroll lock, board keyboard nav |             |     |      |

### Week 23 · 18–23 Jan — Phase 6 finish → Phase 7: testing

| Date   | Day | Planned step                                     | Actual step | Hrs | Note |
| ------ | --- | ------------------------------------------------ | ----------- | --- | ---- |
| 18 Jan | Mon | P6.17 · ARIA roles + form label audit            |             |     |      |
| 19 Jan | Tue | P6.18 · axe DevTools pass                        |             |     |      |
| 20 Jan | Wed | P6.19 · Colour contrast + focus visibility fixes |             |     |      |
| 21 Jan | Thu | **Buffer** · office day                          |             |     |      |
| 22 Jan | Fri | P7.1 · Vitest + React Testing Library setup      |             |     |      |
| 23 Jan | Sat | P7.2–7.3 · `Button` test + form validation test  |             |     |      |

### Week 24 · 25–30 Jan — Phase 7: testing & security

| Date   | Day | Planned step                              | Actual step | Hrs | Note |
| ------ | --- | ----------------------------------------- | ----------- | --- | ---- |
| 25 Jan | Mon | P7.4 · Custom hook test                   |             |     |      |
| 26 Jan | Tue | P7.5 · Reducer test                       |             |     |      |
| 27 Jan | Wed | P7.6 · MSW setup                          |             |     |      |
| 28 Jan | Thu | **Buffer** · office day                   |             |     |      |
| 29 Jan | Fri | P7.7 · Login → dashboard integration test |             |     |      |
| 30 Jan | Sat | P7.8–7.9 · Coverage gaps + XSS audit      |             |     |      |

### Week 25 · 1–6 Feb — Phase 7 finish → Phase 8: deploy

| Date  | Day | Planned step                                          | Actual step | Hrs | Note |
| ----- | --- | ----------------------------------------------------- | ----------- | --- | ---- |
| 1 Feb | Mon | P7.10 · CSRF protection                               |             |     |      |
| 2 Feb | Tue | P7.11 · Upload file type + size validation            |             |     |      |
| 3 Feb | Wed | P7.12–7.14 · 401/429 UI, rate limiting, env var audit |             |     |      |
| 4 Feb | Thu | **Buffer** · office day                               |             |     |      |
| 5 Feb | Fri | P8.1 · Production build + local preview               |             |     |      |
| 6 Feb | Sat | P8.2 · Deploy API + MongoDB Atlas                     |             |     |      |

### Week 26 · 8–13 Feb 2027 — Phase 8 finish + interview prep

| Date   | Day | Planned step                                    | Actual step | Hrs | Note |
| ------ | --- | ----------------------------------------------- | ----------- | --- | ---- |
| 8 Feb  | Mon | P8.3 · Deploy frontend                          |             |     |      |
| 9 Feb  | Tue | P8.4 · Production env vars + CORS               |             |     |      |
| 10 Feb | Wed | P8.5–8.6 · Seed demo account, README + diagram  |             |     |      |
| 11 Feb | Thu | **Buffer** · office day                         |             |     |      |
| 12 Feb | Fri | Fill the interview story bank + say it out loud |             |     |      |
| 13 Feb | Sat | Final polish + record a demo video              |             |     |      |

**Stretch features** (drag and drop with `@dnd-kit`, notification dropdown, infinite scroll on activity) are **not scheduled**. Add them only if you finish early. They are the first thing to cut, never tests or accessibility.

---

## How to use this file

1. **Every day you work**, fill the `Actual step` and `Hrs` columns in the [Daily Step Tracker](#daily-step-tracker). Takes 20 seconds.
2. **Every Saturday**, sum the week's hours into the `Actual` column of the [Week Tracker](#week-tracker).
3. Compare `Cum. Actual` against `Cum. Planned`. That one number tells you if you're on pace.
4. Tick boxes in [Phase Checklists](#phase-checklists) as steps complete.
5. Fill the [Interview story bank](#interview-story-bank) at the end of each phase, while it's fresh.
6. When a review turns up a small fix that isn't a step, add it to **Carry-forward items** instead of leaving it in chat history. Clear it on a Thursday.

**The point of two columns:** `Planned step` is fixed and never edited — it's your reference line. `Actual step` is what you really reached. When the gap grows to more than 3 days, you're drifting and need to cut scope.

**Log honest hours.** Two hours stuck on a bug is two hours.

---

## Weekly rhythm

From week 3 onward (31 Aug):

| Day       | Planned   | Notes                                        |
| --------- | --------- | -------------------------------------------- |
| Mon       | 1.5 h     | after work                                   |
| Tue       | 1.5 h     | after work                                   |
| Wed       | 1.5 h     | after work                                   |
| Thu       | **0 h**   | **office day — buffer, catch up only**       |
| Fri       | 1.0 h     | lighter, energy is low                       |
| Sat       | 3.0 h     | biggest block — save the hard tasks for this |
| Sun       | 0 h       | **DSA**                                      |
| **Total** | **8.5 h** |                                              |

Weeks 1–2 were planned at **10 h** (Thursday included at 1.5 h).

**Thursday is genuinely off from 3 Sep.** Nothing is planned for it, so a missed Thursday costs nothing. If you get a free evening, spend it finishing Monday–Wednesday's slippage rather than starting Friday's work early — pulling work forward just moves the gap.

Missing a weekday is normal and recoverable. **Missing Saturday is what breaks the schedule** — it's 35% of your week. Protect it.

---

## Progress Dashboard

| #   | Phase                                  | Weeks        | Planned h | Actual h | Status      |
| --- | -------------------------------------- | ------------ | --------- | -------- | ----------- |
| 1   | Foundation (UI + routing + mock data)  | W1–W8        | 71        |          | In progress |
| 2   | Real API (Express + Mongo + API layer) | W9–W12       | 34        |          | Not started |
| 3   | Authentication & roles                 | W13–W14      | 17        |          | Not started |
| 4   | TanStack Query                         | W15–W17      | 25.5      |          | Not started |
| 5   | Redux Toolkit (client state)           | W18–W19      | 17        |          | Not started |
| 6   | Optimization & resilience              | W20–W23      | 30        |          | Not started |
| 7   | Security & testing                     | W23–W25      | 17        |          | Not started |
| 8   | Deploy & present                       | W25–W26      | 8.5       |          | Not started |
| —   | Interview prep                         | W26          | 4         |          | Not started |
|     | **Total**                              | **26 weeks** | **224**   |          |             |

Status values: `Not started` · `In progress` · `Done` · `Slipped`

---

## Week Tracker

Update `Actual` every Saturday. `Cum. Planned` is fixed — it's your pace line.

| Wk  | Dates (Mon–Sat)     | Focus                                          | Planned | Actual | Cum. Planned | Cum. Actual |
| --- | ------------------- | ---------------------------------------------- | ------- | ------ | ------------ | ----------- |
| 1   | 17–22 Aug 2026      | Setup, types, Button, Router                   | 10      |        | 10           |             |
| 2   | 24–29 Aug           | Card, cn, tokens, EmptyState, projects list    | 10      |        | 20           |             |
| 3   | 31 Aug – 5 Sep      | Type predicate, Badge, TaskCard, board start   | 8.5     |        | 28.5         |             |
| 4   | 7–12 Sep            | Kanban moves, Avatar, config-driven columns    | 8.5     |        | 37           |             |
| 5   | 14–19 Sep           | Input, LoginPage, validation, Modal            | 8.5     |        | 45.5         |             |
| 6   | 21–26 Sep           | Dropdown, Create Task, Register, TaskPage      | 8.5     |        | 54           |             |
| 7   | 28 Sep – 3 Oct      | Comments, activity, search start               | 8.5     |        | 62.5         |             |
| 8   | 5–10 Oct            | Filters, sort, debounce, dashboard, `useTasks` | 8.5     |        | 71           |             |
| 9   | 12–17 Oct           | Express + Mongo, models, endpoints             | 8.5     |        | 79.5         |             |
| 10  | 19–24 Oct           | Comments API, seed, `http.ts` wrapper          | 8.5     |        | 88           |             |
| 11  | 26–31 Oct           | API modules, replace mocks                     | 8.5     |        | 96.5         |             |
| 12  | 2–7 Nov             | Loading/error/empty, AbortController, CORS     | 8.5     |        | 105          |             |
| 13  | 9–14 Nov            | Register/login, JWT, cookies, auth context     | 8.5     |        | 113.5        |             |
| 14  | 16–21 Nov           | `ProtectedRoute`, refresh, logout, roles       | 8.5     |        | 122          |             |
| 15  | 23–28 Nov           | Query setup, keys, `staleTime`                 | 8.5     |        | 130.5        |             |
| 16  | 30 Nov – 5 Dec      | Mutations, invalidation                        | 8.5     |        | 139          |             |
| 17  | 7–12 Dec            | Optimistic move, rollback, RTK store           | 8.5     |        | 147.5        |             |
| 18  | 14–19 Dec           | UI + theme slice, toasts                       | 8.5     |        | 156          |             |
| 19  | 21–26 Dec           | Selectors, cleanup, Redux-vs-Query note        | 8.5     |        | 164.5        |             |
| 20  | 28 Dec – 2 Jan 2027 | `React.lazy`, `Suspense`, error boundary       | 8.5     |        | 173          |             |
| 21  | 4–9 Jan 2027        | `errorElement`, Profiler, `memo`               | 8.5     |        | 181.5        |             |
| 22  | 11–16 Jan           | Skeletons, focus trap, keyboard nav            | 8.5     |        | 190          |             |
| 23  | 18–23 Jan           | ARIA audit, axe, Vitest + RTL setup            | 8.5     |        | 198.5        |             |
| 24  | 25–30 Jan           | Hook/reducer tests, MSW, XSS audit             | 8.5     |        | 207          |             |
| 25  | 1–6 Feb             | CSRF, uploads, rate limiting, deploy API       | 8.5     |        | 215.5        |             |
| 26  | 8–13 Feb 2027       | Deploy frontend, README, interview prep        | 8.5     |        | 224          |             |

**Reading the pace line:** within 5 hours of plan is fine. More than 10 hours behind means cut scope, not sleep — drop a stretch feature rather than skipping tests or accessibility.

---

## Phase Checklists

### Phase 1 — Foundation (W1–W8)

- [x] S0 · Clean the Vite starter
- [x] S1 · Types (`user`, `project`, `task`) + mock data
- [x] S2 · `Button` component
- [x] S3 · Router — `AppLayout`, `router.tsx`, `RouterProvider`, `useParams` guards
- [x] S4.2–4.7 · `Card`, `cn`, design tokens, `EmptyState`, `ProjectCard`, projects list, project detail + owner join
- [x] S4.8 · Members list with a type predicate
- [ ] S5 · Kanban board with immutable status moves
- [ ] S6 · Login form + Create Task modal
- [ ] S7 · Task detail page + comments
- [ ] S8 · Search / filter / sort with `useMemo` + URL params
- [ ] S9 · Dashboard statistics
- [ ] S10 · Extract `useTasks` hook, ProfilePage, cleanup

**Shared components**

- [x] `Button`
- [x] `Card`
- [x] `EmptyState`
- [ ] `Badge`
- [ ] `Avatar`
- [ ] `Spinner`
- [ ] `Input`
- [ ] `Modal`
- [ ] `Dropdown`
- [ ] `ErrorMessage`
- [ ] `Table`

**Tooling**

- [x] ESLint configured (`no-unused-expressions` enabled)
- [x] Prettier installed + `format` / `format:check` scripts
- [x] Design token layer in `index.css`
- [x] `cn` class-merging helper
- [ ] Path aliases (`@/lib/cn`) — do this when `../../../` starts hurting

### Phase 2 — Real API (W9–W12)

- [ ] Express + MongoDB scaffolded
- [ ] Models: User, Project, Task, Comment
- [ ] REST endpoints for projects, tasks, comments
- [ ] `services/http.ts` wrapper (base URL, headers, error normalizing)
- [ ] `projectApi`, `taskApi`, `userApi`
- [ ] All mock data removed from components
- [ ] Loading / error / empty states everywhere
- [ ] `AbortController` on unmount
- [ ] CORS + `VITE_API_URL`

### Phase 3 — Authentication (W13–W14)

- [ ] Register + login with hashed passwords
- [ ] Token strategy decided and documented
- [ ] Auth context + `useAuth`
- [ ] `ProtectedRoute` wrapping the layout route
- [ ] Redirect to intended page after login
- [ ] Logout clears session
- [ ] Token refresh on 401
- [ ] Roles `admin | member | viewer` hiding destructive UI

### Phase 4 — TanStack Query (W15–W17)

- [ ] Query client + provider
- [ ] Projects, tasks, comments as `useQuery`
- [ ] Query key convention documented
- [ ] `staleTime` / `gcTime` tuned deliberately
- [ ] Mutations + cache invalidation
- [ ] Optimistic Kanban move with rollback
- [ ] All manual `useEffect` fetching deleted

### Phase 5 — Redux Toolkit (W18–W19)

- [ ] Store + typed hooks
- [ ] UI slice: sidebar
- [ ] Theme slice + dark mode, persisted
- [ ] Toast queue slice + component
- [ ] Memoized selectors
- [ ] Written note: why server data stays in Query

### Phase 6 — Optimization & resilience (W20–W23)

- [ ] `React.lazy` + `Suspense` per route
- [ ] Route `errorElement` + app-level error boundary
- [ ] Profiled **before** optimizing
- [ ] `memo` / `useCallback` only where measured
- [ ] Skeletons replace spinners
- [ ] Modal focus trap + Escape to close
- [ ] Keyboard navigation on the board
- [ ] Labels and ARIA on all form controls

### Phase 7 — Security & testing (W23–W25)

- [ ] Vitest + RTL configured
- [ ] Tests: component, form validation, hook, reducer
- [ ] MSW integration test for one full flow
- [ ] No `dangerouslySetInnerHTML` on user content
- [ ] CSRF protection if using cookies
- [ ] Upload type + size validation
- [ ] Friendly UI for 401 and 429
- [ ] No secrets in frontend env vars

### Phase 8 — Deploy & present (W25–W26)

- [ ] Frontend deployed
- [ ] API deployed + MongoDB Atlas
- [ ] Production env vars + CORS working
- [ ] README: architecture diagram, screenshots, tradeoffs
- [ ] Demo credentials for a seeded account

---

## Interview story bank

Fill one line as soon as you finish the relevant phase, while it's fresh. This is what you'll actually say in interviews.

| Topic                                             | My story from DevBoard |
| ------------------------------------------------- | ---------------------- |
| How I structure a React app                       |                        |
| `components/` vs `features/` — how I decide       |                        |
| Override vs merge when spreading props            |                        |
| Why `useParams` returns `string \| undefined`     |                        |
| Why I normalize mock data by ID                   |                        |
| The four states of every list                     |                        |
| Local vs URL vs server vs global state            |                        |
| Why an API layer instead of `fetch` in components |                        |
| Auth approach and why I chose it                  |                        |
| A performance problem I found and fixed           |                        |
| A bug that took me hours                          |                        |
| Something I'd refactor if I started over          |                        |

---

## Rules

1. **Thursday is off from 3 Sep 2026.** It's an office day. Nothing is planned; don't feel behind.
2. **Sunday is DSA.** Don't borrow from it — you need both tracks.
3. **Write the syntax yourself.** Read the reference, close it, then type from memory. Copy-pasted code teaches nothing and shows in interviews.
4. **Don't skip ahead.** Redux before you've felt prop drilling is memorization.
5. **Commit small and often.** Your git history is evidence of how you work.
6. **Keep the dev server terminal visible.** A parse error already cost you an hour once — a failed HMR update means the browser is running stale code.
7. **Run `npm run format` before you stop for the day.** It keeps reviews about logic, not whitespace.
8. **If a week slips, cut scope, not quality.** Drop a stretch feature, never the tests.
