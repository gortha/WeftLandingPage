'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Shield, Zap, Users, BookOpen } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Protocol: [
      { name: 'Launch App', href: 'https://app.weft.finance/market', isExternal: true },
      { name: 'Staking Portal', href: 'https://token.weft.finance', isExternal: true },
      { name: 'Documentation', href: '/docs', isExternal: false },
      { name: 'Whitepaper', href: '/whitepaper', isExternal: false },
      { name: 'Governance', href: '/governance', isExternal: false },
      { name: 'Audits', href: '/audits', isExternal: false }
    ],
    Community: [
      { name: 'Discord', href: 'https://discord.gg/weft', isExternal: true },
      { name: 'Twitter', href: 'https://twitter.com/weftfinance', isExternal: true },
      { name: 'Telegram', href: 'https://t.me/weftfinance', isExternal: true },
      { name: 'Medium', href: 'https://medium.com/@weftfinance', isExternal: true },
      { name: 'GitHub', href: 'https://github.com/weftfinance', isExternal: true },
      { name: 'Linktree', href: 'https://linktr.ee/weft', isExternal: true }
    ],
    Resources: [
      { name: 'Blog', href: '/blog', isExternal: false },
      { name: 'Tutorials', href: '/tutorials', isExternal: false },
      { name: 'API Reference', href: '/api', isExternal: false },
      { name: 'Help Center', href: '/help', isExternal: false },
      { name: 'Bug Bounty', href: '/bug-bounty', isExternal: false },
      { name: 'Brand Kit', href: '/brand', isExternal: false }
    ],
    Company: [
      { name: 'About Us', href: '/about', isExternal: false },
      { name: 'Careers', href: '/careers', isExternal: false },
      { name: 'Press', href: '/press', isExternal: false },
      { name: 'Terms of Service', href: '/terms', isExternal: false },
      { name: 'Privacy Policy', href: '/privacy', isExternal: false },
      { name: 'Cookie Policy', href: '/cookies', isExternal: false }
    ]
  };

  const techPartners = [
    { name: 'Radix', logo: '🔗', href: 'https://www.radixdlt.com/full-stack' },
    { name: 'Chainlink', logo: '🔗', href: 'https://chain.link' },
    { name: 'The Graph', logo: '📊', href: 'https://thegraph.com' },
    { name: 'Ceramic', logo: '🏺', href: 'https://ceramic.network' }
  ];

  const quickStats = [
    { label: 'Total Value Locked', value: '$125M+', icon: Shield },
    { label: 'Active Users', value: '50K+', icon: Users },
    { label: 'Transactions', value: '2.5M+', icon: Zap },
    { label: 'Uptime', value: '99.9%', icon: BookOpen }
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Image 
                    src="/assets/images/weft_green.svg" 
                    alt="Weft Finance Logo" 
                    width={128}
                    height={41}
                    className="w-24 h-[31px] sm:w-32 sm:h-[41px]"
                    onError={(e) => {
                      // Fallback to gradient logo if image fails to load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="w-24 h-[31px] sm:w-32 sm:h-[41px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center hidden">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">W</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Weft Finance</h3>
                    <p className="text-xs sm:text-sm text-gray-400">DeFi. Simplified.</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The next-generation DeFi platform built on Radix. Secure, 
                  scalable, and user-friendly lending, borrowing, and staking solutions.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 max-w-md sm:max-w-none">
                  <Link
                    href="https://app.weft.finance/market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="weft-btn-primary px-6 py-3 flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[160px]"
                  >
                    <span>Launch App</span>
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                  </Link>
                  <Link
                    href="https://token.weft.finance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="weft-btn-secondary px-6 py-3 flex items-center justify-center space-x-2 w-full sm:w-auto min-w-0 sm:min-w-[160px]"
                  >
                    <span>Stake WEFT</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {quickStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg mb-2">
                        <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      </div>
                      <div className="text-sm sm:text-lg font-bold weft-gradient-text">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-bold text-white mb-6">{category}</h4>
                    <ul className="space-y-4">
                      {links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            target={link.isExternal ? '_blank' : '_self'}
                            rel={link.isExternal ? 'noopener noreferrer' : ''}
                            className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 group"
                          >
                            <span>{link.name}</span>
                            {link.isExternal && (
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="text-center mb-8">
            <h4 className="text-lg font-bold text-white mb-2">Powered by</h4>
            <p className="text-gray-400">Industry-leading infrastructure partners</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {techPartners.map((partner, index) => (
              <Link
                key={index}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors group"
              >
                <span className="text-2xl">{partner.logo}</span>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {partner.name}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Weft Finance. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400">All systems operational</span>
              </div>
              <div className="text-gray-400">
                Built on <Link href="https://www.radixdlt.com/full-stack" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Radix DLT</Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="https://discord.gg/weft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                💬
              </Link>
              <Link
                href="https://twitter.com/weftfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                🐦
              </Link>
              <Link
                href="https://t.me/weftfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                📱
              </Link>
              <Link
                href="https://github.com/weftfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                💻
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
