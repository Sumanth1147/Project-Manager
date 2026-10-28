import {
  useRef,
  useState,
  type ChangeEvent,
  type SubmitEventHandler,
} from 'react'
import { Input, PasswordInput } from '../components/Input'
import { Button } from '../components/Button'
import '../features/auth/auth.css'
import { validateLogin, type LoginErrors } from '../features/auth/validateLogin'
import { useNavigate } from 'react-router-dom'
import { fakeLogin, saveSession } from '../features/auth/fakeAuth'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<LoginErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState('')

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (event) => {
    setFormError('')
    event.preventDefault()
    const nextErrors = validateLogin({ email, password })
    setErrors(nextErrors)

    if (nextErrors.email) {
      emailRef.current?.focus()
      return
    }

    if (nextErrors.password) {
      passwordRef.current?.focus()
      return
    }

    setIsSubmitting(true)
    try {
      const user = await fakeLogin(email, password)

      // Narrow null before using user.id
      if (!user) {
        setFormError('Email or password is incorrect')
        emailRef.current?.focus()
        return
      }

      saveSession(user.id)
      navigate('/dashboard', { replace: true })
    } catch {
      setFormError('Could not login, please try again')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Input onChange is ChangeEvent<HTMLInputElement>, not the form
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)

    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }))
    }
  }

  return (
    <section className="auth-page">
      <header className="auth-page-header">
        <h2>Log in</h2>
      </header>
      {/* noValidate -- to avoid the default browser validation by showing it's own  popup */}
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <Input
          label="Email"
          type="email"
          autoComplete="email"
          name="email"
          value={email}
          onChange={(e) => handleEmailChange(e)}
          error={errors.email}
          ref={emailRef}
        />

        <PasswordInput
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          error={errors.password}
          ref={passwordRef}
        />

        {formError && (
          <p className="auth-error" role="alert">
            {formError}
          </p>
        )}

        {/* Button defaults to type="button", so submit has to be explicit */}
        <Button type="submit" className="auth-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging In...' : 'Log In'}
        </Button>
      </form>
    </section>
  )
}
