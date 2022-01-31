import { SiteProvider } from '@context/siteContext'
import '../styles/globals.scss'

import 'swiper/scss'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import analytics from '@utility/initAnalytics'
import { useEffect } from 'react'
import Script from 'next/script'

// Top-level Rendering.
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics.page()
    analytics.track('Test Event')
  }, [])
  return (
    <>
      <SiteProvider>

        <Component {...pageProps} />
      </SiteProvider>
    </>
  )
}

export default MyApp
