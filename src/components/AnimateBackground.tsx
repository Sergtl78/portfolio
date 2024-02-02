'use client'

import { MouseEvent, ReactNode } from 'react'

import { motion, useMotionValue } from 'framer-motion'

export default function AnimateBackground({
  children
}: {
  children: ReactNode
}) {
  const cursorSize = 800

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left - cursorSize / 2)
    mouseY.set(clientY - top - cursorSize / 2)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className='max-w-screen relative max-h-screen overflow-hidden'
    >
      {children}
      <motion.div
        style={{
          left: mouseX, //smoothMouse.x,

          top: mouseY //smoothMouse.y,
        }}
        className='pointer-events-none absolute -inset-px h-[800px] w-[800px] rounded-full bg-gradient-radial from-primary/60 to-transparent opacity-20 blur-2xl'
      />
      <motion.div
        initial={{ x: -600, y: -600 }}
        animate={{ x: '100vw', y: '100vh' }}
        transition={{
          ease: 'easeInOut',
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className='pointer-events-none absolute -inset-px h-[600px] w-[600px] rounded-full bg-gradient-radial from-red-500/80 to-transparent opacity-20 blur-3xl'
      />
      <motion.div
        initial={{ x: '0', y: '100%' }}
        animate={{ x: '100%', y: '0' }}
        transition={{
          ease: 'easeInOut',
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className='pointer-events-none absolute -inset-px h-[600px] w-[600px] rounded-full bg-gradient-radial from-emerald-500/80 to-transparent opacity-20 blur-3xl'
      />
    </div>
  )
}
