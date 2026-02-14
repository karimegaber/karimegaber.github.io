"use client"

import { motion } from "framer-motion"
import { Boxes, ToggleRight, Cloud, Code2, GitBranch, Users } from "lucide-react"

const categories = [
  {
    title: "Core & Architecture",
    icon: <Boxes size={22} />,
    description: "Building robust, scalable mobile foundations",
    skills: ["Flutter", "Dart", "OOP", "Clean Architecture", "MVVM", "SOLID Principles", "Design Patterns", "Clean Code", "Data Structures", "Algorithms"],
    color: "blue",
  },
  {
    title: "State Management",
    icon: <ToggleRight size={22} />,
    description: "Managing complex application state with precision",
    skills: ["BLoC / Cubit", "Riverpod", "Provider", "GetX"],
    color: "cyan",
  },
  {
    title: "Backend & Cloud",
    icon: <Cloud size={22} />,
    description: "Integrating cloud services and APIs at scale",
    skills: ["RESTful APIs", "WebSockets / GraphQL", "Firebase", "Supabase", "Notifications"],
    color: "emerald",
  },
  {
    title: "UI & Quality",
    icon: <Code2 size={22} />,
    description: "Crafting polished interfaces with reliable quality",
    skills: ["Responsive UI", "Error Handling", "Testing", "Problem Solving"],
    color: "amber",
  },
  {
    title: "DevOps & Workflow",
    icon: <GitBranch size={22} />,
    description: "Streamlining development and delivery pipelines",
    skills: ["Git", "GitHub / GitLab", "CI/CD", "Agile"],
    color: "rose",
  },
  {
    title: "Soft Skills",
    icon: <Users size={22} />,
    description: "Leading teams and driving collaborative outcomes",
    skills: ["Proactive", "Team Player", "Collaborative", "Communicative", "Fast Learner", "Responsible", "Growth-Minded", "Leader", "Adaptive"],
    color: "violet",
  },
]

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string }> = {
  blue: {
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    dot: "bg-blue-400",
  },
  cyan: {
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    dot: "bg-cyan-400",
  },
  emerald: {
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    dot: "bg-emerald-400",
  },
  amber: {
    border: "border-amber-500/20",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    dot: "bg-amber-400",
  },
  rose: {
    border: "border-rose-500/20",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    dot: "bg-rose-400",
  },
  violet: {
    border: "border-violet-500/20",
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    dot: "bg-violet-400",
  },
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
            Technical Expertise
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            MY SUPER POWERS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const c = colorMap[cat.color]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-lg border ${c.border} ${c.bg} ${c.text}`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-500">{cat.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-800/60 px-3 py-1.5 font-mono text-xs text-slate-300"
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
