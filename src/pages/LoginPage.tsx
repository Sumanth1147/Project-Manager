import {
  useRef,
  useState,
  type ChangeEvent,
  type SubmitEventHandler,
} from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import './LoginPage.css'
import { validateLogin, type LoginErrors } from '../features/auth/validateLogin'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<LoginErrors>({})
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
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

    console.log({ email, password })
  }

  // Input onChange is ChangeEvent<HTMLInputElement>, not the form
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)

    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }))
    }
  }

  return (
    <section className="page login-page">
      <header className="page-header">
        <h2>Log in</h2>
      </header>

      <form className="login-form" onSubmit={handleSubmit} noValidate>
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

        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          error={errors.password}
          ref={passwordRef}
        />

        {/* Button defaults to type="button", so submit has to be explicit */}
        <Button type="submit" className="login-submit">
          Log In
        </Button>
      </form>
    </section>
  )
}
