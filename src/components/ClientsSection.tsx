
import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Client {
  id: string;
  name: string;
  logo_url: string;
  display_order: number;
}

const ClientsSection = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const { data, error } = await supabase
          .from('clients')
          .select('*')
          .eq('is_active', true)
          .order('display_order', { ascending: true });

        if (error) {
          console.error('Error fetching clients:', error);
          return;
        }

        setClients(data || []);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-16 px-6 md:px-12 bg-background relative overflow-hidden">
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
          <div className="flex justify-center">
            <div className="text-muted-foreground">Chargement...</div>
          </div>
        </div>
      </section>
    );
  }

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
          <div className="flex animate-scroll-left items-center w-fit">
            {/* First set of logos */}
            {clients.map((client) => (
              <div 
                key={`first-${client.id}`}
                className="flex-shrink-0 flex items-center justify-center mx-8"
              >
                <img
                  src={client.logo_url}
                  alt={client.name}
                  className="h-12 w-auto object-contain filter grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                  style={{ maxWidth: '120px' }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div 
                key={`second-${client.id}`}
                className="flex-shrink-0 flex items-center justify-center mx-8"
              >
                <img
                  src={client.logo_url}
                  alt={client.name}
                  className="h-12 w-auto object-contain filter grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                  style={{ maxWidth: '120px' }}
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
