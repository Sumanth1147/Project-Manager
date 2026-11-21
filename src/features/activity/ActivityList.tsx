import { useId } from 'react'
import type { Activity } from '../../types/activity'
import type { User } from '../../types/user'
import { ActivityItem } from './ActivityItem'
import './ActivityList.css'

// Presentational - the page owns the data and the user lookups
interface ActivityListProps {
  activities: Activity[]
  getUser: (userId: string) => User | null
  getUserName: (userId: string | null) => string
}

export function ActivityList({
  activities,
  getUser,
  getUserName,
}: ActivityListProps) {
  const headingId = useId()

  return (
    <section className="activity-list" aria-labelledby={headingId}>
      <h3 className="activity-list-heading" id={headingId}>
        Activity
      </h3>

      {activities.length === 0 ? (
        <p className="activity-list-empty">No activity recorded yet.</p>
      ) : (
        <ul className="activity-list-items">
          {activities.map((activity) => (
            <ActivityItem
              key={activity.id}
              activity={activity}
              actor={getUser(activity.actorId)}
              getUserName={getUserName}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
