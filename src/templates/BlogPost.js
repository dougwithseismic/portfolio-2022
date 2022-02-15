/* eslint-disable react/no-unescaped-entities */
import { SignupForm } from '@components/ContactForm'
import { LinkedIn, Twitter } from '@components/Icons'
import { Layout } from '@components/Layout'
import { Markdown } from '@utility/markdown'

import { renderMetaTags } from 'react-datocms'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import siteSettings from '/siteSettings.js'
import analytics from '@utility/initAnalytics'
import { getDomainLocale } from 'next/dist/shared/lib/router/router'

export const BlogPost = ({ slug, article }) => {
  const { title, description, _seoMetaTags, _updatedAt } = article
  const { siteDomain } = siteSettings
  const { asPath } = useRouter()
  const url = `${siteDomain}${asPath}`

  const [tableOfContents, setTableOfContents] = useState([])

  useEffect(() => {
    analytics.identify({
      email: 'dougsilkstone@gmail.com',
    })

    // first, get the article.
    const article = document.querySelector('article')
    const headings = [...article.querySelectorAll('h1, h2')].map(
      (heading, index) => {
        heading.id = heading.id || index // Give each heading an id, so we can scroll to it.
        heading.title = heading.innerText
        return heading
      },
    )

    setTableOfContents(headings)
  }, [])

  // http://twitter.com/share?text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3

  return (
    <>
      <Head>{renderMetaTags(_seoMetaTags)}</Head>
      <Layout title={title}>
        <section>
          <div className="container px-8">
            <div className="article grid grid-cols-1 md:grid-cols-12 relative">
              <div className="sidebar col-span-2 md:sticky top-12 h-[250px] flex flex-col gap-2 order-last md:order-first">
                <div className="font-sans font-bold border-b-2 m-0 text-2xl leading-tight border-[#1b1b1b] py-2 w-auto text-brightOrange">
                  {title}
                </div>
                <div className="py-2 flex flex-col gap-4">
                  <div className="updated">
                    Last Updated{' '}
                    {new Date(_updatedAt).toLocaleString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
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
                <div
                  className="toc flex flex-col gap-2 my-4"
                  id="tableContents"
                >
                  {/*  DO TABLE OF CONTENTS HERE */}

                  {tableOfContents.map((heading, index) => {
                    return (
                      <Link href={`#${heading.id}`} key={index}>
                        <a className="tocLink text-white no-underline hover:underline">
                          {heading.title}
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </div>
              <article className="md:col-start-4 col-span-7 text">
                <h1 className="text-hero md:text-[120px] text-white">
                  {title}
                </h1>
                <Markdown>{description}</Markdown>
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
