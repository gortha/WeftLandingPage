# GitHub Actions Vercel Deployment Setup Guide

## 🔧 Required GitHub Secrets

To deploy to Vercel using GitHub Actions, you need to set up the following secrets in your GitHub repository:

### 1. Get Vercel Secrets

First, you need to get your Vercel credentials:

```bash
# Get your Vercel token
vercel login  # If not already logged in
vercel token create  # Create a new token

# Get your project and org IDs
vercel project ls  # List your projects
```

### 2. Set GitHub Repository Secrets

Go to your GitHub repository → Settings → Secrets and Variables → Actions → New repository secret

**Required Secrets:**

1. **VERCEL_TOKEN**
   - Value: Your Vercel API token (from `vercel token create`)
   - Used for: Authenticating with Vercel API

2. **VERCEL_ORG_ID**
   - Value: Your Vercel team/organization ID
   - Get from: `.vercel/project.json` → `orgId` field
   - Current value: `team_aOk6r2m9ERue3Tftvs74NOek`

3. **VERCEL_PROJECT_ID**
   - Value: Your Vercel project ID
   - Get from: `.vercel/project.json` → `projectId` field
   - Current value: `prj_xcA7qMxF7uo8pqOBA2XP0waqx1zc`

**Optional Secrets:**

4. **DISCORD_WEBHOOK** (Optional)
   - Value: Discord webhook URL for deployment notifications
   - Used for: Sending deployment status to Discord channel

## 📋 Step-by-Step Setup

### Step 1: Create Vercel Token

```bash
# Login to Vercel (if not already)
vercel login

# Create a new token
vercel token create "GitHub Actions Token"
```

Copy the generated token - this is your `VERCEL_TOKEN`.

### Step 2: Get Project Details

Your project is already configured with Vercel. The IDs are:
- **Organization ID**: `team_aOk6r2m9ERue3Tftvs74NOek`
- **Project ID**: `prj_xcA7qMxF7uo8pqOBA2XP0waqx1zc`

### Step 3: Add Secrets to GitHub

1. Go to your repository: `https://github.com/gortha/WeftLendingPage`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret:

   ```
   Name: VERCEL_TOKEN
   Value: [Your Vercel token from step 1]
   
   Name: VERCEL_ORG_ID  
   Value: team_aOk6r2m9ERue3Tftvs74NOek
   
   Name: VERCEL_PROJECT_ID
   Value: prj_xcA7qMxF7uo8pqOBA2XP0waqx1zc
   ```

### Step 4: Test the Deployment

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add Vercel GitHub Actions deployment"
   git push origin main
   ```

2. Go to **Actions** tab in your GitHub repository
3. Watch the deployment workflow run

## 🚀 Deployment Workflow

The workflow will:

1. **On Push to Main**: Deploy to production
2. **On Pull Request**: Deploy preview version
3. **Run Lighthouse Audit**: Performance testing
4. **Send Notifications**: Discord alerts (if configured)

## 🔍 Monitoring

### Vercel Dashboard
- View deployments: [vercel.com/dashboard](https://vercel.com/dashboard)
- Monitor performance and analytics
- Manage domains and environment variables

### GitHub Actions
- View deployment logs in Actions tab
- Monitor build and deployment status
- Check performance metrics

## 🛠️ Troubleshooting

### Common Issues

1. **Token Expired**: Regenerate Vercel token and update GitHub secret
2. **Build Failures**: Check build logs in Actions tab
3. **Missing Secrets**: Verify all required secrets are set
4. **Permission Issues**: Ensure token has proper permissions

### Debug Commands

```bash
# Test locally
vercel --prod

# Check project status
vercel project ls

# View deployment logs
vercel logs [deployment-url]
```

## 🌐 Live URLs

After successful deployment:
- **Production**: https://weft-finance-v2.vercel.app
- **Preview**: Auto-generated for each PR
- **Analytics**: Available in Vercel dashboard

## 📊 Performance Monitoring

The workflow includes:
- **Lighthouse CI**: Automated performance audits
- **Bundle Analysis**: Monitor build size
- **Core Web Vitals**: Real user monitoring
- **Error Tracking**: Automatic error detection

## 🔐 Security

- All secrets are encrypted in GitHub
- Vercel tokens can be revoked anytime
- Environment variables are isolated per deployment
- HTTPS is enforced automatically
