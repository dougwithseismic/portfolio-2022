/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef } from 'react'
import { Layout } from '@components/Layout'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay, FreeMode } from 'swiper'
import Typewriter from 'typewriter-effect'
import { ClientBlock } from '@components/ClientBlock'
import { Instagram, Facebook, Twitter } from '@components/Icons'
import { Award } from '@components/Award'

export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  useEffect(() => {
    SwiperCore.use([Pagination, Navigation, Autoplay, FreeMode])
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

      <Corners title="Home" />

      {/* <svg className="fixed inset-4">
        <path d="M25,2 L2,2 L2,25" fill="none" stroke="white" strokeWidth="3" />
        <path
          d="M2,75 L2,98 L25,98"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M75,98 L98,98 L98,75"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M98,25 L98,2 L75,2"
          fill="none"
          stroke="white"
          strokeWidth="3"
        />
      </svg> */}

      <section id="hero" className="mt-32">
        <div className="container z-20 flex">
          <div className="hero px-4 ">
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
                      'Data Heads',
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
            <div className="text-2xl max-w-3xl py-16">
              {/* <div className="count flex gap-4">
                <div className="number">1</div>
                <div className="title text-sm">Introduction</div>
              </div> */}
              <p className="indent-32">
                Meet Seismic. A small but mighty team building killer marketing
                campaigns and B2C microsites for digital-savvy{' '}
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

      <section id="video" className=" text-white">
        <div className="container px-8">
          <div className="video__box relative my-8 md:my-16">
            <video autoPlay playsInline preload="auto" muted loop className="">
              <source
                src="https://www.datocms-assets.com/62105/1643234460-uploadme.mov"
                type="video/mp4"
              />
            </video>

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
        </div>
      </section>

      <section id="awards">
        <div className="container px-8">
          <div className="awards flex flex-col justify-between md:flex-row md:gap-16">
            <h2>Awards & Mentions</h2>
            <div className="award-list grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {AWARDS.map(({ title, collaborators }, index) => (
                <Award
                  key={index}
                  title={title}
                  collaborators={collaborators}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="introduction" className=" py-16 my-64">
        <div className="container px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <h2 className="text-6xl m-0 md:text-jumbo translate-x-2 z-10">
              We're headed where you need to be.
            </h2>
            <div className="rightContent text-2xl max-w-2xl">
              <p className="">
                There's digital, and then there's{' '}
                <span className="text-brightOrange">digital</span>. There are
                agencies, and then there's{' '}
                <span className="text-brightOrange">Seismic</span>.
              </p>
              <p>We're building killer sites, stores and brands .</p>
            </div>
          </div>
          <p className="text-2xl max-w-2xl mt-8 md:p-4 text-faintGrey">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            nemo itaque est, impedit distinctio velit quos dolorum ex?
          </p>
        </div>
      </section>

      <section id="case-studies">
        <div className="container overflow-visible">
          <h2 className="pl-8">Case Studies</h2>
          <div className="swiperImageCaro overflow-visible">
            <Swiper
              spaceBetween={16}
              breakpoints={{
                320: {
                  slidesPerView: 1.15,
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
              onSlideChange={({ activeIndex }) =>
                setActiveSlide(activeIndex + 1)
              }
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
          </div>
        </div>
      </section>

      <section>
        <div className="container p-8">
          <div className="introContent flex flex-col md:flex-row items-center gap-16 py-16 my-32">
            <h2 className="text-6xl m-0 md:text-jumbo translate-x-2 z-10">
              Digital Native. <span className="text-brightOrange">Check.</span>
            </h2>
            <div className="rightContent flex flex-col gap-8">
              <p className="text-2xl max-w-2xl m-0">
                Reels. Snapchat. Facebook. Instagram. TikTok. TikTok. Tiktok.
                That's the sound of now ― Come join us.
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
      <section id="imageReel" className="mt-32">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            600: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
          autoplay={{
            enabled: true,
          }}
          pagination={{
            enabled: true,
            type: 'bullets',
          }}
          loop={true}
        >
          {CARDS.map(({ title, content, background }, i) => (
            <SwiperSlide key={i}>
              <figure className="relative w-full h-96 min-h-96">
                <Image
                  alt={title}
                  src={`/${i + 1}.jpg`}
                  layout="fill"
                  objectFit="cover"
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
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

const Corners = ({ title = 'Home' }) => (
  <div id="corners" className="fixed inset-4 pointer-events-none">
    <div
      id="tl__corner"
      className="absolute border-l-2 border-t-2 w-4 h-4 border-white"
    />
    <div
      id="tr__corner"
      className="absolute border-r-2 border-t-2 right-0 w-8 h-4 border-white"
    />
    <div
      id="bl__corner"
      className="absolute border-l-2 border-b-2 bottom-0 w-4 h-8 border-white"
    />
    <div
      id="br__corner"
      className="absolute border-r-2 border-b-2 right-0 bottom-0 w-4 h-8 border-white"
    >
      <div className="liveTag absolute bottom-2 right-4 w-32">
        <div className="liveTag flex justify-end gap-2 items-center">
          <motion.div
            className="liveRound rounded-full h-4 w-4 bg-brightOrange stroke-brightOrange"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
              backgroundColor: '#FF2000',
              transition: {
                repeat: Infinity,
                duration: 0.4,
                ease: 'easeInOut',
              },
            }}
          />
          <strong>LIVE</strong>
        </div>
      </div>
    </div>
  </div>
)

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
    background: '/placeholder_1.png',
  },

  {
    title:
      'Recruiting Huel-igans for the first time in over a decade: The first step to a new era of music',
    description: 'This is a card',
    background: '/placeholder_3.png',
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

const AWARDS = [
  {
    title: `MOST EFFECTIVE CROSS-CHANNEL CAMPAIGN`,
    collaborators: `vouchercloud × NOW TV
    `,
  },
  {
    title: `MOST CREATIVE PERFORMANCE CAMPAIGN`,
    collaborators: `vouchercloud × TOPMAN
    `,
  },
]
