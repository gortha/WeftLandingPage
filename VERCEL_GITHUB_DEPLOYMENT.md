# 🚀 Vercel Deployment with GitHub Actions - Complete Setup

## 📋 Summary

Your Weft Finance V2 landing page is now configured for automatic deployment to Vercel using GitHub Actions. Here's what has been set up:

### ✅ Files Created/Updated:
- `.github/workflows/deploy-vercel.yml` - Main deployment workflow
- `GITHUB_ACTIONS_SETUP.md` - Complete setup guide
- `setup-secrets.ps1` - PowerShell script to show required secrets
- `.lighthouserc.json` - Lighthouse CI configuration

### 🔧 Current Configuration:
- **Project ID**: `prj_xcA7qMxF7uo8pqOBA2XP0waqx1zc`
- **Organization ID**: `team_aOk6r2m9ERue3Tftvs74NOek`
- **Repository**: `gortha/WeftLendingPage`
- **Production URL**: `https://weft-finance-v2.vercel.app`

## 🎯 Required GitHub Secrets

You need to add these secrets to your GitHub repository:

### 1. VERCEL_TOKEN
```bash
# Create a new token
vercel token create

# Use the generated token as the secret value
```

### 2. VERCEL_PROJECT_ID
```
Value: prj_xcA7qMxF7uo8pqOBA2XP0waqx1zc
```

### 3. VERCEL_ORG_ID
```
Value: team_aOk6r2m9ERue3Tftvs74NOek
```

## 🌐 Setting Up Secrets

### Option 1: GitHub CLI
```bash
# First, create a Vercel token
vercel token create

# Then set GitHub secrets
gh secret set VERCEL_TOKEN
gh secret set VERCEL_PROJECT_ID --body "prj_xcA7qMxF7uo8pqOBA2XP0waqx1zc"
gh secret set VERCEL_ORG_ID --body "team_aOk6r2m9ERue3Tftvs74NOek"
```

### Option 2: GitHub UI
1. Go to: https://github.com/gortha/WeftLendingPage/settings/secrets/actions
2. Click "New repository secret"
3. Add each secret with the values shown above

## 🔄 Deployment Workflow

### Automatic Deployments:
- **Push to main**: Deploys to production
- **Pull requests**: Deploys preview versions
- **Lighthouse audits**: Runs performance tests
- **GitHub releases**: Creates release notes

### Manual Deployment:
```bash
# Direct deployment to Vercel
vercel --prod

# Or using npm script
npm run deploy
```

## 📊 Monitoring & Analytics

### Vercel Dashboard:
- Performance metrics
- Deployment logs
- Analytics data
- Domain management

### GitHub Actions:
- Build and deployment logs
- Lighthouse performance scores
- Error tracking and notifications

## 🔍 Troubleshooting

### Common Issues:
1. **Secrets not set**: Verify all 3 secrets are added to GitHub
2. **Token expired**: Regenerate and update VERCEL_TOKEN
3. **Build failures**: Check package.json scripts and dependencies
4. **Domain issues**: Verify domain configuration in Vercel

### Debug Commands:
```bash
# Test build locally
npm run build

# Check Vercel project status
vercel project ls

# View deployment logs
vercel logs https://weft-finance-v2.vercel.app
```

## 🎉 Next Steps

1. **Add the GitHub secrets** using the values shown above
2. **Push your code** to trigger the first deployment
3. **Monitor the deployment** in the GitHub Actions tab
4. **Check your live site** at https://weft-finance-v2.vercel.app

## 📞 Support

- **GitHub Actions**: https://docs.github.com/en/actions
- **Vercel Docs**: https://vercel.com/docs
- **Lighthouse CI**: https://github.com/GoogleChrome/lighthouse-ci

---

## 🌟 Your Landing Page Features

### 🎨 Advanced Web3 Design:
- Animated crypto backgrounds
- Holographic cards and effects
- Cyber grid and matrix rain
- Responsive mobile-first design

### 🔧 Technical Excellence:
- Next.js 15 with TypeScript
- Optimized build (267KB shared JS)
- PWA ready with offline support
- SEO optimized for search engines

### 📱 Production Ready:
- Automatic HTTPS and SSL
- Global CDN distribution
- Performance monitoring
- Error tracking and logging

**Your Weft Finance V2 landing page is ready for production deployment! 🚀**
