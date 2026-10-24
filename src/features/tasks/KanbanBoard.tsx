import type { Task, TaskStatus } from '../../types/task'
import { KanbanColumn } from './KanbanColumn'
import { STATUS_ORDER } from './taskStatus'
import { mockUsers } from '../../data/users'
import './KanbanBoard.css'
import { Spinner } from '../../components/Spinner'

// Tasks state now lives in ProjectPage, so the board only renders what it is given
interface KanbanBoardProps {
  tasks: Task[]
  isLoading: boolean
  onMove: (taskId: string, status: TaskStatus) => void
}

export function KanbanBoard({ tasks, isLoading, onMove }: KanbanBoardProps) {
  const getAssignee = (assigneeId: string | null) => {
    if (!assigneeId) {
      return null
    }

    return mockUsers.find((user) => user.id === assigneeId) ?? null
  }

  if (isLoading) {
    return (
      <div className="kanban-board-spinner">
        <Spinner label="Loading tasks" />
      </div>
    )
  }

  return (
    <div className="kanban-board">
      {STATUS_ORDER.map((status) => (
        <KanbanColumn
          key={status}
          status={status}
          tasks={tasks.filter((task) => task.status === status)}
          getAssignee={getAssignee}
          onMove={onMove}
        />
      ))}
    </div>
  )
}
