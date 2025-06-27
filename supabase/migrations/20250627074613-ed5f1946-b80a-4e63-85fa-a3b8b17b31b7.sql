
-- Créer une table pour stocker les informations des clients
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insérer les clients existants
INSERT INTO public.clients (name, logo_url, display_order) VALUES
  ('BlackTicket', '/lovable-uploads/280f4554-1e63-47ee-8a46-29676ebd8e19.png', 1),
  ('Delmonicos', '/lovable-uploads/46ce502e-1f55-4f46-9025-472b00985c7c.png', 2),
  ('Yuzu', '/lovable-uploads/5aa305e0-0197-4551-96bf-4008c7d49a88.png', 3);

-- Activer Row Level Security (pour la sécurité)
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- Créer une politique pour permettre la lecture publique des clients actifs
CREATE POLICY "Anyone can view active clients" 
  ON public.clients 
  FOR SELECT 
  USING (is_active = true);
