import Container from "../components/Container"
import Timer from "../components/Timer/Timer"
import Todo from "../components/Todo/Todo"

export default function Pomodoro() {
  return (
    <Container>
      <Timer />
      <Todo />
    </Container>
  )
}
