/* eslint-disable react/no-unescaped-entities */
import { SignupForm } from '@components/ContactForm'
import { GlobeIcon, LinkedIn, Twitter } from '@components/Icons'
import { Layout } from '@components/Layout'
import React, { useEffect } from 'react'
import { Markdown } from '@utility/markdown'
import { renderMetaTags } from 'react-datocms'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import siteSettings from '/siteSettings.js'
import { dato } from '@utility/initDato'

const JobSpecPage = ({ slug, jobspec }) => {
  const {
    title,
    _seoMetaTags,
    description,
    salaryRange,
    location,
    tags,
  } = jobspec
  const { siteDomain } = siteSettings
  const { asPath } = useRouter()
  const url = `${siteDomain}${asPath}`

  return (
    <>
      <Head>{renderMetaTags(_seoMetaTags)}</Head>
      <Layout title={title}>
        <section>
          <div className="container px-8">
            <div className="article flex flex-col md:grid grid-cols-12 relative">
              <div className="sidebar col-span-2 md:sticky top-12 h-[250px] flex flex-col gap-4 order-last md:order-first">
                <h2 className="border-b-2 m-0 text-3xl leading-tight border-[#1b1b1b] py-2 w-auto text-brightOrange">
                  {title}
                </h2>
                <div className="flex flex-col gap-4">
                  <div className="jobDetail">
                    <div className="salaryRange uppercase text-faintGrey font-sans text-2xl">
                      {salaryRange}
                    </div>
                  </div>

                  <button className="btn btn-primary p-2 bg-brightOrange w-full md:max-w-xs font-bold uppercase font-sans text-2xl">
                    Apply Now
                  </button>
                  <div className="social flex gap-4">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
                      target="_blank"
                      rel="noopener noreferrer"
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
                <Markdown>{description}</Markdown>
                <div className="extraDetail">
                  <div className="salaryRange uppercase text-faintGrey font-sans text-2xl">
                    Budget: {salaryRange}
                  </div>
                  <div className="salaryRange uppercase text-faintGrey font-sans text-2xl">
                    Date Posted:{' '}
                    {new Date().toLocaleString('en-GB', {
                      day: 'numeric',
                      month: 'numeric',
                      year: '2-digit',
                    })}
                  </div>
                  <div className="salaryRange uppercase text-faintGrey font-sans text-2xl flex gap-2 items-center">
                    <GlobeIcon /> Remote, Prague.
                  </div>
                </div>
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

export default JobSpecPage

export const getStaticProps = async ({ params }) => {
  console.log('params :>> ', params)

  const jobspec = await dato.getSpecificJobSpec(params.slug)

  if (jobspec) {
    console.log('GOT IT')
    return {
      props: {
        slug: params.slug,
        jobspec,
      },
      revalidate: 10,
    }
  }
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}

export const getStaticPaths = () => {
  return {
    paths: [{ params: { slug: 'ui-designer' } }],
    fallback: 'blocking', // false or 'blocking'
  }
}
