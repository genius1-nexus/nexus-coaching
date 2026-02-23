import type { NextAuthOptions } from 'next-auth'
import MicrosoftEntraIDProvider from 'next-auth/providers/azure-ad'
import CredentialsProvider from 'next-auth/providers/credentials'

export type UserRole = 'coach' | 'coachee' | 'organization' | 'admin'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  image?: string
}

export const authOptions: NextAuthOptions = {
  providers: [
    MicrosoftEntraIDProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID || 'placeholder-client-id',
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET || 'placeholder-client-secret',
      tenantId: process.env.AZURE_AD_TENANT_ID || 'placeholder-tenant-id',
      authorization: {
        params: {
          scope: 'openid profile email User.Read',
        },
      },
    }),
    CredentialsProvider({
      name: 'Magic Link',
      credentials: {
        email: { label: 'Email', type: 'email' },
        role: { label: 'Role', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null
        const user = {
          id: Buffer.from(credentials.email).toString('base64'),
          email: credentials.email,
          name: credentials.email.split('@')[0],
          role: (credentials.role as UserRole) || 'coachee',
        }
        return user
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as User).role || 'coach'
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as User).role = token.role as UserRole
        (session.user as User).id = token.id as string
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
