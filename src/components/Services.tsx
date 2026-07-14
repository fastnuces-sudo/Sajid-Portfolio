'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Smartphone, Palette, Server, Zap, Globe } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building modern, responsive, and performant web applications using cutting-edge technologies',
    features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Progressive Web Apps'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Creating native and cross-platform mobile applications with seamless user experiences',
    features: ['React Native', 'iOS & Android', 'Push Notifications', 'Offline Support'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful interfaces that users love to interact with',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust and scalable server-side solutions with modern architectures',
    features: ['Node.js', 'Python', 'GraphQL', 'REST APIs'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for maximum speed, efficiency, and user experience',
    features: ['Code Splitting', 'Lazy Loading', 'Caching', 'CDN Integration'],
  },
  {
    icon: Globe,
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications on cloud infrastructure with CI/CD pipelines',
    features: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
]

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="relative py-32 overflow-hidden">
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
            Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <motion.div
                className="glass rounded-2xl p-8 h-full card-3d group"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-6 neon-glow"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
