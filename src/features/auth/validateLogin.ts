export interface LoginValues {
  email: string
  password: string
}

export type LoginErrors = Partial<Record<keyof LoginValues, string>>

const MIN_PASSWORD_LENGTH = 8

export function validateLogin({ email, password }: LoginValues): LoginErrors {
  const errors: LoginErrors = {}

  if (email.trim() === '') {
    errors.email = 'Email is required'
  } else if (!email.includes('@')) {
    errors.email = 'Enter a valid email'
  }

  if (password === '') {
    errors.password = 'Password is required'
  } else if (password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters`
  }

  return errors
}
