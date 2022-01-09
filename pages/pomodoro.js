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
      <Header>Pomodoro</Header>
      <div>An barebones timer to help with the Pomodoro Technique. I use this a lot when I need to really focus on a task. Check out the Pomodro Technique&nbsp;
        <a className="underline cursor-pointer text-sky-600 dark:text-sky-300"
          target="_blank" 
          rel="noreferrer noopener" 
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        >
          here!
        </a>
      </div>
      <div>
        <Timer />
        <Todo />
      </div>
    </Container>
  )
}
