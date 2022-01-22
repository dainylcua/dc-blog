import Head from "next/head"
import { getBlogpost, getBlogposts } from "../../../utils/contentful-graphql"
import Container from "../../../components/Container"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export const getStaticPaths = async () => {
  const data = await getBlogposts()
  data.blogpostCollection.items.map((blogpost) => ({ params: { blogpost: blogpost.slug }}))

  return {
    fallback: false,
    paths: data.blogpostCollection.items.map((blogpost) => ({ params: { slug: blogpost.slug }})),
  }
}

export const getStaticProps = async (context) => {
  const data = await getBlogpost(context.params.slug)

  return {
    props: {
      blogpost: data.blogpostCollection.items[0]
    }
  }
}

const blogpostStyling = "prose prose-lg lg:prose-xl prose-zinc dark:prose-invert dark:prose-h1:text-rose-200 dark:prose-h2:text-rose-200 dark:prose-h3:text-sky-200 prose-img:rounded-lg hover:prose-a:text-zinc-500 dark:prose-a:text-rose-400 hover:dark:prose-a:text-rose-200"

export default function Blogpost({blogpost}) {
  return(
    <Container>
      <Head>
      <title>{blogpost.title} - Dainyl Cua</title>
      </Head>
      <div>
        <article className={blogpostStyling}>
          <ReactMarkdown>
            {blogpost.content}
          </ReactMarkdown>
        </article>
      </div>
    </Container>
  )


}