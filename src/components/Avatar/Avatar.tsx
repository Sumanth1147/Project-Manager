import type { ComponentProps } from 'react'
import { cn } from '../../lib/cn'
import './Avatar.css'

type AvatarSize = 'md' | 'sm'

interface AvatarProps extends ComponentProps<'span'> {
  name: string
  src?: string | null
  size?: AvatarSize
}

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean)

  if (words.length === 0) {
    return '?'
  }

  const first = words[0].charAt(0)

  const last = words.length > 1 ? words[words.length - 1].charAt(0) : ''

  return (first + last).toUpperCase()
}

export function Avatar({
  name,
  src,
  size = 'md',
  className,
  ...rest
}: AvatarProps) {
  return (
    <span
      className={cn('avatar', `avatar-${size}`, className)}
      role="img"
      aria-label={name}
      {...rest}
    >
      {src ? (
        <img className="avatar-image" src={src} alt="" />
      ) : (
        getInitials(name)
      )}
    </span>
  )
}
