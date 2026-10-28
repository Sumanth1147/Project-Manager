import { Link, useParams } from 'react-router-dom'
import { Avatar } from '../components/Avatar'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { EmptyState } from '../components/EmptyState'
import { mockProjects } from '../data/projects'
import { mockTasks } from '../data/tasks'
import { mockUsers } from '../data/users'
import {
  PRIORITY_BADGE_VARIANT,
  PRIORITY_LABELS,
} from '../features/tasks/taskPriority'
import {
  STATUS_BADGE_VARIANT,
  STATUS_LABELS,
} from '../features/tasks/taskStatus'
import { formatDate } from '../lib/formatDate'
import './TaskPage.css'

export function TaskPage() {
  const { taskId } = useParams()
  // An undefined taskId matches no id, so one guard covers both cases
  const task = mockTasks.find((item) => item.id === taskId)

  if (!task) {
    return (
      <section className="page">
        <EmptyState
          title="Task not found"
          message="This task may have been deleted, or the link is incorrect."
          action={<Link to="/projects">Back to projects</Link>}
        />
      </section>
    )
  }

  const project = mockProjects.find((item) => item.id === task.projectId)
  const assignee = mockUsers.find((user) => user.id === task.assigneeId)

  return (
    <section className="page">
      <header className="page-header">
        <h2>{task.title}</h2>
        {/* A link built from the task's own data, so it survives a cold load */}
        <Link to={`/projects/${task.projectId}`}>
          Back to {project?.name ?? 'project'}
        </Link>
      </header>

      <Card className="task-detail">
        <div className="task-detail-badges">
          <Badge variant={STATUS_BADGE_VARIANT[task.status]}>
            {STATUS_LABELS[task.status]}
          </Badge>
          <Badge variant={PRIORITY_BADGE_VARIANT[task.priority]}>
            {PRIORITY_LABELS[task.priority]} priority
          </Badge>
        </div>

        <p className="task-detail-description">{task.description}</p>

        <dl className="task-detail-meta">
          <div>
            <dt>Assignee</dt>
            <dd>
              {assignee ? (
                <span className="task-detail-assignee">
                  <Avatar
                    name={assignee.name}
                    src={assignee.avatarUrl}
                    size="sm"
                    aria-hidden="true"
                  />
                  {assignee.name}
                </span>
              ) : (
                'Unassigned'
              )}
            </dd>
          </div>

          <div>
            <dt>Project</dt>
            <dd>
              {project ? (
                <Link to={`/projects/${project.id}`}>{project.name}</Link>
              ) : (
                'Unknown'
              )}
            </dd>
          </div>

          <div>
            <dt>Created</dt>
            {/* dateTime keeps the machine-readable value next to the human one */}
            <dd>
              <time dateTime={task.createdAt}>
                {formatDate(task.createdAt)}
              </time>
            </dd>
          </div>

          <div>
            <dt>Updated</dt>
            <dd>
              <time dateTime={task.updatedAt}>
                {formatDate(task.updatedAt)}
              </time>
            </dd>
          </div>
        </dl>
      </Card>
    </section>
  )
}
