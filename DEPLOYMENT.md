# Vercel Deployment Guide for Weft Finance V2 Landing Page

## 🚀 Quick Deployment Options

### Option 1: One-Click Deploy (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/weft-lending-page)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from project root:**
   ```bash
   # Navigate to project directory
   cd weft-lending-page
   
   # Production deployment
   vercel --prod
   
   # Or use npm script
   npm run deploy
   ```

### Option 3: Git Integration (Automatic)

1. **Push to GitHub/GitLab/Bitbucket:**
   ```bash
   git add .
   git commit -m "Deploy enhanced Web3 Weft Finance V2 landing page"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your repository
   - Deploy automatically

## 🎨 Enhanced Web3 Features

### New Design Elements
- **Animated Crypto Background**: Particle system with blockchain network visualization
- **Holographic Cards**: NFT-style cards with shimmer effects
- **Cyber Grid**: Animated grid background with Matrix-inspired elements
- **Advanced Animations**: Ethereum float, crypto spin, neon pulse effects
- **Responsive Design**: Mobile-first approach with enhanced tablet support

### Performance Optimizations
- **Canvas Animations**: Hardware-accelerated particle effects
- **CSS-only Animations**: Smooth transitions without JavaScript overhead
- **Optimized Images**: WebP/AVIF support with fallbacks
- **Code Splitting**: Lazy loading for components and animations

## ⚙️ Project Configuration

### Environment Variables
Set these in your Vercel dashboard under Settings > Environment Variables:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id

# Optional: API endpoints
NEXT_PUBLIC_API_URL=https://api.weft.finance
```

### Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (automatic)
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

### Domain Configuration
1. **Custom Domain**: Add your domain in Vercel dashboard
2. **Suggested domains:**
   - `weft.finance` (primary)
   - `landing.weft.finance` (subdomain)
   - `v2.weft.finance` (version-specific)

## 🔧 Advanced Configuration

### Performance Optimizations
- **Edge Functions**: Enabled for API routes
- **Image Optimization**: Configured for WebP/AVIF
- **Compression**: Enabled (Gzip/Brotli)
- **Caching**: Optimized for static assets

### Security Headers
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy
- Permissions Policy

### Redirects
- `/app` → `https://app.weft.finance`
- `/token` → `https://token.weft.finance`
- `/docs` → `https://docs.v2.weft.finance`
- `/social` → `https://linktr.ee/weft`

## 🔄 Continuous Deployment

### GitHub Actions (Automatic)
The repository includes a GitHub Actions workflow that:
- Runs on every push to `main`
- Performs linting and type checking
- Builds the project
- Deploys to Vercel automatically

### Required Secrets
Add these to your GitHub repository settings (Settings > Secrets and variables > Actions):

```env
VERCEL_TOKEN=your-vercel-token
ORG_ID=your-vercel-org-id
PROJECT_ID=your-vercel-project-id
```

**To get these values:**
1. Go to Vercel dashboard
2. Settings > Tokens → Create new token
3. Copy the token as `VERCEL_TOKEN`
4. Project settings → General → Project ID
5. Account settings → General → Team ID (if using team)

## 🌐 Post-Deployment

### Verification Checklist
- [ ] Site loads correctly at your domain
- [ ] PWA manifest is accessible (`/manifest.json`)
- [ ] Icons are loading properly
- [ ] SEO metadata is correct
- [ ] Performance score is optimal
- [ ] Security headers are active
- [ ] Redirects are working

### Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **Web Vitals**: Core Web Vitals tracking
- **Error Tracking**: Automatic error reporting
- **Uptime**: 99.9% guaranteed uptime

## 🚨 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**Deployment Failures:**
- Check environment variables
- Verify build command
- Review function timeout limits

**Performance Issues:**
- Optimize images
- Review bundle size
- Check Core Web Vitals

### Support
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: Report deployment issues

## 📊 Deployment Status

After successful deployment, your Weft Finance V2 landing page will be available at:
- **Production**: https://your-domain.vercel.app
- **Preview**: https://git-branch-name.vercel.app (for PR deployments)

### Expected Performance
- **Lighthouse Score**: 95+
- **Core Web Vitals**: All green
- **Bundle Size**: ~280KB (gzipped)
- **Load Time**: <2 seconds

---

🎉 **Congratulations!** Your Weft Finance V2 landing page is now live on Vercel with enterprise-grade performance and security.
