/* eslint-disable react/no-unescaped-entities */
import { GlobeIcon } from '@components/Icons'
import { Layout } from '@components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const CareersPage = () => {
  return (
    <Layout>
      <motion.section
        id="introduction"
        className=" py-16"
        initial="hidden"
        whileInView="show"
      >
        <div className="container px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="hero">
              <h2 className="text-hero m-0 md:text-jumbo">
                Performance Marketing &{' '}
                <span className="text-brightOrange">User Acquisition</span>
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

      <section>
        <div className="container md:my-32">
          <div className="flex flex-col">
            {JOBS.map(({ title, salaryRange, type, location, slug }, i) => (
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

                <Link
                  href={`/careers/${slug}`}
                  className="apply text-right uppercase text-brightOrange"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <motion.section initial="hidden" whileInView="show">
        <div className="container p-8">
          <div className="introContent flex flex-col md:flex-row items-center gap-16">
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
            </div>
          </div>
        </div>
      </motion.section>
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
