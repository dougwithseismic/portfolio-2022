import React, { useContext } from 'react'
import siteSettings from '/siteSettings'
import SiteContext from '@context/siteContext'
import { motion } from 'framer-motion'
import { Facebook, Instagram, LinkedIn, Twitter } from './Icons'

export const Footer = () => {
  const { darkModeOptions } = useContext(SiteContext)
  const { setDarkMode } = darkModeOptions

  return (
    <motion.div
      className="py-8"
      //   whileInView={() => setDarkMode(false)}
    >

    </motion.div>
  )
}
