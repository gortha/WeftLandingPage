'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  BarChart3,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';
import { RadixIcon, XRDIcon, XUSDCIcon, WeftyIcon } from './icons';

interface FlowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType | React.ComponentType<{className?: string; size?: number}>;
  amount?: string;
  asset?: string;
  color: string;
  status: 'completed' | 'active' | 'pending';
}

const Web3LendingShowcase = () => {
  const [activeFlow, setActiveFlow] = useState<'lending' | 'borrowing'>('lending');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  const lendingSteps: FlowStep[] = [
    {
      id: 'connect',
      title: 'Connect using Radix Wallet',
      description: 'Connect your Radix crypto wallet to access lending',
      icon: RadixIcon,
      color: 'from-[#5afbc4] to-[#4dd0a7]',
      status: 'completed'
    },
    {
      id: 'deposit-xrd',
      title: 'Deposit XRD in XRD Pool',
      description: 'Deposit your XRD tokens into the lending pool',
      icon: XRDIcon,
      amount: '1,000 XRD',
      asset: 'XRD Pool',
      color: 'from-[#5afbc4] to-[#4dd0a7]',
      status: 'active'
    },
    {
      id: 'start-earn',
      title: 'Start Earning',
      description: 'Begin earning interest on your deposited XRD',
      icon: TrendingUp,
      amount: '8.5% APY',
      color: 'from-[#5afbc4] to-[#4dd0a7]',
      status: 'pending'
    }
  ];

  const borrowingSteps: FlowStep[] = [
    {
      id: 'connect',
      title: 'Connect using Radix Wallet',
      description: 'Connect your Radix crypto wallet to access borrowing',
      icon: RadixIcon,
      color: 'from-[#00e0ff] to-[#00b8cc]',
      status: 'completed'
    },
    {
      id: 'create-cdp',
      title: 'Create New Wefty CDP #1#',
      description: 'Create new Wefty CDP or add collateral to existing CDP',
      icon: WeftyIcon,
      color: 'from-[#00e0ff] to-[#00b8cc]',
      status: 'active'
    },
    {
      id: 'add-collateral',
      title: 'Add XRD Collateral',
      description: 'Add XRD tokens as collateral for your Wefty CDP #1#',
      icon: XRDIcon,
      amount: '2,000 XRD',
      asset: 'XRD Collateral',
      color: 'from-[#00e0ff] to-[#00b8cc]',
      status: 'pending'
    },
    {
      id: 'borrow-assets',
      title: 'Borrow USDC',
      description: 'Borrow USDC against your collateral',
      icon: XUSDCIcon,
      amount: '1,200 USDC',
      asset: 'USDC',
      color: 'from-[#00e0ff] to-[#00b8cc]',
      status: 'pending'
    },
    {
      id: 'monitor',
      title: 'Monitor Health Factor',
      description: 'Follow borrowing power and health factor status',
      icon: BarChart3,
      amount: '2.1 Health',
      color: 'from-[#00e0ff] to-[#00b8cc]',
      status: 'pending'
    }
  ];

  const currentSteps = activeFlow === 'lending' ? lendingSteps : borrowingSteps;

  // Auto-play animation
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= currentSteps.length - 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying, currentSteps.length]);

  const handlePlayAnimation = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const getStepStatus = (index: number): 'completed' | 'active' | 'pending' => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'active';
    return 'pending';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black/40 to-black/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Weft Finance <span className="weft-gradient-text">App Flows</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Experience the actual Weft Finance V2 application flows for lending XRD in pools 
              and borrowing assets with XRD collateral. Connect with Radix wallet and start earning or borrowing.
            </p>

            {/* Flow Toggle */}
            <div className="inline-flex items-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-full p-1 mb-6 sm:mb-8">
              <button
                onClick={() => {
                  setActiveFlow('lending');
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm lg:text-base ${
                  activeFlow === 'lending'
                    ? 'bg-gradient-to-r from-[#5afbc4] to-[#4dd0a7] text-black shadow-lg font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="hidden sm:inline">XRD Pool Lending</span>
                <span className="sm:hidden">Lending</span>
              </button>
              <button
                onClick={() => {
                  setActiveFlow('borrowing');
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm lg:text-base ${
                  activeFlow === 'borrowing'
                    ? 'bg-gradient-to-r from-[#00e0ff] to-[#00b8cc] text-black shadow-lg font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="hidden sm:inline">CDP Borrowing</span>
                <span className="sm:hidden">Borrowing</span>
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Weft Finance <span className="weft-gradient-text">App Flows</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Experience the actual Weft Finance V2 application flows for lending XRD in pools 
              and borrowing assets with XRD collateral. Connect with Radix wallet and start earning or borrowing.
            </p>

            {/* Flow Toggle */}
            <div className="inline-flex items-center bg-black/40 backdrop-blur-sm border border-white/10 rounded-full p-1 mb-8">
              <button
                onClick={() => {
                  setActiveFlow('lending');
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFlow === 'lending'
                    ? 'bg-gradient-to-r from-[#5afbc4] to-[#4dd0a7] text-black shadow-lg font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                XRD Pool Lending
              </button>
              <button
                onClick={() => {
                  setActiveFlow('borrowing');
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFlow === 'borrowing'
                    ? 'bg-gradient-to-r from-[#00e0ff] to-[#00b8cc] text-black shadow-lg font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                CDP Borrowing
              </button>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          {/* Main Flow Visualization */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Flow Steps */}
            {mounted ? (
              <motion.div
                key={activeFlow}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {currentSteps.map((step, index) => {
                  const status = getStepStatus(index);
                  const StepIcon = step.icon;

                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`relative flex items-center space-x-4 p-4 rounded-2xl border transition-all duration-500 ${
                        status === 'active'
                          ? 'bg-gradient-to-r from-white/10 to-white/5 border-blue-400/50 shadow-lg shadow-blue-400/20'
                          : status === 'completed'
                          ? 'bg-gradient-to-r from-green-500/10 to-green-500/5 border-green-400/30'
                          : 'bg-black/20 border-white/10'
                      }`}
                    >
                      {/* Step Number */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        status === 'completed' ? 'bg-green-500 text-white' : 
                        status === 'active' ? 'bg-blue-500 text-white' :
                        'bg-gray-600 text-gray-300'
                      }`}>
                        {status === 'completed' ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          index + 1
                        )}
                      </div>

                      {/* Step Icon */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300`}>
                        <StepIcon size={40} className="rounded-lg" />
                      </div>

                      {/* Step Content */}
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                        {step.amount && (
                          <div className="mt-2 inline-flex items-center space-x-2">
                            <span className="text-green-400 font-medium">{step.amount}</span>
                            {step.asset && (
                              <span className="text-xs bg-white/10 px-2 py-1 rounded">{step.asset}</span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Active Step Indicator */}
                      {status === 'active' && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute right-4 top-4"
                        >
                          <TrendingUp className="w-5 h-5 text-yellow-400 animate-pulse" />
                        </motion.div>
                      )}

                      {/* Connection Line */}
                      {index < currentSteps.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-6 bg-gradient-to-b from-white/20 to-transparent"></div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="space-y-6">
                {currentSteps.map((step, index) => {
                  const status = getStepStatus(index);
                  const StepIcon = step.icon;

                  return (
                    <div
                      key={step.id}
                      className={`relative flex items-center space-x-4 p-4 rounded-2xl border transition-all duration-500 ${
                        status === 'active'
                          ? 'bg-gradient-to-r from-white/10 to-white/5 border-blue-400/50 shadow-lg shadow-blue-400/20'
                          : status === 'completed'
                          ? 'bg-gradient-to-r from-green-500/10 to-green-500/5 border-green-400/30'
                          : 'bg-black/20 border-white/10'
                      }`}
                    >
                      {/* Step Number */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        status === 'completed' ? 'bg-green-500 text-white' : 
                        status === 'active' ? 'bg-blue-500 text-white' :
                        'bg-gray-600 text-gray-300'
                      }`}>
                        {status === 'completed' ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          index + 1
                        )}
                      </div>

                      {/* Step Icon */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300`}>
                        <StepIcon size={40} className="rounded-lg" />
                      </div>

                      {/* Step Content */}
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                        {step.amount && (
                          <div className="mt-2 inline-flex items-center space-x-2">
                            <span className="text-green-400 font-medium">{step.amount}</span>
                            {step.asset && (
                              <span className="text-xs bg-white/10 px-2 py-1 rounded">{step.asset}</span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Active Step Indicator */}
                      {status === 'active' && (
                        <div className="absolute right-4 top-4">
                          <TrendingUp className="w-5 h-5 text-yellow-400 animate-pulse" />
                        </div>
                      )}

                      {/* Connection Line */}
                      {index < currentSteps.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-6 bg-gradient-to-b from-white/20 to-transparent"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Right Side - Visual Representation */}
            {mounted ? (
              <motion.div
                key={`${activeFlow}-visual`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="weft-card p-6 sm:p-8 text-center">
                  <div className="mb-4 sm:mb-6">
                    {activeFlow === 'lending' ? (
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                        <XRDIcon 
                          size={80} 
                          className="w-16 h-16 sm:w-20 sm:h-20  hover:shadow-xl hover:shadow-[#5afbc4]/30 transition-all duration-300" 
                        />
                        <div className="absolute inset-0 pointer-events-none"></div>
                      </div>
                    ) : (
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                        <Image
                          src="/assets/images/wefty.png"
                          alt="Wefty CDP NFT"
                          width={80}
                          height={80}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-cover hover:shadow-xl hover:shadow-[#00e0ff]/30 transition-all duration-300"
                        />
                        <div className="absolute inset-0 pointer-events-none"></div>
                      </div>
                    )}
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <h3 className="text-lg sm:text-2xl font-bold">
                        {activeFlow === 'lending' ? 'XRD Pool Position' : 'Wefty CDP Position'}
                      </h3>
                      {activeFlow === 'borrowing' && (
                        <div className="px-2 py-1 bg-[#00e0ff]/20 border border-[#00e0ff]/40 rounded-md">
                          <span className="text-xs font-mono text-[#00e0ff]">CDP #1#</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {activeFlow === 'lending' 
                        ? 'Your XRD lending position in the pool earning yield'
                        : 'Your Wefty CDP with collateral and health monitoring'
                      }
                    </p>
                  </div>

                  <div className="space-y-4">
                    {activeFlow === 'lending' ? (
                      <>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">XRD Pool APY</span>
                          <span className="font-bold text-green-400">8.5%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Your Deposit</span>
                          <span className="font-bold text-blue-400">1,000 XRD</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Daily Earnings</span>
                          <span className="font-bold text-yellow-400">+0.23 XRD</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Collateral Value</span>
                          <span className="font-bold text-blue-400">2,000 XRD</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Borrowed Amount</span>
                          <span className="font-bold text-cyan-400">1,200 USDC</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Health Factor</span>
                          <span className="font-bold text-green-400">2.1</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Borrowing Power</span>
                          <span className="font-bold text-orange-400">75% Used</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-gray-400">Status</span>
                      <span className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Active</span>
                      </span>
                    </div>
                  </div>

                  <motion.button
                    onClick={handlePlayAnimation}
                    disabled={isPlaying}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 weft-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPlaying ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Playing Animation...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Play Flow Animation</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <div className="relative">
                <div className="weft-card p-8 text-center">
                  <div className="mb-6">
                    {activeFlow === 'lending' ? (
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <XRDIcon 
                          size={80} 
                          className="w-20 h-20 rounded-2xl shadow-lg shadow-[#5afbc4]/20 hover:shadow-xl hover:shadow-[#5afbc4]/30 transition-all duration-300" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5afbc4]/10 to-[#2dd4aa]/10 rounded-2xl pointer-events-none"></div>
                      </div>
                    ) : (
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <Image
                          src="/assets/images/wefty.png"
                          alt="Wefty CDP NFT"
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-2xl shadow-lg shadow-[#00e0ff]/20 hover:shadow-xl hover:shadow-[#00e0ff]/30 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00e0ff]/10 to-[#0066cc]/10 rounded-2xl pointer-events-none"></div>
                      </div>
                    )}
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <h3 className="text-2xl font-bold">
                        {activeFlow === 'lending' ? 'XRD Pool Position' : 'Wefty CDP Position'}
                      </h3>
                      {activeFlow === 'borrowing' && (
                        <div className="px-2 py-1 bg-[#00e0ff]/20 border border-[#00e0ff]/40 rounded-md">
                          <span className="text-xs font-mono text-[#00e0ff]">CDP #4271</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400">
                      {activeFlow === 'lending' 
                        ? 'Your XRD lending position in the pool earning yield'
                        : 'Your Wefty CDP with collateral and health monitoring'
                      }
                    </p>
                  </div>

                  <div className="space-y-4">
                    {activeFlow === 'lending' ? (
                      <>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">XRD Pool APY</span>
                          <span className="font-bold text-green-400">8.5%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Your Deposit</span>
                          <span className="font-bold text-blue-400">1,000 XRD</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Daily Earnings</span>
                          <span className="font-bold text-yellow-400">+0.23 XRD</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Collateral Value</span>
                          <span className="font-bold text-blue-400">2,000 XRD</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Borrowed Amount</span>
                          <span className="font-bold text-cyan-400">1,200 USDC</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Health Factor</span>
                          <span className="font-bold text-green-400">2.1</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                          <span className="text-gray-400">Borrowing Power</span>
                          <span className="font-bold text-orange-400">75% Used</span>
                        </div>
                      </>
                    )}
                    <div className="flex justify-between items-center p-3 bg-black/30 rounded-lg">
                      <span className="text-gray-400">Status</span>
                      <span className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Active</span>
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handlePlayAnimation}
                    disabled={isPlaying}
                    className="mt-6 weft-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPlaying ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Playing Animation...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Play Flow Animation</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          {mounted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12 sm:mt-16"
            >
              <div className="max-w-2xl mx-auto px-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Start on Weft Finance?</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Connect your Radix wallet and experience seamless lending in XRD pools or 
                  borrowing against XRD collateral with real-time health factor monitoring.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="https://app.weft.finance/market/lending"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="weft-btn-primary flex items-center justify-center space-x-2 py-3 text-sm sm:text-base"
                  >
                    <span className="hidden sm:inline">Start Lending</span>
                    <span className="sm:hidden">Lend</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://app.weft.finance/market/borrowing?tab=collateral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="weft-btn-secondary flex items-center justify-center space-x-2 py-3 text-sm sm:text-base"
                  >
                    <span className="hidden sm:inline">Start Borrowing</span>
                    <span className="sm:hidden">Borrow</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center mt-12 sm:mt-16">
              <div className="max-w-2xl mx-auto px-4">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Start on Weft Finance?</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Connect your Radix wallet and experience seamless lending in XRD pools or 
                  borrowing against XRD collateral with real-time health factor monitoring.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <a
                    href="https://app.weft.finance/market/lending"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="weft-btn-primary flex items-center justify-center space-x-2 py-3 text-sm sm:text-base"
                  >
                    <span className="hidden sm:inline">Start Lending</span>
                    <span className="sm:hidden">Lend</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://app.weft.finance/market/borrowing?tab=collateral"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="weft-btn-secondary flex items-center justify-center space-x-2 py-3 text-sm sm:text-base"
                  >
                    <span className="hidden sm:inline">Start Borrowing</span>
                    <span className="sm:hidden">Borrow</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Web3LendingShowcase;
