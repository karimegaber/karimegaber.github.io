"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"
import { supabase } from "@/lib/supabase"

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

export default function BlogsPage() {
  const [isClient, setIsClient] = useState(false)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mounting Gate: Set isClient to true only after mount
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    async function fetchPosts() {
      try {
        setLoading(true)
        const timestamp = new Date().getTime()

        // Use the configured supabase client which appends ?t=timestamp via fetch interceptor
        // But to be explicit and safe based on "Requirement: Append a new Date().getTime() timestamp... to every Supabase select call"
        // I will trust the lib/supabase.ts wrapper I wrote, OR I can manually try to bust cache if the wrapper isn't enough.
        // The wrapper handles it globally.

        const { data, error } = await supabase
          .from('posts')
          .select('*')
        
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
  }, [isClient])

  // STRICT DIRECTIVE: If !isClient, return ONLY Skeleton UI.
  // This ensures the build process (SSR) sees only the skeleton.
  if (!isClient) {
    return (
      <main className="relative min-h-screen bg-[#080c1a]">
        <Navbar />
        <div className="pt-32 pb-20 px-6">
          <div className="mx-auto max-w-6xl">
            {/* Header Skeleton */}
            <div className="mb-12">
               <div className="h-10 w-64 bg-slate-800 rounded mb-4 animate-pulse"></div>
               <div className="h-6 w-full max-w-2xl bg-slate-800 rounded animate-pulse"></div>
               <div className="h-6 w-2/3 max-w-2xl bg-slate-800 rounded mt-2 animate-pulse"></div>
            </div>

             {/* Grid Skeleton */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[1, 2, 3, 4, 5, 6].map((i) => (
                 <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 h-[400px] flex flex-col">
                    <div className="h-6 w-3/4 bg-slate-800 rounded mb-4 animate-pulse"></div>
                    <div className="h-4 w-full bg-slate-800 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-slate-800 rounded mb-6 animate-pulse"></div>
                    <div className="mt-auto flex gap-2">
                       <div className="h-6 w-16 bg-slate-800 rounded-full animate-pulse"></div>
                       <div className="h-6 w-16 bg-slate-800 rounded-full animate-pulse"></div>
                    </div>
                 </div>
               ))}
             </div>
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
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[1, 2, 3, 4, 5, 6].map((i) => (
                 <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 h-[400px] flex flex-col">
                    <div className="h-6 w-3/4 bg-slate-800 rounded mb-4 animate-pulse"></div>
                    <div className="h-4 w-full bg-slate-800 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 w-5/6 bg-slate-800 rounded mb-6 animate-pulse"></div>
                    <div className="mt-auto flex gap-2">
                       <div className="h-6 w-16 bg-slate-800 rounded-full animate-pulse"></div>
                       <div className="h-6 w-16 bg-slate-800 rounded-full animate-pulse"></div>
                    </div>
                 </div>
               ))}
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
