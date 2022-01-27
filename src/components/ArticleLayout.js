import React from 'react'
import { Layout } from '@components/Layout'
import { motion } from 'framer-motion'

export const ArticleLayout = ({ meta, children }) => {
  const Lines = ({ columns = 12 }) => (
    <div className="lines absolute w-full h-full pointer-events-none">
      <div className={`container grid grid-cols-${columns} h-full gap-2`}>
        {[...Array(columns)].map((_, i) => (
          <div key={i} className="line col-span-1 bg-cardGrey opacity-[0.02]" />
        ))}
      </div>
    </div>
  )

  return (
    <Layout title="Home">
      {/* <Lines columns={12} /> */}
      <section id="hero" className="md:mt-32  ">
        <div className="container z-20 flex flex-col">
          <div className="hero px-4 ">
            <motion.h1
              animate={{ opacity: 1 }}
              className="text-6xl m-0 md:text-jumbo max-w-6xl translate-x-2 z-10"
            >
              {meta.title}
            </motion.h1>
            <div className="text-2xl max-w-3xl py-16">
              <p className="md:indent-32">{meta.synopsis}</p>
            </div>
          </div>
          <article className="text-2xl grid grid-cols-12">
              <div className="article col-start-3 col-end-10 text-2xl">
              {children}

              </div>
          </article>
        </div>
      </section>

    </Layout>
  )
}

export default ArticleLayout
