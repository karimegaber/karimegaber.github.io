import { BlogPostClient } from "./client"

// To satisfy Next.js static export constraints (output: 'export'),
// dynamic routes like [slug] MUST have generateStaticParams.
// We return a dummy path. The client logic will handle actual rendering.
// This physically prevents data baking during the build while keeping the compiler happy.
export async function generateStaticParams() {
  return [{ slug: 'index' }]
}

export default function BlogPostPage() {
  return <BlogPostClient />
}
