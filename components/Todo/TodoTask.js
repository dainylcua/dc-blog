import { useState, useEffect } from 'react'
import TodoChecklist from './TodoChecklist'
import { MdCancel } from 'react-icons/md'
import { IconContext } from 'react-icons'

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
    const itemCount = e.target.parentElement.getAttribute('id')
    console.log(e.target.parentElement)
    setChecklist((checklist) => checklist.filter((item) => item.count != itemCount))
  }

  useEffect(() => {
    setChecklist(checklist)
  }, [checklist])

  const todoChecklistProps = {checklist, handleChecklistRemove, checklistSubmit, checklistInput, inputChange}

  return(
    <div className="flex flex-col w-full px-8 py-4 shadow-lg dark:bg-zinc-800 bg-zinc-200 rounded-xl">
      <div className="flex items-center justify-between pb-4">
        <div className="overflow-hidden break-words max-w-[70%] text-left">
          {todo.value}
        </div>
        <div id={todo.count} onClick={handleRemove} className="min-w-[10%]">
          <IconContext.Provider value={{ className: "min-w-[20%] text-rose-900 hover:text-rose-500 dark:text-sky-200 dark:hover:text-sky-100 cursor-pointer mx-auto w-full", size: "2em"}} >
            <MdCancel />
          </IconContext.Provider>
        </div>
      </div>
      <div className="w-full border rounded-full border-zinc-900 dark:border-rose-200 opacity-40"></div>
      <TodoChecklist {...todoChecklistProps} />
    </div>
  )
}