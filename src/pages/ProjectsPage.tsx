import { Button } from '../components/Button'
import { EmptyState } from '../components/EmptyState'

export function ProjectsPage() {
  return (
    <>
      <h2>Projects</h2>
      <EmptyState title="No projects yet" />
      <EmptyState
        title="No projects yet"
        message="Create your first project to start tracking tasks."
        action={
          <Button onClick={() => console.log('create new project')}>
            New project
          </Button>
        }
      />
    </>
  )
}
