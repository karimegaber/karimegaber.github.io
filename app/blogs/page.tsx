import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getBlogPosts } from "@/lib/blogs"
import { BlogGrid } from "@/components/blog-grid"

export const metadata = {
  title: "Blogs | Karim Gaber",
  description: "Technical articles about Flutter, AI, and Software Architecture.",
}

export default async function BlogsPage() {
  const posts = await getBlogPosts()

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
