import { BlogClient } from "./blog-client"

// This is required for static export to work with dynamic routes.
// We must return at least one path to prevent Next.js from throwing "missing generateStaticParams".
// The 'index' slug is a dummy value. The client-side router will handle real slugs.
export async function generateStaticParams() {
  return [{ slug: 'index' }]
}

export default function BlogPostPage() {
  return <BlogClient />
}
