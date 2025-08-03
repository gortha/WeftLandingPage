'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight, DollarSign, Wallet, BarChart3, Shield } from 'lucide-react';
import { useTVLData } from '@/lib/hooks';
import { formatCurrency } from '@/lib/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PlatformOverview = () => {
  const [activeDemo, setActiveDemo] = useState('wefties');
  const { data: tvlData, isLoading: isLoadingTVL } = useTVLData();

  const platformFeatures = [
    {
      id: 'wefties',
      title: 'Wefties NFT CDPs',
      description: '"Wefty" is the NFT used by Weft to house users\' collateral and loan positions. Leveraging Scrypto and Radix Engine capabilities for secure operations, with metadata storing both collateral and loan positions.',
      icon: DollarSign,
      image: '/assets/images/wefties-dashboard.jpg',
      features: [
        'NFT-based debt positions',
        'Tradeable CDP tokens',
        'Scrypto-powered security',
        'Metadata position storage'
      ]
    },
    {
      id: 'isolation',
      title: 'Isolation Mode',
      description: 'Each collateral is assigned an Isolation Group representing its risk level. Only collateral with the same Isolation Group can be combined, ensuring assets with varying risk levels are managed separately.',
      icon: Shield,
      image: '/assets/images/isolation-mode.jpg',
      features: [
        'Risk-based isolation groups',
        'Same-group collateral only',
        'Enhanced risk management',
        'Excluded group protection'
      ]
    },
    {
      id: 'efficiency',
      title: 'Efficiency Mode',
      description: 'Offers higher Loan-to-Value ratios for correlated assets through correlation groups. Automatic efficiency for CDPs with single correlation groups, like xUSDT and xUSDC pairs.',
      icon: BarChart3,
      image: '/assets/images/efficiency-mode.jpg',
      features: [
        'Higher LTV ratios',
        'Correlation groups',
        'Automatic efficiency',
        'Optimized borrowing power'
      ]
    },

    {
      id: 'collateral',
      title: 'Advanced Collateral',
      description: 'Support for diverse collateral types including Asset Pools, Deposit Units, NFT Collateral Pools, and comprehensive Native LSU Support. All current and future Liquid Staking Units are automatically supported with real-time XRD redemption value calculation.',
      icon: Wallet,
      image: '/assets/images/advanced-collateral.jpg',
      features: [
        'Multiple pool types',
        'Native LSU Support (all current/future)',
        'NFT collateral pools',
        'Deposit unit earnings',
        'Automatic XRD redemption values'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Alex Morgan',
      role: 'DeFi Strategist',
      content: 'Weft V2\'s isolation mode gives me confidence to use higher-risk collateral without affecting my stable positions. The correlation groups for efficiency mode are game-changing.',
      avatar: '/assets/images/avatar-1.jpg'
    },
    {
      name: 'Sarah Kim',
      role: 'Radix Developer',
      content: 'Native LSU support and flash collateral operations make Weft the most technically advanced lending protocol on Radix. The Scrypto integration is seamless.',
      avatar: '/assets/images/avatar-2.jpg'
    },
    {
      name: 'Marcus Chen',
      role: 'Yield Farmer',
      content: 'Being able to earn on deposit units while using them as collateral, plus 95% LTV on correlated assets - Weft V2 maximizes my capital efficiency like no other platform.',
      avatar: '/assets/images/avatar-3.jpg'
    }
  ];

  return (
    <section id="platform" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Weft Finance <span className="weft-gradient-text">V2 Platform</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the advanced V2 features including Wefties NFT CDPs, isolation mode, 
            efficiency mode, and comprehensive collateral management on Radix DLT.
          </p>
        </motion.div>

        {/* Platform Features Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {platformFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveDemo(feature.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeDemo === feature.id
                    ? 'weft-gradient text-white'
                    : 'weft-card text-gray-300 hover:bg-white/10'
                }`}
              >
                <feature.icon className="w-5 h-5" />
                <span>{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Active Feature Display */}
          {platformFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeDemo === feature.id ? 1 : 0,
                x: activeDemo === feature.id ? 0 : 20
              }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                activeDemo === feature.id ? 'block' : 'hidden'
              }`}
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">{feature.title}</h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {feature.features.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 weft-gradient rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none mx-auto">
                  <a
                    href="https://app.weft.finance/market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="weft-btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[140px]"
                  >
                    <span>Try It Now</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 weft-gradient rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative weft-card p-8 rounded-2xl">
                  {/* Interactive Feature Preview */}
                  <div className="bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl p-6 mb-6 border border-white/10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#5afbc4] to-[#00e0ff] flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                          <p className="text-sm text-gray-400">Live Dashboard</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">Active</span>
                      </div>
                    </div>

                    {/* Feature-specific content */}
                    {feature.id === 'wefties' && (
                      <div className="space-y-4">
                        {/* Wefty NFT Grid */}
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: 1, collateral: '10,000 XRD', loan: '500 xUSDC', health: '0.67' },
                            { id: 2, collateral: '5,000 XRD', loan: '250 xUSDT', health: '0.72' },
                            { id: 3, collateral: '15,000 XRD', loan: '750 xUSDC', health: '0.81' }
                          ].map((wefty, i) => (
                            <div key={i} className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border border-white/10 flex flex-col justify-between p-2 relative overflow-hidden">
                              <div className="text-center">
                                <div className="w-6 h-6 bg-gradient-to-r from-[#5afbc4] to-[#00e0ff] rounded-lg mx-auto mb-1 flex items-center justify-center">
                                  <span className="text-black font-bold text-xs">#{wefty.id}</span>
                                </div>
                                <div className="text-xs text-gray-300">Wefty CDP</div>
                              </div>
                              <div className="text-center space-y-1">
                                <div className="text-xs text-gray-400">{wefty.collateral}</div>
                                <div className="text-xs text-[#5afbc4]">{wefty.loan}</div>
                                <div className={`text-xs ${parseFloat(wefty.health) < 0.8 ? 'text-green-400' : 'text-yellow-400'}`}>
                                  H: {wefty.health}
                                </div>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                          ))}
                        </div>
                        {/* Wefty Stats */}
                        <div className="flex justify-between items-center pt-4 border-t border-white/10">
                          <div className="text-center">
                            <div className="text-[#5afbc4] font-semibold">1,247</div>
                            <div className="text-xs text-gray-400">Active Wefties</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[#00e0ff] font-semibold">$2.1M</div>
                            <div className="text-xs text-gray-400">Total Locked</div>
                          </div>
                          <div className="text-center">
                            <div className="text-purple-400 font-semibold">0.74</div>
                            <div className="text-xs text-gray-400">Avg Health</div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-400 text-center pt-2 border-t border-white/10">
                          ✓ Scrypto-powered security • ✓ Tradeable positions • ✓ Metadata storage
                        </div>
                      </div>
                    )}

                    {feature.id === 'isolation' && (
                      <div className="space-y-4">
                        {/* Isolation Groups */}
                        <div className="space-y-3">
                          <div className="text-sm text-gray-300 mb-3">Isolation Group Management</div>
                          {[
                            { group: 'Group A - Stable Assets', risk: 'Low Risk', ltv: '85%', color: 'green' },
                            { group: 'Group B - Major Tokens', risk: 'Medium Risk', ltv: '75%', color: 'yellow' },
                            { group: 'Group C - Volatile Assets', risk: 'High Risk', ltv: '60%', color: 'red' }
                          ].map((item, i) => (
                            <div key={i} className={`p-3 rounded-lg border ${
                              item.color === 'green' ? 'border-green-500/30 bg-green-500/10' :
                              item.color === 'yellow' ? 'border-yellow-500/30 bg-yellow-500/10' :
                              'border-red-500/30 bg-red-500/10'
                            }`}>
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="text-sm font-medium text-white">{item.group}</div>
                                  <div className="text-xs text-gray-400">{item.risk}</div>
                                </div>
                                <div className={`px-2 py-1 rounded text-xs ${
                                  item.color === 'green' ? 'bg-green-500/20 text-green-300' :
                                  item.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-300' :
                                  'bg-red-500/20 text-red-300'
                                }`}>
                                  {item.ltv} LTV
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-gray-400 text-center pt-2 border-t border-white/10">
                          ✓ Same isolation group collateral only • ✓ Excluded group protection
                        </div>
                      </div>
                    )}

                    {feature.id === 'efficiency' && (
                      <div className="space-y-4">
                        {/* Correlation Groups */}
                        <div className="mb-4">
                          <div className="text-sm text-gray-300 mb-3">Correlation Groups & LTV Boost</div>
                          <div className="relative h-16 bg-gray-800 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#5afbc4] via-[#00e0ff] to-purple-500 opacity-20"></div>
                            <div className="relative h-full flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-xl font-bold text-white">95% LTV</div>
                                <div className="text-xs text-gray-400">vs 70% Standard</div>
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#5afbc4] to-[#00e0ff]" style={{width: '95%'}}></div>
                          </div>
                        </div>
                        {/* Correlation Examples */}
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { pair: 'xUSDC / xUSDT', correlation: 'High', ltv: '95%', status: 'Active' },
                            { pair: 'XRD / LSU', correlation: 'High', ltv: '90%', status: 'Active' },
                            { pair: 'Mixed Assets', correlation: 'None', ltv: '70%', status: 'Standard' }
                          ].map((item, i) => (
                            <div key={i} className={`p-3 rounded-lg border ${
                              item.status === 'Active' ? 'border-[#5afbc4]/30 bg-[#5afbc4]/10' : 'border-gray-600 bg-gray-800/50'
                            }`}>
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="text-sm font-medium text-white">{item.pair}</div>
                                  <div className="text-xs text-gray-400">{item.correlation} Correlation</div>
                                </div>
                                <div className={`px-2 py-1 rounded text-xs ${
                                  item.status === 'Active' ? 'bg-[#5afbc4]/20 text-[#5afbc4]' : 'bg-gray-600/20 text-gray-400'
                                }`}>
                                  {item.ltv} LTV
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {feature.id === 'collateral' && (
                      <div className="space-y-4">
                        {/* Collateral Pool Types */}
                        <div className="grid grid-cols-1 gap-3">
                          {[
                            { name: 'Asset Collateral Pools', desc: 'No interest earnings', type: 'Basic', color: 'gray' },
                            { name: 'Deposit Unit Pools', desc: 'Earn while borrowing', type: 'Earning', color: 'green' },
                            { name: 'LSU Collateral Pools', desc: 'Native LSU Support - All current/future LSUs', type: 'Staking', color: 'blue' },
                            { name: 'NFT Collateral Pools', desc: 'Non-fungible assets', type: 'Advanced', color: 'purple' }
                          ].map((pool, i) => (
                            <div key={i} className={`p-3 rounded-lg border ${
                              pool.color === 'green' ? 'border-green-500/30 bg-green-500/10' :
                              pool.color === 'blue' ? 'border-blue-500/30 bg-blue-500/10' :
                              pool.color === 'purple' ? 'border-purple-500/30 bg-purple-500/10' :
                              'border-gray-600/30 bg-gray-600/10'
                            }`}>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-white">{pool.name}</span>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  pool.color === 'green' ? 'bg-green-500/20 text-green-300' :
                                  pool.color === 'blue' ? 'bg-blue-500/20 text-blue-300' :
                                  pool.color === 'purple' ? 'bg-purple-500/20 text-purple-300' :
                                  'bg-gray-500/20 text-gray-300'
                                }`}>
                                  {pool.type}
                                </span>
                              </div>
                              <div className="text-xs text-gray-400">{pool.desc}</div>
                            </div>
                          ))}
                        </div>
                        <div className="text-xs text-gray-400 text-center pt-2 border-t border-white/10">
                          ✓ Native LSU support (all current/future) • ✓ Unstaking NFT compatibility • ✓ Flash operations • ✓ Auto XRD value sync
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <div className="text-center">
                    <a
                      href="https://app.weft.finance/market/borrowing?tab=collateral"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#5afbc4] to-[#00e0ff] text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-[#5afbc4]/25 transition-all duration-300 hover:scale-105"
                    >
                      <span>Explore {feature.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* User Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            What Our <span className="weft-gradient-text">Users Say</span>
          </h3>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="testimonials-slider"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="weft-card p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Platform Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="weft-card p-8 rounded-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold weft-gradient-text mb-2">
                {isLoadingTVL ? '...' : formatCurrency(tvlData?.currentTvl || '0')}
              </div>
              <div className="text-gray-400">Total Value Locked</div>
            </div>
            <div>
              <div className="text-3xl font-bold weft-gradient-text mb-2">150K+</div>
              <div className="text-gray-400">Transactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold weft-gradient-text mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformOverview;
