import { dato } from '@utility/initDato'
import React from 'react'
import { BlogPost } from '../../templates/BlogPost'

const BlogArticle = ({ slug, article }) => {
  return <BlogPost slug={slug} article={article} />
}

export default BlogArticle

export const getStaticProps = async ({ params }) => {
  const article = await dato.getSpecificArticle(params.slug)

  return {
    props: {
      slug: params.slug,
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const articles = await dato.getAllArticles()

  const paths = articles.map((article) => {
    return { params: { slug: article.slug } }
  })

  return {
    paths,
    fallback: false,
  }
}
