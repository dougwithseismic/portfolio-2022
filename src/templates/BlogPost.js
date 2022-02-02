/* eslint-disable react/no-unescaped-entities */
import { SignupForm } from '@components/ContactForm'
import { LinkedIn, Twitter } from '@components/Icons'
import { Layout } from '@components/Layout'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { renderMetaTags } from 'react-datocms'
import Head from 'next/head'

export const BlogPost = ({ slug, article }) => {
  const { title, description, _seoMetaTags } = article

  return (
    <>
      <Head>
        {renderMetaTags(_seoMetaTags)}
      </Head>
      <Layout title={title}>
        <section>
          <div className="container">
            <div className="grid grid-cols-12 relative">
              <div className="col-span-3 sticky flex flex-col gap-4">
                <h4>Share this article</h4>
                <div className="social flex gap-4">
                  <LinkedIn /> <Twitter />
                </div>
              </div>
              <article className="col-start-4 col-span-6 text">
                <h1 className="text-hero md:text-[120px] text-white">
                  {title}
                </h1>
                <ReactMarkdown components={{ p: Paragraph }}>
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
  return <p className="text-base text-faintGrey">{children}</p>
}
