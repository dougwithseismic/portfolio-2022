/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useRef, useContext } from 'react'
import { Layout } from '@components/Layout'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import Typewriter from 'typewriter-effect'
import { Instagram, Facebook, Twitter, GlobeIcon } from '@components/Icons'
import { Award } from '@components/Award'
import { SignupForm } from '@components/ContactForm'
import { Corners } from '@components/Corners'
import Link from 'next/link'
import { dato } from '@utility/initDato'

export const Home = ({ articles }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    SwiperCore.use([Pagination, Navigation, Autoplay])
  }, [])

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.75 } },
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
      {/* <Corners title="Home" /> */}

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

      <section id="hero" className="md:mt-16 px-8">
        <div className="container z-20">
          <div className="hero">
            <motion.h1
              animate={{ opacity: 1 }}
              className="text-[80px] m-0 md:text-jumbo text-center"
            >
              Powering
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
            <div className="text-2xl text-center max-w-3xl mx-auto py-4">
              {/* <div className="count flex gap-4">
                <div className="number">1</div>
                <div className="title text-sm">Introduction</div>
              </div> */}
              <p className="py-4">
                We build modern, performance sites and scale them using growth
                engineering and performance marketing with 100% trackable ROI.{' '}
                <span className="text-brightOrange underline underline-offset-4 cursor-pointer`">
                  Jamstack sites, Chome Extensions, Headless Ecommerce,
                  Performance Marketing & Martech Specialists.
                </span>
              </p>
              <button className="btn btn-primary p-4 my-4 border-2 border-brightOrange hover:bg-brightOrange w-full md:max-w-xs  align-center justify-center font-bold uppercase font-sans text-2xl">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="video" className=" text-white md:mt-32">
        <div className="container px-8">
          <div className="video__box relative my-8 md:mt-16">
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
        className=" py-16 my-64"
        variants={variants}
        initial="hidden"
        whileInView="show"
      >
        <div className="container px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <h2 className="text-6xl m-0 md:text-jumbo z-10">
              In 2021 we drove <span className="text-brightOrange">£1.3m</span>{' '}
              revenue to <span className="text-brightOrange">17x roas</span>.
            </h2>
            <div className="rightContent text-2xl max-w-2xl">
              <p>
                <p>
                  We build modern, headless, digital experiences and commerce
                  for the most ambitious B2C brands, building performance
                  marketing & automation into the core product so they can scale
                  and grow automatically.
                </p>
              </p>
              {/* <Link href="/article/why-you-need-a-hook-microsites-on-steroids/" className="cursor-pointer"> 
                What's a Microsite?
              </Link> */}
            </div>
          </div>
          <div className="next max-w-2xl text-2xl mt-8 md:p-4 text-faintGrey">
            <p className="">
              That's <span className="text-brightOrange ">£1.3 million</span> in
              directly trackable revenue with a{' '}
              <span className="text-brightOrange ">
                17x ROAS on total costs for partnering brands,
              </span>{' '}
              driven by sites we own, build and grow ourselves. Want to do the
              same?
            </p>
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
            <h2 className="text-hero m-0 md:text-jumbo z-10 order-1 text-right">
              Data-led Creative-driven{' '}
              <span className="text-brightOrange">Check.</span>
            </h2>
            <div className="rightContent flex flex-col gap-8 order-2">
              <p className="text-2xl max-w-2xl m-0">
                Understand data and analytics in a privacy-first world with
                trackable ROI and incremental growth as standard, even in the
                face of iOS 14 and beyond.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="services"
        className=" my-32"
        variants={variants}
        initial="hidden"
        whileInView="show"
      >
        <div className="container px-8 flex flex-col md:flex-row gap-8">
          <div className="sideContent text-2xl">
            <h2 className="text-hero">What do we do?</h2>
            <div className="grid md:grid-cols-3 my-16 gap-16">
              {SERVICES.map(({ title, description, link }, i) => (
                <ServiceCard
                  key={i}
                  title={title}
                  description={description}
                  link={link}
                />
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
          <div className="introContent flex flex-col md:flex-row items-center gap-16 py-32">
            <h2 className="text-hero m-0 md:text-jumbo z-10">
              Paid-On-Results? <span className="text-brightOrange">Check.</span>
            </h2>
            <div className="rightContent flex flex-col gap-8 text-2xl max-w-2xl ">
              <p className="m-0">
                Low up-front costs. Only pay for results generated from
                trackable revenue driven by micro-campaigns, sites and content
                that's relevant, engaging and profitable.
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

      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="show"
        id="figma"
      >
        <div className="container p-8">
          <h1>Latest Projects</h1>

          <div className="grid md:grid-cols-2 gap-4">
            <iframe
              title="button.docs.mdx"
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="100%"
              height="600px"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9cuMnfVDFNPvPAEun3ge3D%2FTechno_Ecommerce%3Fnode-id%3D0%253A1"
              allowFullScreen
            ></iframe>
            <iframe
              title="button.docs.mdx"
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="100%"
              height="600px"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FHbxOq2XBI8wiQcHmJpw0Tp%2FV4.1NAUT%3Fnode-id%3D0%253A1"
              allowFullScreen
            ></iframe>
            <iframe
              title="button.docs.mdx"
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="100%"
              height="600px"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGyln2hEuUVHD80LVPf49GN%2FWITHSEISMIC-2022-CONCEPT%3Fnode-id%3D0%253A1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* <section>
        <div className="container md:my-32">
          <h2 className="text-hero">Careers</h2>
          <div className="flex flex-col">
            {JOBS.map(({ title, salaryRange, type, location }, i) => (
              <motion.div
                whileHover={{ scale: 0.99 }}
                key={i}
                className="items-baseline leading-tight job-position grid grid-cols-3 md:grid-cols-4 gap-8 w-full  justify-between border-b-2 border-[#141414] p-8  font-sans text-2xl"
              >
                <div className="title font-bold">{title}</div>
                <div className="text-faintGrey salary text-right">
                  {salaryRange}/month
                </div>

                <div className="location hidden md:flex items-center gap-2 justify-end">
                  <GlobeIcon fill={'#141414'} />
                  {location}
                </div>
                <Link href="/careers/ui-designer">
                  <a className="apply text-right uppercase text-brightOrange">
                    Apply Now
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section id="case-studies" className="my-32 p-8">
        <div className="container overflow-visible">
          <h2>Articles & Guides</h2>

          <div className="articles grid md:grid-cols-3 gap-16">
            {articles.map(({ title, editorialTitle, slug }, i) => (
              <Card
                key={i}
                editorialTitle={editorialTitle}
                title={title}
                index={i}
                slug={`/article/${slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <motion.section
        id="contact"
        className="my-32"
        variants={variants}
        initial="hidden"
        whileInView="show"
      >
        <div className="container flex flex-col items-center p-4">
          <h2 className="text-hero m-0 md:text-jumbo z-10">Get In Touch</h2>
          <p className="p-4 text-2xl max-w-2xl">
            Hit up the form below and I'll be in touch ASAP, or reach out
            directly to{' '}
            <a href="mailto:hello@withseismic.com">hello@withseismic.com</a>
          </p>
          <SignupForm />
        </div>
      </motion.section>
    </Layout>
  )
}

export default Home

const Card = ({ title, editorialTitle, slug, index = 0 }) => {
  return (
    <>
      <div className="articleWrapper py-8">
        <Link href={slug} passHref>
          <a className="no-underline" href={slug}>
            <h3 className="text-3xl font-sans leading-snug">{title}</h3>
            <div className="text-white text-2xl leading-snug mb-8">
              {editorialTitle}
            </div>
            <div className="lower uppercase">Read Now</div>
          </a>
        </Link>
      </div>
    </>
  )
}

const ServiceCard = ({ title, description, link }) => {
  return (
    <div className="item">
      <div className="video__box relative max-w-2xl">
        <div className="p absolute bottom-0 right-4 z-30"></div>
      </div>
      <h3 className="text-4xl leading-tight font-sans">{title}</h3>
      <p className="text-faintGrey">{description}</p>
      {link && (
        <Link href={link} className="btn btn-primary">
          Learn More
        </Link>
      )}
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
    title: 'Performance Marketing',
    description: `Modern campaigns for Search, Display, Video, Email, Affiliate, Automation & Feeds, Audience building, Lead generation.`,
    link: '/services/performance-marketing',
    cta: 'Performance Marketing',
  },
  {
    title: 'Tech & Development',
    description: `Modern, sleek 💯 Jamstack sites and web apps that Google love. Email & Web Automation. Scraping services. Headless Ecommerce. Marketing Automation.`,
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

const JOBS = [
  {
    title: 'Account Manager - DE',
    salaryRange: '60-80k CZK',
    type: 'contract',
    location: 'Remote',
  },
  {
    title: 'Account Manager - EN',
    salaryRange: '60-80k CZK',
    type: 'contract',
    location: 'Remote',
  },
  {
    title: 'React FE Developer',
    salaryRange: '80-100 CZK',
    type: 'contract',
    location: 'Remote',
  },
  {
    title: 'UI Designer',
    salaryRange: '60-80k CZK',
    type: 'contract',
    location: 'Remote',
  },
  {
    title: 'Copywriter',
    salaryRange: '60-80k CZK',
    type: 'contract',
    location: 'Remote',
  },
  {
    title: 'Mograph Videographer',
    salaryRange: '60-80k CZK',
    type: 'contract',
    location: 'Remote',
  },
]

export const getStaticProps = async ({ params }) => {
  const articles = await dato.getAllArticles()

  return {
    props: {
      articles,
    },
  }
}
