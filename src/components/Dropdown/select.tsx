import { useId, type ComponentProps } from 'react'
import { cn } from '../../lib/cn'
import './select.css'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends ComponentProps<'select'> {
  label: string
  options: SelectOption[]
  error?: string
  hint?: string
  placeholder?: string
}

export function Select({
  label,
  options,
  error,
  hint,
  placeholder,
  id,
  className,
  ...rest
}: SelectProps) {
  const generatedId = useId()
  const selectId = id ?? generatedId
  const hintId = `${selectId}-hint`
  const errorId = `${selectId}-error`

  const describedBy = cn(hint && hintId, error && errorId) || undefined

  return (
    <div className="select-field">
      <label className="select-label" htmlFor={selectId}>
        {label}
      </label>
      {hint && (
        <p className="select-hint" id={hintId}>
          {hint}
        </p>
      )}
      <select
        id={selectId}
        className={cn('select', error && 'select-invalid', className)}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="select-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}
