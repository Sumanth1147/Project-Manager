import type { BadgeVariant } from '../../components/Badge'
import type { TaskPriority } from '../../types/task'

export const PRIORITY_LABELS: Record<TaskPriority, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
}

export const PRIORITY_BADGE_VARIANT: Record<TaskPriority, BadgeVariant> = {
  low: 'neutral',
  medium: 'warning',
  high: 'danger',
}
