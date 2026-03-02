"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { supabase } from "@/lib/supabase"
import "highlight.js/styles/github-dark.css"

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  content: string;
}

export function BlogPostClient() {
  const params = useParams()
  // Ensure slug is a string (handle array case if catch-all used, though this is [slug])
  const rawSlug = params?.slug
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug

  const [isClient, setIsClient] = useState(false)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Mounting Gate
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !slug) return

    async function fetchPost() {
      try {
        setLoading(true)
        // Timestamp is automatically appended by lib/supabase.ts wrapper

        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('slug', slug)
          .single()

        if (error) {
          console.error("Error fetching post:", error)
          setError(true)
        } else if (data) {
           const readingTime = Math.ceil((data.content?.split(/\s+/).length || 0) / 200) + ' min read';
           const date = new Date(data.created_at).toISOString().split('T')[0];

           setPost({
             slug: data.slug,
             title: data.title,
             date: date,
             excerpt: data.excerpt,
             tags: data.tags,
             readingTime,
             content: data.content,
           })
        } else {
            setError(true) // Post not found
        }
      } catch (e) {
        console.error("Unexpected error fetching post:", e)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [isClient, slug])

  // STRICT DIRECTIVE: If !isClient, return ONLY Skeleton UI.
  // This ensures the build process (SSR) sees only the skeleton.
  if (!isClient) {
    return (
      <main className="relative min-h-screen bg-[#080c1a]">
        <Navbar />
        <div className="pt-32 pb-20 px-6">
           <div className="mx-auto max-w-4xl animate-pulse">
              {/* Back Link Skeleton */}
              <div className="h-4 w-24 bg-slate-800 rounded mb-8"></div>

              {/* Title Skeleton */}
              <div className="h-12 w-3/4 bg-slate-800 rounded mb-6"></div>

              {/* Meta Data Skeleton */}
              <div className="flex gap-6 mb-10">
                 <div className="h-4 w-32 bg-slate-800 rounded"></div>
                 <div className="h-4 w-32 bg-slate-800 rounded"></div>
              </div>

              {/* Tags Skeleton */}
              <div className="flex gap-2 mb-10">
                 <div className="h-6 w-16 bg-slate-800 rounded-full"></div>
                 <div className="h-6 w-16 bg-slate-800 rounded-full"></div>
                 <div className="h-6 w-16 bg-slate-800 rounded-full"></div>
              </div>

              {/* Content Skeleton */}
              <div className="space-y-4">
                 <div className="h-4 w-full bg-slate-800 rounded"></div>
                 <div className="h-4 w-full bg-slate-800 rounded"></div>
                 <div className="h-4 w-full bg-slate-800 rounded"></div>
                 <div className="h-4 w-2/3 bg-slate-800 rounded"></div>
                 <div className="h-32 w-full bg-slate-800 rounded mt-8"></div>
              </div>
           </div>
        </div>
        <Footer />
      </main>
    )
  }

  // Render loading state (same skeleton) while fetching on client
  if (loading) {
    return (
      <main className="relative min-h-screen bg-[#080c1a]">
        <Navbar />
        <div className="pt-32 pb-20 px-6">
           <div className="mx-auto max-w-4xl animate-pulse">
              <div className="h-4 w-24 bg-slate-800 rounded mb-8"></div>
              <div className="h-12 w-3/4 bg-slate-800 rounded mb-6"></div>
              <div className="flex gap-6 mb-10">
                 <div className="h-4 w-32 bg-slate-800 rounded"></div>
                 <div className="h-4 w-32 bg-slate-800 rounded"></div>
              </div>
              <div className="flex gap-2 mb-10">
                 <div className="h-6 w-16 bg-slate-800 rounded-full"></div>
                 <div className="h-6 w-16 bg-slate-800 rounded-full"></div>
                 <div className="h-6 w-16 bg-slate-800 rounded-full"></div>
              </div>
              <div className="space-y-4">
                 <div className="h-4 w-full bg-slate-800 rounded"></div>
                 <div className="h-4 w-full bg-slate-800 rounded"></div>
                 <div className="h-4 w-full bg-slate-800 rounded"></div>
                 <div className="h-4 w-2/3 bg-slate-800 rounded"></div>
              </div>
           </div>
        </div>
        <Footer />
      </main>
    )
  }

  // Render Error / Not Found
  if (error || !post) {
    return (
      <main className="relative min-h-screen bg-[#080c1a]">
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
            <h1 className="text-3xl text-white mb-4">Post Not Found</h1>
            <p className="text-slate-400 mb-8">The post you are looking for does not exist or could not be loaded.</p>
            <Link href="/blogs" className="text-blue-400 hover:underline">Return to Blogs</Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="relative min-h-screen bg-[#080c1a]">
      <Navbar />

      <article className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blogs"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Blogs
          </Link>

          <div className="mb-10">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl lg:leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-blue-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-400" />
                <span>{post.readingTime}</span>
              </div>
            </div>

             <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-slate-100 prose-p:text-slate-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:text-blue-300 prose-pre:bg-[#0f1629] prose-pre:border prose-pre:border-white/10">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
            >
                {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
