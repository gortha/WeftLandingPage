# Cloudflare Pages Deployment Guide

## ✅ Fixed Configuration

The compatibility flags issue has been resolved with the following changes:

### 1. Updated API Route (`/api/health`)
```typescript
// Required for Cloudflare Pages deployment
export const runtime = 'edge';
```

### 2. Clean Wrangler Configuration (`wrangler.toml`)
```toml
name = "weft-finance-v2"
compatibility_date = "2024-07-01"
compatibility_flags = []

[functions]
  "/api/*" = {
    compatibility_date = "2024-07-01",
    compatibility_flags = []
  }
```

### 3. Routes Configuration (`public/_routes.json`)
```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": []
}
```

## 🚀 Cloudflare Pages Setup

### Method 1: Automatic Deployment (Recommended)

1. **Connect Repository**:
   - Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
   - Click "Create a project"
   - Connect to your GitHub repository

2. **Build Configuration**:
   ```
   Build command: pnpm build
   Output directory: .next
   Root directory: (leave empty)
   ```

3. **Environment Variables** (Optional):
   ```
   NODE_VERSION=18
   NEXT_TELEMETRY_DISABLED=1
   ```

## 🔧 Compatibility Flags Fix

The original error was caused by conflicting Node.js compatibility flags:
- ❌ `nodejs_compat_populate_process_env` vs `nodejs_compat_do_not_populate_process_env`
- ❌ Invalid `node` compatibility flag

**Solution**: Use empty compatibility flags array since Edge Runtime doesn't need Node.js compatibility.

### Method 2: Manual Upload

1. Run the build command:
   ```bash
   pnpm build
   ```

2. Upload the `.next` folder to Cloudflare Pages

## 🔧 Build Results

Your application now supports:
- ✅ **Static Pages** - Landing page, features, etc. (pre-rendered)
- ✅ **Dynamic API** - Health endpoint with Edge Runtime
- ✅ **Hybrid Rendering** - Best of both worlds

## 📊 Performance Benefits

**Static Pages** (○):
- ✅ Ultra-fast loading
- ✅ Global CDN distribution
- ✅ Perfect Lighthouse scores

**Edge API** (ƒ):
- ✅ Real-time health checks
- ✅ Global edge locations
- ✅ Sub-100ms response times

## 🌍 Edge Runtime Features

The Edge Runtime provides:
- **Global Distribution**: Runs in 200+ cities worldwide
- **Fast Cold Starts**: Near-instant function execution
- **Modern Web APIs**: Full support for Fetch, Response, etc.
- **Automatic Scaling**: Handles any traffic load

## 🔍 Verification

After deployment, test these endpoints:
- `https://your-site.pages.dev/` - Main landing page
- `https://your-site.pages.dev/api/health` - Health check API

## 🛠️ Troubleshooting

### ✅ Fixed: Compatibility Flags Error
```
Error: Compatibility flags are mutually contradictory: 
nodejs_compat_populate_process_env vs nodejs_compat_do_not_populate_process_env
No such compatibility flag: node
```

**Solution**: 
1. ✅ Use empty `compatibility_flags = []` in `wrangler.toml`
2. ✅ Ensure API routes use `export const runtime = 'edge'`
3. ✅ Remove any Node.js specific code from Edge Runtime functions

### Common Issues:

1. **Build Failures**: 
   - Check that all dependencies support Edge Runtime
   - Ensure no Node.js APIs (`process`, `fs`, etc.) in Edge functions

2. **Function Deploy Failures**:
   - Verify `wrangler.toml` has correct compatibility flags
   - Ensure Edge Runtime is properly configured

3. **Asset Loading**: 
   - Verify image paths and public assets
   - Check `_routes.json` configuration

## 📈 Next Steps

Consider adding:
- Custom domain configuration
- Cache headers optimization
- Analytics integration
- Performance monitoring

Your Weft Finance V2 landing page is now optimized for Cloudflare Pages! 🎉
