import TodoChecklistInput from "./TodoChecklistInput"
import TodoChecklistItem from "./TodoChecklistItem"
export default function TodoChecklist({checklist, handleChecklistRemove, checklistSubmit, checklistInput, inputChange}) {
  const itemProps = {handleChecklistRemove}
  const inputProps = {checklistSubmit, checklistInput, inputChange}
  return(
    <div className="flex flex-col items-end">
      <div className="flex flex-col w-5/6">
      {
        checklist.map((item) => (
          <TodoChecklistItem key={item.count} {...itemProps} />
        ))
      }
      </div>
      <TodoChecklistInput {...inputProps} />    
    </div>
  )
}