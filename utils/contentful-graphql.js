import { GraphQLClient, gql } from "graphql-request"
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`
const client = new GraphQLClient(CONTENTFUL_URL, {
  headers: {
    authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
})

export const getFeatured = async () => {
  const featuredQuery = gql`
    {
      blogpostCollection(where: {featured: true}) {
        items {
          title
          slug
          description
        }
      }
    }
  `
  return client.request(featuredQuery)
}

export const getGoals = async () => {
  const goalsQuery = gql`
    {
      goalsCollection {
        items {
          goal
          completionStatus
        }
      }
    }
  `
  return client.request(goalsQuery)
}

export const getBlogposts = async () => {
  const blogpostsQuery = gql`
  {
    blogpostCollection {
      items {
        title
        slug
        description
        contentfulMetadata {
          tags {
            name
          }
        }
      }
    }
  }
  `
  return client.request(blogpostsQuery)
}

export const getBlogpost = async (slug) => {
  const blogpostQuery = gql`
    query blogpostQuery($slug: String) {
      blogpostCollection(where: {slug: $slug}, limit: 1) {
        items {
          title
          slug
          content
          contentfulMetadata {
            tags {
              name
            }
          }
        }
      }
    }
  `
  const variables = {
    slug
  }
  return client.request(blogpostQuery, variables)
}