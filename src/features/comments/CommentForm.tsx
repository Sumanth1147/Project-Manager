import { useId, useRef, useState, type SubmitEventHandler } from 'react'
import { Button } from '../../components/Button'
import { validateComment } from './validateComment'
import './CommentForm.css'

interface CommentFormProps {
  onSubmit: (body: string) => void
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [body, setBody] = useState('')
  const [error, setError] = useState<string>()

  const bodyRef = useRef<HTMLTextAreaElement>(null)
  const fieldId = useId()
  const errorId = `${fieldId}-error`

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const nextError = validateComment(body)
    setError(nextError)

    if (nextError) {
      bodyRef.current?.focus()
      return
    }

    // Trim here so the stored value never carries stray whitespace
    onSubmit(body.trim())
    setBody('')
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit} noValidate>
      <div className="input-field">
        <label className="input-label" htmlFor={fieldId}>
          Add a comment
        </label>

        <textarea
          id={fieldId}
          className="input comment-form-textarea"
          name="body"
          rows={3}
          value={body}
          onChange={(event) => {
            setBody(event.target.value)

            if (error) {
              setError(undefined)
            }
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          ref={bodyRef}
        />

        {error && (
          <p className="input-error" id={errorId}>
            {error}
          </p>
        )}
      </div>

      <footer className="comment-form-actions">
        <Button type="submit">Comment</Button>
      </footer>
    </form>
  )
}
