
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ClientsSection from '@/components/ClientsSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
// import DashboardPreview from '@/components/DashboardPreview';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      {/* Cosmic grid background for header and hero section only */}
      <div className="absolute top-0 left-0 right-0 h-screen cosmic-grid opacity-30 pointer-events-none"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ClientsSection />
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
