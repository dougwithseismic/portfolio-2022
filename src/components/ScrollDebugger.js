import { useWindowSize } from '@hooks/useWindowSize'
import React from 'react'
import { useEffect, useState } from 'react'

export const ScrollDebugger = () => {
  const DEBUGGER = false

  const [scrollIntersection, setScrollIntersection] = useState(undefined)

  useEffect(() => {
    setScrollIntersection(window.scrollY + window.innerHeight / 2)

    const handleScroll = (params) => {
      setScrollIntersection(window.scrollY + window.innerHeight / 2)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (DEBUGGER === false) return <></>
  return (
    <div
      className="scroll-debugger"
      style={{
        position: 'absolute',
        height: 6,
        borderRadius: 2,
        bottom: 0,
        zIndex: 1,
        backgroundColor: '#FF6200',
        margin: '0',
        width: '30vw',
        top: scrollIntersection,
      }}
    ></div>
  )
}
