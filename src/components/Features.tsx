'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock, 
  Globe, 
  Coins, 
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Wefties NFT CDPs',
      description: 'Collateralized Debt Positions encapsulated within NFTs called Wefties. Trade, transfer, and manage your lending positions as unique digital assets.',
      color: 'from-green-400 to-green-600',
      benefits: ['NFT-based positions', 'Tradeable CDPs', 'Unique ownership']
    },
    {
      icon: Zap,
      title: 'Isolation Mode',
      description: 'V2 isolation mode allows specific assets to be used as collateral in separate, risk-contained environments for enhanced security.',
      color: 'from-yellow-400 to-yellow-600',
      benefits: ['Risk isolation', 'Asset protection', 'Enhanced security']
    },
    {
      icon: TrendingUp,
      title: 'Efficiency Mode',
      description: 'Optimized capital efficiency for correlated assets, allowing higher leverage and better utilization of your collateral.',
      color: 'from-blue-400 to-blue-600',
      benefits: ['Higher leverage', 'Capital efficiency', 'Optimized yields']
    },
    {
      icon: Users,
      title: 'Advanced Collateral',
      description: 'Support for diverse collateral types including NFTs, LP tokens, and traditional crypto assets with dynamic risk assessment.',
      color: 'from-purple-400 to-purple-600',
      benefits: ['NFT collateral', 'LP tokens', 'Dynamic pricing']
    },
    {
      icon: Lock,
      title: 'Position Health',
      description: 'Real-time position health monitoring with automated alerts and liquidation protection mechanisms.',
      color: 'from-red-400 to-red-600',
      benefits: ['Real-time monitoring', 'Auto alerts', 'Liquidation protection']
    },
    {
      icon: Globe,
      title: 'Radix Native',
      description: 'Built natively on Radix DLT with Scrypto smart contracts, leveraging Cerberus consensus for unparalleled performance.',
      color: 'from-indigo-400 to-indigo-600',
      benefits: ['Scrypto contracts', 'Cerberus consensus', 'Native integration']
    },
    {
      icon: Coins,
      title: 'Multi-Asset Lending',
      description: 'Lend and borrow XRD, LSULP, xUSDC, WEFT, and other Radix ecosystem tokens with competitive rates.',
      color: 'from-cyan-400 to-cyan-600',
      benefits: ['XRD lending', 'LSULP support', 'Competitive rates']
    },
    {
      icon: BarChart3,
      title: 'V2 Analytics',
      description: 'Comprehensive V2 dashboard with position analytics, yield tracking, and risk metrics for informed decision-making.',
      color: 'from-orange-400 to-orange-600',
      benefits: ['V2 dashboard', 'Yield tracking', 'Risk analytics']
    }
  ];

  return (
    <section id="features" className="py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Weft Finance <span className="weft-gradient-text">V2 Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the advanced features of Weft Finance V2, including Wefties NFT CDPs, 
            isolation mode, efficiency mode, and comprehensive collateral management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="weft-card p-6 group cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="weft-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience Weft Finance V2?</h3>
            <p className="text-gray-300 mb-6">
              Join the advanced DeFi lending platform with NFT-based CDPs, isolation mode, and cutting-edge features built on Radix DLT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="https://app.weft.finance/market"
                target="_blank"
                rel="noopener noreferrer"
                className="weft-btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[160px]"
              >
                <span>Start Trading</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </a>
              <a
                href="#platform"
                className="weft-btn-secondary flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[160px]"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
