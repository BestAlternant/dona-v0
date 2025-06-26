import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
// import TaskBoard from './TaskBoard';
import { Loader } from 'lucide-react';

const HeroSection = () => {
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [trialTextVisible, setTrialTextVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  const words = ['administrative', 'RH', 'comptable'];

  useEffect(() => {
    const timers = [
      setTimeout(() => setBadgeVisible(true), 200),
      setTimeout(() => setTitleVisible(true), 400),
      setTimeout(() => setDescriptionVisible(true), 600),
      setTimeout(() => setTrialTextVisible(true), 800),
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setWordVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-20 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background min-h-screen">
      {/* Cosmic grid background only for Hero section */}
      <div className="absolute inset-0 cosmic-grid opacity-50 pointer-events-none"></div>
      
      {/* Gradient glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
      </div>
      
      {/* White gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
      
      <div className="relative z-10 max-w-4xl text-center space-y-6">
        <div className={`flex justify-center transition-all duration-700 transform ${badgeVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 -translate-y-4 blur-sm'}`}>
          <a 
            href="https://lumena.tech/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-muted text-primary hover:bg-muted/80 transition-colors"
          >
            <img src="/lovable-uploads/bfec27eb-5bf1-4280-937a-7a8b95a2ee6e.png" alt="Lumena logo" className="h-4 w-auto" />
            by <span className="font-archivo">Lumena Start-up - Studio</span>
          </a>
        </div>
        
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance text-foreground transition-all duration-700 transform leading-tight ${titleVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 -translate-y-4 blur-sm'}`}>
          <div className="flex items-baseline justify-center flex-wrap">
            <span>L'assistante&nbsp;</span>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-[#d8246e]/20 to-[#d8246e]/10 rounded-sm"></span>
              <span 
                className={`relative px-2 transition-all duration-300 ${
                  wordVisible 
                    ? 'opacity-100' 
                    : 'opacity-0'
                }`}
              >
                {words[currentWordIndex]}
              </span>
            </span>
          </div>
          des <span className="text-primary">fondateurs ambitieux</span>
        </h1>
        
        <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance transition-all duration-700 transform ${descriptionVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 -translate-y-4 blur-sm'}`}>
          Un service tout-en-un qui centralise votre gestion administrative, RH et comptable via une assistante virtuelles externalisés.
        </p>
        
        <div className={`pt-6 text-sm text-muted-foreground transition-all duration-700 transform ${trialTextVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 -translate-y-4 blur-sm'}`}>
          No credit card required • Free 14-day trial
        </div>
      </div>
      
      {/* Task Manager UI integrated in hero section with glassmorphic effect - HIDDEN */}
      {/* <div className={`w-full max-w-7xl mt-12 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-lg">
          <div className="bg-card backdrop-blur-md w-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                  <div className="h-3 w-3 rounded-sm bg-foreground"></div>
                </div>
                <span className="text-foreground font-medium">Payment Processing Pipeline</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-muted border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-muted/80 border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-muted/60 border-2 border-card"></div>
                  <div className="h-8 w-8 rounded-full bg-muted/40 border-2 border-card flex items-center justify-center text-xs text-foreground">+3</div>
                </div>
                
                <div className="h-8 px-3 rounded-md bg-muted flex items-center justify-center text-foreground text-sm">
                  Share
                </div>
              </div>
            </div>
            
            <div className="flex h-[600px] overflow-hidden">
              <div className="w-64 border-r border-border p-4 space-y-4 hidden md:block bg-card">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase">Navigation</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-muted text-foreground">
                      <div className="h-3 w-3 rounded-sm bg-foreground"></div>
                      <span>Payments</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Analytics</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Compliance</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30"></div>
                      <span>Reports</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <div className="text-xs text-muted-foreground uppercase">Departments</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-muted-foreground/60"></div>
                      <span>Treasury</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-muted-foreground/50"></div>
                      <span>Risk</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:bg-muted/50">
                      <div className="h-3 w-3 rounded-full bg-muted-foreground/40"></div>
                      <span>Operations</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-4 bg-background overflow-hidden">
                <div className="flex items-center justify-between mb-6 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <h3 className="font-medium text-foreground">Transactions</h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">23</span>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 9L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center text-muted-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 9L17 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 17L7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="h-8 px-3 rounded-md bg-foreground text-background flex items-center justify-center text-sm font-medium whitespace-nowrap">
                      New Transaction
                    </div>
                  </div>
                </div>
                
                <div className="overflow-hidden">
                  <TaskBoard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
