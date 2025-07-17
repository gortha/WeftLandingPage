'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight, Play, DollarSign, Wallet, BarChart3, Shield } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PlatformOverview = () => {
  const [activeDemo, setActiveDemo] = useState('wefties');

  const platformFeatures = [
    {
      id: 'wefties',
      title: 'Wefties NFT CDPs',
      description: 'Create and manage collateralized debt positions encapsulated within unique NFT assets called Wefties.',
      icon: DollarSign,
      image: '/assets/images/wefties-dashboard.jpg',
      features: [
        'NFT-based positions',
        'Tradeable CDPs',
        'Unique ownership',
        'Position analytics'
      ]
    },
    {
      id: 'isolation',
      title: 'Isolation Mode',
      description: 'Utilize V2 isolation mode for enhanced risk management with specific assets in contained environments.',
      icon: Wallet,
      image: '/assets/images/isolation-mode.jpg',
      features: [
        'Risk isolation',
        'Asset protection',
        'Enhanced security',
        'Controlled exposure'
      ]
    },
    {
      id: 'efficiency',
      title: 'Efficiency Mode',
      description: 'Optimize capital efficiency for correlated assets with higher leverage and better utilization.',
      icon: BarChart3,
      image: '/assets/images/efficiency-mode.jpg',
      features: [
        'Higher leverage',
        'Capital efficiency',
        'Optimized yields',
        'Correlated assets'
      ]
    },
    {
      id: 'collateral',
      title: 'Advanced Collateral',
      description: 'Support for diverse collateral types including NFTs, LP tokens, and dynamic risk assessment.',
      icon: Shield,
      image: '/assets/images/advanced-collateral.jpg',
      features: [
        'NFT collateral',
        'LP token support',
        'Dynamic pricing',
        'Risk assessment'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Alex Morgan',
      role: 'DeFi Strategist',
      content: 'Weft Finance V2 with Wefties NFT CDPs has revolutionized how I manage my lending positions. The isolation mode is game-changing.',
      avatar: '/assets/images/avatar-1.jpg'
    },
    {
      name: 'Sarah Kim',
      role: 'Radix Developer',
      content: 'The Scrypto integration and Radix native features make Weft Finance the most advanced DeFi platform I&apos;ve used.',
      avatar: '/assets/images/avatar-2.jpg'
    },
    {
      name: 'Marcus Chen',
      role: 'Crypto Investor',
      content: 'The efficiency mode and advanced collateral management have significantly improved my capital utilization.',
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
                  <button className="weft-btn-secondary flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[140px]">
                    <Play className="w-4 h-4 flex-shrink-0" />
                    <span>Watch Demo</span>
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 weft-gradient rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative weft-card p-8 rounded-2xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <feature.icon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold mb-2">Interactive Demo</h4>
                      <p className="text-gray-400 mb-4">Experience the {feature.title} in action</p>
                      <button className="weft-btn-primary text-sm">
                        Launch Demo
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 text-center">
                    * Demo placeholder - Will be replaced with actual screenshots
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold weft-gradient-text mb-2">$12.5M+</div>
              <div className="text-gray-400">Total Value Locked</div>
            </div>
            <div>
              <div className="text-3xl font-bold weft-gradient-text mb-2">25K+</div>
              <div className="text-gray-400">Active Users</div>
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
