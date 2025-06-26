
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
// import DashboardPreview from '@/components/DashboardPreview';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      {/* Global cosmic grid background - increased opacity for better visibility */}
      <div className="fixed inset-0 cosmic-grid opacity-50 pointer-events-none"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          {/* <DashboardPreview /> */}
          <Features />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
