
export type TaskStatus = 'in_progress' | 'todo' | 'done'
export type TaskPriority = 'low' | 'medium' | 'high'

export interface Task  {
    id: string
    projectId: string
    title: string
    description: string
    status: TaskStatus
    assigneeId: string | null
    priority: TaskPriority
    createdAt: string
    updatedAt: string
}