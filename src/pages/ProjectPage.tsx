import { useParams } from 'react-router-dom'

export function ProjectPage() {
  const { projectId } = useParams()

  if (!projectId) {
    return <p>Project Not Found</p>
  }

  return <p>Project id: {projectId} </p>
}
