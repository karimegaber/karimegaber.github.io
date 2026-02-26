"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BlogPost } from "@/lib/blogs"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/blogs/${post.slug}`} className="group block h-full">
            <div className="glass h-full rounded-xl border border-white/10 p-6 transition-all duration-300 hover:border-blue-400/50 hover:bg-white/5">
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="mb-3 text-xl font-bold text-slate-100 transition-colors group-hover:text-blue-400">
                {post.title}
              </h2>

              <p className="mb-6 text-sm text-slate-400 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <span className="flex items-center gap-1 text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
                  Read <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
