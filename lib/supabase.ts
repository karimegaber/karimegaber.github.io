import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlgwfdfovioeerbulxzb.supabase.co";
const supabaseKey = "sb_publishable_5M6vvHopNZwbBae1rsuXWQ_zECw0-zj";

// Custom fetch implementation to append a unique timestamp to every request.
// This ensures that we bypass all caching layers (Browser, CDN, Edge).
// Supabase JS client uses "global.fetch" by default, we override it here.
const customFetch = (url: RequestInfo | URL, options?: RequestInit) => {
  // Convert URL to string to safely parse it
  const urlString = url.toString();
  try {
    const urlObj = new URL(urlString);
    urlObj.searchParams.set("t", Date.now().toString());
    return fetch(urlObj.toString(), options);
  } catch (e) {
    // If URL parsing fails, fallback to original fetch (unlikely)
    return fetch(url, options);
  }
};

export const supabase = createClient(supabaseUrl, supabaseKey, {
  global: {
    fetch: customFetch,
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
    },
  },
  auth: {
    persistSession: false,
  },
});
