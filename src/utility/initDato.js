import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(`https://graphql.datocms.com/`, {
  headers: {
    authorization: `Bearer 99ce909df3dba0e755f33ebd389d61`,
  },
})

const getAllArticles = async () => {
  const GET_ARTICLES = `{
    articles: allArticles {
        id
        slug
        title
        editorialTitle
    _status
      _firstPublishedAt
    }
  
    _allArticlesMeta {
      count
    }
  }

`
  try {
    const { articles } = await client.request(GET_ARTICLES).then((res) => res)
    return articles
  } catch (error) {
    console.log('error :>> ', error)
    return null
  }
}

const getSpecificArticle = async (slug) => {
  const GET_SPECIFIC_ARTICLE = `query getSpecificArticle($slug: String) {
        article: article(filter: {slug: {eq: $slug}}) {
          id
          slug
          title
          editorialTitle
          metatitle {
            description
            title
            twitterCard
          }
          _seoMetaTags {
            attributes
            content
            tag
          }
          _publishedAt
          description
          articleContent {
            blocks
            links
            value
          }
          backgroundcolor {
            alpha
            blue
            green
            hex
            red
          }
        }
      }
      
    `
  try {
    const { article } = await client
      .request(GET_SPECIFIC_ARTICLE, { slug })
      .then((res) => res)
      console.log('article :>> ', article);
    return article
  } catch (error) {
    console.log('error :>> ', error)
    return null
  }
}

export const dato = {
  getAllArticles,
  getSpecificArticle,
}
