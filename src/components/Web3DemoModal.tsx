'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Coins, 
  CreditCard, 
  TrendingUp,
  X,
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import { RadixIcon, XRDIcon, XUSDCIcon, WeftyIcon } from './icons';

interface FlowStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{size?: number; className?: string}>;
  amount?: string;
  apy?: string;
}

const lendingFlow: FlowStep[] = [
  {
    id: 'connect',
    title: 'Connect using Radix Wallet',
    description: 'Connect using your Radix crypto wallet',
    icon: RadixIcon,
  },
  {
    id: 'deposit',
    title: 'Deposit XRD in XRD Pool',
    description: 'Deposit XRD tokens to the XRD lending pool',
    icon: XRDIcon,
    amount: '1,000 XRD',
    apy: '8.5% APY'
  },
  {
    id: 'earn',
    title: 'Start Earning',
    description: 'Begin earning interest on your XRD deposit',
    icon: TrendingUp,
    apy: '8.5% APY'
  }
];

const borrowingFlow: FlowStep[] = [
  {
    id: 'connect',
    title: 'Connect using Radix Wallet',
    description: 'Connect using your Radix crypto wallet',
    icon: RadixIcon,
  },
  {
    id: 'create-cdp',
    title: 'Create New Wefty CDP',
    description: 'Create new Wefty CDP or add collateral to existing CDP',
    icon: WeftyIcon,
  },
  {
    id: 'collateral',
    title: 'Add XRD Collateral',
    description: 'Add XRD tokens as collateral for your Wefty CDP',
    icon: XRDIcon,
    amount: '2,000 XRD',
  },
  {
    id: 'borrow',
    title: 'Borrow USDC',
    description: 'Borrow USDC against your collateral',
    icon: XUSDCIcon,
    amount: '1,200 USDC',
    apy: '3.2% APR'
  },
  {
    id: 'monitor',
    title: 'Monitor Health Factor',
    description: 'Follow your borrowing power and health factor',
    icon: TrendingUp,
    amount: 'Health: 2.1'
  }
];

interface Web3DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Web3DemoModal: React.FC<Web3DemoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'lending' | 'borrowing'>('lending');
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentFlow = activeTab === 'lending' ? lendingFlow : borrowingFlow;

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      setIsAnimating(false);
    }
  }, [isOpen]);

  const nextStep = () => {
    if (currentStep < currentFlow.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setIsAnimating(false);
  };

  const switchTab = (tab: 'lending' | 'borrowing') => {
    setActiveTab(tab);
    setCurrentStep(0);
    setIsAnimating(false);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl bg-gray-900 rounded-2xl overflow-hidden my-2 sm:my-8 min-h-fit"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700">
          <h2 className="text-lg sm:text-2xl font-bold text-white">
            Weft Finance V2 Demo
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-gray-800">
          <button
            onClick={() => switchTab('lending')}
            className={`flex-1 py-3 sm:py-4 px-2 sm:px-6 text-center transition-colors ${
              activeTab === 'lending'
                ? 'bg-gradient-to-r from-[#5afbc4] to-[#4dd0a7] text-black font-semibold'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center justify-center space-x-1 sm:space-x-2">
              <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-base">XRD Lending</span>
            </div>
          </button>
          <button
            onClick={() => switchTab('borrowing')}
            className={`flex-1 py-3 sm:py-4 px-2 sm:px-6 text-center transition-colors ${
              activeTab === 'borrowing'
                ? 'bg-gradient-to-r from-[#00e0ff] to-[#00b8cc] text-black font-semibold'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center justify-center space-x-1 sm:space-x-2">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-base">CDP Borrowing</span>
            </div>
          </button>
        </div>

        {/* Demo Content */}
        <div className="p-4 sm:p-6 lg:p-8 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Flow Visualization */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
                {activeTab === 'lending' ? 'Lending Process' : 'Wefty CDP Borrowing Process'}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {currentFlow.map((step, index) => {
                  const StepIcon = step.icon;
                  const status = index < currentStep ? 'completed' : index === currentStep ? 'active' : 'pending';
                  
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0.3, scale: 0.95 }}
                      animate={{
                        opacity: index <= currentStep ? 1 : 0.3,
                        scale: index === currentStep ? 1.02 : 0.95,
                      }}
                      className={`relative flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl border transition-all duration-300 ${
                        index <= currentStep
                          ? activeTab === 'lending' 
                            ? 'border-[#5afbc4] bg-[#5afbc4]/10' 
                            : 'border-[#00e0ff] bg-[#00e0ff]/10'
                          : 'border-gray-600 bg-gray-800/50'
                      }`}
                    >
                      {/* Step Number */}
                      <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                        status === 'completed' ? 'bg-green-500 text-white' : 
                        status === 'active' ? 'bg-blue-500 text-white' :
                        'bg-gray-600 text-gray-300'
                      }`}>
                        {status === 'completed' ? (
                          <CheckCircle className="w-3 h-3 sm:w-5 sm:h-5" />
                        ) : (
                          index + 1
                        )}
                      </div>

                      {/* Step Icon */}
                      <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg flex-shrink-0">
                        {StepIcon === TrendingUp ? (
                          <StepIcon className={`w-6 h-6 sm:w-8 sm:h-8 ${activeTab === 'lending' ? 'text-green-400' : 'text-blue-400'}`} />
                        ) : (
                          <StepIcon size={32} className="sm:w-10 sm:h-10 rounded-lg" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className={`font-semibold text-sm sm:text-base ${
                          index <= currentStep ? 'text-white' : 'text-gray-400'
                        }`}>
                          {step.title}
                        </h4>
                        <p className={`text-xs sm:text-sm ${
                          index <= currentStep ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {step.description}
                        </p>
                        {step.amount && index <= currentStep && (
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mt-1 sm:mt-2">
                            <span className="text-green-400 font-semibold text-xs sm:text-sm">{step.amount}</span>
                            {step.apy && (
                              <span className="text-blue-400 text-xs">{step.apy}</span>
                            )}
                          </div>
                        )}
                      </div>
                      
                      {index <= currentStep && (
                        <div className="text-green-400 flex-shrink-0">
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                      )}

                      {/* Connection Line */}
                      {index < currentFlow.length - 1 && (
                        <div className="absolute left-4 sm:left-6 top-12 sm:top-16 w-0.5 h-4 sm:h-6 bg-gradient-to-b from-white/20 to-transparent"></div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Panel */}
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 order-1 lg:order-2">
              <div className="text-center mb-4 sm:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300">
                  {(() => {
                    const CurrentIcon = currentFlow[currentStep].icon;
                    return CurrentIcon === TrendingUp ? (
                      <CurrentIcon className={`w-12 h-12 sm:w-16 sm:h-16 ${activeTab === 'lending' ? 'text-green-400' : 'text-blue-400'}`} />
                    ) : (
                      <CurrentIcon size={48} className="sm:w-16 sm:h-16 rounded-lg" />
                    );
                  })()}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {currentFlow[currentStep].title}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">
                  {currentFlow[currentStep].description}
                </p>
              </div>

              {/* Mock Interface */}
              <div className="bg-gray-900 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Wallet</span>
                    <span className="text-green-400 text-sm">Connected</span>
                  </div>
                  {currentFlow[currentStep].amount && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Amount</span>
                      <span className="text-white text-sm">{currentFlow[currentStep].amount}</span>
                    </div>
                  )}
                  {currentFlow[currentStep].apy && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Rate</span>
                      <span className="text-blue-400 text-sm">{currentFlow[currentStep].apy}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 sm:space-y-3">
                {currentStep < currentFlow.length - 1 ? (
                  <button
                    onClick={nextStep}
                    disabled={isAnimating}
                    className="w-full weft-btn-primary flex items-center justify-center space-x-2 py-3 text-sm sm:text-base"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="space-y-2">
                    <div className="text-center text-green-400 font-semibold text-sm sm:text-base">
                      ✅ Flow Complete!
                    </div>
                    <button
                      onClick={resetDemo}
                      className="w-full weft-btn-secondary py-3 text-sm sm:text-base"
                    >
                      Restart Demo
                    </button>
                  </div>
                )}
                
                <a
                  href="https://app.weft.finance/market"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full weft-btn-primary flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 py-3 text-sm sm:text-base"
                >
                  <span>Try Live Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Web3DemoModal;
