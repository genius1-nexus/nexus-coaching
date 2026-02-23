# Nexus Coaching Platform

A complete Next.js coaching platform connecting organizations with expert coaches.

## Features

- **Multi-Role Authentication**: Separate login flows for Coaches, Coachees, and Organizations
- **Microsoft 365 Integration**: Azure AD authentication for coaches and organizations
- **Magic Link Authentication**: Secure passwordless login for coachees
- **Stripe Integration**: Complete payment processing and coach payouts
- **Responsive Design**: Tailwind CSS with custom brand colors (#003366, #4A90D9)
- **Role-Based Dashboards**: Custom portals for each user type
- **Session Management**: Virtual and in-person coaching session tracking

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: NextAuth.js with Microsoft Entra ID
- **Payments**: Stripe
- **Deployment**: Vercel-ready

## Pages

### Public Pages
- `/` - Homepage with hero, features, and pricing preview
- `/login` - Multi-tab login page (Coach/Coachee/Organization)
- `/packages` - Detailed pricing packages
- `/coaches` - Coach directory with profiles

### Portal Pages
- `/coach/dashboard` - Coach dashboard with sessions and clients
- `/coachee/dashboard` - Coachee portal with progress tracking
- `/org/dashboard` - Organization management portal
- `/admin` - Platform admin dashboard

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Microsoft Azure AD application (for authentication)
- Stripe account (for payments)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables in `.env.local`:
   ```env
   NEXTAUTH_SECRET=your-secret-here
   NEXTAUTH_URL=http://localhost:3000

   AZURE_AD_CLIENT_ID=your-azure-client-id
   AZURE_AD_CLIENT_SECRET=your-azure-client-secret
   AZURE_AD_TENANT_ID=your-azure-tenant-id

   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-pk
   STRIPE_SECRET_KEY=your-stripe-sk
   STRIPE_WEBHOOK_SECRET=your-webhook-secret
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── page.tsx                    # Homepage
├── login/page.tsx             # Multi-role login
├── packages/page.tsx          # Pricing packages
├── coaches/page.tsx           # Coach directory
├── coach/dashboard/page.tsx   # Coach portal
├── coachee/dashboard/page.tsx # Coachee portal
├── org/dashboard/page.tsx     # Organization portal
├── admin/page.tsx             # Admin dashboard
└── api/auth/[...nextauth]/route.ts

lib/
├── auth.ts                    # NextAuth configuration
├── magic-links.ts             # Magic link store
└── stripe.ts                  # Stripe config & sample data

components/
└── AuthProvider.tsx           # Session provider wrapper
```

## Brand Colors

- **Primary**: #003366 (Dark Navy Blue)
- **Secondary**: #4A90D9 (Light Blue)

## Sample Data

The platform includes sample data for:
- 3 coaches with credentials and specializations
- 3 coaching packages (Starter, Professional, Enterprise)
- Sample sessions and client data

## Deployment

This app is ready to deploy to Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## License

Copyright 2026 Nexus Coaching. All rights reserved.
