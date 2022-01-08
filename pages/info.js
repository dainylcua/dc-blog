import Head from "next/head"
import Container from "../components/Container"
import Biography from "../components/Biography"
import Skills from "../components/Skills"
import MyLinks from "../components/MyLinks"
import Header from "../components/Header"

export default function MyInfo() {
  return (
    <Container>
      <Head>
        <title>My Info - Dainyl Cua</title>
      </Head>
      <div className="leading-relaxed">
        <Header>Info</Header>
        <Biography />
        <Skills />
        <MyLinks />
      </div>
    </Container>
  )
}
