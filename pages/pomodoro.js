import Head from "next/head"
import Container from "../components/Container"
import Timer from "../components/Timer/Timer"
import Todo from "../components/Todo/Todo"
import Header from "../components/Header"

export default function Pomodoro() {
  return (
    <Container>
      <Head>
        <title>Pomodoro Timer - Dainyl Cua</title>
      </Head>
      <div>
        <Timer />
        <Todo />
      </div>
      <Header>Pomodoro</Header>
    </Container>
  )
}
