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
      <div className="container grid grid-cols-12">
        <div className="flex col-start-2 col-span-4 gap-8">
          {/* <Facebook /> */}
          <Instagram />
          <Twitter />
          <LinkedIn />
        </div>
      </div>
    </motion.div>
  )
}
