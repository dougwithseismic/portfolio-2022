/* eslint-disable react/no-unescaped-entities */
import { SignupForm } from '@components/ContactForm'
import {
  GlobeIcon,
  MoneyIcon,
  CalendarIcon,
  LinkedIn,
  Twitter,
} from '@components/Icons'
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
    title = 'test',
    _seoMetaTags,
    description = 'description',
    salaryRange = '50-60k CZK',
    location = [{ name: 'Remote' }, { name: 'Prague' }],
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
                  <button className="btn btn-primary p-2 bg-brightOrange w-full md:max-w-xs font-bold uppercase font-sans text-2xl">
                    Apply Now
                  </button>
                  <div className="extraDetail text-lg">
                    <div className="salaryRange uppercase text-faintGrey font-sans flex gap-2 items-center">
                      <MoneyIcon />
                      Budget: {salaryRange}
                    </div>
                    <div className="salaryRange uppercase text-faintGrey font-sans  flex gap-2 items-center">
                      <CalendarIcon />
                      Date Posted:{' '}
                      {new Date().toLocaleString('en-GB', {
                        day: 'numeric',
                        month: 'numeric',
                        year: '2-digit',
                      })}
                    </div>
                    <div className="salaryRange uppercase text-faintGrey font-sans flex gap-2 items-center">
                      <GlobeIcon /> {location.map((loc) => loc.name).join(', ')}
                    </div>
                  </div>

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
                  <div className="salaryRange uppercase text-faintGrey font-sans text-2xl flex gap-2 items-center">
                    <MoneyIcon />
                    Budget: {salaryRange}
                  </div>
                  <div className="salaryRange uppercase text-faintGrey font-sans text-2xl flex gap-2 items-center">
                    <CalendarIcon />
                    Date Posted:{' '}
                    {new Date().toLocaleString('en-GB', {
                      day: 'numeric',
                      month: 'numeric',
                      year: '2-digit',
                    })}
                  </div>
                  <div className="salaryRange uppercase text-faintGrey font-sans text-2xl flex gap-2 items-center">
                    <GlobeIcon /> {location.map((loc) => loc.name).join(', ')}
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
  const jobspec = await dato.getSpecificJobSpec(params.slug)

  if (jobspec) {
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

export const getStaticPaths = async () => {
  const jobspecs = await dato.getAllJobSpecs()

  const paths = jobspecs.map(({ slug }) => {
    return { params: { slug } }
  })

  return {
    paths,
    fallback: 'blocking', // false or 'blocking'
  }
}
