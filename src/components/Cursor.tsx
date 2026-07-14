'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number }>>([])
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }]
        if (newTrail.length > 10) newTrail.shift()
        return newTrail
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      {trail.map((point, index) => (
        <motion.div
          key={index}
          className="cursor-trail hidden md:block"
          animate={{
            x: point.x - 4,
            y: point.y - 4,
            opacity: (index + 1) / trail.length * 0.5,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        />
      ))}
    </>
  )
}
