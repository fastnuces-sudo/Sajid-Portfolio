'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Play } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    title: 'Library Management System',
    description: 'A comprehensive library management system for tracking books, managing memberships, and handling checkouts/returns efficiently',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800',
    tech: ['HTML/CSS', 'JavaScript', 'SQL'],
    category: 'Web App',
    live: '#',
    github: '#',
  },
  {
    title: 'Clothing Business Platform',
    description: 'A clothing website for small business advertisement with buy/sell functionality, product listings, and user accounts',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'E-Commerce',
    live: '#',
    github: '#',
  },
]

const categories = ['All', 'Web App', 'E-Commerce']

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 animated-bg">
        <div className="aurora" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            A showcase of my best work and creative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold transition-all text-sm md:text-base ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white neon-glow'
                  : 'glass text-gray-300 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="glass rounded-2xl overflow-hidden card-3d"
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <motion.a
                        href={project.live}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-semibold text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="flex items-center justify-center gap-2 px-4 py-2 glass rounded-lg text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <div className="text-cyan-400 text-xs md:text-sm mb-2">{project.category}</div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-purple-500/20 rounded-full text-xs md:text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
