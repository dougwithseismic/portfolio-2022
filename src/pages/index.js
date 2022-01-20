/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '@hooks/useWindowSize'
import { ClientBlock } from '@components/ClientBlock'
import Image from 'next/image'
import { ScrollDebugger } from '@components/ScrollDebugger'

// TODO: Ableton. Figma. Framer. VS Code. React. Nextjs. Vercel. JavaScript. Netlify. Github. Davinci. After Effects. Illustrator. Sheets. Node. Express. Postgres. Supabase.

const HomePage = () => {
  const { documentWidth } = useWindowSize()
  const [scrollProgress, setScrollProgress] = useState(0.001)

  useEffect(() => {
    const clamp = (value, min, max) => Math.max(Math.min(value, max), min) // We don't want to be

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight
      const ratio = window.scrollY / (totalHeight - window.innerHeight) // Because of the way the scrollY position is calculated, the ratio never reaches 0 or one unless we subtract the window height from the total height.
      const clamped = clamp(ratio, 0.001, 1) // We don't want to return a zero value because we'll end up passing NaN into the width and that won't be class.
      setScrollProgress(clamped)
    }

    window.addEventListener('scroll', (e) => handleScroll(e))

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <ScrollDebugger />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress }}
        style={{
          width: documentWidth ? documentWidth * scrollProgress : 0,
          height: 6,
          borderRadius: 2,
          position: 'fixed',
          bottom: 0,
          zIndex: 1,
          backgroundColor: '#FF6200',
          margin: '0',
        }}
      />

      {/* Hero */}
      <section id="hero" className="h-screen flex flex-col container">
        <div className="flex flex-col justify-center items-center h-full">
          <motion.h1
            className="hero__title text-jumbo justify-center items-center"
            initial={{ color: '#FFFFFF' }}
            whileInView={{ color: '#FF6200', transition: { duration: 0.7 } }}
          >
            Hi.
          </motion.h1>
        </div>
        <div className="hero__lowerCta self-end">→ find out more</div>
      </section>

      {/* Intro */}
      <section id="intro" className="my-96 p-8">
        <div className="container grid grid-cols-6 md:grid-cols-12 md:gap-4">
          <h2 className="text-6xl font-medium col-start-2 mb-16">Intro</h2>
          <div className="placeholder row-start-2 col-span-full h-32 relative md:col-span-3 mb-8 md:mb-0">
            <Image
              src={'/placeholder.png'}
              alt={'placeholder'}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="intro__text row-start-3 col-span-full md:row-start-2 md:col-start-6 md:col-span-7 leading-[190%] text-lg md:text-2xl relative">
            <p>
              Since 2014 I've been orchestrating award-winning user acquisition
              campaigns for ambitious B2C brands looking to design, develop and
              deliver clever, scrappy work at scale.
            </p>
            <p>
              I sit between{' '}
              <motion.span
                initial={{ color: '#FFFFFF' }}
                whileInView={{
                  color: '#FF6200',
                  transition: { duration: 0.7 },
                }}
              >
                marketing, product
              </motion.span>{' '}
              and{' '}
              <motion.span
                initial={{ color: '#FFFFFF' }}
                whileInView={{
                  color: '#FF6200',
                  transition: { duration: 0.7 },
                }}
              >
                tech
              </motion.span>{' '}
              to sketch out, build, compose, automate, destroy and reinvent
              modern digital experiences through design, audio, video, code and
              growth.
            </p>

            <p>A modern-day digital renaissance man for hire.</p>

            <div
              id="tableContents"
              className="serviceList my-32 flex flex-col border-t-2 border-t-[#1b1b1b]"
            >
              {SERVICES.map((service, index) => {
                const twoDigits = (n) => {
                  return (n < 10 ? '0' : '') + n
                }

                return (
                  <div
                    className="serviceItem flex gap-8 font-sans text-4xl py-8 border-b-2 border-b-[#1b1b1b] cursor-pointer"
                    key={index}
                    onClick={() =>
                      document.querySelector(service.link).scrollIntoView({
                        behavior: 'smooth',
                        inline: 'nearest',
                      })
                    }
                  >
                    <div className="count text-brightOrange text-2xl">
                      {twoDigits(index + 1)}
                    </div>

                    {service.name}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Clients */}
      {<ClientBlock />}

      {/* Services - User Acquisition */}
      <section id="userAcq" className="my-96 p-8">
        <div className="container grid-12 mb-64">
          <motion.h2
            className="text-6xl md:text-jumbo col-start-2 m-0 mb-16"
            initial={{ color: '#FFFFFF' }}
            whileInView={{ color: '#FF6200', transition: { duration: 0.7 } }}
          >
            USER ACQUISITION
          </motion.h2>
          <div className="userAcq__desc text-2xl col-start-2 md:col-start-5 col-end-13 row-start-2 mb-32">
            <p>
              I generated over{' '}
              <motion.span
                initial={{ color: '#FFFFFF' }}
                whileInView={{
                  color: '#FF6200',
                  transition: { duration: 0.7 },
                }}
              >
                £2.4mil
              </motion.span>
              {' and '}
              <motion.span
                initial={{ color: '#FFFFFF' }}
                whileInView={{
                  color: '#FF6200',
                  transition: { duration: 0.7 },
                }}
              >
                150,000 new customers{' '}
              </motion.span>
              in 2021 for B2C ecommerce, startups and scale-ups using a
              cross-channel mix of Facebook, Instagram, Google, TikTok, Youtube,
              Email & Affiliate - All in the face of iOS 14.
            </p>
            <p>
              Whilst competitors are paying agencies for four hours of manual
              junior work a month, As a client, you'll have access to my
              personal arsenal of industry-first Search Ad technology to
              automate your way to scale ― effortlessly.
            </p>
          </div>
          {/* AWARDS SECTION USER ACQUISITION */}
          <div className="awards row-start-3 col-start-1 md:col-start-7 col-end-13 flex flex-col sm:flex-row gap-12 mb-32">
            <div className="award flex items-top gap-4 max-w-[330px]">
              <div className="award__flag relative">
                <Image
                  alt="Performance Marketing Award"
                  src="/PMAPMA.png"
                  width={108}
                  height={100}
                />
              </div>
              <div className="award__text flex flex-col gap-0 font-sans">
                <div className="upper text-[#636363] text-base">
                  PERFORMANCE MARKETING AWARDS
                </div>
                <div className="lower uppercase text-2xl font-sans leading-6 text-white">
                  Most effective cross- channel campaign
                </div>
                <div className="upper text-brightOrange text-base mt-4">
                  vouchercloud × NOW TV
                </div>
              </div>
            </div>
            <div className="award flex items-top gap-4 w-[360px]">
              <div className="award__flag relative">
                <Image
                  alt="Performance Marketing Award"
                  src="/PMAPMA.png"
                  width={108}
                  height={100}
                />
              </div>
              <div className="award__text flex flex-col gap-0 font-sans">
                <div className="upper text-[#636363] text-base">
                  PERFORMANCE MARKETING AWARDS
                </div>
                <div className="lower uppercase text-2xl font-sans leading-6 text-white">
                  Most Creative Performance Campaign
                </div>
                <div className="upper text-brightOrange text-base mt-4">
                  vouchercloud × TOPMAN
                </div>
              </div>
            </div>
          </div>
          <div className="serviceList row-start-4 col-start-4 md:col-start-7 col-span-8 mb-32">
            <div className="serviceList__subtitle text-faintGrey mb-4">
              How?
            </div>
            <ul className="serviceList_list flex flex-col gap-4">
              <li className="text-lightGrey">
                × Facebook, TikTok, Google, YouTube, Native
              </li>
              <li className="text-lightGrey">× Klaviyo, Drip, Mailchimp</li>
              <li className="text-lightGrey">
                × Technical SEO & Martech Implementation
              </li>
              <li className="text-lightGrey">
                × Data Studio, Tableau, Google Analytics
              </li>
              <li className="text-lightGrey">
                × Scripting & Process Automation
              </li>
            </ul>
          </div>
          <BackToTop />
        </div>
        {/* <div className="container grid grid-cols-2 grid-rows-2">
          <div className="fakeout"></div>
          <div className="relative">
            <div className="image h-96 flex relative">
              <Image
                src={'/placeholder_1.png'}
                alt={'placeholder'}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="siht absolute -top-2 -right-36 rotate-90 origin-left justify-between"></div>
          </div>

          <div className="image h-96 relative">
            <Image
              src={'/placeholder_2.png'}
              alt={'placeholder'}
              layout="fill"
              objectFit="cover"
            />

            <h3 className="label text-white text-bold m-0 absolute -bottom-8">
              DATA SCIENCE
            </h3>
          </div>
          <div className="image h-96 relative">
            <Image
              src={'/placeholder_3.png'}
              alt={'placeholder'}
              layout="fill"
              objectFit="cover"
            />
            <h3 className="label text-white text-bold m-0 absolute -bottom-8">
              DATA SCIENCE
            </h3>
          </div>
        </div> */}
      </section>

      {/* Services - Design */}
      <section id="design" className="my-96 p-8">
        <div className="container grid-12">
          <motion.h2
            className="text-6xl md:text-jumbo col-start-1 md:col-start-3 col-span-full m-0 mb-16"
            initial={{ color: '#FFFFFF' }}
            whileInView={{ color: '#FF6200', transition: { duration: 0.7 } }}
          >
            DESIGN
          </motion.h2>
          <div className="col-start-2 col-end-12 row-start-2 text-2xl mb-8">
            <p>
              Sitting between marketing, tech and product development,I'm a
              creative technologist by heart and a problem solver by passion. I
              use audio, video and UI design to produce modern digital
              experiences that look the part, are technically performant and
              trivial to use.
            </p>
            {/* <p>
              I'll help you understand what your customers expect from you, how
              they want you to deliver it, and how considerations from
              marketing, sales and tech fit into your growth plan - All with the
              aim to push the boundaries of what's possible to create a product
              experience that your customers will love.
            </p> */}
          </div>
          {/* <div className="text-lightGrey leading-[32px] row-start-3 col-start-2 col-span-6 mb-16">
            <p>Datk</p>
          </div> */}

          <div className="text-white text-lg col-start-6 col-span-7 md:col-start-10 row-start-4 mb-24">
            How many other consultants can say they build, grow and sell their
            own digital startups?
          </div>
          <div className="serviceList row-start-5 col-start-4 col-span-7 mb-64">
            <div className="serviceList__subtitle text-faintGrey mb-4">
              How?
            </div>
            <ul className="serviceList_list flex flex-col gap-4">
              <li className="text-lightGrey">
                × Facebook, TikTok, Google, YouTube, Native
              </li>
              <li className="text-lightGrey">× Klaviyo, Drip, Mailchimp</li>
              <li className="text-lightGrey">
                × Technical SEO & Martech Implementation
              </li>
              <li className="text-lightGrey">
                × Data Studio, Google Tag Manager, Segment, Google Analytics
              </li>
              <li className="text-lightGrey">
                × Scripting & Process Automation
              </li>
            </ul>
          </div>
          <BackToTop />
        </div>
        <div className="container">
          <div className="grid grid-cols-2 text-lightGrey">
            <div className="text-2xl bg-cardGrey relative h-96">
              <div className="absolute -top-32 flex">
                <Image
                  src={'/punchlab_mock.png'}
                  alt={'placeholder'}
                  width="720px"
                  height="600px"
                  objectFit="cover"
                />
              </div>
              <h3 className="label absolute -bottom-16 text-white">Punchlab</h3>
            </div>
            <div className="text-2xl bg-cardGrey relative h-96">
              <Image
                src={'/placeholder_3.png'}
                alt={'placeholder'}
                layout="fill"
                objectFit="cover"
              />
              <h3 className="label absolute -bottom-16 text-white">
                RIGHTCHARGE
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Development */}

      <section id="development" className="my-96 p-8">
        <div className="container grid-12">
          <motion.h2
            className="text-6xl md:text-jumbo row-start-1 col-start-2 col-end-8 md:col-start-4 m-0 mb-16"
            initial={{ color: '#FFFFFF' }}
            whileInView={{ color: '#FF6200', transition: { duration: 0.7 } }}
          >
            WEB DEVELOPMENT
          </motion.h2>
          <div className="col-start-3 col-span-10 row-start-2 text-2xl mb-8">
            Modern web apps and marketing sites are built on JAMstack. They're
            designed to convert traffic, rank well in Google, load in under 0.6
            seconds and leave a lasting impression. Thats why I trust React,
            Nextjs and JavaScript as the tools to build products and sites that
            leave the competition in the dust.
          </div>
          <div className="text-lightGrey row-start-3 leading-[32px] col-start-5 md:col-start-3 col-span-8 md:col-end-8 mb-16">
            <p>
              Hire me to sit between Tech, Marketing and Product to build a
              modern, future-proof product that leaves no surprises. I'm your
              technical co-founding partner.
            </p>
          </div>
          <div className="serviceList row-start-4 col-start-2 md:col-start-6 col-span-full mb-64">
            <div className="serviceList__subtitle text-faintGrey mb-4">
              How?
            </div>
            <ul className="serviceList_list flex flex-col gap-4">
              <li className="text-lightGrey">
                × React. Hooks. Context. Nextjs. Gatsby, Tailwind, Storybook
              </li>
              <li className="text-lightGrey">× Vercel, Netlify, AWS</li>
              <li className="text-lightGrey">× Node, Express, PostgreSQL</li>
              <li className="text-lightGrey">
                × Puppeteer. Cheerio. Jest. Enzyme.
              </li>
            </ul>
          </div>
          <BackToTop />
        </div>
      </section>

      {/* WQorkng togetther */}
      <section id="development" className="my-96 p-8">
        <div className="container grid grid-cols-6 md:grid-cols-12 md:gap-4">
          <h2 className="text-6xl font-medium col-start-2 mb-16">
            Looking to work together?
          </h2>
          <div className="placeholder row-start-2 col-span-full h-32 relative md:col-span-3 mb-8 md:mb-0">
            <Image
              src={'/placeholder.png'}
              alt={'placeholder'}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="intro__text row-start-3 col-span-full md:row-start-2 md:col-start-6 md:col-span-7 leading-[190%] text-lg md:text-2xl relative">
            <p>
              Since 2014 I've been orchestrating award-winning user acquisition
              campaigns for ambitious B2C brands looking to design, develop and
              deliver clever, scrappy work at scale.
            </p>
            <p>I'm a full-stack digital native.</p>
          </div>
        </div>
      </section>

      <section id="development" className="my-96 p-8">
        <div className="container grid grid-cols-8 md:grid-cols-12">
          <motion.h2
            className="text-6xl md:text-jumbo col-start-2 col-span-2 m-0 mb-16"
            initial={{ color: '#FFFFFF' }}
            whileInView={{ color: '#FF6200', transition: { duration: 0.7 } }}
          >
            FAQ
          </motion.h2>
          {FAQ.map((item, index) => {
            const colStart = index === 0 ? 5 : 6

            return (
              <div
                key={index}
                className={`faqItem mb-16 col-start-1 md:col-start-${colStart} col-end-13 row-start-${
                  index + 2
                }`}
              >
                <motion.h3
                  whileHover={{ color: '#FF6200', cursor: 'pointer' }}
                  className={`question leading-snug`}
                >
                  {item.q}
                </motion.h3>
                <div className="answer text-faintGrey leading-8">{item.a}</div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default HomePage

const SERVICES = [
  { name: 'Clients', link: '#userAcq' },
  { name: 'User Acquisition', link: '#userAcq' },
  { name: 'Product Design', link: '#design' },
  { name: 'Web Development', link: '#development' },
  { name: 'FAQ', link: '#userAcq' },
  { name: 'Get in touch', link: '#userAcq' },
]

const FAQ = [
  {
    q: `How much does a typical project cost / Last?`,
    a: `Project costs vary based on the scope and nature of work but here are some ballpark figures to help you understand the costs involved. Performance Marketing Management starts at £2750p/m with a minimum 3 month contract. Design and development of a typical marketing site starts around £8k with four week delivery, and a fully fledged mobile app starts at £15k with projects lengths anywhere from two to six months.`,
  },
  {
    q: `Can you work with [ insert tech here ]?`,
    a: `For the most part, Yes, but no guarantees. I believe in using the right tools for the job, and those are generally the ones I feel most invincible.  99% of my developed projects are built with JavaScript, React and Nextjs, hosted on Vercel and use Node.js / Express for backend. If you’re looking for something on Django or Python then you’re shit out of luck.`,
  },
  {
    q: `How do you communicate and work?`,
    a: `Slack. Hangouts. Zoom. Teams. Email as a last resort. Never WhatsApp and no camera. I’m pretty easy going.`,
  },
  {
    q: `+ do you work on site or are you fully remote?`,
    a: `By default, I’m fully remote. Based in Prague, in CZ at the heart of Europe. My typical work hours are 8am - 8pm, Monday to Saturday and most clients find that more than enough. 

    If you’d like to arrange on-site work and aren’t in Prague or London then ocassionally clients will arrange an all expenses paid trip.`,
  },
]

const BackToTop = () => (
  <motion.div
    className="backToContents row-start-5 col-start-7 md:col-start-11 col-end-13 py-4"
    whileHover={{
      color: '#FF6200',
      scale: 1.01,
      cursor: 'pointer',
      y: -20,
    }}
    onClick={() =>
      document.querySelector('#tableContents').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
  >
    Back To Content List ⬆
  </motion.div>
)
