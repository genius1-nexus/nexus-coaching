'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function OrgDashboard() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!session) {
    redirect('/login')
  }

  const activeCoaches = [
    { name: 'Dr. Sarah Mitchell', clients: 8, sessions: 32, rating: 4.9 },
    { name: 'Michael Chen', clients: 5, sessions: 20, rating: 4.8 },
    { name: 'Emma Rodriguez', clients: 6, sessions: 24, rating: 5.0 },
  ]

  const activeClients = [
    { name: 'John Smith', coach: 'Dr. Sarah Mitchell', department: 'Engineering', sessionsUsed: 4, sessionsTotal: 12 },
    { name: 'Sarah Johnson', coach: 'Dr. Sarah Mitchell', department: 'Product', sessionsUsed: 6, sessionsTotal: 12 },
    { name: 'Michael Brown', coach: 'Michael Chen', department: 'Sales', sessionsUsed: 3, sessionsTotal: 6 },
  ]

  const upcomingSessions = [
    { coachee: 'John Smith', coach: 'Dr. Sarah Mitchell', time: '2026-02-24T10:00:00' },
    { coachee: 'Sarah Johnson', coach: 'Dr. Sarah Mitchell', time: '2026-02-24T14:00:00' },
    { coachee: 'Michael Brown', coach: 'Michael Chen', time: '2026-02-25T09:00:00' },
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
            <Link href="/org/clients" className="text-gray-700 hover:text-gray-900">Clients</Link>
            <Link href="/org/packages" className="text-gray-700 hover:text-gray-900">Packages</Link>
            <Link href="/org/invoices" className="text-gray-700 hover:text-gray-900">Billing</Link>
            <span className="text-gray-700">{session.user?.name}</span>
            <Link href="/api/auth/signout" className="px-4 py-2 text-gray-700 hover:text-gray-900">
              Sign Out
            </Link>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#003366] mb-2">Organization Dashboard</h1>
          <p className="text-gray-600">Manage your coaching programs and team development</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">19</div>
            <div className="text-gray-600">Active Employees</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">3</div>
            <div className="text-gray-600">Assigned Coaches</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">76</div>
            <div className="text-gray-600">Sessions Completed</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">68</div>
            <div className="text-gray-600">Sessions Remaining</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Active Coaches */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#003366]">Active Coaches</h2>
              <Link href="/org/coaches" className="text-[#4A90D9] hover:underline text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="divide-y divide-gray-200">
              {activeCoaches.map((coach, idx) => (
                <div key={idx} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{coach.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span>{coach.clients} clients</span>
                        <span>{coach.sessions} sessions</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold">{coach.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <Link
                href="/org/coaches/assign"
                className="block w-full text-center px-6 py-3 bg-[#4A90D9] text-white rounded-lg font-semibold hover:bg-[#3a7fc9] transition-colors"
              >
                Assign New Coach
              </Link>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#003366]">Upcoming Sessions</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {upcomingSessions.map((session, idx) => (
                <div key={idx} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{session.coachee}</h3>
                      <p className="text-sm text-gray-600">with {session.coach}</p>
                    </div>
                    <div className="text-right text-sm">
                      <div className="text-gray-900 font-medium">
                        {new Date(session.time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      <div className="text-gray-600">
                        {new Date(session.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <Link href="/org/sessions" className="text-[#4A90D9] hover:underline text-sm font-medium">
                View All Sessions →
              </Link>
            </div>
          </div>
        </div>

        {/* Active Clients */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#003366]">Active Employees</h2>
            <Link
              href="/org/clients/add"
              className="px-4 py-2 bg-[#4A90D9] text-white rounded-lg font-semibold hover:bg-[#3a7fc9] transition-colors"
            >
              Add Employee
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coach</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activeClients.map((client, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-semibold text-gray-900">{client.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{client.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{client.coach}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#4A90D9] h-2 rounded-full"
                            style={{ width: `${(client.sessionsUsed / client.sessionsTotal) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">
                          {client.sessionsUsed}/{client.sessionsTotal}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Link
            href="/org/packages/purchase"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-[#003366] mb-2">Purchase Package</h3>
            <p className="text-gray-600 text-sm">Add more coaching sessions for your team</p>
          </Link>
          <Link
            href="/org/reports"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-[#003366] mb-2">View Reports</h3>
            <p className="text-gray-600 text-sm">Access detailed analytics and insights</p>
          </Link>
          <Link
            href="/org/settings"
            className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-[#003366] mb-2">Organization Settings</h3>
            <p className="text-gray-600 text-sm">Manage billing and user access</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
