import Link from 'next/link'
import Image from 'next/image'
import { sampleCoaches } from '@/lib/stripe'

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/nexus-logo.jpg" alt="Nexus Logo" width={50} height={50} className="rounded" />
            <span className="text-2xl font-bold text-[#003366]">Nexus Coaching</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/coaches" className="text-gray-700 hover:text-gray-900 font-semibold">Coaches</Link>
            <Link href="/packages" className="text-gray-700 hover:text-gray-900">Packages</Link>
            <Link href="/login" className="px-4 py-2 rounded-lg text-white font-medium bg-[#4A90D9]">Sign In</Link>
          </div>
        </nav>
      </header>

      <section className="py-16 px-6 bg-[#003366]">
        <div className="mx-auto max-w-7xl text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Expert Coaches</h1>
          <p className="text-xl text-gray-200">World-class professionals dedicated to your success</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleCoaches.map((coach) => (
              <div key={coach.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#003366] to-[#4A90D9] flex items-center justify-center text-white text-2xl font-bold">
                      {coach.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#003366] mb-1">{coach.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500">★</span>
                        <span className="font-semibold text-gray-900">{coach.rating}</span>
                        <span className="text-gray-500 text-sm">({coach.sessionsCompleted} sessions)</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{coach.bio}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Credentials</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.credentials.map((cred, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specializations.map((spec, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[#4A90D9] bg-opacity-10 text-[#003366] text-sm rounded-full font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div>
                      <span className="text-2xl font-bold text-[#003366]">{coach.hourlyRate}</span>
                      <span className="text-gray-600 ml-1">CHF/hr</span>
                    </div>
                    <Link
                      href="/login"
                      className="px-6 py-2 bg-[#4A90D9] text-white rounded-lg font-semibold hover:bg-[#3a7fc9] transition-colors"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#003366]">Want to join our coach network?</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for exceptional coaches to join our platform.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#003366] text-white rounded-lg font-semibold hover:bg-[#004488] transition-colors"
            >
              Apply as a Coach
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-[#003366]">
        <div className="mx-auto max-w-7xl text-center text-white">
          <p className="mb-4">&copy; 2026 Nexus Coaching. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
