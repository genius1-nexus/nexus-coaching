// Shared magic links store
// In production, use a database (Redis, PostgreSQL, etc.)

export interface MagicLink {
  email: string
  expires: number
  role: string
}

// In-memory store - use a database in production
export const magicLinks = new Map<string, MagicLink>()
