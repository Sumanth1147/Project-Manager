import { useState, type SubmitEventHandler } from 'react'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import './LoginPage.css'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    console.log({ email, password })
  }

  return (
    <section className="page login-page">
      <header className="page-header">
        <h2>Log in</h2>
      </header>

      <form className="login-form" onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          autoComplete="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button defaults to type="button", so submit has to be explicit */}
        <Button type="submit">Log In</Button>
      </form>
    </section>
  )
}
