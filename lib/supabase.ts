import { createClient } from '@supabase/supabase-js';

// Hardcoded Supabase credentials as requested for client-side persistence
const supabaseUrl = 'https://vlgwfdfovioeerbulxzb.supabase.co';
const supabaseKey = 'sb_publishable_5M6vvHopNZwbBae1rsuXWQ_zECw0-zj';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
  global: {
    // Inject custom headers directly into the global configuration to fix PGRST100
    // This ensures no URL parameters are appended to the query.
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  },
});
