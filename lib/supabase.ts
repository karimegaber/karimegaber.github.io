import { createClient } from '@supabase/supabase-js';

// Hardcoded Supabase credentials as requested for client-side persistence
const supabaseUrl = 'https://vlgwfdfovioeerbulxzb.supabase.co';
const supabaseKey = 'sb_publishable_5M6vvHopNZwbBae1rsuXWQ_zECw0-zj';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});
