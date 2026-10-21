import type { TaskPriority, TaskStatus } from '../../types/task'

export interface CreateTaskValues {
  title: string
  description: string
  status: TaskStatus
  priority: TaskPriority
  assigneeId: string
}

export type CreateTaskErrors = Partial<Record<keyof CreateTaskValues, string>>

export const INITIAL_TASK_VALUES: CreateTaskValues = {
  title: '',
  description: '',
  status: 'todo',
  priority: 'medium',
  assigneeId: '',
}

const MAX_TITLE_LENGTH = 80

export function validateTask({
  title,
  description,
}: CreateTaskValues): CreateTaskErrors {
  const errors: CreateTaskErrors = {}

  if (title.trim() === '') {
    errors.title = 'Title is required'
  } else if (title.trim().length > MAX_TITLE_LENGTH) {
    errors.title = `Title must be ${MAX_TITLE_LENGTH} characters or fewer`
  }

  if (description.trim() === '') {
    errors.description = 'Description is required'
  }

  return errors
}
