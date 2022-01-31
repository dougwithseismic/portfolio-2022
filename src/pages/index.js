/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef, useContext } from 'react'
import { Layout } from '@components/Layout'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import Typewriter from 'typewriter-effect'
import { ClientBlock } from '@components/ClientBlock'
import { Instagram, Facebook, Twitter } from '@components/Icons'
import { Award } from '@components/Award'
import { Formik } from 'formik'
import { SignupForm } from '@components/ContactForm'
import { Corners } from '@components/Corners'
import { useWindowSize } from '@hooks/useWindowSize'
import { useScrollProgress } from '@hooks/useScrollProgress'
import { ScrollProgress } from '@components/scrollProgressBar'

export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    SwiperCore.use([Pagination, Navigation, Autoplay])
  }, [])

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  }

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

      <section id="hero" className="md:mt-32">
        <div className="container z-20 flex">
          <div className="hero px-4 ">
            <motion.h1
              animate={{ opacity: 1 }}
              className="text-hero m-0 md:text-jumbo max-w-6xl translate-x-2 z-10"
            >
              Powering{' '}
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
                      'Market Places',
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
              <p className="md:indent-32">
                Trust in twelve years of building killer marketing campaigns,
                tools and microsites for digital-savvy{' '}
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
              <button className="btn btn-primary p-4 mt-4 border-2 border-brightOrange hover:bg-brightOrange max-w-xs w-full align-center justify-center font-bold uppercase font-sans text-2xl">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="video" className=" text-white">
        <div className="container px-8">
          <div className="video__box relative my-8 md:my-16">
            <video autoPlay playsInline preload="auto" muted loop>
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

      <motion.section
        id="introduction"
        className=" py-16 mt-32"
        variants={variants}
        initial="hidden"
        whileInView="show"
      >
        <div className="container px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <h2 className="text-6xl m-0 md:text-jumbo translate-x-2 z-10">
              Start heading where you need to be.
            </h2>
            <div className="rightContent text-2xl max-w-2xl">
              <p className=""></p>
              <p className="md:mt-32">
                I help tackle growth for ambitious B2C brands that need to see
                trackable ROI on their digital investments through{' '}
                <span className="text-brightOrange underline underline-offset-4 cursor-pointer">
                  paid advertising
                </span>
                ,{' '}
                <span className="text-brightOrange underline underline-offset-4 cursor-pointer">
                  web development
                </span>{' '}
                and{' '}
                <span className="text-brightOrange underline underline-offset-4 cursor-pointer">
                  affiliate marketing
                </span>
                .
              </p>
            </div>
          </div>
          <p className="text-2xl max-w-2xl mt-8 md:p-4 text-faintGrey">
            In 2021, I drove{' '}
            <span className="text-brightOrange underline underline-offset-4">
              £1.3 million
            </span>{' '}
            in trackable revenue with a{' '}
            <span className="text-brightOrange underline underline-offset-4">
              17x ROAS for partnering brands.{' '}
            </span>
            Want to do the same?
          </p>
        </div>
      </motion.section>

      <section>
        <div className="container">
          <h3 className="text-center">Vertical Image Wall Here</h3>
        </div>
      </section>

      <motion.section variants={variants} initial="hidden" whileInView="show">
        <div className="container p-8">
          <div className="introContent flex flex-col md:flex-row items-center gap-16 py-16 my-32">
            <h2 className="text-hero m-0 md:text-jumbo translate-x-2 z-10">
              Digital Native. <span className="text-brightOrange">Check.</span>
            </h2>
            <div className="rightContent flex flex-col gap-8">
              <p className="text-2xl max-w-2xl m-0">
                Go where your audience lives and today, that's everywhere.
                Reddit. Discord. Reels. Snapchat. Spotify. Facebook. Instagram.
                TikTok. Native. Search. Display. Video.
              </p>

              <div className="socialIcons flex gap-8">
                <Instagram />
                <Facebook />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <section id="imageReel" className="mt-32">
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
        >
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
            pagination={{
              enabled: true,
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
        </motion.div>
      </section>
      <motion.section variants={variants} initial="hidden" whileInView="show">
        <div className="container p-8">
          <div className="introContent flex flex-col md:flex-row items-center gap-16 py-16 my-32">
            <h2 className="text-hero m-0 md:text-jumbo translate-x-2 z-10 order-1 text-right">
              Data-led Creative-driven{' '}
              <span className="text-brightOrange">Check.</span>
            </h2>
            <div className="rightContent flex flex-col gap-8 order-2">
              <p className="text-2xl max-w-2xl m-0">
                We understand data and analytics in a privacy-first world with
                trackable ROI and incremental growth as standard, even in the
                face of iOS 14 and beyond.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="video"
        className=" text-white"
        variants={variants}
        initial="hidden"
        whileInView="show"
      >
        <div className="container px-8 flex flex-col md:flex-row gap-8">
          <div className="sideContent text-2xl p-4">
            <h2 className="text-hero">What do we do?</h2>
            <div className="grid md:grid-cols-3 my-16 gap-16">
              {SERVICES.map(({ title, description }, i) => (
                <ServiceCard key={i} title={title} description={description} />
              ))}
            </div>
          </div>
          {/* <div className="video__box relative max-w-2xl">
            <video autoPlay playsInline preload="auto" muted loop className="">
              <source
                src="https://www.datocms-assets.com/62105/1643234460-uploadme.mov"
                type="video/mp4"
                className=""
              />
            </video>

            <div className="p absolute bottom-0 right-4 z-30"></div>
          </div> */}
        </div>
      </motion.section>

      <motion.section variants={variants} initial="hidden" whileInView="show">
        <div className="container p-8">
          <div className="introContent flex flex-col md:flex-row items-center gap-16 pt-16 my-32">
            <h2 className="text-hero m-0 md:text-jumbo translate-x-2 z-10">
              Paid-On-Results? <span className="text-brightOrange">Check.</span>
            </h2>
            <div className="rightContent flex flex-col gap-8 text-2xl max-w-2xl ">
              <p className="m-0">
                True Performance Marketing. Low up-front costs. Trackable
                Revenue. We build micro-campaigns, sites and content that's
                relevant, engaging and profitable.
              </p>
              <p>
                In 2021 our portfolio of performance marketing sites pulled in
                over <span className="text-brightOrange">£1.3 million</span> in
                revenue for performance partners, for a{' '}
                <span className="text-brightOrange">17x</span> ROAS.
              </p>

              <div className="socialIcons flex gap-8">
                <Instagram />
                <Facebook />
                <Twitter />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* <section id="case-studies" className="my-32">
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
      </section> */}
      <motion.section
        id="contact"
        className="my-32"
        variants={variants}
        initial="hidden"
        whileInView="show"
      >
        <div className="container flex flex-col items-center p-4">
          <h2 className="text-hero m-0 md:text-jumbo z-10">Get In Touch</h2>
          <p className="p-4 max-w-2xl">
            If you're interested in learning more about partnering with Seismic
            then drop your details below and we'll send you a complete service
            list, pricing structure and first steps.
          </p>
          <SignupForm />
        </div>
      </motion.section>
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

const ServiceCard = ({ title, description }) => {
  return (
    <div className="item">
      <div className="video__box relative max-w-2xl">
        <video autoPlay playsInline preload="auto" muted loop className="">
          <source
            src="https://www.datocms-assets.com/62105/1643234460-uploadme.mov"
            type="video/mp4"
            className=""
          />
        </video>

        <div className="p absolute bottom-0 right-4 z-30"></div>
      </div>
      <h3 className="text-4xl leading-tight">{title}</h3>
      <p className="text-faintGrey">{description}</p>
      <div className="btn btn-primary">Learn More</div>
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
    title: 'Digital Growth Consulting',
    description: `Front to back digital growth. Achieve market fit and scale smartly through automation, content and development. Built-for-you businesses.`,
  },
  {
    title: 'Performance Marketing',
    description: `Modern campaigns for Search, Display, Video, Email, Affiliate, Automation & Feeds, Audience building, Lead generation.`,
  },
  {
    title: 'Tech & Development',
    description: `Marketing Sites. Micro-landers. Web Apps. Martech implmentation. Bespoke internal tools. Email & Web Automation. Scraping. You name it, we do it - Unless we don't.`,
  },
  {
    title: 'Analytics & Data',
    description: `We're native in Data Studio. Google Analytics. Tag Manager. Segment. Analytics. Data. Page speed optimization & conversions.`,
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
