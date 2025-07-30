# Weft Finance V2 Landing Page - AI Instructions

## Project Overview
This is a Next.js 15 TypeScript application for Weft Finance V2 landing page, featuring Web3 animations, Radix DLT integration, and modern DeFi UI components.

## Key Technologies
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom Weft design system
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Web3 Elements**: Custom canvas animations and crypto-themed components

## Architecture Patterns

### Component Structure
- **Layout Components**: `Header`, `Footer` with responsive navigation
- **Section Components**: `Hero`, `Features`, `PlatformOverview`, `StakingSection`, `BuyWeftSection`, `RadixIntegration`, `SocialLinks`
- **Background Component**: `Web3Background` with canvas-based animations
- **Page Structure**: Single-page application with all sections on home page

### Styling System
- **Design System**: Custom Weft V2 design with consistent color palette in `globals.css`
- **Components**: `.weft-card`, `.weft-btn-primary`, `.weft-btn-secondary`
- **Gradients**: `.weft-gradient`, `.weft-gradient-text` for brand consistency
- **Animations**: Custom CSS animations with `animate-weft-*` classes

## Development Workflow

### Available Scripts
```bash
pnpm dev          # Development with Turbopack
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint checking
pnpm lint:fix     # Auto-fix linting issues
pnpm type-check   # TypeScript validation
```

### Key Files
- `src/app/globals.css` - Custom design system and animations
- `src/components/Web3Background.tsx` - Canvas-based crypto animations
- `src/app/layout.tsx` - SEO metadata and root layout
- `next.config.ts` - Optimization settings and security headers

## Deployment
- **Platform**: Vercel with automatic deployment on push to main
- **Health Check**: `/api/health` endpoint for monitoring

## Troubleshooting Hydration Issues
Common causes of hydration mismatches in this project:
1. **Framer Motion animations**: Use `viewport={{ once: true }}` to prevent re-animations
2. **Canvas animations**: Ensure canvas elements are client-side only
3. **Dynamic content**: Avoid time-based content in SSR components
4. **Theme detection**: Use `useEffect` for client-side theme switching

## Brand Guidelines
- **Primary Colors**: Weft green (#5AFBC4), Radix blue (#0066FF)
- **Typography**: Inter font family with gradient text effects
- **Animations**: Smooth, Web3-themed with particle effects
- **Responsive**: Mobile-first approach with progressive enhancement
