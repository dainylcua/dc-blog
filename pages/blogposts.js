import Head from "next/head"
import Container from "../components/Container"
import Header from "../components/Header"
import { getBlogposts } from "../utils/contentful-graphql"
import Blogpost from "../components/Blogpost"

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
      <Header>Blogposts</Header>
      <div>I&apos;m beginning a blog! I will usually post tips and tricks or my learnings on a subject once a week. Check out all my blogposts below.</div>
      <div>Filter to go here</div>
      <div className="flex flex-col lg:justify-between md:flex-row md:flex-wrap gap-x-8 gap-y-8">
        {
          blogposts.map((blogpost) => (
            <Blogpost key={blogpost.slug} blogpost={blogpost} />
          ))
        }
      </div>
    </Container>
  )
}
