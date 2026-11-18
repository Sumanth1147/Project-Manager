import { useId } from 'react'
import type { Comment } from '../../types/comment'
import type { User } from '../../types/user'
import { CommentItem } from './CommentItem'
import './CommentList.css'

// Presentational - the page owns the data and the author lookup
interface CommentListProps {
  comments: Comment[]
  getAuthor: (authorId: string) => User | null
}

export function CommentList({ comments, getAuthor }: CommentListProps) {
  const headingId = useId()

  return (
    <section className="comment-list" aria-labelledby={headingId}>
      <h3 className="comment-list-heading" id={headingId}>
        Comments ({comments.length})
      </h3>

      {comments.length === 0 ? (
        <p className="comment-list-empty">No comments yet.</p>
      ) : (
        <ul className="comment-list-items">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              author={getAuthor(comment.authorId)}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
