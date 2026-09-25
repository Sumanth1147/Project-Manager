import { mockUsers } from "../../data/users";
import type { User } from "../../types/user";


const SESSION_KEY = 'devboard.session';

export const DEMO_PASSWORD = 'password123';

const FAKE_DELAY = 600;

export function fakeLogin(
    email: string,
    password: string,
): Promise<User | null> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = mockUsers.find(
                (candidate) => candidate.email.toLowerCase() === email.trim().toLowerCase(),
            )

            resolve(user && password === DEMO_PASSWORD ? user : null)
        }, FAKE_DELAY)
    })
}

export function saveSession(userId: string): void {
    localStorage.setItem(SESSION_KEY, userId)
}

// export function getSessionUser(): User | null {
//     const user = localStorage.getItem(SESSION_KEY)

//     if (!user) {
        
//     }
// }