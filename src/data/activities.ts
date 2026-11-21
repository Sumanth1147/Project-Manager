import type { Activity } from '../types/activity'

// Seeded to match each task's real state - t2 ends in_progress, t4 ends done.
// Stored oldest-first; the UI reverses it, because a history reads newest-first.
export const mockActivities: Activity[] = [
  {
    id: 'a1',
    taskId: 't1',
    actorId: 'u1',
    type: 'created',
    createdAt: '2026-08-10T09:00:00.000Z',
  },
  {
    id: 'a2',
    taskId: 't2',
    actorId: 'u1',
    type: 'created',
    createdAt: '2026-08-11T10:00:00.000Z',
  },
  {
    id: 'a3',
    taskId: 't2',
    actorId: 'u1',
    type: 'assignee_changed',
    from: null,
    to: 'u2',
    createdAt: '2026-08-11T10:05:00.000Z',
  },
  {
    id: 'a4',
    taskId: 't2',
    actorId: 'u2',
    type: 'status_changed',
    from: 'todo',
    to: 'in_progress',
    createdAt: '2026-08-16T08:30:00.000Z',
  },
  {
    id: 'a5',
    taskId: 't4',
    actorId: 'u4',
    type: 'created',
    createdAt: '2026-08-08T14:00:00.000Z',
  },
  {
    id: 'a6',
    taskId: 't4',
    actorId: 'u4',
    type: 'priority_changed',
    from: 'low',
    to: 'medium',
    createdAt: '2026-08-09T11:15:00.000Z',
  },
  {
    id: 'a7',
    taskId: 't4',
    actorId: 'u4',
    type: 'assignee_changed',
    from: 'u4',
    to: 'u2',
    createdAt: '2026-08-12T09:40:00.000Z',
  },
  {
    id: 'a8',
    taskId: 't4',
    actorId: 'u2',
    type: 'status_changed',
    from: 'in_progress',
    to: 'done',
    createdAt: '2026-08-15T16:00:00.000Z',
  },
]
