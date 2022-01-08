import { useState, useEffect } from 'react'
import TodoChecklist from './TodoChecklist'

export default function TodoTask({todo, handleRemove}) {
  const [checklist, setChecklist] = useState([])
  const [checklistCount, setChecklistCount] = useState(todo)
  const [checklistInput, setChecklistInput] = useState('')

  const checklistSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      'value': checklistInput,
      'count': checklistCount
    }
    setChecklist(prevState => [...prevState, newItem])
    setChecklistCount(prevState => prevState+=1)
    setChecklistInput('')
  }

  const inputChange = (e) => {
    setChecklistInput(e.target.value)
  }

  const handleChecklistRemove = (e) => {
    const itemCount = e.target.getAttribute('id')
    setChecklist((checklist) => checklist.filter((item) => item.count != itemCount))
  }

  useEffect(() => {
    setChecklist(checklist)
  }, [checklist])

  const todoChecklistProps = {checklist, handleChecklistRemove, checklistSubmit, checklistInput, inputChange}

  return(
    <div className="flex flex-col w-full px-8 py-4 border">
      <div className="flex justify-between">
        <div className="break-words">
          {todo.value}
        </div>
        <div id={todo.count} onClick={handleRemove} className="w-8 border cursor-pointer">
          x
        </div>
      </div>
      <TodoChecklist {...todoChecklistProps} />
    </div>
  )
}