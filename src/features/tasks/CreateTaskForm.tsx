import {
  useRef,
  useState,
  type ChangeEvent,
  type SubmitEventHandler,
} from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Select } from '../../components/Dropdown/select'
import { mockUsers } from '../../data/users'
import { PRIORITY_LABELS, PRIORITY_ORDER } from './taskPriority'
import { STATUS_LABELS, STATUS_ORDER } from './taskStatus'
import {
  INITIAL_TASK_VALUES,
  validateTask,
  type CreateTaskErrors,
  type CreateTaskValues,
} from './validateTask'
import './CreateTaskForm.css'

// Built once at module level - these never change
const statusOptions = STATUS_ORDER.map((status) => ({
  value: status,
  label: STATUS_LABELS[status],
}))

const priorityOptions = PRIORITY_ORDER.map((priority) => ({
  value: priority,
  label: PRIORITY_LABELS[priority],
}))

// Empty value stays selectable so a task can go back to unassigned
const assigneeOptions = [
  {
    value: '',
    label: 'Unassigned',
  },
  ...mockUsers.map((user) => ({ value: user.id, label: user.name })),
]

interface CreateTaskFormProps {
  onSubmit: (values: CreateTaskValues) => void
  onCancel: () => void
}

export function CreateTaskForm({ onSubmit, onCancel }: CreateTaskFormProps) {
  const [values, setValues] = useState<CreateTaskValues>(INITIAL_TASK_VALUES)
  const [errors, setErrors] = useState<CreateTaskErrors>({})

  const titleRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  // One handler for every field - [name] picks the key at runtime
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target

    setValues((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof CreateTaskValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const nextErrors = validateTask(values)
    setErrors(nextErrors)

    if (nextErrors.title) {
      titleRef.current?.focus()
      return
    }

    if (nextErrors.description) {
      descriptionRef.current?.focus()
      return
    }

    onSubmit(values)
  }

  return (
    <form className="create-task-form" onSubmit={handleSubmit} noValidate>
      <Input
        label="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
        error={errors.title}
        ref={titleRef}
      />

      <div className="input-field">
        <label className="input-label" htmlFor="create-task-description">
          Description
        </label>

        <textarea
          id="create-task-description"
          className="input create-task-textarea"
          name="description"
          rows={3}
          value={values.description}
          onChange={handleChange}
          aria-invalid={errors.description ? true : undefined}
          aria-describedby={
            errors.description ? 'create-task-description-error' : undefined
          }
          ref={descriptionRef}
        />

        {errors.description && (
          <p className="input-error" id="create-task-description-error">
            {errors.description}
          </p>
        )}
      </div>

      <div className="create-task-row">
        <Select
          label="Status"
          name="status"
          options={statusOptions}
          value={values.status}
          onChange={handleChange}
        />

        <Select
          label="Priority"
          name="priority"
          options={priorityOptions}
          value={values.priority}
          onChange={handleChange}
        />
      </div>

      <Select
        label="Assignee"
        name="assigneeId"
        value={values.assigneeId}
        options={assigneeOptions}
        onChange={handleChange}
      />

      <footer className="create-task-actions">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>

        <Button type="submit">Create task</Button>
      </footer>
    </form>
  )
}
