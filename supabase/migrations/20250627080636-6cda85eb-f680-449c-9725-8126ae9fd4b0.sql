
-- Supprimer tous les clients existants pour les remplacer par les nouvelles URL du bucket Supabase
DELETE FROM public.clients;

-- Réinsérer les clients avec les nouvelles URL du bucket Supabase
INSERT INTO public.clients (name, logo_url, display_order) VALUES
  ('BlackTicket', 'https://jchdcphtlhgefybhioir.supabase.co/storage/v1/object/public/logo-clients/blackticket.png', 1),
  ('Delmonicos', 'https://jchdcphtlhgefybhioir.supabase.co/storage/v1/object/public/logo-clients/delmonicos.png', 2),
  ('Yuzu', 'https://jchdcphtlhgefybhioir.supabase.co/storage/v1/object/public/logo-clients/yuzu.png', 3),
  ('La Compagnie du Diamantaire', 'https://jchdcphtlhgefybhioir.supabase.co/storage/v1/object/public/logo-clients/diamantaire.png', 4);
