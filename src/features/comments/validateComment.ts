export const MAX_COMMENT_LENGTH = 1000

// One field, so this returns the message directly instead of an errors object
export function validateComment(body: string): string | undefined {
  const trimmed = body.trim()

  if (trimmed === '') {
    return 'Comment cannot be empty'
  }

  if (trimmed.length > MAX_COMMENT_LENGTH) {
    return `Comment must be ${MAX_COMMENT_LENGTH} characters or fewer`
  }

  return undefined
}
