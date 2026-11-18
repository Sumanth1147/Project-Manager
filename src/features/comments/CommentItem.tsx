import { Avatar } from '../../components/Avatar'
import { formatDate } from '../../lib/formatDate'
import type { Comment } from '../../types/comment'
import type { User } from '../../types/user'
import './CommentItem.css'

interface CommentItemProps {
  comment: Comment
  author: User | null
}

export function CommentItem({ comment, author }: CommentItemProps) {
  // An author can go missing from the data - the comment still has to render
  const authorName = author?.name ?? 'Unknown user'

  return (
    <li className="comment-item">
      <Avatar
        name={authorName}
        src={author?.avatarUrl}
        size="sm"
        aria-hidden="true"
      />

      <div className="comment-item-body">
        <div className="comment-item-meta">
          <span className="comment-item-author">{authorName}</span>
          <time className="comment-item-date" dateTime={comment.createdAt}>
            {formatDate(comment.createdAt)}
          </time>
        </div>

        <p className="comment-item-text">{comment.body}</p>
      </div>
    </li>
  )
}
