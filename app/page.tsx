"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { PowerStats } from "@/components/power-stats"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Timeline } from "@/components/timeline"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { trackEvent } from "@/lib/analytics"

export default function Home() {
  useEffect(() => {
    trackEvent('visits');
  }, []);

  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <PowerStats />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  )
}
