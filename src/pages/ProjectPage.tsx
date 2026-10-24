import { Link, useParams } from 'react-router-dom'
import { mockProjects } from '../data/projects'
import { EmptyState } from '../components/EmptyState'
import { mockUsers } from '../data/users'
import { Card } from '../components/Card'
import './ProjectPage.css'
import type { User } from '../types/user'
import { KanbanBoard } from '../features/tasks/KanbanBoard'
import { Avatar } from '../components/Avatar'
import { useEffect, useState } from 'react'
import { Modal } from '../components/Modal'
import { CreateTaskForm } from '../features/tasks/CreateTaskForm'
import { Button } from '../components/Button'
import { mockTasks } from '../data/tasks'
import type { Task, TaskStatus } from '../types/task'
import type { CreateTaskValues } from '../features/tasks/validateTask'

export function ProjectPage() {
  const { projectId } = useParams()
  const project = mockProjects.find((p) => p.id === projectId)

  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  // Track which projectId the tasks belong to — avoids setState sync in the effect
  const [loadedProjectId, setLoadedProjectId] = useState<string | undefined>()
  const isLoading = loadedProjectId !== projectId

  // Fake the network delay so the loading UI is real
  useEffect(() => {
    const timer = setTimeout(() => {
      setTasks(mockTasks.filter((task) => task.projectId === projectId))
      setLoadedProjectId(projectId)
    }, 800)

    return () => clearTimeout(timer)
  }, [projectId])

  if (!project) {
    return (
      <section className="page">
        <EmptyState
          title="Project not found"
          message="This project may have been deleted, or the link is incorrect."
          action={<Link to="/projects">Back to projects</Link>}
        />
      </section>
    )
  }

  const owner = mockUsers.find((user) => user.id === project.ownerId)
  const members = project.memberIds
    .map((id) => mockUsers.find((user) => user.id === id))
    .filter((user): user is User => user !== undefined)

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

  const handleCreateTask = (values: CreateTaskValues) => {
    const now = new Date().toISOString()

    const task: Task = {
      id: crypto.randomUUID(),
      projectId: project.id,
      title: values.title.trim(),
      description: values.description.trim(),
      status: values.status,
      priority: values.priority,
      //  Form fields are strings - convert back to the domain shape
      assigneeId: values.assigneeId === '' ? null : values.assigneeId,
      createdAt: now,
      updatedAt: now,
    }

    // New task first so it is visible without scrolling
    setTasks((prev) => [task, ...prev])
    setIsCreateOpen(false)
  }

  return (
    <section className="page">
      <header className="page-header">
        <div className="page-header-actions">
          <h2>{project.name}</h2>
          <Button variant="primary" onClick={() => setIsCreateOpen(true)}>
            Create Task
          </Button>
        </div>
        <Link to="/projects">Back to Projects</Link>
      </header>

      <Card>
        <p className="project-detail-description">{project.description}</p>
        <dl className="project-detail-meta">
          <div>
            <dt>Owner</dt>
            <dd>{owner?.name ?? 'Unknown'}</dd>
          </div>

          <div>
            <dt>Members</dt>
            <dd>
              <ul className="project-detail-member-list">
                {members.map((member) => (
                  <li key={member.id} className="project-detail-member">
                    <Avatar
                      name={member.name}
                      src={member.avatarUrl}
                      size="sm"
                      aria-hidden="true"
                    />
                    {member.name}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </Card>

      <KanbanBoard tasks={tasks} isLoading={isLoading} onMove={moveTask} />

      <Modal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        title="New Task"
      >
        <CreateTaskForm
          onSubmit={handleCreateTask}
          onCancel={() => setIsCreateOpen(false)}
        />
      </Modal>
    </section>
  )
}
