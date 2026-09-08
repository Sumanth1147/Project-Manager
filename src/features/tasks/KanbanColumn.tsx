import { EmptyState } from '../../components/EmptyState'
import type { Task, TaskStatus } from '../../types/task'
import type { User } from '../../types/user'
import { TaskCard } from './TaskCard'
import { STATUS_LABELS } from './taskStatus'
import './KanbanColumn.css'

interface KanbanColumnProps {
  status: TaskStatus
  tasks: Task[]
  getAssignee: (assigneeId: string | null) => User | null
  onMove: (taskId: string, status: TaskStatus) => void
}

export function KanbanColumn({
  status,
  tasks,
  getAssignee,
  onMove,
}: KanbanColumnProps) {
  return (
    <section className="kanban-column">
      <header className="kanban-column-header">
        <h3 className="kanban-column-title">{STATUS_LABELS[status]}</h3>
        <span className="kanban-column-count">{tasks.length}</span>
      </header>

      {tasks.length === 0 ? (
        <EmptyState title="No tasks" />
      ) : (
        <ul className="kanban-column-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskCard
                task={task}
                assignee={getAssignee(task.assigneeId)}
                onMove={onMove}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
