import Head from "next/head"
import Container from "../components/Container"
import Biography from "../components/Biography"
import Skills from "../components/Skills"
import MyLinks from "../components/MyLinks"

export default function MyInfo() {
  return (
    <Container>
      <Head>
        <title>My Info - Dainyl Cua</title>
      </Head>
      <div className="leading-relaxed">
        <div className="text-5xl lg:text-7xl dark:text-rose-200">About Me</div>
        <Biography />
        <Skills />
        <MyLinks />
      </div>
    </Container>
  )
}
