"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Download, MapPin, Mail, Phone, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/3 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080c1a] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 md:pt-28">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-12 lg:gap-16">

          {/* Left: Profile Image (Desktop View) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden shrink-0 items-center justify-center md:flex"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-blue-400/10 blur-sm" />

            {/* Decorative corner accents */}
            <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-blue-400/50 rounded-tl-sm" />
            <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-blue-400/50 rounded-br-sm" />

            {/* Floating status dots */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 flex h-8 w-8 items-center justify-center rounded-full border border-blue-500/20 bg-slate-900/80 backdrop-blur-sm"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </motion.div>

            <motion.div
              animate={{ y: [3, -5, 3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-5 bottom-16 rounded-full border border-blue-500/15 bg-slate-900/80 px-3 py-1.5 backdrop-blur-sm"
            >
              <span className="font-mono text-[10px] text-blue-400">{'<Flutter />'}</span>
            </motion.div>

            {/* Image container */}
            <div className="relative h-[440px] w-[340px] overflow-hidden rounded-2xl border border-slate-700/60 lg:h-[480px] lg:w-[380px]">
              <Image
                src="/images/karim-profile.png"
                alt="Karim Gaber - Senior Flutter Developer"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 340px, 380px"
              />
              {/* Bottom fade overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080c1a] to-transparent" />

              {/* Scan line effect */}
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(59,130,246,0.015)_4px,rgba(59,130,246,0.015)_5px)]" />
            </div>
          </motion.div>

          {/* Left: Profile Image (Mobile View) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex w-full shrink-0 items-center justify-center md:hidden"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-blue-400/10 blur-sm" />

            {/* Decorative corner accents */}
            <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-blue-400/50 rounded-tl-sm" />
            <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-blue-400/50 rounded-br-sm" />

            {/* Floating status dots */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-6 flex h-7 w-7 items-center justify-center rounded-full border border-blue-500/20 bg-slate-900/80 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </motion.div>

            <motion.div
              animate={{ y: [3, -5, 3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-2 bottom-10 rounded-full border border-blue-500/15 bg-slate-900/80 px-2.5 py-1 backdrop-blur-sm"
            >
              <span className="font-mono text-[10px] text-blue-400">{'<Flutter />'}</span>
            </motion.div>

            {/* Image container */}
            <div className="relative aspect-video w-full max-h-[30vh] overflow-hidden rounded-2xl border border-slate-700/60">
              <Image
                src="/images/karim-profile.png"
                alt="Karim Gaber - Senior Flutter Developer"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 340px"
              />
              {/* Bottom fade overlay */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080c1a] to-transparent" />

              {/* Scan line effect */}
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_4px,rgba(59,130,246,0.015)_4px,rgba(59,130,246,0.015)_5px)]" />
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="flex min-w-0 flex-1 flex-col items-center text-center md:items-start md:text-left">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-2 text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              <span className="text-blue-400">KARIM</span> ESSAM GABER
            </motion.h1>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6 flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 md:px-5 md:py-2"
            >
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-blue-400" />
              </span>
              <span className="font-mono font-medium text-blue-100 text-sm sm:text-base md:text-lg">Senior Flutter Developer</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-2xl text-balance text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Engineering High-Performance Mobile Ecosystems{" "}
              <span className="text-blue-400">for Millions</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              Senior Flutter Developer with 4+ years of experience building
              market-leading AI applications and government-grade platforms.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="mt-4 flex items-center gap-1.5 text-slate-500"
            >
              <MapPin size={14} />
              <span className="font-mono text-xs">Abu Dhabi, UAE</span>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 flex items-center gap-4"
            >
              <a
                href="mailto:dev.karime.gaber@gmail.com"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 text-slate-500 transition-all hover:border-blue-500/30 hover:text-blue-400"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
              <a
                href="tel:+971504626400"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 text-slate-500 transition-all hover:border-blue-500/30 hover:text-blue-400"
                aria-label="Phone Number"
              >
                <Phone size={14} />
              </a>
              <a
                href="https://wa.me/971504626400"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 text-slate-500 transition-all hover:border-blue-500/30 hover:text-blue-400"
                aria-label="WhatsApp"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="http://linkedin.com/in/karimessamgaber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 text-slate-500 transition-all hover:border-blue-500/30 hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-mono text-sm font-medium text-white transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
              >
                View My Top Projects
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="pdf/Karim-Gaber-CV.pdf"
                download
                className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-6 py-3 font-mono text-sm text-slate-300 transition-all hover:border-blue-500/30 hover:bg-slate-800 hover:text-white"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-slate-700 p-1"
        >
          <div className="h-1.5 w-1 rounded-full bg-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
