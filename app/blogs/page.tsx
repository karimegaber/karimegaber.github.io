"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"

export const dynamic = 'force-dynamic'
export const revalidate = 0

// Type definition for local use
type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  content: string;
}

// Skeleton Component for consistent reuse and Framer Motion animation
const BlogSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 h-[400px] flex flex-col"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <div className="h-6 w-3/4 bg-slate-800 rounded mb-4"></div>
          <div className="h-4 w-full bg-slate-800 rounded mb-2"></div>
          <div className="h-4 w-full bg-slate-800 rounded mb-2"></div>
          <div className="h-4 w-5/6 bg-slate-800 rounded mb-6"></div>
          <div className="mt-auto flex gap-2">
            <div className="h-6 w-16 bg-slate-800 rounded-full"></div>
            <div className="h-6 w-16 bg-slate-800 rounded-full"></div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function BlogsPage() {
  const [hasMounted, setHasMounted] = useState(false)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mounting Gate: Set hasMounted to true only after mount
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    async function fetchPosts() {
      try {
        setLoading(true)

        // Use the configured supabase client which handles cache-busting headers
        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Error fetching posts:', error)
        } else if (data) {
          const formattedPosts = data.map(post => ({
            slug: post.slug,
            title: post.title,
            date: new Date(post.created_at).toISOString().split('T')[0],
            excerpt: post.excerpt,
            tags: post.tags,
            readingTime: (Math.ceil((post.content?.split(/\s+/).length || 0) / 200) + ' min read'),
            content: post.content
          }))
          setPosts(formattedPosts)
        }
      } catch (e) {
        console.error('Unexpected error:', e)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [hasMounted])

  // STRICT DIRECTIVE: If !hasMounted, return ONLY Skeleton UI.
  // This ensures the build process (SSR) sees only the skeleton.
  if (!hasMounted) {
    return (
      <main className="relative min-h-screen bg-[#080c1a]">
        <Navbar />
        <div className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-6xl">
            {/* Header Skeleton */}
            <div className="mb-12">
               <div className="h-10 w-64 bg-slate-800 rounded mb-4"></div>
               <div className="h-6 w-full max-w-2xl bg-slate-800 rounded"></div>
               <div className="h-6 w-2/3 max-w-2xl bg-slate-800 rounded mt-2"></div>
            </div>

             {/* Grid Skeleton */}
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

          {loading ? (
             <BlogSkeleton />
          ) : (
            <BlogGrid posts={posts} />
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
