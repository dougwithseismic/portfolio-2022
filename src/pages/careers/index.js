/* eslint-disable react/no-unescaped-entities */
import { GlobeIcon } from '@components/Icons'
import { Layout } from '@components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SignupForm } from '@components/ContactForm'

const CareersPage = () => {
  return (
    <Layout>
      <motion.section
        id="introduction"
        className="hero"
        initial="hidden"
        whileInView="show"
      >
        <div className="container px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="hero md:max-w-2xl">
              <h2 className="text-hero m-0 md:text-jumbo">
                Looking for a new
                <span className="text-brightOrange"> career?</span>
              </h2>
            </div>
          </div>
          <p className="text-2xl max-w-2xl mt-8 md:p-4 text-faintGrey">
            Reach your audience with scroll-stopping creative and scale up
            smartly with 100% trackable paid media. Search. Display. Social.
            Analytics & Tracking. CRO. Email Automation & Affiliate.
          </p>
        </div>
      </motion.section>

      <section className="md:my-32">
        <div className="container">
          <div className="flex flex-col">
            {JOBS.map(({ title, salaryRange, type, location, slug }, i) => (
              <motion.div
                whileHover={{ scale: 0.99 }}
                key={i}
                className="items-baseline leading-tight job-position grid grid-cols-3 md:grid-cols-4 gap-8 w-full  justify-between border-b-2 border-[#141414] p-8  font-sans text-[24px]"
              >
                <div className="title font-bold">{title}</div>
                <div className="text-faintGrey salary text-right">
                  {salaryRange}/month
                </div>

                <div className="location hidden md:flex items-center gap-2 justify-end">
                  <GlobeIcon fill={'#141414'} />
                  {location}
                </div>

                <Link href={`/careers/${slug}`}>
                  <a
                    href={`/careers/${slug}`}
                    className="apply text-right uppercase text-brightOrange"
                  >
                    Apply Now
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col place-items-center">
          <h1>Need to get in touch?</h1>
          <SignupForm />
        </div>
      </section>
    </Layout>
  )
}

export default CareersPage

const JOBS = [
  {
    title: 'Account Manager - DE',
    salaryRange: '60-80k CZK',
    type: 'contract',
    location: 'Remote',
    slug: 'account-manager-de',
  },
  {
    title: 'Account Manager - EN',
    salaryRange: '60-80k CZK',
    type: 'contract',
    location: 'Remote',
    slug: 'account-manager-en',
  },
  {
    title: 'React FE Developer',
    salaryRange: '80-100 CZK',
    type: 'contract',
    location: 'Remote',
    slug: 'react-developer',
  },
  {
    title: 'UI Designer',
    salaryRange: '60-80k CZK',
    type: 'contract',
    location: 'Remote',
    slug: 'ui-designer',
  },
  {
    title: 'Copywriter',
    salaryRange: '60-80k CZK',
    type: 'contract',
    location: 'Remote',
    slug: 'copywriter',
  },
  {
    title: 'Mograph Videographer',
    salaryRange: '60-80k CZK',
    type: 'contract',
    location: 'Remote',
    slug: 'mograph-videographer',
  },
]
