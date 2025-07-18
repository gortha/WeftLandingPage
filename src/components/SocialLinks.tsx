'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Users, MessageCircle, BookOpen, Bell } from 'lucide-react';

const SocialLinks = () => {
  const socialPlatforms = [
    {
      name: 'Discord',
      description: 'Join our community for real-time discussions and support',
      members: '25K+',
      icon: '💬',
      color: 'from-indigo-500 to-purple-600',
      href: 'https://discord.gg/weft'
    },
    {
      name: 'Twitter',
      description: 'Follow us for the latest updates and announcements',
      members: '45K+',
      icon: '🐦',
      color: 'from-blue-400 to-blue-600',
      href: 'https://x.com/weft_finance'
    },
    {
      name: 'Telegram',
      description: 'Connect with the global Weft Finance community',
      members: '18K+',
      icon: '📱',
      color: 'from-blue-500 to-cyan-500',
      href: 'https://t.me/weftfinance'
    },
    {
      name: 'Medium',
      description: 'Read our latest articles and technical insights',
      members: '12K+',
      icon: '📝',
      color: 'from-gray-600 to-gray-800',
      href: 'https://medium.com/@weft_finance'
    },
    {
      name: 'GitHub',
      description: 'Explore our open-source code and contribute',
      members: '2.5K+',
      icon: '💻',
      color: 'from-gray-700 to-gray-900',
      href: 'https://github.com/weftfinance'
    },
    {
      name: 'YouTube',
      description: 'Watch tutorials, AMAs, and educational content',
      members: '8K+',
      icon: '📺',
      color: 'from-red-500 to-red-600',
      href: 'https://youtube.com/@weftfinance'
    }
  ];

  const communityStats = [
    { label: 'Community Members', value: '100K+', icon: Users },
    { label: 'Daily Messages', value: '5K+', icon: MessageCircle },
    { label: 'Educational Content', value: '200+', icon: BookOpen },
    { label: 'Weekly Updates', value: '3', icon: Bell }
  ];

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Join Our <span className="weft-gradient-text">Community</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow DeFi enthusiasts, get support, and stay updated 
            with the latest developments in the Weft Finance ecosystem.
          </p>
        </motion.div>

        {/* Social Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="weft-card p-6 group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-2xl mr-4 group-hover:scale-110 transition-transform`}>
                  {platform.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {platform.name}
                  </h3>
                  <div className="text-sm text-gray-400">{platform.members} members</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {platform.description}
              </p>

              <Link
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="weft-btn-secondary w-full flex items-center justify-center space-x-2 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500"
              >
                <span>Join {platform.name}</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="weft-card p-8 rounded-3xl mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Community <span className="weft-gradient-text">Statistics</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold weft-gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Linktree Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="weft-card p-8 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌳</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              All Links in <span className="weft-gradient-text">One Place</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Access all our social media channels, resources, and important links 
              through our centralized Linktree page.
            </p>
            <Link
              href="https://linktr.ee/weft"
              target="_blank"
              rel="noopener noreferrer"
              className="weft-btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <span>Visit Our Linktree</span>
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="weft-card p-8 max-w-4xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Stay <span className="weft-gradient-text">Updated</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest updates, feature announcements, 
                and exclusive insights from the Weft Finance team.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Weekly updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>No spam</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                />
                <button className="weft-btn-primary px-6 py-3">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinks;
