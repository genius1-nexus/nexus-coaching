import Link from 'next/link'
import Image from 'next/image'
import { packages } from '@/lib/stripe'

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/nexus-logo.jpg" alt="Nexus Logo" width={50} height={50} className="rounded" />
            <span className="text-2xl font-bold text-[#003366]">Nexus Coaching</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/coaches" className="text-gray-700 hover:text-gray-900">Coaches</Link>
            <Link href="/packages" className="text-gray-700 hover:text-gray-900 font-semibold">Packages</Link>
            <Link href="/login" className="px-4 py-2 rounded-lg text-white font-medium bg-[#4A90D9]">Sign In</Link>
          </div>
        </nav>
      </header>

      <section className="py-16 px-6 bg-[#003366]">
        <div className="mx-auto max-w-7xl text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Coaching Packages</h1>
          <p className="text-xl text-gray-200">Choose the perfect package for your organization</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-8 rounded-lg ${
                  pkg.popular ? 'ring-2 ring-[#4A90D9] ring-offset-4 shadow-xl' : 'border border-gray-200'
                } bg-white`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="px-4 py-1 rounded-full text-sm font-semibold text-white bg-[#4A90D9]">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-[#003366]">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#003366]">
                    {pkg.price.toLocaleString('de-CH')}
                  </span>
                  <span className="text-gray-600 ml-2 text-lg">{pkg.currency}</span>
                </div>
                <p className="text-gray-600 mb-8 text-lg">{pkg.description}</p>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Sessions</span>
                    <span className="font-semibold text-[#003366]">{pkg.sessions}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-semibold text-[#003366]">{pkg.duration} minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price per session</span>
                    <span className="font-semibold text-[#003366]">
                      {Math.round(pkg.price / pkg.sessions).toLocaleString('de-CH')} {pkg.currency}
                    </span>
                  </div>
                </div>

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

                <Link
                  href="/login"
                  className={`block w-full text-center px-6 py-4 rounded-lg font-semibold text-lg ${
                    pkg.popular
                      ? 'bg-[#4A90D9] text-white hover:bg-[#3a7fc9]'
                      : 'bg-white text-[#003366] border-2 border-[#003366] hover:bg-gray-50'
                  } transition-colors`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#003366]">Need a custom package?</h2>
            <p className="text-gray-600 mb-6">
              We offer tailored coaching programs for larger organizations or specific requirements.
              Contact us to discuss your needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#003366] text-white rounded-lg font-semibold hover:bg-[#004488] transition-colors"
            >
              Contact Sales
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
