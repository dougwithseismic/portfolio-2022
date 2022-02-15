import { useScrollProgress } from '@hooks/useScrollProgress'
import Script from 'next/script'
import React, { createContext, useState, useCallback } from 'react'
// Describe SiteContext.
/* 
Features:
  Catch-all for hooks and context
*/

const defaultState = { darkMode: true }

const SiteContext = createContext(defaultState)

const SiteProvider = (props) => {
  const { children } = props
  const [darkMode, setDarkMode] = useState(true)
  const [klaviyo, setKlaviyo] = useState({ loaded: false, learnq: {} })

  const darkVariants = {
    dark: {
      backgroundColor: '#000000',
      color: '#F9F9FD',
    },

    light: {
      backgroundColor: '#FFFFFF',
      color: '#080808',
    },
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <SiteContext.Provider
      value={{
        darkModeOptions: {
          darkMode,
          setDarkMode,
          toggleDarkMode,
          darkVariants,
        },
        useScrollProgress,
        klaviyo,
        testFunction: () => {
          return 'test'
        },
      }}
    >
      {/* <Script
        id="klaviyo"
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=JnaxYj"
        onLoad={() => {
          setKlaviyo({ loaded: true, learnq: window._learnq })
          console.log('Klaviyo Loaded')
        }}
      /> */}
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext
export { SiteProvider }
