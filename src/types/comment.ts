export interface Comment {
  id: string
  taskId: string
  // Not nullable - unlike a task's assignee, a comment always has an author
  authorId: string
  body: string
  createdAt: string
}
