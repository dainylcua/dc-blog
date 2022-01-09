import { useState, useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoTask from './TodoTask'

export default function Todo() {
  const [todos, setTodos] = useState([])
  const [todoCount, setTodoCount] = useState(0)
  const [todoInput, setTodoInput] = useState('')

  const inputChange = (e) => {
    setTodoInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      'value': todoInput,
      'count': todoCount
    }
    setTodos(prevState => [...prevState, newTodo])
    setTodoCount(prevState => prevState+=1)
    setTodoInput('')
  }

  const handleRemove = (e) => {
    const count = e.target.parentElement.getAttribute('id')
    setTodos(allTodos => allTodos.filter((todo) => todo.count != count))
  }

  useEffect(() => {
    setTodos(todos)
  }, [todos])

  const inputProps = {handleSubmit, todoInput, inputChange}


  return(
    <section className="flex flex-col items-center w-4/5 mx-auto">
      <div className="w-full text-2xl">Todo List</div>
      <div className="w-full border border-zinc-900 dark:border-rose-200 opacity-50 rounded-full h-[1.5px]"></div>
      <TodoInput {...inputProps} />
      <div className="flex flex-col items-center w-full text-center md:w-4/5 gap-y-8">
        {
          todos.length ? 
            todos.map((todo) => (
              <TodoTask key={todo.count} todo={todo} handleRemove={handleRemove}/>
            ))
          :
          'Nothing here. Try adding a Todo!'
        }
      </div>
    </section>
  )
}