'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const skills = [
  { name: 'HTML/CSS', level: 90, color: '#E34F26' },
  { name: 'JavaScript', level: 85, color: '#F7DF1E' },
  { name: 'React', level: 75, color: '#61DAFB' },
  { name: 'Node.js', level: 70, color: '#339933' },
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
  { name: 'Git', level: 75, color: '#F05032' },
  { name: 'SQL', level: 70, color: '#4479A1' },
  { name: 'REST APIs', level: 75, color: '#00B4D8' },
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="relative py-16 md:py-32 overflow-hidden">
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
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* 3D Skill Galaxy - Hidden on mobile for performance */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center px-4 hidden md:block">
          {/* Central Hub */}
          <motion.div
            className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full glass flex items-center justify-center neon-glow"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="text-xl md:text-2xl font-bold gradient-text">Tech</span>
          </motion.div>

          {/* Skill Orbits */}
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * 2 * Math.PI
            const radius = 120 + (index % 3) * 30
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <motion.div
                key={skill.name}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? {
                  opacity: 1,
                  scale: hoveredSkill === skill.name ? 1.3 : 1,
                  x: hoveredSkill === skill.name ? x * 1.2 : x,
                  y: hoveredSkill === skill.name ? y * 1.2 : y,
                } : {}}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <motion.div
                  className="glass rounded-full p-2 md:p-4 cursor-pointer card-3d"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    borderColor: skill.color,
                    boxShadow: hoveredSkill === skill.name 
                      ? `0 0 30px ${skill.color}50` 
                      : 'none',
                  }}
                >
                  <div className="text-center">
                    <div className="text-sm md:text-2xl font-bold mb-0.5 md:mb-1" style={{ color: skill.color }}>
                      {skill.name}
                    </div>
                    <div className="text-xs text-gray-400">{skill.level}%</div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Animated Rings */}
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute border border-purple-500/20 rounded-full hidden md:block"
              style={{
                width: `${200 + index * 80}px`,
                height: `${200 + index * 80}px`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 20 + index * 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Skill Categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            {
              title: 'Frontend',
              skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS'],
              icon: '🎨',
            },
            {
              title: 'Backend',
              skills: ['Node.js', 'Python', 'SQL', 'REST APIs'],
              icon: '⚙️',
            },
            {
              title: 'Tools',
              skills: ['Git', 'VS Code', 'Postman'],
              icon: '✨',
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-4 md:p-6 card-3d"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl mb-3 md:mb-4">{category.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 md:px-3 py-1 bg-purple-500/20 rounded-full text-xs md:text-sm text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
