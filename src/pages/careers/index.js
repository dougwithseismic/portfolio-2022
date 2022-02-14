/* eslint-disable react/no-unescaped-entities */
import { GlobeIcon } from '@components/Icons'
import { Layout } from '@components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SignupForm } from '@components/ContactForm'
import { dato } from '@utility/initDato'

const CareersPage = ({ jobspecs: JOBSPECS }) => {
  return (
    <Layout>
      <motion.section
        id="introduction"
        className="hero"
        initial="hidden"
        whileInView="show"
      >
        <div className="container px-8 md:px-0">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="hero md:max-w-2xl">
              <h2 className="text-hero m-0 md:text-jumbo">
                Looking for a new
                <span className="text-brightOrange"> direction?</span>
              </h2>
            </div>
          </div>
          <p className=" max-w-2xl mt-8 md:p-4 text-faintGrey">
            Think you can help build the next generation of 💯 remote-first
            teams? We're on the lookout for talented individuals that want to
            make a difference and reach their potential together..
          </p>
        </div>
      </motion.section>

      <section className="md:my-32">
        <div className="container">
          <div className="flex flex-col">
            {JOBSPECS.map(
              ({ title, salaryRange, type, slug, location = [] }, i) => (
                <motion.div
                  whileHover={{ scale: 0.99 }}
                  key={i}
                  className="items-baseline leading-tight job-position grid grid-cols-2 md:grid-cols-4 gap-8 w-full  justify-between border-b-2 border-[#141414] p-8  font-sans text-[24px]"
                >
                  <div className="title font-bold">{title}</div>
                  <div className="text-faintGrey salary text-right">
                    {salaryRange}/month
                  </div>

                  <div className="location hidden md:flex items-center gap-2 justify-end">
                    <GlobeIcon fill={'#141414'} />
                    <span className="text-faintGrey">
                      {location.map((loc) => loc.name).join(', ')}
                    </span>
                  </div>

                  <Link href={`/careers/${slug}`}>
                    <a
                      href={`/careers/${slug}`}
                      className="apply uppercase text-brightOrange hidden md:flex justify-end"
                    >
                      Apply Now
                    </a>
                  </Link>
                </motion.div>
              ),
            )}
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

export const getStaticProps = async () => {
  const jobspecs = await dato.getAllJobSpecs()

  return {
    props: {
      jobspecs,
    },
    revalidate: 10,
  }
}
