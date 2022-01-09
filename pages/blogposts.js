import Head from "next/head"
import Container from "../components/Container"
import Header from "../components/Header"
import { getBlogposts, getTags } from "../utils/contentful-graphql"
import Blogpost from "../components/Blogpost"
import Filter from "../components/Filter"
import { useState, useEffect } from 'react'


export const getStaticProps = async () => {
  const data = await getBlogposts()
  const tags = await getTags()
  return {
    props: {
      blogposts: data.blogpostCollection.items,
      tags: tags.tagPostCollection.items[0].contentfulMetadata.tags
    }
  }
}

export default function BlogPosts({blogposts, tags}) {
  const [filters, setFilters] = useState([])

  const onClick = (e) => {
    const filterName = e.target.textContent
    if(filters.includes(filterName)) {
      setFilters(filters.filter((filter) => filter != filterName))
    } else {
      setFilters((prevState) => [...prevState, filterName])
    }
  }

  const filterProps = {filters, setFilters, onClick, tags}

  return (
    <Container>
      <Head>
        <title>Blogposts - Dainyl Cua</title>
      </Head>
      <Header>Blogposts</Header>
      <div>I&apos;m beginning a blog! I will usually post tips and tricks or my learnings on a subject once a week. Check out all my blogposts below.</div>
      <Filter {...filterProps} />
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
