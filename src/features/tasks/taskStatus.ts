import type { TaskStatus } from '../../types/task'

export const STATUS_LABELS: Record<TaskStatus, string> = {
  todo: 'To do',
  in_progress: 'In progress',
  done: 'Done',
}

export const STATUS_ORDER: readonly TaskStatus[] = [
  'todo',
  'in_progress',
  'done',
]

export function getNextStatus(status: TaskStatus): TaskStatus | null {
  const index = STATUS_ORDER.indexOf(status)
  return STATUS_ORDER[index + 1] ?? null
  
}

export function getPreviousStatus(status: TaskStatus): TaskStatus | null {
  const index = STATUS_ORDER.indexOf(status)
  if (index <= 0) {
    return null
  }

  return STATUS_ORDER[index - 1] ?? null
}
