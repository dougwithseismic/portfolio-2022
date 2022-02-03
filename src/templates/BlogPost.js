/* eslint-disable react/no-unescaped-entities */
import { SignupForm } from '@components/ContactForm'
import { LinkedIn, Twitter } from '@components/Icons'
import { Layout } from '@components/Layout'
import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { renderMetaTags } from 'react-datocms'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import siteSettings from '/siteSettings.js'

export const BlogPost = ({ slug, article }) => {
  const { title, description, _seoMetaTags } = article
  const { siteDomain } = siteSettings
  const { asPath } = useRouter()
  const url = `${siteDomain}${asPath}`

  // http://twitter.com/share?text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3

  return (
    <>
      <Head>{renderMetaTags(_seoMetaTags)}</Head>
      <Layout title={title}>
        <section>
          <div className="container">
            <div className="grid grid-cols-12 relative">
              <div className="col-span-2 sticky top-12 h-[250px] flex flex-col gap-2">
                <h2 className="border-b-2 m-0 text-2xl leading-tight border-[#1b1b1b] py-2 w-auto text-brightOrange">
                  {title}
                </h2>
                <div className="py-2 flex flex-col gap-4">
                  <div className="author">
                    <div className="font-sans text-faintGrey">
                      doug silkstone
                    </div>
                  </div>
                  <div className="social flex h-2 gap-4">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                    >
                      <LinkedIn />
                    </a>

                    <a
                      href={`http://twitter.com/share?text=Check this out: ${title}&url=${url}&hashtags=withSeismic`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter />
                    </a>
                  </div>
                </div>
              </div>
              <article className="col-start-4 col-span-7 text">
                <h1 className="text-hero md:text-[120px] text-white">
                  {title}
                </h1>
                <ReactMarkdown
                  components={{ p: Paragraph, h2: H2, ul: UL, ol: OL }}
                >
                  {description}
                </ReactMarkdown>
              </article>
            </div>
          </div>
        </section>
        <section className="contact my-32">
          <div className="container flex flex-col items-center">
            <h1>Want more?</h1>
            <SignupForm />
          </div>
        </section>
      </Layout>
    </>
  )
}

const Paragraph = ({ children }) => {
  return (
    <p className="text-lg text-faintGrey leading-[190%] mb-16">{children}</p>
  )
}

const H2 = ({ children }) => {
  return <h2 className="text-2xl font-serif font-normal mb-16">{children}</h2>
}

const UL = ({ children }) => {
  return <ul className="list-disc pl-8">{children}</ul>
}
const OL = ({ children }) => {
  return <ul className="list-decimal pl-4">{children}</ul>
}
