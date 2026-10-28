import { mockUsers } from '../../data/users'
import type { User } from '../../types/user'

const SESSION_KEY = 'devboard.session'

export const DEMO_PASSWORD = 'password123'

const FAKE_DELAY = 600

// throw away component, just for creating fake auth for implementing initial features
export function fakeLogin(
  email: string,
  password: string,
): Promise<User | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (candidate) =>
          candidate.email.toLowerCase() === email.trim().toLowerCase(),
      )

      resolve(user && password === DEMO_PASSWORD ? user : null)
    }, FAKE_DELAY)
  })
}

// Not a field rule - needs a lookup against existing accounts
export function isEmailTaken(email: string): boolean {
  return mockUsers.some(
    (user) => user.email.toLowerCase() === email.trim().toLowerCase(),
  )
}

export function fakeRegister(name: string, email: string): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user: User = {
        id: crypto.randomUUID(),
        name: name.trim(),
        email: email.trim().toLowerCase(),
        avatarUrl: null,
        role: 'member',
      }

      // Mutating mock data on purpose - stands in for a server insert.
      // The password is deliberately not stored anywhere.
      mockUsers.push(user)
      resolve(user)
    }, FAKE_DELAY)
  })
}

export function saveSession(userId: string): void {
  localStorage.setItem(SESSION_KEY, userId)
}

export function getSessionUser(): User | null {
  const userId = localStorage.getItem(SESSION_KEY)

  if (!userId) {
    return null
  }

  const user = mockUsers.find((candidate) => candidate.id === userId) ?? null

  if (!user) {
    clearSession()
    return null
  }

  return user
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_KEY)
}
