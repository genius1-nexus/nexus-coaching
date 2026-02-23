'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function CoacheeDashboard() {
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
      coach: 'Dr. Sarah Mitchell',
      time: '2026-02-24T10:00:00',
      duration: 60,
      type: 'Virtual',
      meetingLink: 'https://teams.microsoft.com/...',
    },
  ]

  const completedSessions = [
    {
      id: '1',
      coach: 'Dr. Sarah Mitchell',
      date: '2026-02-17',
      rating: 5,
      notes: 'Great session on leadership development strategies.',
    },
    {
      id: '2',
      coach: 'Dr. Sarah Mitchell',
      date: '2026-02-10',
      rating: 5,
      notes: 'Focused on communication skills and team management.',
    },
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
          <h1 className="text-3xl font-bold text-[#003366] mb-2">My Coaching Journey</h1>
          <p className="text-gray-600">Track your progress and upcoming sessions</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">4</div>
            <div className="text-gray-600">Completed Sessions</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">8</div>
            <div className="text-gray-600">Sessions Remaining</div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-3xl font-bold text-[#003366] mb-2">Dr. Sarah Mitchell</div>
            <div className="text-gray-600">Your Coach</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#003366]">Upcoming Sessions</h2>
            </div>
            {upcomingSessions.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{session.coach}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span>{new Date(session.time).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
                          <span>{new Date(session.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-[#4A90D9] bg-opacity-10 text-[#003366] text-sm rounded-full font-medium">
                        {session.type}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={session.meetingLink}
                        className="px-6 py-2 bg-[#4A90D9] text-white rounded-lg font-semibold hover:bg-[#3a7fc9] transition-colors"
                      >
                        Join Meeting
                      </a>
                      <button className="px-6 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Reschedule
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <p className="text-gray-600 mb-4">No upcoming sessions scheduled</p>
                <Link
                  href="/coachee/book"
                  className="inline-block px-6 py-3 bg-[#4A90D9] text-white rounded-lg font-semibold hover:bg-[#3a7fc9] transition-colors"
                >
                  Book a Session
                </Link>
              </div>
            )}
          </div>

          {/* Progress Overview */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-[#003366]">Progress Overview</h2>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Package Progress</span>
                  <span className="text-sm font-medium text-[#003366]">33%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-[#4A90D9] h-3 rounded-full" style={{ width: '33%' }}></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Initial Assessment</h4>
                    <p className="text-sm text-gray-600">Completed goals and priorities discussion</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4A90D9] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#003366] font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Skill Development</h4>
                    <p className="text-sm text-gray-600">In progress - Leadership communication</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-400">Advanced Techniques</h4>
                    <p className="text-sm text-gray-500">Upcoming module</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-[#003366]">Recent Sessions</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {completedSessions.map((session) => (
              <div key={session.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{session.coach}</h3>
                    <p className="text-sm text-gray-600 mb-3">{new Date(session.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                    <p className="text-gray-700">{session.notes}</p>
                  </div>
                  <div className="flex items-center gap-1 ml-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < session.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
