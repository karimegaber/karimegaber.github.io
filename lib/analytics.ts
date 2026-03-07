import { supabase } from './supabase';

export const trackEvent = async (eventName: string) => {
  try {
    const { error } = await supabase.rpc('increment_website_stat', { stat_name: eventName });
    if (error) {
      console.error('Failed to track event:', eventName, error);
    }
  } catch (error) {
    console.error('Failed to track event:', eventName, error);
  }
};

export const trackBlogView = async (blogSlug: string) => {
  try {
    const { error } = await supabase.rpc('increment_blog_view', { blog_slug: blogSlug });
    if (error) {
      console.error('Failed to track blog view:', blogSlug, error);
    }
  } catch (error) {
    console.error('Failed to track blog view:', blogSlug, error);
  }
};

export const trackAiChatMessage = () => {
  return trackEvent('ai_chat_messages');
};
