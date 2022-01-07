import Container from "../components/Container"
import Head from "next/head"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Dainyl Cua - Fullstack Dev</title>
      </Head>
      <div>
        <Hero />
      </div>
    </Container>
  )
}
