
import { getBlogPosts, getBlogPostBySlug } from '../lib/blogs';

async function main() {
  console.log('Fetching all blogs...');
  const blogs = await getBlogPosts();
  console.log(`Found ${blogs.length} blogs.`);
  blogs.forEach(b => console.log(`- ${b.title} (${b.slug})`));

  if (blogs.length > 0) {
    const slug = blogs[0].slug;
    console.log(`\nFetching blog by slug: ${slug}...`);
    const blog = await getBlogPostBySlug(slug);
    if (blog) {
      console.log(`Success! Title: ${blog.title}`);
      console.log(`Content length: ${blog.content.length}`);
    } else {
      console.error('Failed to fetch blog by slug.');
    }
  }
}

main().catch(console.error);
