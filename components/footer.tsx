"use client"

import { Linkedin, Mail, Phone, Heart, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <p className="flex gap-1 font-mono text-xs text-slate-600">
          &copy; {new Date().getFullYear()} KARIM GABER 
        </p>
        <div className="flex items-center gap-2"/>

        <div className="flex items-center gap-4">
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
            <MessageCircle size={14} />
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
        </div>

        <p className="flex items-center gap-1 font-mono text-xs text-slate-600">
          Built with <Heart size={12} className="text-blue-400" /> by{" "}
          <a
            href="http://www.instagram.com/karime.gaber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            KARIM GABER
          </a>
        </p>
      </div>
    </footer>
  )
}
