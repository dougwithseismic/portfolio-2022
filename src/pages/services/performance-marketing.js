/* eslint-disable react/no-unescaped-entities */
import { ArticleCard } from '@components/ArticleCard'
import { Award } from '@components/Award'
import { SignupForm } from '@components/ContactForm'
import { Layout } from '@components/Layout'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const ServiceTemplate = () => {
  return (
    <Layout title="Performance Marketing">
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
      <section id="awards">
        <div className="container px-8">
          <div className="awards flex flex-col justify-between md:flex-row md:gap-16">
            <h2>{''}</h2>
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

      <section>
        <div className="container my-32">
          <h1 className="text-hero px-8">Services</h1>

          <div
            id="tableContents"
            className="serviceList flex flex-col border-t-2 border-t-[#1b1b1b] max-w-4xl"
          >
            {SERVICES.map((service, index) => {
              const twoDigits = (n) => {
                return (n < 10 ? '0' : '') + n
              }
              return (
                <motion.div
                  className="serviceItem flex items-center gap-8 font-sans text-4xl py-8 border-b-2 border-r-2 border-l-2 border-[#1b1b1b] px-8"
                  key={index}
                  whileHover={{ backgroundColor: '#FF6200' }}
                  //   onClick={() =>
                  //     document.querySelector(service.link).scrollIntoView({
                  //       behavior: 'smooth',
                  //       inline: 'nearest',
                  //     })
                  //   }
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
      </section>
      
      <motion.section
        id="introduction"
        className=" py-16 my-32"
        initial="hidden"
        whileInView="show"
      >
        <div className="container px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <h2 className="text-hero m-0 md:text-jumbo translate-x-2 z-10">
              100% Trackable Growth.
            </h2>
            <div className="rightContent text-2xl max-w-2xl">

            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="show">
        <div className="container p-8 grid md:grid-cols-2 md:gap-16">
          {SERVICES.map(
            ({ name = 'service', description = 'description' }, index) => (
              <div key={index} className="service mb-16 md:px-16">
                <div className="h5 text-faintGrey uppercase font-sans">
                  Service
                </div>
                <h1 className="text-hero mt-0 text-brightOrange">{name}</h1>
                <div
                  className="content max-w-2xl text-2xl"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
              </div>
            ),
          )}
        </div>
      </motion.section>


      <motion.section
        id="contact"
        className="my-32"
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

export default ServiceTemplate

const SERVICES = [
  {
    name: 'User Acquisition',
    link: '#userAcquisition',
    description: `£1.3mil in revenue to a 17x trackable ROAS for startups in 2021 is a pretty decent reason to get involved with Seismic, don't you think? 🏧`,
  },
  {
    name: 'Conversion Rate Optimization',
    link: '#performanceMarketing',
    description: `<p>Make tweaks, changes and big swings to squeeze the most out of your marketing spend. More customers, more revenue, more sales.</p>`,
    cta: { text: 'Get in touch', link: '#contact' },
  },
  {
    name: 'Data & Analytics',
    link: '#dataAnalytics',
    description: `<p>Measure, track, forecast accurately from the start. Analytics doesn't have to be confusing, scary of expensive, but it is a neccessity.</p> <p>The good news is you can get up and running today.</p>`,
  },
  {
    name: 'Microsite Development',
    link: '#selectedClients',
    description: `Create sticky, sharable microsite hooks that keep new customers excited and existing customers loyal, without forgetting commercials. This is the new way to get customers to your brand.`,
  },
  {
    name: 'Business Automation',
    link: '#contact',
    description: `Save costs by building an automated, scalable business from the start by baking Search, Display and Content automation into your product to automagically generate campaigns, ads and content.`,
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
