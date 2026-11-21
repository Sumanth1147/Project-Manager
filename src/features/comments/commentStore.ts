import { mockComments } from '../../data/comments'
import type { Comment } from '../../types/comment'

// Throw away module - stands in for the server until Phase 2.
// Mutating the mock array on purpose so a new comment outlives the page.
export function addComment(comment: Comment): void {
  mockComments.push(comment)
}
