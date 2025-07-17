import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PlatformOverview from '@/components/PlatformOverview';
import StakingSection from '@/components/StakingSection';
import RadixIntegration from '@/components/RadixIntegration';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <PlatformOverview />
        <StakingSection />
        <RadixIntegration />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}
