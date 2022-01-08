import Container from "../components/Container"
import Head from "next/head"
import Hero from "../components/Hero"
import Featured from "../components/Featured"
import { getFeatured } from "../utils/contentful-graphql"

export const getStaticProps = async () => {
  const data = await getFeatured()
  return {
    props: {
      featured: data.blogpostCollection.items
    }
  }
}

export default function Home({featured}) {
  return (
    <Container>
      <Head>
        <title>Dainyl Cua - Fullstack Dev</title>
      </Head>
      <div>
        <Hero />
        <Featured featured={featured} />
      </div>
    </Container>
  )
}
