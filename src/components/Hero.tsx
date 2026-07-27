'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const text = "Sajid Mehmood"
  const letters = text.split('')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg">
        <div className="aurora" />
        <div className="grid-bg absolute inset-0" />
      </div>

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Particles */}
      {isMounted && (
        <div className="absolute inset-0 hidden md:block">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -1000],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <motion.p
            className="text-cyan-400 text-sm md:text-lg mb-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Creative Developer
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="overflow-hidden">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block gradient-text"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.p
            className="text-base md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            Computer Science student at FAST NUCES, passionate about solving
            problems and creating innovative web solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 flex-wrap px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.a
              href="#projects"
              className="magnetic px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-semibold text-white neon-glow hover:scale-105 transition-transform text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="magnetic px-6 py-3 md:px-8 md:py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-colors text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/Sajid-CV.pdf"
              download
              className="magnetic px-6 py-3 md:px-8 md:py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-colors flex items-center gap-2 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-4 sm:gap-6 justify-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:fastnuces4540@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-2.5 md:p-3 glass rounded-full hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-gray-400 px-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs md:text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
        </motion.div>
      </motion.div>

      {/* 3D Glass Cube */}
      <motion.div
        className="absolute top-1/4 right-10 w-32 h-32 glass rounded-2xl hidden lg:block"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      />
    </section>
  )
}
