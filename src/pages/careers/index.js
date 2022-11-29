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
      <motion.section id='introduction' className='hero' initial='hidden' whileInView='show'>
        <div className='container px-8 md:px-0'>
          <div className='flex flex-col items-center gap-16 md:flex-row'>
            <div className='hero md:max-w-2xl'>
              <h2 className='m-0 text-hero md:text-jumbo'>
                Find that new
                <span className='text-brightOrange'> direction.</span>
              </h2>
            </div>
          </div>
          <p className='max-w-2xl mt-8 md:py-4 text-faintGrey'>
            We're hiring unconventional talent looking to make a difference and build cool stuff
            along the way. Work fully remotely, or at our shared offices in Karlin, Prague and
            build clever consumer-facing tech that our users love ♥.
          </p>
        </div>
      </motion.section>

      <section className='md:my-32'>
        <div className='container'>
          <div className='flex flex-col'>
            {JOBSPECS.map(({ title, salaryRange, type, slug, location = [] }, i) => (
              <motion.div
                whileHover={{ scale: 0.99 }}
                key={i}
                className='leading-tight job-position grid grid-cols-2 md:grid-cols-4 gap-8 w-full items-center  justify-between border-b-2 border-[#141414] py-4  font-sans text-[22px]'>
                <div className='font-bold title text-[22px]'>{title}</div>
                <div className='text-right text-faintGrey salary'>{salaryRange}/month</div>

                <div className='items-center justify-end hidden gap-2 location md:flex'>
                  <GlobeIcon fill={'#141414'} />
                  <span className='text-faintGrey'>
                    {location.map((loc) => loc.name).join(', ')}
                  </span>
                </div>

                <Link href={`/careers/${slug}`}>
                  <a
                    href={`/careers/${slug}`}
                    className='justify-end hidden uppercase apply text-brightOrange md:flex'>
                    Apply Now
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className='container flex flex-col place-items-center'>
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
      jobspecs
    },
    revalidate: 10
  }
}
