# Nexus Coaching Platform - Deployment Guide

## Deployment to Vercel (Recommended)

### Step 1: Prepare Your Repository

1. Ensure all code is committed to a Git repository (GitHub, GitLab, or Bitbucket)
2. Push your code to the remote repository

### Step 2: Vercel Setup

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next

### Step 3: Environment Variables

Add these environment variables in Vercel dashboard:

```env
NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>
NEXTAUTH_URL=https://your-domain.vercel.app

# Microsoft Azure AD
AZURE_AD_CLIENT_ID=<your-azure-client-id>
AZURE_AD_CLIENT_SECRET=<your-azure-client-secret>
AZURE_AD_TENANT_ID=<your-azure-tenant-id>

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your-stripe-pk>
STRIPE_SECRET_KEY=<your-stripe-sk>
STRIPE_WEBHOOK_SECRET=<your-webhook-secret>
```

### Step 4: Configure Azure AD Redirect URIs

In your Azure Portal App Registration, add these redirect URIs:
- `https://your-domain.vercel.app/api/auth/callback/azure-ad`
- `https://your-domain.vercel.app/api/auth/callback/credentials`

### Step 5: Deploy

1. Click "Deploy" in Vercel
2. Wait for build to complete
3. Visit your deployment URL

## Custom Domain Setup

1. In Vercel dashboard, go to Project Settings > Domains
2. Add your custom domain (e.g., `nexus-coaching.ch`)
3. Configure DNS records as shown by Vercel
4. Update `NEXTAUTH_URL` environment variable to use custom domain
5. Update Azure AD redirect URIs to use custom domain

## Stripe Webhook Configuration

1. In Stripe Dashboard, go to Developers > Webhooks
2. Add endpoint: `https://your-domain.vercel.app/api/webhooks/stripe`
3. Select events to listen for:
   - `checkout.session.completed`
   - `invoice.paid`
   - `customer.subscription.updated`
4. Copy webhook signing secret
5. Add to Vercel environment variables as `STRIPE_WEBHOOK_SECRET`

## Post-Deployment Checklist

- [ ] Test Microsoft 365 login flow
- [ ] Test magic link authentication
- [ ] Verify all pages load correctly
- [ ] Test Stripe payment flow (use test mode first)
- [ ] Configure webhook endpoints
- [ ] Set up monitoring and error tracking
- [ ] Configure custom domain
- [ ] Update Azure AD redirect URIs
- [ ] Test all user roles (Coach, Coachee, Organization, Admin)

## Production Environment

### Required Changes for Production

1. **Database**: Replace in-memory magic links with Redis or PostgreSQL
2. **File Storage**: Set up cloud storage for coach avatars and documents
3. **Email Service**: Integrate Postmark or SendGrid for magic links
4. **Monitoring**: Add Sentry or similar for error tracking
5. **Analytics**: Integrate analytics platform
6. **CDN**: Ensure images are optimized and served via CDN

### Security Considerations

- Always use HTTPS in production
- Rotate secrets regularly
- Enable CSRF protection
- Configure rate limiting
- Set up DDoS protection
- Regular security audits
- Keep dependencies updated

## Support

For deployment issues:
- Check Vercel build logs
- Verify environment variables are set correctly
- Ensure Azure AD configuration is correct
- Test Stripe integration in test mode first

## Rollback

If deployment fails:
1. Go to Vercel dashboard > Deployments
2. Find last working deployment
3. Click "Promote to Production"
