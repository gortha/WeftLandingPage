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

// Simple background component inline to avoid webpack issues
const Web3Background = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Web3 Background Effects */}
      <Web3Background />
      
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
