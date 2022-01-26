/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from 'react'
import { Layout } from '@components/Layout'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import Typewriter from 'typewriter-effect'
import { ClientBlock } from '@components/ClientBlock'
import { Instagram, Facebook, Twitter } from '@components/Icons'

export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  useEffect(() => {
    SwiperCore.use([Pagination, Navigation, Autoplay])
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
      <Lines columns={12} />
      <section id="hero" className="mt-32">
        <div className="container px-4 z-20 flex">
          <div className="hero">
            <motion.h1
              animate={{ opacity: 1 }}
              className="text-6xl m-0 md:text-jumbo max-w-6xl translate-x-2 z-10"
            >
              [EM]Powering{' '}
              <div className="text-brightOrange">
                <Typewriter
                  options={{
                    strings: [
                      'Brands',
                      'Artists',
                      'Events',
                      'Startups',
                      'DTC Stores',
                      'Marketplaces',
                      'Publishers',
                      'Game Studios',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>{' '}
              That get it.
            </motion.h1>
            <div className="text-2xl max-w-3xl p-16">
              {/* <div className="count flex gap-4">
                <div className="number">1</div>
                <div className="title text-sm">Introduction</div>
              </div> */}
              <p className="indent-32">
                Meet Seismic. A small but mighty team building killer
                marketing campaigns and B2C sites for digital-savvy{' '}
                <span className="text-brightOrange underline underline-offset-4 cursor-pointer`">
                  artists
                </span>
                ,{' '}
                <span className="text-brightOrange underline underline-offset-4 cursor-pointer">
                  brands
                </span>
                ,{' '}
                <span className="text-brightOrange underline underline-offset-4 cursor-pointer">
                  events
                </span>
                ,{' '}
                <span className="text-brightOrange underline underline-offset-4 cursor-pointer">
                  studios
                </span>{' '}
                and{' '}
                <span className="text-brightOrange underline underline-offset-4 cursor-pointer">
                  startups
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className=" text-white mb-32">
        <div className="container px-8">
          <div className="video__box relative my-16">
            <video autoPlay playsinline preload="auto" muted loop className="">
              <source
                src="https://www.datocms-assets.com/57452/1639681300-showreel-looper-large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="p absolute bottom-4 left-4 z-30">
              WITHSEISMIC 2021 Showreel
            </div>
            <div className="p absolute bottom-0 right-4 z-30">
              <Image
                src="/ws_white.png"
                alt="WITHSEISMIC logo"
                height={48}
                width={128}
                objectFit="contain"
              />
            </div>
          </div>

          <div className="introContent flex flex-col md:flex-row items-center gap-16 py-16 my-16">
            <h2 className="text-6xl m-0 md:text-jumbo translate-x-2 z-10">
              We're headed where you need to be.
            </h2>
            <p className="text-2xl max-w-2xl m-0">
              There's digital, and then there's{' '}
              <span className="text-brightOrange">digital</span>. There are
              agencies, and then there's{' '}
              <span className="text-brightOrange">Seismic</span>. Don't let
              anyone tell you differently and definitely don't let anyone make
              you settle for anything less.
            </p>
          </div>

          <h2>Case Studies</h2>
          <Swiper
            spaceBetween={16}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              el: '.swiper-pagination',
              dynamicBullets: true,
              clickable: true,
            }}
            onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex + 1)}
            onSwiper={(swiper) => console.log(swiper)}
            onClick={({ clickedIndex }) => setActiveSlide(clickedIndex + 1)}
          >
            {CARDS.map(({ title, content, background }, i) => (
              <SwiperSlide key={i}>
                <Card
                  dark={true}
                  title={title}
                  content={content}
                  background={background}
                  index={i}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {activeSlide}
        </div>
      </section>

      <section>
        <div className="container p-8">
          <div className="introContent flex flex-col md:flex-row items-center gap-16 py-16 my-16">
            <h2 className="text-6xl m-0 md:text-jumbo translate-x-2 z-10">
              Digital Native. <span className="text-brightOrange">Check.</span>
            </h2>
            <div className="rightContent flex flex-col gap-8">
              <p className="text-2xl max-w-2xl m-0">
                Reels. Snapchat. Facebook. Instagram. TikTok. TikTok. Tiktok.
                That's the sound of you snoozing on your future. Let's fix it.
              </p>
              <div className="socialIcons flex gap-8">
                <Instagram />
                <Facebook />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container"></div>
      </section>
    </Layout>
  )
}

export default Home

const Card = ({ title, background, dark = false, index = 0 }) => {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef()

  useEffect(() => {
    dark
      ? cardRef.current.classList.add('border-[#141414]')
      : cardRef.current.classList.add('border-[white]')
  }, [dark, cardRef])

  return (
    <div
      className="p-8 h-[480px] border-2 rounded-lg relative z-99 cursor-pointer bg-backgroundBlack"
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      ref={cardRef}
    >
      <div className="content h-full flex flex-col justify-between z-10 relative">
        <div className="top">
          <Image src={'/war-gaming.svg'} alt="fuck" height={36} width={108} />
        </div>
        <div className="middle text-2xl leading-snug">{title}</div>
        <div className="lower uppercase">View Campaign</div>
      </div>
      <motion.div
        className="z-0"
        initial={{ opacity: 0 }}
        animate={hovered ? { opacity: 0.5 } : { opacity: 0 }}
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

const ServiceCard = ({ title, description, services }) => {
  return (
    <div className="flex-col gap-8 p-8 ">
      <h2 className="text-4xl m-0 pb-4">{title}</h2>
      <p className=" py-4">{description}</p>
      <ul>
        {/* {services.map((service, i) => (
          <li className="text-sm" key={i}>
            <span className="text-brightOrange">{service}</span>
          </li>
        ))} */}
      </ul>
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

const SERVICES = [
  {
    title: 'Digital',
    description:
      'Dedicated teams of product development specialists centered around founders, hustling on robust software build-outs from concept to launch and growth.',
    services: [
      'Branding',
      'Product Design',
      'Software Engineering',
      'Product Management',
    ],
  },
  {
    title: 'Data',
    description:
      'We dont just build products for others, but for ourselves, too. Lorem',
    services: ['Startup Incubation', 'Sweat Investments', 'Operations Support'],
  },
  {
    title: 'Ventures',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt libero autem numquam quasi enim beatae necessitatibus?',
    services: ['Startup Incubation', 'Sweat Investments', 'Operations Support'],
  },
]
