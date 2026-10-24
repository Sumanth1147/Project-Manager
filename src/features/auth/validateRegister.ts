export interface RegisterValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type RegisterErrors = Partial<Record<keyof RegisterValues, string>>

export const INITIAL_REGISTER_VALUES: RegisterValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

// Field order drives which invalid field gets focus on submit
export const REGISTER_FIELD_ORDER = [
  'name',
  'email',
  'password',
  'confirmPassword',
] as const

const MIN_PASSWORD_LENGTH = 8

export function validateRegister({
  name,
  email,
  password,
  confirmPassword,
}: RegisterValues): RegisterErrors {
  const errors: RegisterErrors = {}

  if (name.trim() === '') {
    errors.name = 'Name is required'
  }

  if (email.trim() === '') {
    errors.email = 'Email is required'
  } else if (!email.includes('@')) {
    errors.email = 'Enter a valid email address'
  }

  if (password === '') {
    errors.password = 'Password is required'
  } else if (password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters`
  }

  // Cross-field rule - the error belongs on the confirm field, not password
  if (confirmPassword === '') {
    errors.confirmPassword = 'Confirm your password'
  } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return errors
}
