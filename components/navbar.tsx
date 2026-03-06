"use client"

import { useState, useEffect, MouseEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { label: "Stats", href: "/#stats", trackingEvent: "nav_stats_clicks" },
  { label: "Skills", href: "/#skills", trackingEvent: "nav_skills_clicks" },
  { label: "Projects", href: "/#projects", trackingEvent: "nav_projects_clicks" },
  { label: "Experience", href: "/#timeline", trackingEvent: "nav_experience_clicks" },
  { label: "Contact", href: "/#contact", trackingEvent: "nav_contact_clicks" },
  { label: "Blogs", href: "/blogs", trackingEvent: "nav_blogs_clicks" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string, trackingEvent?: string) => {
    setMobileOpen(false)

    if (trackingEvent) {
      trackEvent(trackingEvent);
    }

    // Check if it's a hash link
    if (href.includes('#')) {
      const hash = href.split('#')[1]
      // If we're on the homepage, scroll smoothly
      if (pathname === '/') {
        e.preventDefault()
        const element = document.getElementById(hash)
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
      // If we're not on the homepage, let the Link handle navigation to /#hash
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <span className="font-mono text-sm font-bold tracking-widest text-slate-900 dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">KARIM</span> GABER
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-colors hover:text-blue-600 dark:text-blue-400"
            >
              {link.label}
            </Link>
          ))}

          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong mt-3 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="rounded-md px-3 py-2.5 font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-colors hover:bg-blue-500/10 hover:text-blue-600 dark:text-blue-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
