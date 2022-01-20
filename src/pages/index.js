/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '@hooks/useWindowSize'
import Image from 'next/image'
// TODO: Ableton. Figma. Framer. VS Code. React. Nextjs. Vercel. JavaScript. Netlify. Github. Davinci. After Effects. Illustrator. Sheets. Node. Express. Postgres. Supabase.

const HomePage = () => {
  const lerper = (start, end, t) => {
    return start * (1 - t) + end * t
  }

  const { documentWidth } = useWindowSize()
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = (event) => {
      const totalHeight = document.documentElement.scrollHeight
      const ratio = window.scrollY / (totalHeight - window.innerHeight) // Because of the way the scrollY position is calculated, the ratio never reaches 0 or one unless we subtract the window height from the total height.
      setScrollProgress(ratio)
    }

    window.addEventListener('scroll', (e) => handleScroll(e))

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress }}
        style={{
          width: (documentWidth) * scrollProgress,
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
              I sit between marketing, product and tech to sketch out, build,
              compose, automate, destroy and reinvent modern digital experiences
              through design, audio, video, code and growth.
            </p>

            <p>A modern-day digital renaissance man for hire.</p>

            <div className="serviceList my-32 flex flex-col border-t-2 border-t-[#1b1b1b]">
              {SERVICES.map((service, index) => {
                const twoDigits = (n) => {
                  return (n < 10 ? '0' : '') + n
                }

                return (
                  <div
                    className="serviceItem flex gap-8 font-sans text-4xl py-8 border-b-2 border-b-[#1b1b1b]"
                    key={index}
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
      <section id="selectedClients" className="my-96 p-8">
        <div className="container grid grid-cols-8 md:grid-cols-12">
          <h2 className="text-6xl font-medium col-start-1 md:col-start-2 mb-16">
            Selected Clients
          </h2>

          <ul
            id="clients__list"
            className="col-start-1 row-start-2 md:row-start-1 md:col-start-6 col-end-13 flex flex-col"
          >
            {CLIENT_LIST.map((client, index) => (
              <li
                key={index}
                className="clients__item flex flex-col  md:flex-row md:justify-between uppercase leading-tight py-8 border-b-2 border-b-[#1b1b1b]"
              >
                <div className="name font-sans text-4xl">{client.name}</div>
                <div className="resource md:text-right flex items-center text-faintGrey">
                  {client.resource}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
              <strong className="text-brightOrange">£2.4mil</strong> in 2021 for
              B2C startups and scale-ups using fully-attributed performance
              marketing and bespoke market-leading search ad technology.
            </p>
          </div>
          {/* AWARDS SECTION USER ACQUISITION */}
          <div className="awards row-start-3 col-start-1 md:col-start-7 col-end-13 flex flex-col md:flex-row gap-12 mb-32">
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
        </div>
        <div className="container grid grid-cols-2 grid-rows-2">
          <div className="fakeout"></div>
          {/* Image One */}
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

          {/* Image One */}
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
          {/* Image One */}
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
        </div>
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
          <div className="col-start-2 col-span-full row-start-2 text-2xl mb-8">
            OPKIX is a revolutionary new way to capture and share your life with
            the world. It’s lightweight, tiny wearable camera can be worn on
            mounts like custom sunglasses or attached easily into any outfit so
            you will never miss an important moment again.
          </div>
          <div className="text-lightGrey leading-[32px] row-start-3 col-start-2 col-span-6 mb-16">
            Here’s some body text that actually makes sense. Lorem ipsum is cool
            and all but if you’re not making sense of the content then how can
            you be sure you’re making the right decisions?
          </div>

          <div className="text-white text-2xl col-start-6 col-span-7 md:col-start-10 row-start-4 mb-24">
            Here’s an off-the-grid attention piece that visitors will give their
            full attention to, trust me.
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
                × Data Studio, Tableau, Google Analytics
              </li>
              <li className="text-lightGrey">
                × Scripting & Process Automation
              </li>
            </ul>
          </div>
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
            OPKIX is a revolutionary new way to capture and share your life with
            the world. It’s lightweight, tiny wearable camera can be worn on
            mounts like custom sunglasses or attached easily into any outfit so
            you will never miss an important moment again.
          </div>
          <div className="text-lightGrey row-start-3 leading-[32px] col-start-5 md:col-start-3 col-span-8 md:col-end-8 mb-16">
            Here’s some body text that actually makes sense. Lorem ipsum is cool
            and all but if you’re not making sense of the content then how can
            you be sure you’re making the right decisions?
          </div>
          <div className="serviceList row-start-4 col-start-2 md:col-start-6 col-span-full mb-64">
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
        </div>
      </section>
      {/* 
      <section id="showcase" className="mb-80">
        <div className="container grid-12">
          <div className="text col-start-1 col-end-4">
            <p className="text-2xl mb-80">
              OPKIX is a revolutionary new way to capture and share your life
              with the world. It’s lightweight, tiny wearable camera can be worn
              on mounts like custom sunglasses or attached easily into any
              outfit so you will never miss an important moment again.
            </p>

            <p className="text-faintGrey">
              Here’s some body text that actually makes sense. Lorem ipsum is
              cool and all but if you’re not making sense of the content then
              how can you be sure you’re making the right decisions?
            </p>
          </div>
          <div className="relative col-start-5 w-full
           md:w-1560 h-1560">
            <div className="showCaseHuge absolute w-full h-1560">
              <Image
                alt="Showcase"
                layout="fill"
                //   width="1574px"
                //   height={'1750px'}
                objectFit="cover"
                objectPosition="left top"
                src="/techno_huge.png"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* WQorkng togetther */}
      <section id="development" className="my-96 p-8">
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
                <h3 className={`question leading-snug`}>{item.q}</h3>
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
  { name: 'Clients', resource: '#userAcq' },
  { name: 'User Acquisition', resource: '#userAcq' },
  { name: 'Product Design', resource: '#userAcq' },
  { name: 'Web Development', resource: '#userAcq' },
  { name: 'FAQ', resource: '#userAcq' },
  { name: 'Get in touch', resource: '#userAcq' },
]

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

const FAQ = [
  {
    q: `How much does a typical project cost / Last?`,
    a: `Project costs vary based on the scope and nature of work but here are some ballpark figures to help you understand the costs involved. Performance Marketing Management starts at £2750p/m with a minimum 3 month contract. Design and development of a typical marketing site starts around £8k with four week delivery, and a fully fledged mobile app starts at £15k with projects lengths anywhere from two to six months.`,
  },
  {
    q: `Can you work with [ insert tech here ]?`,
    a: `For the most part, Yes, but no guarantees. I believe in using the right tools for the job, and thos are the ones that make me feel invincible.  99% of my developed projects are built with JavaScript, React and Nextjs, hosted on Vercel and use Node.js / Express for backend. If you’re looking for something on Django or Python then you’re shit out of luck.`,
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
