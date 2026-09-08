import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import type { Task, TaskStatus } from '../../types/task'
import type { User } from '../../types/user'
import { PRIORITY_BADGE_VARIANT, PRIORITY_LABELS } from './taskPriority'
import { getNextStatus, getPreviousStatus } from './taskStatus'
import './TaskCard.css'

interface TaskCardProps {
  task: Task
  assignee: User | null
  onMove: (taskId: string, status: TaskStatus) => void
}

export function TaskCard({ task, assignee, onMove }: TaskCardProps) {
  const nextStatus = getNextStatus(task.status)
  const previousStatus = getPreviousStatus(task.status)

  const handleMove = (status: TaskStatus | null) => {
    if (status === null) {
      return
    }

    onMove(task.id, status)
  }

  return (
    <Card className="task-card">
      <div className="task-card-header">
        <h4 className="task-card-title">{task.title}</h4>
        <Badge variant={PRIORITY_BADGE_VARIANT[task.priority]}>
          {PRIORITY_LABELS[task.priority]}
        </Badge>
      </div>

      <p className="task-card-description">{task.description}</p>

      <footer className="task-card-footer">
        <span className="task-card-assignee">
          {assignee?.name ?? 'Unassigned'}
        </span>

        <div className="task-card-actions">
          <Button
            variant="secondary"
            disabled={previousStatus === null}
            onClick={() => handleMove(previousStatus)}
            aria-label={`Move ${task.title} to previous status`}
          >
            ←
          </Button>

          <Button
            variant="secondary"
            disabled={nextStatus === null}
            onClick={() => handleMove(nextStatus)}
            aria-label={`Move ${task.title} to next status`}
          >
            →
          </Button>
        </div>
      </footer>
    </Card>
  )
}
