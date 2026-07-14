'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Command, ArrowRight, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react'

const commands = [
  { id: 'home', label: 'Go to Home', icon: '🏠', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { id: 'about', label: 'Go to About', icon: '👤', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'skills', label: 'Go to Skills', icon: '💻', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'projects', label: 'Go to Projects', icon: '🚀', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'services', label: 'Go to Services', icon: '⚡', action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'contact', label: 'Go to Contact', icon: '📧', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'github', label: 'Visit GitHub', icon: Github, action: () => window.open('https://github.com', '_blank') },
  { id: 'linkedin', label: 'Visit LinkedIn', icon: Linkedin, action: () => window.open('https://linkedin.com', '_blank') },
  { id: 'email', label: 'Send Email', icon: Mail, action: () => window.open('mailto:fastnuces4540@gmail.com') },
  { id: 'resume', label: 'Download Resume', icon: Download, action: () => alert('Resume download initiated') },
]

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [filteredCommands, setFilteredCommands] = useState(commands)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    const filtered = commands.filter(cmd =>
      cmd.label.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredCommands(filtered)
  }, [search])

  const executeCommand = (command: typeof commands[0]) => {
    command.action()
    setIsOpen(false)
    setSearch('')
  }

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        data-command-palette
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 glass rounded-2xl px-5 py-3 flex items-center gap-3 text-sm text-gray-300 hover:bg-white/10 transition-colors neon-glow-cyan"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Sparkles className="w-5 h-5 text-cyan-400" />
        <span className="hidden md:inline font-medium">Quick Actions</span>
        <kbd className="hidden md:flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded text-xs border border-white/10">
          <Command className="w-3 h-3" /> K
        </kbd>
      </motion.button>

      {/* Command Palette Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-xl z-50"
            >
              <div className="glass rounded-3xl overflow-hidden neon-glow border border-white/20">
                {/* Search Input */}
                <div className="flex items-center gap-4 p-5 border-b border-white/10 bg-gradient-to-r from-purple-500/5 to-cyan-500/5">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                  <input
                    type="text"
                    placeholder="Quick search commands..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-lg"
                    autoFocus
                  />
                  <kbd className="flex items-center gap-1 px-3 py-1.5 bg-white/10 rounded-lg text-xs text-gray-400 border border-white/10">
                    ESC
                  </kbd>
                </div>

                {/* Commands List */}
                <div className="max-h-96 overflow-y-auto p-3">
                  {filteredCommands.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                      <Sparkles className="w-12 h-12 mx-auto mb-4 text-gray-600" />
                      No commands found
                    </div>
                  ) : (
                    filteredCommands.map((command, index) => (
                      <motion.button
                        key={command.id}
                        onClick={() => executeCommand(command)}
                        className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all text-left group mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all">
                          {typeof command.icon === 'string' ? (
                            <span className="text-2xl">{command.icon}</span>
                          ) : (
                            <command.icon className="w-6 h-6 text-cyan-400" />
                          )}
                        </div>
                        <span className="flex-1 text-white font-medium">{command.label}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </motion.button>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="p-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↑↓</kbd>
                      Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↵</kbd>
                      Select
                    </span>
                  </div>
                  <span>Powered by Portfolio</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
