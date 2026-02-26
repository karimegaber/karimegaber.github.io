import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlgwfdfovioeerbulxzb.supabase.co";
const supabaseKey = "sb_publishable_5M6vvHopNZwbBae1rsuXWQ_zECw0-zj";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  global: {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
    },
  },
  auth: {
    persistSession: false,
  },
});
