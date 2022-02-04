/* eslint-disable react/no-unescaped-entities */
import { SignupForm } from '@components/ContactForm'
import { LinkedIn, Twitter } from '@components/Icons'
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
  const { title, _seoMetaTags, description, salaryRange, location, tags } = jobspec
  const { siteDomain } = siteSettings
  const { asPath } = useRouter()
  const url = `${siteDomain}${asPath}`

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
                  <button className="btn btn-primary p-2 my-4 bg-brightOrange w-full md:max-w-xs font-bold uppercase font-sans text-2xl">
                    Apply Now
                  </button>
                  <div className="social flex h-2 gap-4">
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
