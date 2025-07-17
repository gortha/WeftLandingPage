import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PlatformOverview from '@/components/PlatformOverview';
import StakingSection from '@/components/StakingSection';
import BuyWeftSection from '@/components/BuyWeftSection';
import RadixIntegration from '@/components/RadixIntegration';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';
import ClientWeb3Background from '@/components/ClientWeb3Background';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Web3 Background Effects */}
      <ClientWeb3Background />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <PlatformOverview />
          <StakingSection />
          <BuyWeftSection />
          <RadixIntegration />
          <SocialLinks />
        </main>
        <Footer />
      </div>
    </div>
  );
}
