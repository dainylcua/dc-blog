import { useState, useEffect } from 'react'

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

  return(
    <div className="flex flex-col w-full px-8 border">
      <div className="flex justify-between">
        <div className="break-words">
          {todo.value}
        </div>
        <div id={todo.count} onClick={handleRemove} className="w-8 border cursor-pointer">
          x
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex flex-col w-5/6">
          {
            checklist.map((item) => (
              <div key={item.count} className="flex justify-between">
                <div className="break-words">
                  {item.value}
                </div>
                <div id={item.count} onClick={handleChecklistRemove} className="w-8 border cursor-pointer">
                  x
                </div>
              </div>
            ))
          }
        </div>
        <div className="self-center">
          <form onSubmit={checklistSubmit}>
          <input 
            type="text" 
            value={checklistInput} 
            onChange={inputChange} 
            placeholder="ex: Pay for candy"
            className="w-auto text-center dark:bg-zinc-900 dark:border-b border-rose-200" 
          />
          </form>
        </div>
      </div>
    </div>
  )
}