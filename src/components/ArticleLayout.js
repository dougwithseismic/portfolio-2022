import React from 'react'
import { Layout } from '@components/Layout'

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
      <section id="article__title">
        <div className="container">
          <div className="heading">
            <h2 className="text-jumbo">{meta.title}</h2>
          </div>
        </div>
        <div className="container grid grid-cols-12 mt-16">
          <aside className="col-span-3"></aside>
          <article className="article col-start-4 col-span-7">
            <div id="synopsis" className="text-2xl leading-[190%]">
              {meta.synopsis}
            </div>
            <div className="article__body mt-16" id="articleBody">
              {children}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default ArticleLayout
