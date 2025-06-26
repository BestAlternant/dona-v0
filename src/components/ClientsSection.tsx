
import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: "TechCorp",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "FinanceFlow",
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "GlobalPay",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "DataStream",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "CloudTech",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop&auto=format"
    },
    {
      name: "InnovateX",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop&auto=format"
    }
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tighter text-foreground mb-4">
            Nos clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ils nous font confiance pour simplifier leur gestion administrative
          </p>
        </div>
        
        {/* Scrolling logos container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left space-x-12 w-fit">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain filter grayscale"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain filter grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
