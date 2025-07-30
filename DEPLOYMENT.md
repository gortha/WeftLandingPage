# Deployment Guide

## Vercel GitHub Actions Deployment

This project is configured for automatic deployment to Vercel using GitHub Actions.

### Required GitHub Secrets

Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):

```
VERCEL_TOKEN=your-vercel-token
VERCEL_ORG_ID=your-organization-id
VERCEL_PROJECT_ID=your-project-id
```

### Getting Your Vercel Credentials

1. **Create Vercel Token**:
   ```bash
   vercel token create
   ```

2. **Get Project Details**:
   ```bash
   vercel link
   cat .vercel/project.json
   ```

### Deployment Workflows

- **Production**: Automatic deployment on push to `main` branch
- **Preview**: Automatic deployment on push to other branches and pull requests

## Local Development

```bash
# Install dependencies
npm ci

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Health Check

The application includes a health check endpoint at `/api/health` for monitoring.

## Post-Deployment

### Verification
- Site loads correctly at your Vercel domain
- GitHub Actions workflow completes successfully
- Preview deployments work on pull requests

### Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **GitHub Actions**: Deployment status and logs

---

🎉 **Your Weft Finance V2 landing page deploys automatically via GitHub Actions to Vercel!**
