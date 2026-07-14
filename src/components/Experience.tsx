'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const experiences = [
  {
    type: 'education',
    icon: GraduationCap,
    title: 'BS Computer Science',
    company: 'FAST NUCES',
    period: '2023 - 2026',
    description: 'Currently pursuing Bachelor\'s in Computer Science at one of Pakistan\'s top universities. Focusing on software development and problem-solving.',
    achievements: [
      'Specializing in Web Development',
      'Learning modern technologies and frameworks',
      'Building practical projects',
    ],
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2022 - Present',
    description: 'Building web applications and providing creative solutions for clients. Developing websites and web applications using modern technologies.',
    achievements: [
      'Developed Library Management System',
      'Created Clothing Business Platform',
      'Solving real-world problems through code',
    ],
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Web Development Journey',
    company: 'Self Learning',
    period: '2021 - Present',
    description: 'Started learning web development with a passion for creating innovative digital solutions. Continuously improving skills and knowledge.',
    achievements: [
      'Mastered HTML, CSS, and JavaScript',
      'Learned React and modern frameworks',
      'Built multiple personal projects',
    ],
  },
]

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
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
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A journey of continuous growth and achievement
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              <motion.div
                className="glass rounded-2xl p-8 card-3d"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      exp.type === 'work' 
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                        : exp.type === 'education'
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-500'
                        : 'bg-gradient-to-br from-orange-500 to-yellow-500'
                    } neon-glow`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <exp.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="text-cyan-400 font-semibold mb-3">{exp.company}</div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
                          {achievement}
                        </div>
                      ))}
                    </div>
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
