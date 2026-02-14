"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  platforms: string
  span: "large" | "small"
  androidLink?: string
  iosLink?: string
  link?: string
}

const projects: Project[] = [
  {
    title: "Araby AI",
    description:
      "Bilingual AI productivity suite with real-time voice chat, image/video generation, and revenue-driving subscription models serving +1.1M users.",
    image: "/images/projects/araby-ai.png",
    tags: ["FLUTTER", "AI", "VOICE", "REVENUE"],
    platforms: "Android | iOS",
    span: "large",
    androidLink: "https://play.google.com/store/apps/details?id=com.araby.ai",
    iosLink: "https://apps.apple.com/in/app/araby-ai-ذكاء-اصطناعي-عربي/id6447341656",
    link: "https://araby.ai",
  },
  {
    title: "Awqaf UAE",
    description:
      "Government-grade security, high-precision Lunar tracking, and 100% reliability for 300K+ users across 100+ automated endowment services.",
    image: "/images/projects/awqaf-uae-ing.png",
    tags: ["GOVERNMENT", "SECURITY", "LUNAR TRACKING"],
    platforms: "Android | iOS",
    span: "small",
    androidLink: "https://play.google.com/store/apps/details?id=com.awqafuae.android",
    iosLink: "https://apps.apple.com/ae/app/awqaf-uae/id1499083710",
    link: "https://www.awqaf.gov.ae",
  },
  {
    title: "SoulSync",
    description:
      "Pioneering IoT ecosystem for couples' smart rings with real-time heartbeat sync, haptic signaling, and an AI Love Coach for wellness tracking.",
    image: "/images/projects/soulsync.png",
    tags: ["IOT", "BLE", "AI", "HEALTH"],
    platforms: "Mobile",
    span: "small",
    androidLink: "",
    iosLink: "",
    link: "",
  },
  {
    title: "Moodees",
    description:
      "Integrated Provider and Customer apps for beauty services with reservations, payment processing, wallet, gift cards, and location-based features.",
    image: "/images/projects/moodees.png",
    tags: ["FLUTTER", "PAYMENTS", "GEOLOCATION"],
    platforms: "Android | iOS",
    span: "large",
    androidLink: "https://play.google.com/store/apps/details?id=com.moodees.ae",
    iosLink: "https://apps.apple.com/ae/app/moodees/id6476877836",
    link: "https://moodees.ae/",
  },
  {
    title: "Martini",
    description:
      "Car Wash app offering seamless scheduling, wash customization, and real-time service progress tracking for professional car care.",
    image: "/images/projects/martini.png",
    tags: ["FLUTTER", "BOOKING", "TRACKING"],
    platforms: "Android | iOS",
    span: "large",
    androidLink: "https://play.google.com/store/apps/details?id=com.martinicarwash.ae",
    iosLink: "https://apps.apple.com/ae/app/martini-car-wash/id6469454928",
    link: "https://martinicarwash.com/",
  },
  {
    title: "Findley",
    description:
      "Comprehensive platform for buying and selling luxury real estate, cars, electronics, and more with advanced search and filtering.",
    image: "/images/projects/findley.png",
    tags: ["FLUTTER", "E-COMMERCE", "REAL ESTATE"],
    platforms: "Android | iOS",
    span: "small",
    androidLink: "https://play.google.com/store/apps/details?id=com.findley.findley",
    iosLink: "https://apps.apple.com/ae/app/findley-ads/id6736616357",
    link: "https://www.findleyapp.com/",
  },
]

const AndroidIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M17.523 15.3414c.551 0 .998-.447.998-.998 0-.551-.447-.998-.998-.998-.551 0-.998.447-.998.998 0 .551.447.998.998.998zm-10.296 0c.551 0 .998-.447.998-.998 0-.551-.447-.998-.998-.998-.551 0-.998.447-.998.998 0 .551.447.998.998.998zm11.09-5.856l1.467-2.541a.249.249 0 00-.079-.328.249.249 0 00-.328.079L17.91 9.236c-1.268-.577-2.71-.907-4.26-.907-1.55 0-2.992.33-4.26.907L7.923 6.695a.249.249 0 00-.328-.079.249.249 0 00-.079.328l1.467 2.541c-3.37 1.82-5.645 5.22-5.833 9.191h17.5c-.188-3.971-2.463-7.371-5.833-9.191z" />
  </svg>
)

const AppleIcon = () => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.64 3.98-1.64 1.29.05 2.55.57 3.43 1.48-3.09 1.83-2.57 5.54.34 6.69-.67 1.98-1.6 3.98-2.83 5.7zm-1.9-10.9c.4-2.46 2.07-4.5 4.13-4.55.41 2.5-2.25 4.74-4.13 4.55z" />
  </svg>
)

function ProjectCard({ project, index, isAlone }: { project: Project; index: number; isAlone?: boolean }) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl ${
        project.span === "large" ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      {/* Image */}
      <div className={`relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] ${
        project.span === "small" && !isAlone ? "md:aspect-auto md:h-full" : ""
      }`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={
            project.span === "large"
              ? "(max-width: 768px) 100vw, 66vw"
              : "(max-width: 768px) 100vw, 33vw"
          }
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

        {/* Main Link Overlay */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label={`View ${project.title}`}
          />
        )}

        {/* Title + Description at the bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 px-5 pb-5">
          {/* Tags overlaying the image */}
          <div className="mb-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-blue-400/40 bg-blue-500/15 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-blue-300 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-1.5 flex items-center justify-between gap-3">
            <h3 className="min-w-0 truncate text-lg font-bold text-white sm:text-xl">{project.title}</h3>

            {/* App Links */}
            <div className="pointer-events-auto relative z-20 flex shrink-0 items-center gap-2">
              {project.androidLink && (
                <a
                  href={project.androidLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-2 py-1.5 text-[10px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:text-xs"
                >
                  <AndroidIcon />
                  Android App
                </a>
              )}
              {project.iosLink && (
                <a
                  href={project.iosLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-2 py-1.5 text-[10px] font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:text-xs"
                >
                  <AppleIcon />
                  iOS App
                </a>
              )}
            </div>
          </div>
          <p className="line-clamp-2 max-w-lg text-sm leading-relaxed text-slate-300/80">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  // Split into rows of alternating large/small pattern
  const row1 = projects.slice(0, 2) // large + small
  const row2 = projects.slice(2, 4) // small + large
  const row3 = projects.slice(4, 6) // large + small
  const row4 = projects.slice(6, 8) // small + large
  const row5 = projects.slice(8, 9) // remaining

  const rows = [row1, row2, row3, row4, row5].filter((r) => r.length > 0)

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            MY TOP PROJECTS
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-blue-500" />
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {rows.map((row, rowIndex) =>
            row.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={rowIndex * 2 + i}
                isAlone={row.length === 1}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
