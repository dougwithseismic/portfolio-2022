import { SiteProvider } from '@context/siteContext'
import '../styles/globals.scss'

import 'swiper/scss'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'react-toastify/dist/ReactToastify.css'

import analytics from '@utility/initAnalytics'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

// Top-level Rendering.
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics.page()
    analytics.track('Test Event')
  }, [])
  return (
    <>
      <SiteProvider>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </SiteProvider>
    </>
  )
}

export default MyApp
