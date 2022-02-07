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

  const seoTitle = `${title} | For Brands That Get It`

  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: .5 }  },
    exit: { opacity: 0, transition: { duration: .5 } },
  }

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
        className="flex flex-col justify-between"
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
      >
        <Header />
        <ScrollProgress />

        <main id="main" className="mb-auto mt-[96px]">
          {children}
        </main>
        <Footer />
      </motion.div>
    </>
  )
}
