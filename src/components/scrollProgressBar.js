import React from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '@hooks/useWindowSize'
import { useScrollProgress } from '@hooks/useScrollProgress'

export const ScrollProgress = () => {
  const { documentWidth } = useWindowSize()
  const { scrollProgress } = useScrollProgress()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress }}
      viewport={{ once: true }}
      style={{
        width: documentWidth ? documentWidth * scrollProgress : 0,
        height: 6,
        borderRadius: 2,
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
        backgroundColor: '#FF2000',
        margin: '0',
      }}
    />
  )
}
