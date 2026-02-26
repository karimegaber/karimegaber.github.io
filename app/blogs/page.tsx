"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getBlogPosts, BlogPost } from "@/lib/blogs"
import { BlogGrid } from "@/components/blog-grid"
import { Loader2 } from "lucide-react"

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getBlogPosts()
        setPosts(data)
      } catch (error) {
        console.error("Failed to fetch posts:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <main className="relative min-h-screen bg-[#080c1a]">
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              <span className="text-blue-400">Technical</span> Insights
            </h1>
            <p className="max-w-2xl text-lg text-slate-400">
              Deep dives into software architecture, mobile development, and AI integration.
              Sharing lessons learned from building large-scale applications.
            </p>
          </div>

          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
              <span className="ml-2 text-slate-400">Loading articles...</span>
            </div>
          ) : (
            <BlogGrid posts={posts} />
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
