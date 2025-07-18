'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Coins, 
  ExternalLink, 
  TrendingUp, 
  ShoppingCart,
  BarChart3,
  Globe,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const BuyWeftSection = () => {
  const exchanges = [
    {
      name: 'Caviar Nine',
      url: 'https://www.caviarnine.com',
      icon: <Globe className="w-6 h-6" />,
      description: 'Decentralized exchange',
      type: 'DEX'
    },
    {
      name: 'DefiPlaza',
      url: 'https://defiplaza.net/',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Multi-chain DeFi platform',
      type: 'DEX'
    },
    {
      name: 'OciSwap',
      url: 'https://ociswap.com/resource_rdx1tk3fxrz75ghllrqhyq8e574rkf4lsq2x5a0vegxwlh3defv225cth3',
      icon: <Coins className="w-6 h-6" />,
      description: 'Radix native DEX',
      type: 'DEX'
    },
    {
      name: 'CoinGecko',
      url: 'https://www.coingecko.com/en/coins/weft-finance',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Market data & analytics',
      type: 'INFO'
    },
    {
      name: 'DefiLlama',
      url: 'https://defillama.com/protocol/weft-finance?fdv=true&staking=true&borrowed=true',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'DeFi analytics & metrics',
      type: 'INFO'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="buy-weft" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-green-900/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-green-400/10 to-purple-400/10 blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-purple-500 rounded-3xl mb-6 shadow-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">$WEFT</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get your WEFT tokens and join the future of decentralized finance on Radix DLT. 
            Available on multiple exchanges and platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Live Trading</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20">
              <ShoppingCart className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">Multiple Exchanges</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">Real-time Data</span>
            </div>
          </div>
        </motion.div>

        {/* Exchanges Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {exchanges.map((exchange, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <Link
                href={exchange.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="weft-card p-6 rounded-2xl h-full hover:scale-105 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl ${
                        exchange.type === 'DEX' 
                          ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20' 
                          : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20'
                      }`}>
                        {exchange.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exchange.name}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {exchange.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exchange.type === 'DEX' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {exchange.type}
                    </span>
                    
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="weft-card p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <Coins className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Why Buy <span className="text-green-400">$WEFT</span>?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-green-400 font-semibold mb-2">Governance</div>
                <p className="text-gray-300 text-sm">
                  Participate in protocol governance and shape the future of Weft Finance
                </p>
              </div>
              <div>
                <div className="text-green-400 font-semibold mb-2">Staking Rewards</div>
                <p className="text-gray-300 text-sm">
                  Earn rewards by staking WEFT tokens and supporting the network
                </p>
              </div>
              <div>
                <div className="text-green-400 font-semibold mb-2">Fee Discounts</div>
                <p className="text-gray-300 text-sm">
                  Get reduced fees on lending and borrowing when holding WEFT tokens
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuyWeftSection;
