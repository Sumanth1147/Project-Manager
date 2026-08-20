import type { ComponentProps } from 'react'
import './Button.css'

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
      className={`btn btn-${variant} ${className ?? ''}`}
      {...rest}
    />
  )
}
