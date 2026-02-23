import Link from 'next/link'
import Image from 'next/image'
import { packages } from '@/lib/stripe'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/assets/nexus-logo.jpg" alt="Nexus Logo" width={50} height={50} className="rounded" />
            <span className="text-2xl font-bold text-[#003366]">Nexus Coaching</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/coaches" className="text-gray-700 hover:text-gray-900">Coaches</Link>
            <Link href="/packages" className="text-gray-700 hover:text-gray-900">Packages</Link>
            <Link href="/login" className="px-4 py-2 rounded-lg text-white font-medium bg-[#4A90D9]">Sign In</Link>
          </div>
        </nav>
      </header>

      <section className="relative py-20 px-6 bg-[#003366]">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-6">Transform Your Organization Through Expert Coaching</h1>
              <p className="text-xl mb-8 text-gray-200">Connect your team with world-class coaches. Drive performance, develop leaders, and achieve breakthrough results.</p>
              <div className="flex gap-4">
                <Link href="/packages" className="px-8 py-4 rounded-lg font-semibold text-lg bg-[#4A90D9] text-white">View Packages</Link>
                <Link href="/coaches" className="px-8 py-4 rounded-lg font-semibold text-lg bg-white text-[#003366]">Meet Our Coaches</Link>
              </div>
            </div>
            <div className="relative h-96 hidden md:block">
              <Image src="/assets/hero-image.jpg" alt="Coaching Session" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#003366]">Why Choose Nexus Coaching</h2>
            <p className="text-xl text-gray-600">The premier platform for organizational coaching and development</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold bg-[#4A90D9]">1</div>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">Expert Coaches</h3>
              <p className="text-gray-600">Access a curated network of certified coaches with proven track records in leadership development and organizational transformation.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold bg-[#4A90D9]">2</div>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">Flexible Sessions</h3>
              <p className="text-gray-600">Virtual or in-person coaching sessions that fit your schedule. Integrated with Microsoft Teams and Outlook for seamless booking.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center text-white text-2xl font-bold bg-[#4A90D9]">3</div>
              <h3 className="text-2xl font-bold mb-4 text-[#003366]">Track Progress</h3>
              <p className="text-gray-600">Comprehensive dashboards and reporting tools to measure impact, track development, and demonstrate ROI.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#003366]">Coaching Packages</h2>
            <p className="text-xl text-gray-600">Flexible packages designed for organizations of all sizes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="p-8 rounded-lg border border-gray-200 bg-white">
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="px-4 py-1 rounded-full text-sm font-semibold text-white bg-[#4A90D9]">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-[#003366]">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#003366]">{pkg.price.toLocaleString('de-CH')}</span>
                  <span className="text-gray-600 ml-2">{pkg.currency}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-6 h-6 flex-shrink-0 text-[#4A90D9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/packages" className="block w-full text-center px-6 py-3 rounded-lg font-semibold bg-[#4A90D9] text-white">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-[#003366]">
        <div className="mx-auto max-w-7xl text-center text-white">
          <p className="mb-4">&copy; 2026 Nexus Coaching. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            <Link href="/privacy" className="text-gray-300 hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
