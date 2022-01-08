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
      'count': todoCount
    }
    setTodos(prevState => [...prevState, newTodo])
    setTodoCount(prevState => prevState+=1)
    setTodoInput('')
  }

  const handleRemove = (e) => {
    const count = e.target.getAttribute('id')
    setTodos(allTodos => allTodos.filter((todo) => todo.count != count))
  }

  useEffect(() => {
    setTodos(todos)
  }, [todos])


  return(
    <section className="flex flex-col items-center w-full mx-auto">
      <div>Todo List</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={todoInput} 
            onChange={inputChange} 
            placeholder="ex: Get candy"
            className="w-auto text-center dark:bg-zinc-900 dark:border-b border-rose-200" 
          />
        </form>
      </div>
      <div className="flex flex-col items-center w-3/5 text-center">
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