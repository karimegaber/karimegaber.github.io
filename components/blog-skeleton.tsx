"use client"

import { motion } from "framer-motion"

export function BlogSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="h-64 rounded-xl border border-white/5 bg-slate-200/30 dark:bg-white/5 p-6"
        >
          <div className="mb-4 flex gap-2">
            <div className="h-6 w-20 rounded-full bg-slate-100 dark:bg-slate-700/50" />
            <div className="h-6 w-16 rounded-full bg-slate-100 dark:bg-slate-700/50" />
          </div>
          <div className="mb-4 h-8 w-3/4 rounded-lg bg-slate-100 dark:bg-slate-700/50" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-slate-100 dark:bg-slate-700/30" />
            <div className="h-4 w-full rounded bg-slate-100 dark:bg-slate-700/30" />
            <div className="h-4 w-2/3 rounded bg-slate-100 dark:bg-slate-700/30" />
          </div>
          <div className="mt-8 flex justify-between border-t border-white/5 pt-4">
            <div className="h-4 w-24 rounded bg-slate-100 dark:bg-slate-700/30" />
            <div className="h-4 w-16 rounded bg-slate-100 dark:bg-slate-700/30" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function BlogPostSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-4 w-32 rounded bg-slate-100 dark:bg-slate-700/50" />
      <div className="space-y-4">
        <div className="h-12 w-3/4 rounded-lg bg-slate-100 dark:bg-slate-700/50" />
        <div className="flex gap-4">
          <div className="h-4 w-24 rounded bg-slate-100 dark:bg-slate-700/50" />
          <div className="h-4 w-24 rounded bg-slate-100 dark:bg-slate-700/50" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="h-6 w-20 rounded-full bg-slate-100 dark:bg-slate-700/50" />
        <div className="h-6 w-24 rounded-full bg-slate-100 dark:bg-slate-700/50" />
      </div>
      <div className="space-y-4 pt-8">
        <div className="h-4 w-full rounded bg-slate-100 dark:bg-slate-700/30" />
        <div className="h-4 w-full rounded bg-slate-100 dark:bg-slate-700/30" />
        <div className="h-4 w-5/6 rounded bg-slate-100 dark:bg-slate-700/30" />
        <div className="h-4 w-full rounded bg-slate-100 dark:bg-slate-700/30" />
        <div className="h-4 w-4/5 rounded bg-slate-100 dark:bg-slate-700/30" />
      </div>
    </div>
  )
}
