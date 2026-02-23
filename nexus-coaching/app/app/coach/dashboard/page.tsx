'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function CoachDashboard() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!session) {
    redirect('/login')
  }

  const upcomingSessions = [
    {
      id: '1',
      coachee: 'John Smith',
      organization: 'Tech Corp',
      time: '2026-02-24T10:00:00',
      duration: 60,
      type: 'Virtual',
      meetingLink: 'https://teams.microsoft.com/...',
    },
    {
      id: '2',
      coachee: 'Sarah Johnson',
      organization: 'Finance Inc',
      time: '2026-02-24T14:00:00',
      duration: 60,
      type: 'Virtual',
      meetingLink: 'https://teams.microsoft.com/...',
    },
  ]

  const recentClients = [
    { name: 'John Smith', organization: 'Tech Corp', sessions: 4, lastSession: '2026-02-20' },
    { name: 'Sarah Johnson', organization: 'Finance Inc', sessions: 6, lastSession: '2026-02-22' },
    { name: 'Michael Brown', organization: 'Retail Co', sessions: 3, lastSession: '2026-02-18' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/nexus-logo.jpg" alt="Nexus Logo" width={50} height={50} className="rounded" />
            <span className="text-2xl font-bold text-[#003366]">Nexus Coaching</span>
          </Link>
          <div className="flex items-center gap-6">
            <span className="text-gray-700">Welcome, {session.user?.name}</span>
            <Link href="/api/auth/signout" className="px-4 py-2 text-gray-700 hover:text-gray-900">
              Sign Out
            </Link>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Coach Dashboard</h1>
          <p className="text-gray-600">Manage your coaching sessions and clients</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">12</div>
            <div className="text-gray-600">Active Clients</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">45</div>
            <div className="text-gray-600">Sessions This Month</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">18,000</div>
            <div className="text-gray-600">CHF Earnings (MTD)</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#003366]">Upcoming Sessions</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{session.coachee}</h3>
                      <p className="text-sm text-gray-600">{session.organization}</p>
                    </div>
                    <span className="px-3 py-1 bg-[#4A90D9] bg-opacity-10 text-[#003366] text-sm rounded-full font-medium">
                      {session.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span>{new Date(session.time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>{new Date(session.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                    <span>{session.duration} min</span>
                  </div>
                  <a
                    href={session.meetingLink}
                    className="inline-block px-4 py-2 bg-[#4A90D9] text-white rounded-lg text-sm font-semibold hover:bg-[#3a7fc9] transition-colors"
                  >
                    Join Meeting
                  </a>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <Link href="/coach/sessions" className="text-[#4A90D9] hover:underline text-sm font-medium">
                View All Sessions →
              </Link>
            </div>
          </div>

          {/* Recent Clients */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#003366]">Recent Clients</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentClients.map((client, idx) => (
                <div key={idx} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{client.name}</h3>
                      <p className="text-sm text-gray-600">{client.organization}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#003366]">{client.sessions}</div>
                      <div className="text-xs text-gray-500">sessions</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    Last session: {new Date(client.lastSession).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <Link href="/coach/clients" className="text-[#4A90D9] hover:underline text-sm font-medium">
                View All Clients →
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Link
            href="/coach/availability"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-[#003366] mb-2">Set Availability</h3>
            <p className="text-gray-600 text-sm">Manage your coaching schedule and availability</p>
          </Link>
          <Link
            href="/coach/earnings"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-[#003366] mb-2">View Earnings</h3>
            <p className="text-gray-600 text-sm">Track your payments and financial reports</p>
          </Link>
          <Link
            href="/coach/profile"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-[#003366] mb-2">Edit Profile</h3>
            <p className="text-gray-600 text-sm">Update your bio, credentials, and specializations</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
