import { supabase } from './supabase';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  content: string;
};

// Check if we are in a build environment without real credentials
const isBuildWithoutCredentials =
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder') ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.includes('placeholder');

export async function getBlogPosts(): Promise<BlogPost[]> {
  // If we don't have real credentials, return empty array immediately to avoid build failures
  if (isBuildWithoutCredentials) {
    console.warn('Building with placeholder credentials - returning empty blog posts list.');
    return [];
  }

  try {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      return [];
    }

    if (!posts) {
      return [];
    }

    return posts.map((post) => {
      const readingTime = Math.ceil(post.content.split(/\s+/).length / 200) + ' min read';

      // Format date from timestamp
      const date = new Date(post.created_at).toISOString().split('T')[0];

      return {
        slug: post.slug,
        title: post.title,
        date: date,
        excerpt: post.excerpt,
        tags: post.tags,
        readingTime,
        content: post.content,
      };
    });
  } catch (err) {
    console.error('Unexpected error fetching posts:', err);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // If we don't have real credentials, return null immediately
  if (isBuildWithoutCredentials) {
    return null;
  }

  try {
    const { data: post, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching post:', error);
      return null;
    }

    if (!post) {
      return null;
    }

    const readingTime = Math.ceil(post.content.split(/\s+/).length / 200) + ' min read';
    const date = new Date(post.created_at).toISOString().split('T')[0];

    return {
      slug: post.slug,
      title: post.title,
      date: date,
      excerpt: post.excerpt,
      tags: post.tags,
      readingTime,
      content: post.content,
    };
  } catch (err) {
    console.error('Unexpected error fetching post:', err);
    return null;
  }
}
