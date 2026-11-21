import { formatDate } from '../../lib/formatDate'
import { PRIORITY_LABELS } from '../tasks/taskPriority'
import { STATUS_LABELS } from '../tasks/taskStatus'
import type { Activity } from '../../types/activity'
import type { User } from '../../types/user'
import './ActivityItem.css'

interface ActivityItemProps {
  activity: Activity
  actor: User | null
  getUserName: (userId: string | null) => string
}

export function ActivityItem({
  activity,
  actor,
  getUserName,
}: ActivityItemProps) {
  const actorName = actor?.name ?? 'Someone'

  // Switching on `type` narrows the union, so each branch only sees its
  // own fields - `activity.from` does not exist on the 'created' branch.
  const renderDetail = () => {
    switch (activity.type) {
      case 'created':
        return <>created this task</>

      case 'status_changed':
        return (
          <>
            changed status from <b>{STATUS_LABELS[activity.from]}</b> to{' '}
            <b>{STATUS_LABELS[activity.to]}</b>
          </>
        )

      case 'priority_changed':
        return (
          <>
            changed priority from <b>{PRIORITY_LABELS[activity.from]}</b> to{' '}
            <b>{PRIORITY_LABELS[activity.to]}</b>
          </>
        )

      case 'assignee_changed':
        return (
          <>
            changed assignee from <b>{getUserName(activity.from)}</b> to{' '}
            <b>{getUserName(activity.to)}</b>
          </>
        )

      default: {
        // Add a new Activity kind and this line stops compiling
        const exhaustive: never = activity
        return exhaustive
      }
    }
  }

  return (
    <li className="activity-item">
      <p className="activity-item-text">
        <b>{actorName}</b> {renderDetail()}
      </p>

      <time className="activity-item-date" dateTime={activity.createdAt}>
        {formatDate(activity.createdAt)}
      </time>
    </li>
  )
}
