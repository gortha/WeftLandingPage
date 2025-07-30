'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Coins, 
  TrendingUp, 
  Shield, 
  Vote, 
  Gift, 
  ArrowRight, 
  ExternalLink,
  Users,
  Clock,
  Loader2
} from 'lucide-react';
import { useStakingData, useTokenData } from '@/lib/hooks';
import { formatDecimal, formatNumber, isPositive } from '@/lib/utils';

const StakingSection = () => {  
  const { data: stakingData, isLoading: isLoadingStaking } = useStakingData();
  const { data: tokenData, isLoading: isLoadingToken } = useTokenData();

  const stakingFeatures = [
    {
      icon: TrendingUp,
      title: 'V2 Staking Rewards',
      description: 'Enhanced staking rewards with WEFT tokens in the V2 protocol',
      value: stakingData ? `${stakingData.stakingAPR} APR` : '12% APR',
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
      color: 'from-yellow-400 to-yellow-600',
      customIcon: true
    }
  ];

  const stakingStats = [
    { 
      label: 'Total Staked', 
      value: stakingData ? stakingData.totalStaked : '125M WEFT', 
      icon: Coins,
      isLoading: isLoadingStaking
    },
    { 
      label: 'Active Stakers', 
      value: stakingData ? formatNumber(stakingData.activeStakers) : '15,234', 
      icon: Users,
      isLoading: isLoadingStaking
    },
    { 
      label: 'Avg Staking Time', 
      value: stakingData ? stakingData.avgStakingTime : '6.2 months', 
      icon: Clock,
      isLoading: isLoadingStaking
    },
    { 
      label: 'Governance Proposals', 
      value: stakingData ? stakingData.governanceProposals.toString() : '47', 
      icon: Vote,
      isLoading: isLoadingStaking
    }
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stakingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group weft-card p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className={`relative inline-flex items-center justify-center w-20 h-20 ${feature.customIcon && feature.title === 'Wefties NFT Rewards' ? 'rounded-2xl overflow-hidden shadow-lg' : `bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg`}`}>
                  {feature.customIcon && feature.title === 'Wefties NFT Rewards' ? (
                    <Image
                      src="/assets/images/wefty.png"
                      alt="Wefty NFT"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  ) : (
                    <feature.icon className="w-10 h-10 text-white" />
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-400 text-base mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{feature.description}</p>
              <div className="text-xl font-bold weft-gradient-text">{feature.value}</div>
            </motion.div>
          ))}
        </div>

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
                <span className="font-semibold flex items-center">
                  {isLoadingToken ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : null}
                  {tokenData ? tokenData.totalSupply : '1,000,000,000 WEFT'}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gray-400">Circulating Supply</span>
                <span className="font-semibold flex items-center">
                  {isLoadingToken ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : null}
                  {tokenData ? tokenData.circulatingSupply : '650,000,000 WEFT'}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gray-400">Current Price</span>
                <span className="font-semibold text-green-400 flex items-center">
                  {isLoadingToken ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : null}
                  ${tokenData ? formatDecimal(tokenData.currentPrice, 4) : '0.001'}
                  {tokenData && !isPositive(tokenData.priceChange24h) && (
                    <span className={`ml-2 text-sm ${isPositive(tokenData.priceChange24h) ? 'text-green-400' : 'text-red-400'}`}>
                      ({isPositive(tokenData.priceChange24h) ? '+' : ''}{formatDecimal(tokenData.priceChange24h, 4)}%)
                    </span>
                  )}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-white/10">
                <span className="text-gray-400">Market Cap</span>
                <span className="font-semibold flex items-center">
                  {isLoadingToken ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : null}
                  {tokenData ? tokenData.marketCap : '$1.59B'}
                </span>
              </div>
              {tokenData && (
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-gray-400">Total Value Locked</span>
                  <span className="font-semibold flex items-center">
                    {isLoadingToken ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    ) : null}
                    {tokenData.totalValueLocked}
                  </span>
                </div>
              )}
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
                      {stat.isLoading ? (
                        <Loader2 className="w-6 h-6 text-green-400 animate-spin" />
                      ) : (
                        <stat.icon className="w-6 h-6 text-green-400" />
                      )}
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
                <div className="text-center">
                  <div className="text-2xl font-bold weft-gradient-text mb-2 flex items-center justify-center">
                    {isLoadingStaking ? (
                      <Loader2 className="w-6 h-6 animate-spin mr-2" />
                    ) : null}
                    {stakingData && stakingData.percentageStaked}
                  </div>
                  <div className="text-sm text-gray-400">of total supply staked</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Staking Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-6">
              <span className="weft-gradient-text">WEFT Staker</span> Benefits
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Stake your WEFT tokens and unlock exclusive benefits in the ecosystem
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="weft-card p-8 text-center">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold weft-gradient-text mb-2 flex items-center justify-center">
                    {isLoadingStaking ? (
                      <Loader2 className="w-6 h-6 animate-spin mr-2" />
                    ) : null}
                    {stakingData ? `${stakingData.stakingAPR} APR` : '12% APR'}
                  </div>
                  <div className="text-gray-400">Staking Rewards</div>
                </div>
                <div>
                  <div className="text-3xl font-bold weft-gradient-text mb-2">50%</div>
                  <div className="text-gray-400">Fee Discount</div>
                </div>
                <div>
                  <div className="text-3xl font-bold weft-gradient-text mb-2">NFT</div>
                  <div className="text-gray-400">Exclusive Access</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Governance voting rights</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Priority access to new features</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Exclusive community events</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative weft-card p-12 rounded-3xl border border-green-400/20 hover:border-green-400/40 transition-colors duration-500">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to <span className="weft-gradient-text">Start Staking</span>?
              </h3>
              <p className="text-gray-300 mb-10 text-xl max-w-3xl mx-auto leading-relaxed">
                Join our community of stakers and start earning rewards while contributing to the governance of Weft Finance V2.
              </p>
              <div className="space-y-4">
                <Link
                  href="https://token.weft.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-10 py-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl text-white font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  <span>Stake WEFT Now</span>
                  <ExternalLink className="w-5 h-5" />
                </Link>
                <p className="text-gray-500 text-sm sm:text-base lg:text-lg">Join 15,000+ stakers • Secure • Decentralized</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StakingSection;
