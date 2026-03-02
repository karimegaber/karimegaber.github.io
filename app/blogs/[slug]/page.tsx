import { supabase } from "@/lib/supabase"
import { BlogClient } from "./blog-client"

// This is required for static export to work with dynamic routes.
export async function generateStaticParams() {
  const { data: posts } = await supabase.from("posts").select("slug")

  if (!posts) {
    // Return a dummy slug if fetching fails, to prevent breaking the build.
    // This allows client-side rendering to take over.
    return [{ slug: "index" }]
  }

  return posts.map(post => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage() {
  return <BlogClient />
}
