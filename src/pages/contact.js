/* eslint-disable react/no-unescaped-entities */
import { SignupForm } from '@components/ContactForm'
import { Layout } from '@components/Layout'
import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const ContactPage = () => {
  return (
    <Layout title="Contact Us">
      <section id="contact" className="mb-32">
        <div className="container flex flex-col items-center  p-4">
          <div className="hero px-4 ">
            <motion.h1
              animate={{ opacity: 1 }}
              className="text-hero m-0 md:text-jumbo max-w-6xl translate-x-2 z-10"
            >
              Get <div className="text-brightOrange">IN TOUCH</div>
            </motion.h1>
            <div className="text-2xl max-w-3xl py-16">
              {/* <div className="count flex gap-4">
                <div className="number">1</div>
                <div className="title text-sm">Introduction</div>
              </div> */}
              <p className="md:indent-32">
                If you're interested in learning more about partnering with
                Seismic then drop your details below and we'll send you a
                complete service list, pricing structure and first steps.
              </p>
            </div>
          </div>

          <SignupForm />
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
