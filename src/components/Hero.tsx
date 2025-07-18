'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, TrendingUp, Shield, Zap, Users, ExternalLink, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { label: 'Total Value Locked', value: '$50M+', icon: TrendingUp },
    { label: 'Wefties NFT CDPs', value: '15K+', icon: Users },
    { label: 'Supported Assets', value: '25+', icon: Zap },
    { label: 'V2 Features', value: '100%', icon: Shield },
  ];

  const floatingElements = [
    { size: 'w-20 h-20', position: 'top-1/4 left-1/4', delay: 0 },
    { size: 'w-16 h-16', position: 'top-1/3 right-1/4', delay: 0.5 },
    { size: 'w-12 h-12', position: 'bottom-1/3 left-1/3', delay: 1 },
    { size: 'w-24 h-24', position: 'bottom-1/4 right-1/3', delay: 1.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} ${element.position} rounded-full opacity-20`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2, delay: element.delay }}
          >
            <div className="w-full h-full weft-gradient rounded-full animate-float blur-xl" />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                🚀 Weft Finance V2 - Now Live on Radix DLT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Advanced{' '}
              <span className="weft-gradient-text">DeFi Lending</span>
              {' '}V2
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Create and manage collateralized debt positions (CDPs) with Wefties NFTs. 
              Experience isolation mode, efficiency mode, and advanced collateral management on Radix DLT.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 max-w-md sm:max-w-none mx-auto lg:mx-0"
            >
              <Link
                href="https://app.weft.finance"
                target="_blank"
                rel="noopener noreferrer"
                className="weft-btn-primary flex items-center justify-center space-x-2 text-lg px-6 sm:px-8 py-4 w-full sm:w-auto min-w-0 sm:min-w-[180px]"
              >
                <span>Launch Platform</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </Link>
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="weft-btn-secondary flex items-center justify-center space-x-2 text-lg px-6 sm:px-8 py-4 w-full sm:w-auto min-w-0 sm:min-w-[180px]"
              >
                <Play className="w-5 h-5 flex-shrink-0" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="weft-card p-3 md:p-4 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 weft-gradient rounded-full mx-auto mb-2 md:mb-3">
                      <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 weft-gradient rounded-3xl blur-3xl opacity-20 animate-pulse-custom"></div>
              
              {/* Main Card */}
              <div className="relative weft-card p-8 rounded-3xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-white">Portfolio Overview</div>
                    <div className="text-green-400 text-sm font-semibold">+15.2%</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="text-sm text-gray-400 mb-1">Total Supplied</div>
                      <div className="text-2xl font-bold text-white">$45,230</div>
                      <div className="text-green-400 text-sm">↗ 8.5% APY</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="text-sm text-gray-400 mb-1">Total Borrowed</div>
                      <div className="text-2xl font-bold text-white">$22,150</div>
                      <div className="text-blue-400 text-sm">↘ 3.2% APY</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Health Factor</span>
                      <span className="text-green-400 font-semibold">2.84</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">Liquidation risk: Very Low</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Link href="https://app.weft.finance/market/lending" target="_blank" className="weft-btn-primary flex items-center justify-center py-2 md:py-3 text-xs md:text-sm">
                      Supply More
                    </Link>
                    <Link href="https://app.weft.finance/market/borrowing?tab=collateral" target="_blank" className="weft-btn-secondary flex items-center justify-center py-2 md:py-3 text-xs md:text-sm">
                      Borrow
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 weft-gradient rounded-full opacity-80"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <Play className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <p className="text-white text-xl mb-2">Platform Demo Video</p>
                <p className="text-gray-400">Coming soon - Interactive demo available</p>
                <Link
                  href="https://app.weft.finance/market"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="weft-btn-primary mt-4 inline-flex items-center space-x-2"
                >
                  <span>Try Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
