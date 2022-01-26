import React, { useContext } from 'react'
import siteSettings from '/siteSettings'
import SiteContext from '@context/siteContext'
import { motion } from 'framer-motion'
import { Facebook, Instagram, LinkedIn, Twitter } from './Icons'
import Image from 'next/image'

export const Footer = () => {
  const { darkModeOptions } = useContext(SiteContext)
  const { setDarkMode } = darkModeOptions

  return (
    <motion.div
      className="py-8 text-white border-t-2 border-t-[#141414] bg"
      //   whileInView={() => setDarkMode(false)}
    >
      <div className="container pt-8">
        <div className="footer__rowOne grid p-8 md:grid-cols-12 min-h-[420px]">
          <div id="footer__logo" className="col-start-1 col-span-5">
            <Image
              src="/ws_white.png"
              alt="WS Logo"
              objectFit="contain"
              width={320}
              height={90}
            />
          </div>
          <div className="group flex flex-col col-span-3">
            <h4 className="links__header text-2xl mb-4">Useful Links</h4>
            <div className="links_list flex flex-col gap-2">
              <div className="hi">Services</div>
              <div className="hi">Consultancy</div>
              <div className="hi">Performance Marketing</div>
              <div className="hi">Get In Touch</div>
            </div>
          </div>
          <div className="group flex flex-col col-span-3">
            <h4 className="links__header text-2xl mb-4">Latest Posts</h4>
            <div className="links_list flex flex-col gap-2">
              <div className="hi">Services</div>
              <div className="hi">Consultancy</div>
              <div className="hi">Performance Marketing</div>
              <div className="hi">Get In Touch</div>
            </div>
          </div>
        </div>
        <div className="footer__rowTwo">
          <div className="lower p-8  flex flex-col md:flex-row justify-between col-span-full gap-4">
            <div className="footer_copyright text-sm text-faintGrey md:order-0">
              <strong>Powering Brands That Get Digital.</strong> &copy; 2022
              Doug Silkstone Digital Consultancy trading as withSeismic.
            </div>
            <div className="social flex gap-8">
              <Instagram />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
