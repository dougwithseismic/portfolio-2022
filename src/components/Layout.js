import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import Head from 'next/head'
import { motion } from 'framer-motion'

import React, { useContext } from 'react'
import SiteContext, { SiteProvider } from '@context/siteContext'
import { ScrollProgress } from './scrollProgressBar'

export const Layout = ({ children, title = 'Give me a title' }) => {
  // This is a HOC component that we can use to wrap everything in a navbar and footer. The classes come from tailwind.
  // Pass layout a title eg <Layout title="This is a title"> to the page a title. TODO: Add metatags etc.

  const { darkModeOptions } = useContext(SiteContext)
  const seoTitle = `${title} | For Brands That Get It`
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle} />
        <meta name="twitter:title" content={seoTitle} />
        <meta property="og:url" content="http://···" />
        <meta name="twitter:url" content="http://···" />
        <meta name="description" content="···" />
        <meta property="og:description" content="···" />
        <meta name="twitter:description" content="···" />
        <meta property="og:image" content="http://···" />
        <meta name="twitter:image" content="http://···" />
      </Head>
      <motion.div
        id="mainContent"
        variants={darkModeOptions.darkVariants}
        className="flex flex-col justify-between"
        initial="dark"
        animate={darkModeOptions.darkMode ? 'dark' : 'light'}
      >
        {/* <Header /> */}
        <ScrollProgress />

        <main id="main" className="mb-auto mt-[96px]">
          {children}
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
