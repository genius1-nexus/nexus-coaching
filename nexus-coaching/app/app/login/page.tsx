'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

type Role = 'coach' | 'coachee' | 'organization'

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<Role>('coach')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleMicrosoftLogin = async () => {
    setLoading(true)
    await signIn('azure-ad', { callbackUrl: `/${activeTab}/dashboard` })
  }

  const handleMagicLinkLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // In production, this would send a magic link email
    await signIn('credentials', {
      email,
      role: activeTab,
      callbackUrl: `/${activeTab}/dashboard`,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/nexus-logo.jpg" alt="Nexus Logo" width={50} height={50} className="rounded" />
            <span className="text-2xl font-bold text-[#003366]">Nexus Coaching</span>
          </Link>
        </nav>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#003366] mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your account</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Role Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <button
                onClick={() => setActiveTab('coach')}
                className={`flex-1 py-3 text-center font-medium transition-colors ${
                  activeTab === 'coach'
                    ? 'border-b-2 border-[#4A90D9] text-[#4A90D9]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Coach
              </button>
              <button
                onClick={() => setActiveTab('coachee')}
                className={`flex-1 py-3 text-center font-medium transition-colors ${
                  activeTab === 'coachee'
                    ? 'border-b-2 border-[#4A90D9] text-[#4A90D9]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Coachee
              </button>
              <button
                onClick={() => setActiveTab('organization')}
                className={`flex-1 py-3 text-center font-medium transition-colors ${
                  activeTab === 'organization'
                    ? 'border-b-2 border-[#4A90D9] text-[#4A90D9]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Organization
              </button>
            </div>

            {/* Coach Login - Microsoft */}
            {activeTab === 'coach' && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  Coaches sign in with their Microsoft 365 account
                </p>
                <button
                  onClick={handleMicrosoftLogin}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-[#003366] text-white rounded-lg font-semibold hover:bg-[#004488] transition-colors disabled:opacity-50"
                >
                  <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none">
                    <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                    <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                    <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                    <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                  </svg>
                  {loading ? 'Signing in...' : 'Sign in with Microsoft'}
                </button>
              </div>
            )}

            {/* Coachee Login - Magic Link */}
            {activeTab === 'coachee' && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  Enter your email to receive a secure login link
                </p>
                <form onSubmit={handleMagicLinkLogin} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90D9] focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-[#4A90D9] text-white rounded-lg font-semibold hover:bg-[#3a7fc9] transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Sending link...' : 'Send Magic Link'}
                  </button>
                </form>
              </div>
            )}

            {/* Organization Login - Microsoft or Magic Link */}
            {activeTab === 'organization' && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  Organization admins can sign in with Microsoft 365 or email
                </p>
                <button
                  onClick={handleMicrosoftLogin}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-[#003366] text-white rounded-lg font-semibold hover:bg-[#004488] transition-colors disabled:opacity-50"
                >
                  <svg className="w-5 h-5" viewBox="0 0 21 21" fill="none">
                    <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                    <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                    <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                    <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                  </svg>
                  Sign in with Microsoft
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or</span>
                  </div>
                </div>

                <form onSubmit={handleMagicLinkLogin} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90D9] focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-[#4A90D9] text-white rounded-lg font-semibold hover:bg-[#3a7fc9] transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Sending link...' : 'Send Magic Link'}
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            <Link href="/" className="text-[#4A90D9] hover:underline">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
