import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ClientItem = ({ client, i }) => {
  const clientItemRef = useRef()
  const [rollOver, setRollOver] = useState(false)
  const [scrollPoint, setScrollPoint] = useState(0)

  useEffect(() => {
    // Here I want to animate / modify the style of an element when the window scrolls directly over it.
    // I'm grabbing our item, the top of the item, the bottom of the item, and if our window scroll sites in between, we're go for takeofff
    const handleScroll = () => {
      // Get our elements Y position
      const clientItemY =
        clientItemRef.current.getBoundingClientRect().top +
        document.documentElement.scrollTop

      const pointOfImpact = window.scrollY + window.innerHeight / 2
      const upperBound = clientItemY // The top height that the interaction will begin
      const lowerBound = clientItemY + clientItemRef.current.offsetHeight // The lowest height before the interaction is over
      const scrollPoint =
        lowerBound - clientItemRef.current.offsetHeight - window.innerHeight / 2 // This is the center of the items point.

      const isRolledOver =
        upperBound <= pointOfImpact && pointOfImpact <= lowerBound
      setScrollPoint(scrollPoint)
      setRollOver(isRolledOver)
    }

    window.addEventListener('scroll', () => handleScroll())

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.div
      animate={
        rollOver
          ? { opacity: 1, transition: { duration: 0.2 } }
          : { opacity: 0.1, transition: { duration: 0.6 } }
      }
      ref={clientItemRef}
      onClick={() => {
        console.log(scrollPoint)

        window.scrollTo({ top: scrollPoint, behavior: 'smooth' })
      }}
      className="clients__item flex flex-col  md:flex-row md:justify-between uppercase leading-tight py-8 border-b-2 border-b-[#1b1b1b]"
    >
      <motion.div
        animate={
          rollOver
            ? { color: '#FF6200', transition: { duration: 0.3 } }
            : { color: '#F9F9FD' }
        }
        className="name font-sans text-4xl"
      >
        {client.name}
      </motion.div>
      <div className="resource md:text-right flex items-center text-faintGrey">
        {client.resource}
      </div>
    </motion.div>
  )
}

export const ClientBlock = () => (
  <section id="selectedClients" className="my-96 p-8">
    <div className="container grid grid-cols-8 md:grid-cols-12">
      <h2 className="text-6xl font-medium col-start-1 md:col-start-2 mb-16">
        Selected Clients
      </h2>

      <ul
        id="clients__list"
        className="col-start-1 row-start-2 md:row-start-1 md:col-start-6 col-end-13 flex flex-col"
      >
        {CLIENT_LIST.map((client, index, i) => (
          <ClientItem key={index} i={i} client={client} />
        ))}
      </ul>
    </div>
  </section>
)

const CLIENT_LIST = [
  { name: 'Vouchernaut', resource: 'DESIGN, DEVELOPMENT, USER ACQUISITION' },
  { name: 'Photologo', resource: 'USER ACQUISITION,  DIGITAL GROWTH.' },
  { name: 'Rightcharge', resource: 'USER ACQUISITION, R&D' },
  { name: 'Punchlab', resource: 'USER ACQUISITION' },
  { name: 'Motley Fool', resource: 'R&D MARTECH, ANALYTICS' },
  {
    name: 'Soundsauce Mastering',
    resource: 'USER ACQUISITION',
  },
  {
    name: 'The Donkey Sanctuary',
    resource: 'ANALYTICS',
  },
  { name: 'The Collective', resource: 'ANALYTICS, USER ACQUISITION' },
  { name: 'Reach Robotics', resource: 'ECOMMERCE, GO-TO-MARKET STRATEGY, CRO' },
  {
    name: 'The Beeswax Wrap Co',
    resource: 'ECOMMERCE, CRO, DEVELOPMENT',
  },
  { name: 'Elephantbox', resource: 'ECOMMERCE, CRO' },
  { name: 'Vouchercloud', resource: 'USER ACQUISITION, R&D' },
]
