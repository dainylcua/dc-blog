import Head from "next/head"
import Container from "../components/Container"
import { getBlogposts } from "../utils/contentful-graphql"
import Link from "next/link"



export const getStaticProps = async () => {
  const data = await getBlogposts()
  return {
    props: {
      blogposts: data.blogpostCollection.items
    }
  }
}


export default function BlogPosts({blogposts}) {
  return (
    <Container>
      <Head>
        <title>Blogposts - Dainyl Cua</title>
      </Head>
      <div>
        {
          blogposts.map((blogpost) => (
            <div key={blogpost.slug}>
              <Link href={`/blogposts/${blogpost.slug}`}>
              <a>
                {blogpost.title}
              </a>
              </Link>
            </div>
          ))
        }
      </div>
    </Container>
  )
}
