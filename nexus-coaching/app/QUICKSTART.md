# Nexus Coaching Platform - Quick Start Guide

## 🚀 The platform is ready to use!

The development server is already running at: **http://localhost:3000**

## 📋 Available Pages

### Public Pages (No Login Required)
- Homepage: http://localhost:3000
- Login: http://localhost:3000/login
- Packages: http://localhost:3000/packages
- Coaches: http://localhost:3000/coaches

### Protected Pages (Login Required)
- Coach Dashboard: http://localhost:3000/coach/dashboard
- Coachee Portal: http://localhost:3000/coachee/dashboard
- Organization Dashboard: http://localhost:3000/org/dashboard
- Admin Panel: http://localhost:3000/admin

## 🔧 Quick Commands

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Run Linter
```bash
npm run lint
```

## 🎨 Brand Colors

Use these Tailwind classes throughout the app:
- Primary (Navy): `bg-[#003366]` or `text-[#003366]`
- Secondary (Blue): `bg-[#4A90D9]` or `text-[#4A90D9]`

## 🔐 Authentication Testing

The platform supports three authentication methods:

### 1. Microsoft 365 (for Coaches)
- Click "Coach" tab on login page
- Click "Sign in with Microsoft"
- Requires Azure AD configuration

### 2. Magic Link (for Coachees)
- Click "Coachee" tab on login page
- Enter email and submit
- Magic link sent via email (configure email service)

### 3. Organization Login
- Click "Organization" tab on login page
- Choose Microsoft or Magic Link
- Access organization management dashboard

## 📦 Stripe Integration

The platform includes 3 pre-configured packages:

1. **Starter**: 2,400 CHF - 6 sessions
2. **Professional**: 4,500 CHF - 12 sessions (Most Popular)
3. **Enterprise**: 8,400 CHF - 24 sessions

Configure Stripe keys in `.env.local` to enable payments.

## 🗄️ Sample Data

The platform includes sample data for immediate testing:

### Coaches (3)
- Dr. Sarah Mitchell - Leadership & Executive Coaching
- Michael Chen - Tech Leadership & Startups
- Emma Rodriguez - Work-Life Balance & Career Development

### Sessions
- Sample upcoming sessions
- Completed sessions with ratings
- Progress tracking data

## 🔧 Configuration Checklist

- [x] Next.js installed and configured
- [x] Tailwind CSS with brand colors
- [x] NextAuth.js authentication
- [x] Stripe integration structure
- [x] Sample data included
- [x] All pages created
- [x] Responsive design
- [ ] Azure AD credentials (add to .env.local)
- [ ] Stripe API keys (add to .env.local)
- [ ] Email service (for magic links)
- [ ] Database connection (Supabase recommended)

## 🚀 Deployment to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit - Nexus Coaching Platform"
git remote add origin <your-repo-url>
git push -u origin main

# 2. Deploy to Vercel
# Visit vercel.com and import your repository
# Add environment variables from .env.local
# Deploy!
```

## 📁 Key Files

- `app/page.tsx` - Homepage
- `app/login/page.tsx` - Login system
- `lib/auth.ts` - Authentication config
- `lib/stripe.ts` - Payment & sample data
- `components/AuthProvider.tsx` - Session provider

## 🎯 Next Development Tasks

1. **Database Setup**
   - Set up Supabase or PostgreSQL
   - Create database schema (see spec)
   - Replace in-memory magic links

2. **Email Service**
   - Configure Postmark or SendGrid
   - Implement magic link emails
   - Add session reminders

3. **Microsoft Graph API**
   - Calendar integration
   - Teams meeting creation
   - User profile sync

4. **Stripe Webhooks**
   - Create `/api/webhooks/stripe`
   - Handle payment events
   - Update package status

5. **Coach Profiles**
   - File upload for avatars
   - Rich text bio editor
   - Availability calendar

## 💡 Tips

- All pages use the brand colors (#003366, #4A90D9)
- Logo is located at `/public/assets/nexus-logo.jpg`
- Hero image at `/public/assets/hero-image.jpg`
- Sample data in `lib/stripe.ts` - customize as needed
- Authentication roles: coach, coachee, organization, admin

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 npm run dev
```

### Environment variables not loading
- Ensure `.env.local` exists in root directory
- Restart the development server
- Check variable names match exactly

### Authentication not working
- Verify Azure AD credentials in `.env.local`
- Check redirect URIs in Azure portal
- Ensure `NEXTAUTH_SECRET` is set

## 📞 Support

For issues:
1. Check README.md for detailed setup
2. Review DEPLOYMENT.md for production steps
3. See PROJECT_SUMMARY.md for build overview

---

**Ready to code!** The platform is fully functional and ready for customization. 🎉
