import React, { createContext, useState, useCallback } from 'react'
// Describe SiteContext.
/* 
Features:
  Catch-all for hooks and context
*/

const defaultState = { darkMode: true}

const SiteContext = createContext(defaultState)

const SiteProvider = (props) => {
  const { children } = props
  const [darkMode, setDarkMode] = useState(true)


  const darkVariants = {
    dark: {
      backgroundColor: '#000',
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

        testFunction: () => {
          return 'test'
        },
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export default SiteContext
export { SiteProvider }
