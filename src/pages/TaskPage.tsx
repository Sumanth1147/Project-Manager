import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Avatar } from '../components/Avatar'
import { Badge } from '../components/Badge'
import { Card } from '../components/Card'
import { EmptyState } from '../components/EmptyState'
import { mockComments } from '../data/comments'
import { mockProjects } from '../data/projects'
import { mockTasks } from '../data/tasks'
import { mockUsers } from '../data/users'
import { mockActivities } from '../data/activities'
import { ActivityList } from '../features/activity/ActivityList'
import { getSessionUser } from '../features/auth/fakeAuth'
import { CommentForm } from '../features/comments/CommentForm'
import { addComment } from '../features/comments/commentStore'
import { CommentList } from '../features/comments/CommentList'
import {
  PRIORITY_BADGE_VARIANT,
  PRIORITY_LABELS,
} from '../features/tasks/taskPriority'
import {
  STATUS_BADGE_VARIANT,
  STATUS_LABELS,
} from '../features/tasks/taskStatus'
import { formatDate } from '../lib/formatDate'
import type { Comment } from '../types/comment'
import './TaskPage.css'

export function TaskPage() {
  const { taskId } = useParams()
  // Hold every comment and filter per task - no effect needed to reseed.
  // Copy on init so writes to the store never mutate this array.
  const [comments, setComments] = useState<Comment[]>(() => [...mockComments])

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
  const currentUser = getSessionUser()
  const taskComments = comments.filter((comment) => comment.taskId === task.id)

  const getUser = (userId: string) =>
    mockUsers.find((user) => user.id === userId) ?? null

  const getUserName = (userId: string | null) =>
    userId === null ? 'Unassigned' : (getUser(userId)?.name ?? 'Unknown user')

  // Copy before sorting - sort() mutates, and this array feeds the render
  const activities = [...mockActivities]
    .filter((activity) => activity.taskId === task.id)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  const handleAddComment = (body: string) => {
    if (!currentUser) {
      return
    }

    const comment: Comment = {
      id: crypto.randomUUID(),
      taskId: task.id,
      authorId: currentUser.id,
      body,
      createdAt: new Date().toISOString(),
    }

    // Two writes: the store survives unmount, the state triggers the render
    addComment(comment)

    // Thread reads oldest-first, so a new comment belongs at the end
    setComments((prev) => [...prev, comment])
  }

  return (
    <section className="page task-page">
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

      <Card className="task-comments">
        <CommentList comments={taskComments} getAuthor={getUser} />

        {currentUser ? (
          <CommentForm onSubmit={handleAddComment} />
        ) : (
          <p className="task-comments-signed-out">
            <Link to="/login">Log in</Link> to add a comment.
          </p>
        )}
      </Card>

      <Card>
        <ActivityList
          activities={activities}
          getUser={getUser}
          getUserName={getUserName}
        />
      </Card>
    </section>
  )
}
