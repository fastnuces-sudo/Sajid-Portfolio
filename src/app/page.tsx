'use client'

import { useEffect } from 'react'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Services } from '@/components/Services'
import { Experience } from '@/components/Experience'
import { Certificates } from '@/components/Certificates'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { CommandPalette } from '@/components/CommandPalette'
import { ThemeToggle } from '@/components/ThemeToggle'
import Lenis from '@studio-freight/lenis'

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Keyboard shortcut for command palette
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        const commandPalette = document.querySelector('[data-command-palette]') as HTMLElement
        if (commandPalette) {
          commandPalette.click()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <CommandPalette />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Certificates />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
