import { useState, useEffect } from 'react'
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
      'checklist': [],
      'count': todoCount
    }
    setTodos(prevState => [...prevState, newTodo])
    setTodoCount(prevState => prevState+=1)
    setTodoInput('')
  }

  useEffect(() => {
    setTodos(todos)
  }, [todos])

  return(
    <section className="flex flex-col w-full mx-auto items-center">
      <div>Todo List</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={todoInput} 
            onChange={inputChange} 
            placeholder="ex: Get candy"
            className="dark:bg-zinc-900 dark:border-b border-rose-200 w-auto text-center" 
          />
        </form>
      </div>
      <div className="flex flex-col items-center w-3/5 text-center">
        {
          todos.length ? 
            todos.map((todo) => (
              <TodoTask key={todo.count} value={todo.value}/>
            ))
          :
          'Nothing here. Try adding a Todo!'
        }
      </div>
    </section>
  )
}