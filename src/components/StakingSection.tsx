'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Coins, 
  TrendingUp, 
  Shield, 
  Vote, 
  Gift, 
  ArrowRight, 
  ExternalLink,
  Crown,
  Users,
  Clock
} from 'lucide-react';

const StakingSection = () => {
  const stakingFeatures = [
    {
      icon: TrendingUp,
      title: 'V2 Staking Rewards',
      description: 'Enhanced staking rewards with WEFT tokens in the V2 protocol',
      value: '12% APY',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Vote,
      title: 'Protocol Governance',
      description: 'Vote on V2 protocol upgrades, fee structures, and new features',
      value: 'DAO Voting',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Shield,
      title: 'V2 Platform Benefits',
      description: 'Reduced fees, priority access to new V2 features and isolation modes',
      value: '50% Fee Discount',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Gift,
      title: 'Wefties NFT Rewards',
      description: 'Exclusive Wefties NFTs, airdrops, and special V2 community events',
      value: 'NFT Access',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  const stakingTiers = [
    {
      name: 'Bronze',
      requirement: '1,000 WEFT',
      apy: '8%',
      benefits: ['Basic staking rewards', 'Community access', 'V2 platform access'],
      color: 'from-amber-600 to-amber-800',
      popular: false
    },
    {
      name: 'Silver',
      requirement: '10,000 WEFT',
      apy: '12%',
      benefits: ['Enhanced rewards', 'Priority support', 'Early V2 features', 'Governance voting'],
      color: 'from-gray-400 to-gray-600',
      popular: true
    },
    {
      name: 'Gold',
      requirement: '50,000 WEFT',
      apy: '15%',
      benefits: ['Maximum rewards', 'VIP support', 'V2 beta testing', 'Exclusive Wefties NFTs'],
      color: 'from-yellow-400 to-yellow-600',
      popular: false
    }
  ];

  const stakingStats = [
    { label: 'Total Staked', value: '125M WEFT', icon: Coins },
    { label: 'Active Stakers', value: '15,234', icon: Users },
    { label: 'Avg Staking Time', value: '6.2 months', icon: Clock },
    { label: 'Governance Proposals', value: '47', icon: Vote }
  ];

  return (
    <section id="staking" className="py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="weft-gradient-text">WEFT Token</span> Staking & Governance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stake your WEFT tokens to earn rewards, participate in protocol governance, and unlock 
            exclusive benefits in the Weft Finance V2 ecosystem built on Radix DLT.
          </p>
        </motion.div>

        {/* Staking Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stakingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="weft-card p-6 text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
              <div className="text-lg font-semibold weft-gradient-text">{feature.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Staking Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Choose Your <span className="weft-gradient-text">Staking Tier</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stakingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative weft-card p-8 ${
                  tier.popular ? 'border-2 border-green-500' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl mb-4`}>
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{tier.name}</h4>
                  <p className="text-gray-400 mb-4">Minimum: {tier.requirement}</p>
                  <div className="text-4xl font-bold weft-gradient-text mb-2">{tier.apy}</div>
                  <div className="text-sm text-gray-400">Annual Percentage Yield</div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="https://token.weft.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full ${
                    tier.popular ? 'weft-btn-primary' : 'weft-btn-secondary'
                  } flex items-center justify-center space-x-2`}
                >
                  <span>Start Staking</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Token Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">
              About <span className="weft-gradient-text">WEFT Token</span>
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              WEFT is the native utility token of the Weft Finance ecosystem. It powers 
              governance, provides staking rewards, and unlocks exclusive platform benefits.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gray-400">Total Supply</span>
                <span className="font-semibold">1,000,000,000 WEFT</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gray-400">Circulating Supply</span>
                <span className="font-semibold">650,000,000 WEFT</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gray-400">Current Price</span>
                <span className="font-semibold text-green-400">$2.45</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gray-400">Market Cap</span>
                <span className="font-semibold">$1.59B</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none mx-auto">
              <Link
                href="https://token.weft.finance"
                target="_blank"
                rel="noopener noreferrer"
                className="weft-btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[160px]"
              >
                <span>Stake & Claim</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </Link>
              <Link 
                href="https://docs.v2.weft.finance/token#token-circulation-strategy"
                target="_blank"
                rel="noopener noreferrer" 
                className="weft-btn-secondary flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[160px]"
              >
                <span>View Tokenomics</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 weft-gradient rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative weft-card p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-6 text-center">Live Staking Stats</h4>
              <div className="grid grid-cols-2 gap-6">
                {stakingStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-3">
                      <stat.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
                <div className="text-center">
                  <div className="text-2xl font-bold weft-gradient-text mb-2">62.5%</div>
                  <div className="text-sm text-gray-400">of total supply staked</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="weft-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to <span className="weft-gradient-text">Start Staking</span>?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join our community of stakers and start earning rewards while contributing to the governance of Weft Finance.
            </p>
            <Link
              href="https://token.weft.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="weft-btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Start Staking Now</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StakingSection;
