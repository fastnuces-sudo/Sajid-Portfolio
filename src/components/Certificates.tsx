'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink } from 'lucide-react'

const certificates = [
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400',
    credential: '#',
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google',
    date: '2023',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400',
    credential: '#',
  },
  {
    title: 'Meta Frontend Developer',
    issuer: 'Meta',
    date: '2022',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400',
    credential: '#',
  },
  {
    title: 'TensorFlow Developer',
    issuer: 'Google',
    date: '2022',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
    credential: '#',
  },
  {
    title: 'UX Design Professional',
    issuer: 'Google',
    date: '2021',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
    credential: '#',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'freeCodeCamp',
    date: '2020',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
    credential: '#',
  },
]

export function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certificates" className="relative py-32 overflow-hidden">
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
            Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications and credentials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <motion.div
                className="group relative glass rounded-2xl overflow-hidden card-3d"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center neon-glow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="text-cyan-400 mb-1">{cert.issuer}</div>
                  <div className="text-gray-400 text-sm mb-4">{cert.date}</div>

                  <motion.a
                    href={cert.credential}
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
