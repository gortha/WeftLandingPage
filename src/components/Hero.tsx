'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, TrendingUp, Shield, Zap, Users, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTVLData, usePoolData, useStakingData } from '@/lib/hooks';
import { formatCurrency, formatNumber, formatPercentage, isPositive } from '@/lib/utils';
import Web3DemoModal from './Web3DemoModal';

const Hero = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Fetch dynamic data from store
  const { data: tvlData, isLoading: isLoadingTVL } = useTVLData();
  const { data: poolData, isLoading: isLoadingPool } = usePoolData();
  const { data: stakingData, isLoading: isLoadingStaking } = useStakingData();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const stats = [
    { 
      label: 'Total Value Locked', 
      value: isClient && tvlData && tvlData.currentTvl ? formatCurrency(tvlData.currentTvl) : '$50M+', 
      icon: TrendingUp,
      isLoading: isClient && isLoadingTVL
    },
    { 
      label: 'Active Stakers', 
      value: isClient && stakingData && stakingData.activeStakers ? `${formatNumber(stakingData.activeStakers)}+` : '15K+', 
      icon: Users,
      isLoading: isClient && isLoadingStaking
    },
    { 
      label: 'Supported Assets', 
      value: '20+', 
      icon: Zap,
      isLoading: false
    },
    { 
      label: 'V2 Features', 
      value: '100%', 
      icon: Shield,
      isLoading: false
    },
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
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                🚀 Weft Finance V2 - Now Live on Radix DLT
              </span>
            </motion.div> */}

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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-12 max-w-md sm:max-w-none mx-auto lg:mx-0"
            >
              <Link
                href="https://app.weft.finance"
                target="_blank"
                rel="noopener noreferrer"
                className="weft-btn-primary flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full sm:w-auto min-w-0 sm:min-w-[160px] lg:min-w-[180px]"
              >
                <span className="hidden sm:inline">Launch Platform</span>
                <span className="sm:hidden">Launch</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </Link>
              <button
                onClick={() => setIsDemoOpen(true)}
                className="weft-btn-secondary flex items-center justify-center space-x-2 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 w-full sm:w-auto min-w-0 sm:min-w-[160px] lg:min-w-[180px]"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="hidden sm:inline">Interactive Demo</span>
                <span className="sm:hidden">Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="weft-card p-2 sm:p-3 md:p-4 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 weft-gradient rounded-full mx-auto mb-1 sm:mb-2 md:mb-3">
                      {stat.isLoading ? (
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white animate-spin" />
                      ) : (
                        <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                      )}
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
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
              <div className="relative weft-card p-4 sm:p-6 lg:p-8 rounded-3xl">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-lg sm:text-xl font-semibold text-white">Platform Overview</div>
                    <div className={`text-xs sm:text-sm font-semibold flex items-center ${isPositive(tvlData?.tvlChange24h) ? 'text-green-400' : 'text-red-400'}`}>
                      {isClient && isLoadingTVL ? (
                        <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin mr-1" />
                      ) : isClient && tvlData ? (
                        `${isPositive(tvlData.tvlChange24h) ? '+' : ''}${formatPercentage(tvlData.tvlChange24h)} TVL`
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                      <div className="text-xs sm:text-sm text-gray-400 mb-1">Total Supplied</div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white flex items-center">
                        {isClient && isLoadingPool ? (
                          <Loader2 className="w-4 h-4 sm:w-6 sm:h-6 animate-spin mr-2" />
                        ) : null}
                        <span className="text-sm sm:text-lg lg:text-2xl">
                          {isClient && poolData ? poolData.totalSupplied : '$45,230'}
                        </span>
                      </div>
                      <div className="text-green-400 text-xs sm:text-sm">↗ {isClient && poolData && poolData.lendingApr ? poolData.lendingApr : '8.5%'} APR</div>
                    </div>
                    <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                      <div className="text-xs sm:text-sm text-gray-400 mb-1">Total Borrowed</div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white flex items-center">
                        {isClient && isLoadingPool ? (
                          <Loader2 className="w-4 h-4 sm:w-6 sm:h-6 animate-spin mr-2" />
                        ) : null}
                        <span className="text-sm sm:text-lg lg:text-2xl">
                          {isClient && poolData ? poolData.totalBorrowed : '$22,150'}
                        </span>
                      </div>
                      <div className="text-blue-400 text-xs sm:text-sm">↗ {isClient && poolData && poolData.borrowingApr ? poolData.borrowingApr : '3.2%'} APR</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-400">Total Value Locked</span>
                      <span className="text-green-400 font-semibold flex items-center text-xs sm:text-sm">
                        {isClient && isLoadingTVL ? (
                          <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin mr-1" />
                        ) : null}
                        {isClient && tvlData && tvlData.currentTvl ? formatCurrency(tvlData.currentTvl) : '$2.1B'}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">Platform growth: Strong</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <Link href="https://app.weft.finance/market/lending" target="_blank" className="weft-btn-primary flex items-center justify-center py-2 sm:py-3 text-xs sm:text-sm">
                      <span className="hidden sm:inline">Supply More</span>
                      <span className="sm:hidden">Supply</span>
                    </Link>
                    <Link href="https://app.weft.finance/market/borrowing?tab=collateral" target="_blank" className="weft-btn-secondary flex items-center justify-center py-2 sm:py-3 text-xs sm:text-sm">
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

      {/* Web3 Demo Modal */}
      <Web3DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </section>
  );
};

export default Hero;
