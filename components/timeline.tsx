"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  GraduationCap,
  Languages,
  MapPin,
  Calendar,
  ChevronRight,
  Building2,
  Sparkles,
} from "lucide-react"

const experiences = [
  {
    period: "02/2025 - Present",
    title: "Senior Flutter Developer",
    company: "MVP Apps",
    link: "https://mvp-apps.com",
    location: "Abu Dhabi, UAE",
    current: true,
    projects: [
      {
        name: "Araby AI",
        bullets: [
          "Scaled Araby AI platform to support over 1.1M+ users.",
          "Integrated high-performance, real-time AI chat and Image, video and audio tools.",
          "Managed to boost app ratings from 2.8 stars to 4.0 stars in Google/Apple stores.",
          "Restructured codebase to follow the best practices.",
          "Developed subscription models and in-app purchases to drive revenue.",
          "Enhanced app size and performance with more than 50%.",
          "Collaborated with cross-functional teams to deliver new features.",
        ],
      },
      {
        name: "Awqaf UAE",
        bullets: [
          "Engineered an AI chatbot for a 300K+ users app to streamline government services.",
          "Built high-precision modules for real-time Lunar tracking.",
          "Optimized UI/UX performance to ensure reliability for government-grade users.",
          "Used Clean Architecture for high-traffic government-grade platforms.",
        ],
      },
    ],
  },
  {
    period: "05/2024 - 01/2025",
    title: "Senior Flutter Developer",
    company: "Dashboards IT",
    link: "",
    location: "Abu Dhabi, UAE",
    current: false,
    projects: [
      {
        name: null,
        bullets: [
          "Led multi-app development from initial concept to successful store deployment.",
          "Integrated Firebase Crashlytics to reduce error rates and improve app stability.",
          "Collaborated in Agile teams to deliver scalable, backend-integrated solutions.",
          "Deployed mobile apps to the stores, ensuring compliance with platform guidelines.",
        ],
      },
    ],
  },
  {
    period: "06/2022 - 05/2023",
    title: "Mobile Applications Developer",
    company: "Freelancer",
    link: "",
    location: "Remote",
    current: false,
    projects: [
      {
        name: null,
        bullets: [
          "Delivered end-to-end Flutter projects for global clients, meeting all KPIs.",
          "Managed full-stack lifecycles including requirements, design, and deployment.",
          "Translated client requirements into technical specs and functional prototypes.",
          "Optimized cross-platform performance for both iOS and Android devices.",
        ],
      },
    ],
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
            Career Path
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Professional Experience
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-blue-500" />
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative w-full overflow-hidden rounded-2xl border transition-all duration-300 ${
                exp.current
                  ? "border-blue-500/30 bg-slate-900/70 glow-blue"
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
              }`}
            >
              {/* Top accent bar */}
              {exp.current && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              )}

              <div className="p-6 sm:p-8 lg:p-10">
                {/* Header row */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                        exp.current
                          ? "border-blue-500/30 bg-blue-500/10"
                          : "border-slate-700 bg-slate-800/80"
                      }`}
                    >
                      <Briefcase
                        size={20}
                        className={exp.current ? "text-blue-400" : "text-slate-400"}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl">{exp.title}</h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="flex items-center gap-1.5 text-sm text-slate-300">
                          <Building2 size={14} className="text-slate-500" />
                          {exp.link ? (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            <span className="text-blue-400">{exp.company}</span>
                          )}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-slate-400">
                          <MapPin size={14} className="text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Date badge */}
                  <div
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs ${
                      exp.current
                        ? "border-blue-500/20 bg-blue-500/5 text-blue-400"
                        : "border-slate-700 bg-slate-800/50 text-slate-400"
                    }`}
                  >
                    <Calendar size={12} />
                    {exp.period}
                    {exp.current && (
                      <span className="relative ml-1 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-gradient-to-r from-slate-800 via-slate-700/50 to-slate-800" />

                {/* Projects / Bullets */}
                <div className="space-y-8">
                  {exp.projects.map((project, pi) => (
                    <div key={pi}>
                      {project.name && (
                        <div className="mb-4 flex items-center gap-2">
                          <h4 className="text-base font-semibold text-white">{project.name}</h4>
                        </div>
                      )}
                      <ul className="space-y-2.5">
                        {project.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            className="flex items-start gap-3"
                          >
                            <ChevronRight
                              size={14}
                              className="mt-1 shrink-0 text-blue-400/70"
                            />
                            <span className="text-sm leading-relaxed text-slate-300">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Languages */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">Education</h3>
            </div>
            <div>
              <p className="text-base font-medium text-white">Bachelor of Computer Science</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
                <Building2 size={13} className="text-slate-500" />
                October 6 University, Giza, Egypt
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 font-mono text-xs text-slate-500">
                <Calendar size={12} className="text-slate-600" />
                10/2018 - 06/2022
              </p>
              <div className="mt-3 inline-flex rounded-lg border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">
                GPA: 3.08 / 4.0 (Very Good)
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                <Languages size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">Languages</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Arabic</span>
                  <span className="rounded-md border border-slate-700 bg-slate-800/60 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                    Native
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">English</span>
                  <span className="rounded-md border border-slate-700 bg-slate-800/60 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                    Upper-Intermediate
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
