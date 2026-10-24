import {
  useRef,
  useState,
  type ChangeEvent,
  type SubmitEventHandler,
} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input, PasswordInput } from '../components/Input'
import { Button } from '../components/Button'
import {
  INITIAL_REGISTER_VALUES,
  REGISTER_FIELD_ORDER,
  validateRegister,
  type RegisterErrors,
  type RegisterValues,
} from '../features/auth/validateRegister'
import {
  fakeRegister,
  isEmailTaken,
  saveSession,
} from '../features/auth/fakeAuth'
import './RegisterPage.css'

export function RegisterPage() {
  const [values, setValues] = useState<RegisterValues>(INITIAL_REGISTER_VALUES)
  const [errors, setErrors] = useState<RegisterErrors>({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState('')

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const refs = {
    name: nameRef,
    email: emailRef,
    password: passwordRef,
    confirmPassword: confirmPasswordRef,
  }

  const focusFirstInvalid = (currentErrors: RegisterErrors) => {
    const firstInvalid = REGISTER_FIELD_ORDER.find(
      (field) => currentErrors[field],
    )

    if (firstInvalid) {
      refs[firstInvalid].current?.focus()
    }
  }

  // One handler for every field - [name] picks the key at runtime
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }

    setValues(nextValues)

    // Re-check the whole form so cross-field errors never go stale
    if (hasSubmitted) {
      setErrors(validateRegister(nextValues))
    }
  }

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    setHasSubmitted(true)
    setFormError('')

    const nextErrors = validateRegister(values)

    // Taken emails need a data lookup, so they are not a field rule
    if (!nextErrors.email && isEmailTaken(values.email)) {
      nextErrors.email = 'An account with this email already exists'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      focusFirstInvalid(nextErrors)
      return
    }

    setIsSubmitting(true)
    const user = await fakeRegister(values.name, values.email)
    setIsSubmitting(false)

    saveSession(user.id)
    navigate('/dashboard', { replace: true })
  }

  return (
    <section className="register-page">
      <header className="register-page-header">
        <h2>Create your account</h2>
      </header>

      {/* noValidate -- to avoid the default browser validation popup */}
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <Input
          label="Name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          ref={nameRef}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          ref={emailRef}
        />

        <PasswordInput
          label="Password"
          name="password"
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          ref={passwordRef}
        />

        <PasswordInput
          label="Confirm password"
          name="confirmPassword"
          autoComplete="new-password"
          value={values.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          ref={confirmPasswordRef}
        />

        {formError && (
          <p className="register-error" role="alert">
            {formError}
          </p>
        )}

        {/* Button defaults to type="button", so submit has to be explicit */}
        <Button
          type="submit"
          className="register-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating account...' : 'Register'}
        </Button>

        <p className="register-login-link">
          Existing user?{' '}
          <Link to="/login" replace>
            Log in
          </Link>
        </p>
      </form>
    </section>
  )
}
