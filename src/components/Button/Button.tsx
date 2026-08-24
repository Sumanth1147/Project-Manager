import type { ComponentProps } from 'react'
import './Button.css'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

// Extend native button props so onClick, children, disabled, etc. work
interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
}

export function Button({
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn('btn', `btn-${variant}`, className)}
      {...rest}
    />
  )
}
