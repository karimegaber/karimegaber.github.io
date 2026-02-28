import { createClient } from '@supabase/supabase-js';

// Hardcoded Supabase credentials as requested for client-side persistence
const supabaseUrl = 'https://vlgwfdfovioeerbulxzb.supabase.co';
const supabaseKey = 'sb_publishable_5M6vvHopNZwbBae1rsuXWQ_zECw0-zj';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
  global: {
    // Correct cache-busting fetch options
    fetch: (url, options) => {
      const headers = new Headers(options?.headers);
      headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      headers.set('Pragma', 'no-cache');
      headers.set('Expires', '0');

      return fetch(url, {
        ...options,
        headers,
        cache: 'no-store',
      });
    },
  },
});
