
-- Mettre à jour les clients avec les vraies URL des logos uploadés
UPDATE public.clients SET logo_url = 'https://jchdcphtlhgefybhioir.supabase.co/storage/v1/object/public/logo-clients/blackticket_logo.webp' WHERE name = 'BlackTicket';
UPDATE public.clients SET logo_url = 'https://jchdcphtlhgefybhioir.supabase.co/storage/v1/object/public/logo-clients/delmonicos_logo.webp' WHERE name = 'Delmonicos';
UPDATE public.clients SET logo_url = 'https://jchdcphtlhgefybhioir.supabase.co/storage/v1/object/public/logo-clients/yuzu_logo.webp' WHERE name = 'Yuzu';
UPDATE public.clients SET logo_url = 'https://jchdcphtlhgefybhioir.supabase.co/storage/v1/object/public/logo-clients/diamantaire_logo.webp' WHERE name = 'La Compagnie du Diamantaire';

-- Ajouter le nouveau client Jared
INSERT INTO public.clients (name, logo_url, display_order) VALUES
  ('Jared', 'https://jchdcphtlhgefybhioir.supabase.co/storage/v1/object/public/logo-clients/jared_logo.webp', 5);
