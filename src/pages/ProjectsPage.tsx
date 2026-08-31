import { Button } from '../components/Button'
import { EmptyState } from '../components/EmptyState'
import { mockProjects } from '../data/projects'
import { ProjectCard } from '../features/projects/ProjectCard'
import './ProjectsPage.css'

export function ProjectsPage() {
  return (
    <section className="page">
      <header className="page-header">
        <h2>Projects</h2>
        <Button onClick={() => console.log('create project clicked')}>
          New Project
        </Button>
      </header>

      {mockProjects.length === 0 ? (
        <EmptyState
          title="No projects yet"
          message="Create your first project to start tracking tasks."
          action={
            <Button onClick={() => console.log('create project clicked')}>
              New Project
            </Button>
          }
        />
      ) : (
        <ul className="project-list">
          {mockProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
