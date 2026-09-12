import { useEffect, useState } from 'react'
import { mockTasks } from '../../data/tasks'
import type { Task, TaskStatus } from '../../types/task'
import { KanbanColumn } from './KanbanColumn'
import { STATUS_ORDER } from './taskStatus'
import { mockUsers } from '../../data/users'
import './KanbanBoard.css'
import { Spinner } from '../../components/Spinner/Spinner'

interface KanbanBoardProps {
  projectId: string
}

export function KanbanBoard({ projectId }: KanbanBoardProps) {
  const [tasks, setTasks] = useState<Task[]>(() =>
    mockTasks.filter((task) => task.projectId === projectId),
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

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
    return <Spinner />
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
