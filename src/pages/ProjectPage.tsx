import { Link, useParams } from 'react-router-dom'
import { mockProjects } from '../data/projects'
import { EmptyState } from '../components/EmptyState'
import { mockUsers } from '../data/users'
import { Card } from '../components/Card'
import './ProjectPage.css'

export function ProjectPage() {
  const { projectId } = useParams()
  const project = mockProjects.find((user) => user.id === projectId)

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
            <dd>{project.memberIds.length}</dd>
          </div>
        </dl>
      </Card>
    </section>
  )
}
