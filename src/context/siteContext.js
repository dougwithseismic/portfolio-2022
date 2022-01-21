import React, { createContext, useState } from 'react'
// Describe SiteContext.
/* 
Features:
  Catch-all for hooks and context
*/

const defaultState = {}

const SiteContext = createContext(defaultState)

const SiteProvider = (props) => {
  const { children } = props
  const [darkMode, setDarkMode] = useState(true)

  const darkVariants = {
    dark: {
      backgroundColor: '#080808',
      color: '#F9F9FD',
    },

    light: {
      backgroundColor: '#FF6200',
      color: '#F9F9FD',
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
