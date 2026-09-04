import type { ComponentProps } from 'react'
import './Badge.css'
import { cn } from '../../lib/cn'

export type BadgeVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger'

// Extend native span props so title, aria-*, and data-* work
interface BadgeProps extends ComponentProps<'span'> {
  variant?: BadgeVariant
}

export function Badge({ variant = 'neutral', className, ...rest }: BadgeProps) {
  return (
    <span className={cn('badge', `badge-${variant}`, className)} {...rest} />
  )
}
