'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    content: 'An exceptional developer who transformed our vision into reality. The attention to detail and innovative solutions exceeded all expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, Digital Co',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    content: 'Working with this developer was a game-changer for our product. The technical expertise and creative problem-solving are unmatched.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Design Director, Creative Agency',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    content: 'Rare to find someone who understands both design and development so deeply. The collaboration produced award-winning results.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Founder, StartupXYZ',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    content: 'Delivered our MVP in record time without compromising quality. A true professional who brings passion to every project.',
    rating: 5,
  },
  {
    name: 'Lisa Thompson',
    role: 'CTO, Enterprise Solutions',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    content: 'Technical excellence combined with outstanding communication. Made complex projects feel manageable and delivered exceptional results.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Director, Innovation Labs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    content: 'Consistently delivers innovative solutions that push boundaries. A valuable asset to any team looking to create cutting-edge products.',
    rating: 5,
  },
]

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
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
            Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `-${position * 100}%`,
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.333%]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <motion.div
                  className="glass rounded-2xl p-8 h-full card-3d"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 neon-glow"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-purple-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setPosition(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                position === index
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 w-8'
                  : 'bg-gray-600'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
