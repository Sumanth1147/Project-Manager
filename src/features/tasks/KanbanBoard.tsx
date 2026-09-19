import { useEffect, useState } from 'react'
import { mockTasks } from '../../data/tasks'
import type { Task, TaskStatus } from '../../types/task'
import { KanbanColumn } from './KanbanColumn'
import { STATUS_ORDER } from './taskStatus'
import { mockUsers } from '../../data/users'
import './KanbanBoard.css'
import { Spinner } from '../../components/Spinner'

interface KanbanBoardProps {
  projectId: string
}

export function KanbanBoard({ projectId }: KanbanBoardProps) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTasks(mockTasks.filter((task) => task.projectId === projectId))
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [projectId])

  const moveTask = (taskId: string, nextStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: nextStatus,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    )
  }

  const getAssignee = (assigneeId: string | null) => {
    if (!assigneeId) {
      return null
    }

    return mockUsers.find((user) => user.id === assigneeId) ?? null
  }

  if (loading) {
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
          onMove={moveTask}
        />
      ))}
    </div>
  )
}
