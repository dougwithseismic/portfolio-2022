import { ArticleCard } from '@components/ArticleCard'
import { Award } from '@components/Award'
import { SignupForm } from '@components/ContactForm'
import { Layout } from '@components/Layout'
import { motion } from 'framer-motion'
import React from 'react'

const ServiceTemplate = () => {
  return (
    <Layout title="service">
      <motion.section
        id="introduction"
        className=" py-16"
        initial="hidden"
        whileInView="show"
      >
        <div className="container px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <h2 className="text-hero m-0 md:text-jumbo">
              Performance Marketing &{' '}
              <span className="text-brightOrange">User Acquisition</span>
            </h2>
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
        className=" py-16 mt-32"
        initial="hidden"
        whileInView="show"
      >
        <div className="container px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <h2 className="text-hero m-0 md:text-jumbo translate-x-2 z-10">
              100% Trackable Growth.
            </h2>
            <div className="rightContent text-2xl max-w-2xl">
              <p className=""></p>
              <p className="md:mt-32">
                In 2021, I managed over £1.5mil in paid advertising on
                Instagram, Facebook, YouTube, Twitter & TikTok for B2C ecommerce
                & publishers.
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
      <motion.section initial="hidden" whileInView="show">
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
      {/* <section>
        <div className="container">
          <div className="grid md:grid-cols-3 gap-4">
            <ArticleCard
              title="Interested in learning more about partnering with Seismic
            then drop your details below and"
            />
            <ArticleCard title="Test" />
            <ArticleCard title="Test" />
          </div>
        </div>
      </section> */}

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
  { name: 'User Acquisition', link: '#userAcquisition' },
  { name: 'Conversion Rate Optimization', link: '#performanceMarketing' },
  { name: 'Data & Analytics', link: '#dataAnalytics' },
  { name: 'Email Automation', link: '#selectedClients' },
  { name: 'Affiliate', link: '#contact' },
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
