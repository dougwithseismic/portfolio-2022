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
        _updatedAt
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
          _updatedAt
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
    return article
  } catch (error) {
    console.log('error :>> ', error)
    return null
  }
}

const getSpecificJobSpec = async (slug) => {
  const GET_SPECIFIC_JOBSPEC = `query getSpecificJobSpec($slug: String) {
        jobspec: jobspec(filter: {slug: {eq: $slug}}) {
          id
          slug
          title
          salaryRange
          description
          location {
            name
          }

          _seoMetaTags {
            attributes
            content
            tag
          }
        }
      }
      
    `
  try {
    const { jobspec } = await client
      .request(GET_SPECIFIC_JOBSPEC, { slug })
      .then((res) => res)
    return jobspec
  } catch (error) {
    console.log('error :>> ', error)
    return null
  }
}

const getAllJobSpecs = async () => {
  const GET_ALL_JOBSPECS = `query {
        jobspecs: allJobspecs {
          id
          slug
          title
          salaryRange
          description
          location {
            name
          }

          _seoMetaTags {
            attributes
            content
            tag
          }
        }
      }
      
    `

  try {
    const { jobspecs } = await client
      .request(GET_ALL_JOBSPECS)
      .then((res) => res)
    return jobspecs
  } catch (error) {
    console.log('error :>> ', error)
    return null
  }
}

export const dato = {
  getAllArticles,
  getSpecificArticle,
  getAllJobSpecs,
  getSpecificJobSpec,
}
