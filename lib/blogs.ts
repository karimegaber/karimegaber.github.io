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

export async function getBlogPosts(): Promise<BlogPost[]> {
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
