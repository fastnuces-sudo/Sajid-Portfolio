'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Award, Target, Zap } from 'lucide-react'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timeline = [
    {
      year: '2025 - Present',
      title: 'BS Computer Science',
      company: 'FAST NUCES',
      description: 'Currently pursuing Bachelor\'s in Computer Science at one of Pakistan\'s top universities. Focusing on web development and problem-solving.',
    },
    {
      year: '2022 - Present',
      title: 'Web Developer',
      company: 'Freelance',
      description: 'Building web applications and solving creative problems for clients. Specializing in modern web technologies.',
    },
    {
      year: '2021',
      title: 'Started Web Development Journey',
      company: 'Self Learning',
      description: 'Began learning web development with a passion for creating innovative digital solutions.',
    },
  ]

  const stats = [
    { icon: Calendar, value: '2+', label: 'Years Experience' },
    { icon: Award, value: '2+', label: 'Projects Completed' },
    { icon: Target, value: 'BS CS', label: 'Currently Studying' },
    { icon: Zap, value: '2026', label: 'Graduation Year' },
  ]

  return (
    <section id="about" className="relative py-32 overflow-hidden">
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
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Computer Science student at FAST NUCES with a passion for creative web development
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-6 text-center card-3d"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-display font-bold text-center mb-12 text-white">
            My Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full neon-glow z-10" />

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 card-3d"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-cyan-400 font-bold mb-2">{item.year}</div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <div className="text-purple-400 mb-3">{item.company}</div>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                </div>

                {/* Empty Space */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
