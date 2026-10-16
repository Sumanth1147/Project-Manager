import { useEffect, useId, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../Button'
import './Model.css'

interface ModelProps {
  isOpen: boolean
  title: string
  onClose: () => void
  children: ReactNode
  footer?: ReactNode
}

export function Model({
  isOpen,
  title,
  onClose,
  children,
  footer,
}: ModelProps) {
  const titleId = useId()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div
      className="model-backdrop"
      // Close only when the backdrop itself is clicked, not the panel
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-model="true"
        aria-labelledBy={titleId}
      >
        <header className="modal-header">
          <h2 className="modal-title" id={titleId}>
            {title}
          </h2>

          <Button
            variant="secondary"
            onClick={onClose}
            aria-label="Close dialog"
          >
            X
          </Button>
        </header>

        <div className="modal-body">{children}</div>
        {footer && <footer className="modal-footer">{footer}</footer>}
      </div>
    </div>,
    document.body,
  )
}
