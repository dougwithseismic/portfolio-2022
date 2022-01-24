/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { useWindowSize } from '@hooks/useWindowSize'
import { ClientBlock } from '@components/ClientBlock'
import Image from 'next/image'
import { ScrollDebugger } from '@components/ScrollDebugger'
import { Layout } from '@components/Layout'
import SiteContext from '@context/siteContext'

// TODO: Ableton. Figma. Framer. VS Code. React. Nextjs. Vercel. JavaScript. Netlify. Github. Davinci. After Effects. Illustrator. Sheets. Node. Express. Postgres. Supabase.

const Lines = () => {
  return (
    <div className="lines fixed inset-0 h-screen pointer-events-none opacity-5 p-8">
      <div className="container border-r-2 border-l-2 border-[#1b1b1b] grid grid-cols-12 h-full opacity-15">
        {/* <div className="line bg-[#080808]" />
        <div className="line bg-[#080808]" />
        <div className="line bg-[#080808]" />
        <div className="line bg-[#1b1b1b]" />
        <div className="line bg-[#080808]" />
        <div className="line bg-[#080808]" /> */}
      </div>
    </div>
  )
}

const HomePage = () => {
  const { documentWidth, width, height } = useWindowSize()
  const [scrollProgress, setScrollProgress] = useState(0.001)

  const { darkModeOptions } = useContext(SiteContext)
  const { setDarkMode } = darkModeOptions

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
    <Layout title="Home">
      {/* <ScrollDebugger />
      <Lines /> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress }}
        viewport={{ once: true }}
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
      <section id="hero" className="h-[80vh] flex flex-col container">
        <div className="flex flex-col justify-center items-center h-full">
          <motion.h1
            className="hero__title text text-6xl md:text-jumbo justify-center items-center z-10 "
            initial={{ color: '#FFFFFF' }}
          >
            Hi.
          </motion.h1>
          <div className="vidFrame -z-0 opacity-[0.01] fixed mix-blend-color-blend pointer-events-none">
            <iframe
              src="https://player.vimeo.com/video/669420559?h=99424b7dc2?autoplay=1&loop=1&autopause=0&background=1"
              frameBorder="0"
              muted={true}
              width={documentWidth}
              height={documentWidth}
              allow="autoplay"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="intro" className="mb-96">
        <div className="container grid grid-cols-6 md:grid-cols-12 md:gap-4">
          <div className="flex flex-col col-start-2 ">
            <h2 className="text-6xl font-medium mb-16">Intro</h2>
          </div>

          <div className="intro__text row-start- col-span-full md:col-start-6 md:col-span-7 leading-[190%] text-lg md:text-2xl relative">
            <p>
              Since 2014 I've been orchestrating award-winning performance
              marketing campaigns for ambitious B2C Digital B2C marketplaces,
              comparison sites, affiliates, eCommerce & startups.
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
              to sketch out, build, automate, destroy and reinvent modern
              digital experiences through data, design, code and marketing.
            </p>

            <div
              id="tableContents"
              className="serviceList my-32 flex flex-col border-t-2 border-t-[#1b1b1b]"
            >
              {SERVICES.map((service, index) => {
                const twoDigits = (n) => {
                  return (n < 10 ? '0' : '') + n
                }

                return (
                  <motion.div
                    className="serviceItem flex gap-8 font-sans text-4xl py-8 border-b-2 border-r-2 cursor-pointer border-l-2 border-[#1b1b1b] px-8"
                    key={index}
                    whileHover={{ backgroundColor: '#FF6200' }}
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
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services - User Acquisition */}
      <motion.section
        id="userAcquisition"
        className="my-96 p-8"
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        initial={{ opacity: 0 }}
      >
        <div className="container grid-12 grid-cols-12 mb-64">
          <motion.h2
            className="text-6xl md:text-jumbo col-start-2 m-0 mb-16"
            initial={{ color: '#FFFFFF' }}
            // whileInView={{ color: '#FF6200', transition: { duration: 0.7 } }}
          >
            CUSTOMER ACQUISITION
          </motion.h2>
          <div className="userAcq__desc text-2xl col-start-1 md:col-start-6 col-end-13 row-start-2 mb-32">
            <p>
              In 2021, I sorted out over{' '}
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
              for B2C ecommerce, startups and scale-ups. Facebook, Instagram,
              Google, TikTok, Youtube, Email & Affiliate - All whilst dealing
              with iOS 14.
            </p>
            <p>How? Data. Creative. Automation. Skills.</p>
          </div>

          {/* <div className="logoGrid md:row-start-4 col-start-1 col-span-full md:col-span-4 grid grid-cols-3 gap-4">
            <Image
              alt="logo"
              src="/logos/instagram.svg"
              height={208}
              width={208}
            />
            <Image
              alt="logo"
              src="/logos/spotify.svg"
              height={208}
              width={208}
            />
            <Image
              alt="logo"
              src="/logos/facebook.svg"
              height={208}
              width={208}
            />
            <Image
              alt="logo"
              src="/logos/tiktok.svg"
              height={208}
              width={208}
            />
            <Image
              alt="logo"
              src="/logos/youtube.svg"
              height={208}
              width={208}
            />
            <Image
              alt="logo"
              src="/logos/google_ads.svg"
              height={208}
              width={208}
            />
          </div> */}

          <div className="serviceList row-start-4 col-start-4 md:col-start-6 col-span-8 mb-32">
            <div className="serviceList__subtitle text-faintGrey mb-4">
              How?
            </div>
            <ul className="serviceList_list flex flex-col gap-4">
              <li className="text-lightGrey">
                × Facebook, Instagram, TikTok, Spotify, Youtube, Google Ads
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
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 text-lightGrey">
            <div className="text-2xl bg-cardGrey relative h-96">
              <div className="absolute md:-top-32 flex">
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
      </motion.section>

      {/* Services - Performance Marketing */}
      <motion.section
        id="performanceMarketing"
        className="py-96 p-8"
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        initial={{ opacity: 0 }}
      >
        <div className="container grid-12 grid-cols-12 mb-64">
          <motion.h2
            className="text-6xl md:text-jumbo col-start-1 m-0 mb-16"
            initial={{ color: '#FFFFFF' }}
            // whileInView={{ color: '#FF6200', transition: { duration: 0.7 } }}
          >
            Performance Marketing
          </motion.h2>
          <div className="userAcq__desc text-2xl col-start-1 md:col-start-6 col-end-13 row-start-2 mb-32">
            <p>
              Paid-on-results. Low up-front costs. Lasting partnerships. I build
              micro-campaigns, sites and content that's relevant, engaging and
              profitable.
            </p>
            <p>
              In 2021 our portfolio of performance marketing sites pulled in
              over{' '}
              <motion.span
                initial={{ color: '#FFFFFF' }}
                whileInView={{
                  color: '#FF6200',
                  transition: { duration: 0.7 },
                }}
              >
                £1.3 million{' '}
              </motion.span>
              in revenue for performance partners, {''}
              <motion.span
                initial={{ color: '#FFFFFF' }}
                whileInView={{
                  color: '#FF6200',
                  transition: { duration: 0.7 },
                }}
              >
                for a 17x ROAS.
              </motion.span>
            </p>

            <p>Let's get at it.</p>
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
            <div className="award flex items-top gap-4 max-w-[360px]">
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
          {/* <div className="serviceList row-start-4 col-start-4 md:col-start-7 col-span-8 mb-32">
            <div className="serviceList__subtitle text-faintGrey mb-4">
              How?
            </div>
            <ul className="serviceList_list flex flex-col gap-4">
              <li className="text-lightGrey">
                × Facebook, Instagram, TikTok, Spotify, Youtube, Google Ads
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
          </div> */}

          <BackToTop />
        </div>
      </motion.section>

      {/* Selected Clients */}
      {<ClientBlock />}

      <motion.section
        id="faq"
        className="my-96 p-8"
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        initial={{ opacity: 0 }}
      >
        <div className="container grid grid-cols-8 md:grid-cols-12">
          <motion.h2
            className="text-6xl md:text-jumbo col-start-2 col-span-2 m-0 mb-16"
            initial={{ color: '#FFFFFF' }}
            whileInView={{ color: '#FF6200', transition: { duration: 0.7 } }}
          >
            FAQ
          </motion.h2>
          {FAQ.map((item, index) => {
            const colStart = 6

            return (
              <div
                key={index}
                className={`faqItem mb-16 col-start-1 md:col-start-${colStart} col-end-13 row-start-${
                  index + 1
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
      </motion.section>
    </Layout>
  )
}

export default HomePage

const SERVICES = [
  { name: 'Customer Acquisition', link: '#userAcquisition' },
  { name: 'Performance Marketing', link: '#performanceMarketing' },
  { name: 'Data & Analytics', link: '#dataAnalytics' },
  { name: 'Partners & Clients', link: '#selectedClients' },
  { name: 'Get in touch', link: '#contact' },
  { name: 'FAQ', link: '#faq' },
]

const FAQ = [
  {
    q: `How much does a typical project cost / Last?`,
    a: `Project costs vary based on the scope and nature of work but here are some ballpark figures to help you understand the costs involved. Performance Marketing Management starts at £2750p/m with a minimum 3 month contract. Design and development of a typical marketing site starts around £10k with four week delivery, and a fully fledged mobile app starts at £25k with projects lengths anywhere from two to six months.`,
  },
  {
    q: `Can you work with [ insert tech here ]?`,
    a: `For the most part, Yes, but no guarantees. I believe in using the right tools for the job, and those are generally the ones I feel most invincible using.  99% of my developed projects are built with JavaScript, React and Nextjs, hosted on Vercel and use Node.js / Express for backend. If you’re looking for something on Django or Python then you’re shit out of luck.`,
  },
  {
    q: `How do you communicate and work?`,
    a: `Slack. Hangouts. Zoom. Teams. Email as a last resort. No WhatsApp.`,
  },
  {
    q: `+ do you work on site or are you fully remote?`,
    a: `By default, I’m fully remote. Based in Prague, in CZ at the heart of Europe. My typical work hours are 8am - 8pm, Monday to Saturday and most clients find that more than enough. 

    If you’d like to arrange on-site work and aren’t in Prague or London then that can be arranged!`,
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
