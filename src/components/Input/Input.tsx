import { useId, type ComponentProps } from 'react'
import { cn } from '../../lib/cn'
import './Input.css'

interface InputProps extends ComponentProps<'input'> {
  label: string
  error?: string
  hint?: string
}

export function Input({
  label,
  error,
  hint,
  id,
  className,
  ...rest
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const hintId = `${inputId}-hint`
  const errorId = `${inputId}-error`

  const describedBy = cn(hint && hintId, error && errorId) || undefined

  return (
    <div className="input-field">
      <label className="input-label" htmlFor={inputId}>
        {label}
      </label>
      {hint && (
        <p className="input-hint" id={hintId}>
          {hint}
        </p>
      )}
      <input
        id={inputId}
        className={cn('input', error && 'input-invalid', className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...rest}
      />

      {error && (
        <p className="input-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}
