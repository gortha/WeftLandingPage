'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Platform', href: '#platform' },
    { name: 'Features', href: '#features' },
    { name: 'Staking', href: '#staking' },
    { name: 'Buy $WEFT', href: '#buy-weft' },
    { name: 'Radix', href: '#radix' },    
    { name: 'Social', href: 'https://linktr.ee/weft', external: true },
  ];

  // Render navigation item with consistent SSR/client structure
  const renderNavItem = (item: typeof navigation[0], mobile: boolean = false) => {
    return (
      <Link
        key={item.name}
        href={item.href}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
        className={`relative group text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-1 ${
          mobile 
            ? 'py-3 px-4 rounded-lg hover:bg-white/5' 
            : 'py-2 px-3 rounded-lg hover:bg-white/5'
        }`}
        onClick={mobile ? () => setIsMenuOpen(false) : undefined}
      >
        <span className="relative z-10">{item.name}</span>
        {item.external && <ExternalLink className={`${mobile ? 'w-4 h-4' : 'w-3 h-3'} relative z-10`} />}
        
        {/* Hover effects - only show on client to avoid hydration mismatch */}
        {isClient && !mobile && (
          <>
            {/* Hover underline effect */}
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            
            {/* Hover glow effect */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
          </>
        )}
        
        {isClient && mobile && (
          <>
            {/* Mobile hover effect */}
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r"></span>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </>
        )}
      </Link>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
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
            <div className="w-24 h-[31px] sm:w-32 sm:h-[41px] weft-gradient rounded-lg flex items-center justify-center hidden">
              <span className="text-white font-bold text-lg sm:text-xl">W</span>
            </div>
            {/* <span className="text-xl sm:text-2xl font-bold weft-gradient-text">
              Weft Finance
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => renderNavItem(item, false))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://app.weft.finance"
              target="_blank"
              rel="noopener noreferrer"
              className="weft-btn-primary flex items-center space-x-2 relative group overflow-hidden"
            >
              <span className="relative z-10">Launch App</span>
              <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Enhanced button glow on hover - only on client */}
              {isClient && (
                <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => renderNavItem(item, true))}
              <Link
                href="https://app.weft.finance/market"
                target="_blank"
                rel="noopener noreferrer"
                className="weft-btn-primary flex items-center justify-center space-x-2 mt-4"
              >
                <span>Launch App</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
