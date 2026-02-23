'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function AdminDashboard() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!session) {
    redirect('/login')
  }

  const platformStats = {
    totalOrganizations: 24,
    activeCoaches: 15,
    totalCoachees: 156,
    sessionsThisMonth: 342,
    revenueThisMonth: 136800,
  }

  const recentOrganizations = [
    { name: 'Tech Corp', plan: 'Enterprise', clients: 45, status: 'Active' },
    { name: 'Finance Inc', plan: 'Professional', clients: 28, status: 'Active' },
    { name: 'Retail Co', plan: 'Starter', clients: 12, status: 'Trial' },
  ]

  const recentCoaches = [
    { name: 'Dr. Sarah Mitchell', sessions: 45, rating: 4.9, status: 'Active' },
    { name: 'Michael Chen', sessions: 38, rating: 4.8, status: 'Active' },
    { name: 'Emma Rodriguez', sessions: 52, rating: 5.0, status: 'Active' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/nexus-logo.jpg" alt="Nexus Logo" width={50} height={50} className="rounded" />
            <span className="text-2xl font-bold text-[#003366]">Nexus Coaching Admin</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/admin/organizations" className="text-gray-700 hover:text-gray-900">Organizations</Link>
            <Link href="/admin/coaches" className="text-gray-700 hover:text-gray-900">Coaches</Link>
            <Link href="/admin/sessions" className="text-gray-700 hover:text-gray-900">Sessions</Link>
            <Link href="/admin/reports" className="text-gray-700 hover:text-gray-900">Reports</Link>
            <span className="text-gray-700">{session.user?.name}</span>
            <Link href="/api/auth/signout" className="px-4 py-2 text-gray-700 hover:text-gray-900">
              Sign Out
            </Link>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Platform Dashboard</h1>
          <p className="text-gray-600">Monitor and manage the Nexus Coaching platform</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">{platformStats.totalOrganizations}</div>
            <div className="text-gray-600">Organizations</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">{platformStats.activeCoaches}</div>
            <div className="text-gray-600">Active Coaches</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">{platformStats.totalCoachees}</div>
            <div className="text-gray-600">Total Coachees</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">{platformStats.sessionsThisMonth}</div>
            <div className="text-gray-600">Sessions (MTD)</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">
              {(platformStats.revenueThisMonth / 1000).toFixed(0)}k
            </div>
            <div className="text-gray-600">CHF Revenue (MTD)</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Organizations */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#003366]">Organizations</h2>
              <Link
                href="/admin/organizations/invite"
                className="px-4 py-2 bg-[#4A90D9] text-white rounded-lg text-sm font-semibold hover:bg-[#3a7fc9] transition-colors"
              >
                Invite Organization
              </Link>
            </div>
            <div className="divide-y divide-gray-200">
              {recentOrganizations.map((org, idx) => (
                <div key={idx} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{org.name}</h3>
                      <p className="text-sm text-gray-600">{org.plan} Plan</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        org.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {org.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">{org.clients} active clients</div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <Link href="/admin/organizations" className="text-[#4A90D9] hover:underline text-sm font-medium">
                View All Organizations →
              </Link>
            </div>
          </div>

          {/* Recent Coaches */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#003366]">Coaches</h2>
              <Link
                href="/admin/coaches/invite"
                className="px-4 py-2 bg-[#4A90D9] text-white rounded-lg text-sm font-semibold hover:bg-[#3a7fc9] transition-colors"
              >
                Invite Coach
              </Link>
            </div>
            <div className="divide-y divide-gray-200">
              {recentCoaches.map((coach, idx) => (
                <div key={idx} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{coach.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                        <span>{coach.sessions} sessions</span>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span>{coach.rating}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {coach.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <Link href="/admin/coaches" className="text-[#4A90D9] hover:underline text-sm font-medium">
                View All Coaches →
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#003366]">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-900"><span className="font-semibold">Tech Corp</span> purchased Enterprise Package</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-900">New coach <span className="font-semibold">Dr. Lisa Wang</span> invited</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-900">156 sessions completed this week</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <Link
            href="/admin/packages"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-[#003366] mb-2">Manage Packages</h3>
            <p className="text-gray-600 text-sm">Edit pricing and package templates</p>
          </Link>
          <Link
            href="/admin/reports"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-[#003366] mb-2">Analytics</h3>
            <p className="text-gray-600 text-sm">View detailed platform analytics</p>
          </Link>
          <Link
            href="/admin/invoices"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-[#003366] mb-2">Billing</h3>
            <p className="text-gray-600 text-sm">Manage invoices and payments</p>
          </Link>
          <Link
            href="/admin/settings"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-[#003366] mb-2">Platform Settings</h3>
            <p className="text-gray-600 text-sm">Configure system settings</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
