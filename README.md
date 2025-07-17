# Weft Finance V2 - Advanced DeFi Lending Platform

A modern, enterprise-grade landing page for Weft Finance V2, the advanced decentralized lending platform built on Radix DLT.

## 🚀 Features

### Weft Finance V2 Platform
- **Wefties NFT CDPs**: Collateralized Debt Positions encapsulated within NFTs
- **Isolation Mode**: Enhanced risk management with asset-specific environments
- **Efficiency Mode**: Optimized capital efficiency for correlated assets
- **Advanced Collateral**: Support for NFTs, LP tokens, and dynamic pricing
- **Position Health Monitoring**: Real-time tracking and liquidation protection
- **Multi-Asset Lending**: XRD, LSULP, xUSDC, WEFT, and Radix ecosystem tokens

### Radix DLT Integration
- **Scrypto Smart Contracts**: Asset-oriented programming
- **Cerberus Consensus**: Linear scalable consensus algorithm
- **Native Multi-Asset**: First-class token and NFT support
- **Finite State Machines**: Predictable smart contract behavior
- **Radix Engine**: Purpose-built execution environment

### Technical Stack
- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom Weft V2 design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: Comprehensive metadata and Open Graph support
- **PWA**: Service worker and manifest for app-like experience

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Weft design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Swiper.js for carousels
- **Deployment**: Docker, Kubernetes, ArgoCD

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/weftfinance/landing-page.git
cd landing-page

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Run type checking
npm run type-check
```

### Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Features.tsx       # Features grid
│   │   ├── PlatformOverview.tsx # Platform overview
│   │   ├── StakingSection.tsx  # Staking information
│   │   ├── RadixIntegration.tsx # Radix blockchain info
│   │   ├── SocialLinks.tsx     # Social media links
│   │   └── Footer.tsx         # Footer
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/                    # Static assets
├── k8s/                       # Kubernetes manifests
├── .github/                   # GitHub workflows
├── docker-compose.yml         # Docker compose
├── Dockerfile                 # Docker configuration
└── README.md
```

## 🌐 Deployment

### Docker Deployment

```bash
# Build Docker image
docker build -t weft-landing .

# Run container
docker run -p 3000:3000 weft-landing

# Or use docker-compose
docker-compose up -d
```

### Kubernetes Deployment

```bash
# Apply Kubernetes manifests
kubectl apply -f k8s/

# Check deployment status
kubectl get pods -n weft-finance
kubectl get services -n weft-finance
kubectl get ingress -n weft-finance
```

### ArgoCD Deployment

1. **Install ArgoCD** in your cluster
2. **Apply the ArgoCD application**:
   ```bash
   kubectl apply -f k8s/argocd.yaml
   ```
3. **Configure your repository** in ArgoCD
4. **Sync the application** through ArgoCD UI or CLI

### Production Checklist

- [ ] SSL/TLS certificates configured
- [ ] DNS records pointing to load balancer
- [ ] Monitoring and logging setup
- [ ] Backup and disaster recovery plan
- [ ] Security scanning completed
- [ ] Performance testing completed
- [ ] CDN configured for static assets

## 🔒 Security

### Security Headers

The application includes comprehensive security headers:

- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Strict-Transport-Security

### Best Practices

- Docker image runs as non-root user
- Kubernetes security contexts enforced
- Network policies for pod-to-pod communication
- Resource limits and requests configured
- Pod disruption budgets for high availability

## 📊 Performance

### Optimizations

- **Code Splitting**: Automatic code splitting by Next.js
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Bundle Analysis**: Webpack bundle optimization
- **Caching**: Aggressive caching for static assets
- **Compression**: Gzip compression enabled
- **Lazy Loading**: Components and images lazy loaded

### Monitoring

- Health check endpoint: `/api/health`
- Kubernetes liveness and readiness probes
- Horizontal Pod Autoscaler (HPA) configuration
- Resource monitoring with Prometheus integration

## 🔗 Links

- **Live Site**: [https://weft.finance](https://weft.finance)
- **App**: [https://app.weft.finance/market](https://app.weft.finance/market)
- **Staking**: [https://token.weft.finance](https://token.weft.finance)
- **Social Links**: [https://linktr.ee/weft](https://linktr.ee/weft)
- **Radix DLT**: [https://www.radixdlt.com/full-stack](https://www.radixdlt.com/full-stack)

## 📱 Social Media

- **Discord**: [https://discord.gg/weft](https://discord.gg/weft)
- **Twitter**: [https://twitter.com/weftfinance](https://twitter.com/weftfinance)
- **Telegram**: [https://t.me/weftfinance](https://t.me/weftfinance)
- **Medium**: [https://medium.com/@weftfinance](https://medium.com/@weftfinance)
- **GitHub**: [https://github.com/weftfinance](https://github.com/weftfinance)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, please join our [Discord](https://discord.gg/weft) or email support@weft.finance.

---

**Built with ❤️ by the Weft Finance Team**
