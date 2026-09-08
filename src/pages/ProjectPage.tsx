import { Link, useParams } from 'react-router-dom'
import { mockProjects } from '../data/projects'
import { EmptyState } from '../components/EmptyState'
import { mockUsers } from '../data/users'
import { Card } from '../components/Card'
import './ProjectPage.css'
import type { User } from '../types/user'
import { KanbanBoard } from '../features/tasks/KanbanBoard'

export function ProjectPage() {
  const { projectId } = useParams()
  const project = mockProjects.find((p) => p.id === projectId)

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

  return (
    <section className="page">
      <header className="page-header">
        <h2>{project.name}</h2>
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
                  <li key={member.id}>{member.name}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </Card>

      <KanbanBoard key={project.id} projectId={project.id} />
    </section>
  )
}
