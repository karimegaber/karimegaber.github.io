"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Star, TrendingUp, Building2 } from "lucide-react"

interface StatItem {
  icon: React.ReactNode
  value: string
  numericTarget?: number
  prefix?: string
  suffix?: string
  label: string
  description: string
}

const stats: StatItem[] = [
  {
    icon: <Users size={20} />,
    value: "+1.1M",
    numericTarget: 11,
    suffix: "M",
    prefix: "+1.",
    label: "Users Reached",
    description: "Scaled the Araby AI platform to a massive user base",
  },
  {
    icon: <Star size={20} />,
    value: "2.8 → 4.0",
    numericTarget: 4.0,
    suffix: "",
    label: "Star Rating",
    description: "Boosted app ratings through codebase restructuring",
  },
  {
    icon: <TrendingUp size={20} />,
    value: "Monetization Expansion",
    label: "Revenue Impact",
    description: "Built subscription models & IAP to unlock new revenue channels",
  },
  {
    icon: <Building2 size={20} />,
    value: "300K+",
    numericTarget: 300,
    suffix: "K+",
    label: "Gov Users",
    description: "Engineered government-grade AI solutions",
  },

]

function AnimatedCounter({ target, suffix, prefix, label }: {
  target: number
  suffix: string
  prefix?: string
  label: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!inView) return

    // Special handling for "Star Rating"
    if (label === "Star Rating") {
      let frame = 0
      const totalFrames = 40
      const start = 2.8
      const end = 4.0
      const timer = setInterval(() => {
        frame++
        const progress = frame / totalFrames
        const current = start + (end - start) * progress
        setCount(parseFloat(current.toFixed(1)))
        if (frame >= totalFrames) {
          clearInterval(timer)
          setCount(end)
        }
      }, 30)
      return () => clearInterval(timer)
    }

    let frame = 0
    const totalFrames = 50
    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (frame >= totalFrames) {
        clearInterval(timer)
        setCount(target)
      }
    }, 25)
    return () => clearInterval(timer)
  }, [inView, target, label])

  if (label === "Star Rating") {
    return (
      <span ref={ref} className="tabular-nums">
        {"2.8 → "}{count.toFixed(1)}
      </span>
    )
  }

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}

export function PowerStats() {
  return (
    <section id="stats" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
            Impact in Numbers
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            MY HIGHLIGHTS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-blue-500/30 hover:bg-slate-900/80"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-blue-400 transition-colors group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                  {stat.icon}
                </div>
                <div className="mb-1 text-2xl font-bold text-white lg:text-xl xl:text-2xl">
                  {stat.numericTarget !== undefined ? (
                    <AnimatedCounter
                      target={stat.numericTarget}
                      suffix={stat.suffix || ""}
                      prefix={stat.prefix}
                      label={stat.label}
                    />
                  ) : (
                    <span className="text-lg leading-tight">{stat.value}</span>
                  )}
                </div>
                <div className="mb-2 font-mono text-xs font-medium uppercase tracking-wider text-blue-400">
                  {stat.label}
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
