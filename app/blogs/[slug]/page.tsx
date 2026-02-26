import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blogs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Karim Gaber`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
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
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
