"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag, Loader2 } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

import { getBlogPostBySlug, BlogPost } from "@/lib/blogs"
import { supabase } from "@/lib/supabase"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string

  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchPost = async () => {
    if (!slug) return

    try {
      const data = await getBlogPostBySlug(slug)
      setPost(data)
    } catch (error) {
      console.error("Failed to fetch post:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!slug) return

    // Initial fetch
    fetchPost()

    // Realtime subscription for this specific post
    const channel = supabase
      .channel(`post-${slug}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "posts",
          filter: `slug=eq.${slug}`
        },
        (payload) => {
          console.log("Realtime post update:", payload)
          // Refetch to get the latest data (or handle delete)
          fetchPost()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [slug])

  if (loading) {
    return (
      <main className="relative min-h-screen bg-[#080c1a]">
        <Navbar />
        <div className="flex h-screen items-center justify-center pt-20">
          <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
          <span className="ml-2 text-slate-400">Loading article...</span>
        </div>
        <Footer />
      </main>
    )
  }

  if (!post) {
    return (
      <main className="relative min-h-screen bg-[#080c1a]">
        <Navbar />
        <div className="flex h-screen flex-col items-center justify-center pt-20 text-slate-400">
          <p className="mb-4 text-xl">Post not found</p>
          <Link href="/blogs" className="text-blue-400 hover:underline">Back to Blogs</Link>
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
