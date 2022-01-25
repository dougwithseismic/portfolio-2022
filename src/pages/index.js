import React, { useState, useEffect, useRef } from 'react'
import { Layout } from '@components/Layout'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import Typewriter from 'typewriter-effect'

export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  useEffect(() => {
    SwiperCore.use([Pagination, Navigation])
  }, [])

  const Lines = ({ columns = 12 }) => (
    <div className="lines absolute w-full h-full pointer-events-none">
      <div className={`container grid grid-cols-${columns} h-full gap-2`}>
        {[...Array(columns)].map((_, i) => (
          <div key={i} className="line col-span-1 bg-cardGrey opacity-[0.02]" />
        ))}
      </div>
    </div>
  )

  return (
    <Layout title="Home">
      {/* <Lines columns={12} /> */}
      <section id="hero" className="min-h-[40vh] mb-24">
        <div className="container px-4 z-20">
          <div className="hero">
            <motion.h1
              animate={{ opacity: 1 }}
              className="mt-32 text-6xl md:text-jumbo max-w-4xl translate-x-2 z-10"
            >
              B2C For{' '}
              <div className="text-brightOrange">
                <Typewriter
                  options={{
                    strings: [
                      'Brands',
                      'Artists',
                      'Events',
                      'Startups',
                      'Ecommerce',
                      'Game Studios',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>{' '}
              That get it.
            </motion.h1>
          </div>

          <div className="div text-faintGrey max-w-2xl">
            <p>
              Headquartered in Prague, Czech Republic, we are a small but mighty
              team — building incredible e-commerce, web development, B2C
              projects for your favorite artists, brands, events, studios and
              startups.
            </p>
          </div>
        </div>
      </section>

      <section id="articles" className="bg-backgroundBlack text-white">
        <div className="container px-4">
          <div className="hero flex items-end max-w-2xl"></div>
          <Swiper
            spaceBetween={16}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
              type: 'bullets',
            }}
            onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex)}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {CARDS.map(({ title, content, background }, i) => (
              <SwiperSlide key={i}>
                <Card
                  dark={true}
                  title={title}
                  content={content}
                  background={background}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Layout>
  )
}

export default Home

const Card = ({ title, background, dark = false }) => {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef()

  useEffect(() => {
    dark
      ? cardRef.current.classList.add('border-[#141414]')
      : cardRef.current.classList.add('border-[white]')
  }, [dark, cardRef])

  //  bg-cardGrey  border-[#141414]
  return (
    <div
      className="p-8 h-[480px] border-2 rounded-lg relative z-99"
      ref={cardRef}
    >
      <div className="content h-full flex flex-col justify-between z-10 relative pointer-events-none">
        <div className="top">
          <Image src={'/war-gaming.svg'} alt="fuck" height={36} width={108} />
        </div>
        <div className="middle text-2xl leading-snug shadow-2xl">{title}</div>
        <div className="lower uppercase">View Campaign</div>
      </div>
      <motion.div
        className="z-0"
        initial={{ opacity: 0 }}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={hovered ? { opacity: .5 } : { opacity: 0 }}
      >
        <Image
          src={background}
          className=""
          objectFit="cover"
          position="absolute"
          alt={title}
          layout="fill"
        />
      </motion.div>
    </div>
  )
}

const CARDS = [
  {
    title:
      ' World of Tanks II Exclusive Launch: What does 1.5 million players in six months look like?',
    description: 'This is a card',
    background: '/world-of-tanks.jpg',
  },
  {
    title:
      'Let It Roll: Inviting 60,0000 music fans to the loudest Drum & Bass festival in the world',
    description: 'This is a card',
    background: '/let-it-roll.jpg',
  },
  {
    title: `Recruiting Huel-igans for a nutritionally complete UGC overhaul - And they're mad for it`,
    description: 'This is a card',
    background: '/huel.jpg',
  },
  {
    title: `Here's another catchy title that's sure to grab your attention. If it doesn't, it's on the house.`,
    description: 'This is a card',
    background: '/world-of-tanks.jpg',
  },

  {
    title: `Here's another catchy title that's sure to grab your attention. If it doesn't, it's on the house.`,
    description: 'This is a card',
    background: '/world-of-tanks.jpg',
  },
  {
    title:
      'Recruiting Huel-igans for the first time in over a decade: The first step to a new era of music',
    description: 'This is a card',
    background: '/world-of-tanks.jpg',
  },
  {
    title: `Here's another catchy title that's sure to grab your attention. If it doesn't, it's on the house.`,
    description: 'This is a card',
    background: '/world-of-tanks.jpg',
  },
  {
    title:
      'Recruiting Huel-igans for the first time in over a decade: The first step to a new era of music',
    description: 'This is a card',
    background: '/world-of-tanks.jpg',
  },
]
