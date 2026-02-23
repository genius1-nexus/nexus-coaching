import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
})

// Package pricing in CHF
export const packages = [
  {
    id: 'starter',
    name: 'Starter Package',
    sessions: 6,
    duration: 60,
    price: 2400,
    currency: 'CHF',
    description: 'Perfect for individuals getting started with coaching',
    features: [
      '6 individual coaching sessions',
      '60 minutes per session',
      'Virtual or in-person options',
      'Session notes and progress tracking',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Package',
    sessions: 12,
    duration: 60,
    price: 4500,
    currency: 'CHF',
    description: 'Ideal for sustained professional development',
    features: [
      '12 individual coaching sessions',
      '60 minutes per session',
      'Priority scheduling',
      'Virtual or in-person options',
      'Detailed progress reports',
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Package',
    sessions: 24,
    duration: 60,
    price: 8400,
    currency: 'CHF',
    description: 'Comprehensive coaching for teams and organizations',
    features: [
      '24 individual coaching sessions',
      '60 minutes per session',
      'Dedicated account manager',
      'Flexible scheduling',
      'Custom reporting',
      'Multi-coach access',
    ],
  },
]

// Sample coaches
export const sampleCoaches = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    email: 'sarah.mitchell@nexus-coaching.ch',
    avatar: '/assets/avatar-1.jpg',
    bio: 'Executive coach with 15+ years of experience in leadership development and organizational transformation.',
    credentials: ['ICF PCC', 'EMCC Senior Practitioner', 'PhD in Organizational Psychology'],
    specializations: ['Leadership', 'Executive Coaching', 'Career Transitions'],
    hourlyRate: 400,
    rating: 4.9,
    sessionsCompleted: 450,
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@nexus-coaching.ch',
    avatar: '/assets/avatar-2.jpg',
    bio: 'Former Fortune 500 executive turned career coach, specializing in tech leadership and startup growth.',
    credentials: ['ICF ACC', 'MBA', 'Certified Agile Coach'],
    specializations: ['Tech Leadership', 'Startup Coaching', 'Team Building'],
    hourlyRate: 350,
    rating: 4.8,
    sessionsCompleted: 380,
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    email: 'emma.rodriguez@nexus-coaching.ch',
    avatar: '/assets/avatar-3.jpg',
    bio: 'Life and career coach focused on work-life integration and personal development for professionals.',
    credentials: ['ICF PCC', 'Certified NLP Practitioner'],
    specializations: ['Work-Life Balance', 'Career Development', 'Personal Growth'],
    hourlyRate: 320,
    rating: 5.0,
    sessionsCompleted: 520,
  },
]
