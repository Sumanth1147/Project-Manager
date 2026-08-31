import { Link } from 'react-router-dom'
import type { Project } from '../../types/project'
import { Card } from '../../components/Card'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const memberCount = project.memberIds.length

  return (
    <Link to={`/projects/${project.id}`} className="project-card-link">
      <Card className="project-card">
        <h3 className="project-card-title">{project.name}</h3>
        <p className="project-card-description">{project.description}</p>
        <p className="project-card-meta">
          {memberCount} {memberCount === 1 ? 'member' : 'members'}
        </p>
      </Card>
    </Link>
  )
}
