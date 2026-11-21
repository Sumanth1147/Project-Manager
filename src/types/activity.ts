import type { TaskPriority, TaskStatus } from './task'

interface ActivityBase {
  id: string
  taskId: string
  // Who did it - an activity always has an actor
  actorId: string
  createdAt: string
}

// Discriminated union on `type` - each kind carries only the fields it needs,
// so a status change can never accidentally hold a priority value.
export type Activity =
  | (ActivityBase & { type: 'created' })
  | (ActivityBase & {
      type: 'status_changed'
      from: TaskStatus
      to: TaskStatus
    })
  | (ActivityBase & {
      type: 'priority_changed'
      from: TaskPriority
      to: TaskPriority
    })
  | (ActivityBase & {
      type: 'assignee_changed'
      from: string | null
      to: string | null
    })
