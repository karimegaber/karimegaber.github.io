"use client"

export const dynamic = "force-dynamic"
export const revalidate = 0

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/lib/blogs"
import { BlogGrid } from "@/components/blog-grid"
import { BlogSkeleton } from "@/components/blog-skeleton"
import { supabase } from "@/lib/supabase"

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Fetch posts with strict cache busting via global headers in lib/supabase.ts
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) {
          console.error("Error fetching posts:", error)
          return
        }

        if (data) {
          const formattedPosts = data.map((post) => ({
            slug: post.slug,
            title: post.title,
            date: new Date(post.created_at).toISOString().split("T")[0],
            excerpt: post.excerpt,
            tags: post.tags,
            readingTime: Math.ceil(post.content.split(/\s+/).length / 200) + " min read",
            content: post.content,
          }))
          setPosts(formattedPosts)
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
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
            <BlogSkeleton />
          </div>
        </div>
        <Footer />
      </main>
    )
  }

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

          <BlogGrid posts={posts} />
        </div>
      </div>

      <Footer />
    </main>
  )
}
