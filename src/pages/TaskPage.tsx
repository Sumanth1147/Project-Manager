import { useParams } from "react-router-dom"


export function TaskPage() {
    const {taskId} = useParams()

    if (!taskId) {
        return <p>Task not found</p>
    }

    return (
        <p>Task Id: {taskId}</p>
    )
}