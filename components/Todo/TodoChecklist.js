import TodoChecklistInput from "./TodoChecklistInput"
import TodoChecklistItem from "./TodoChecklistItem"
export default function TodoChecklist({checklist, handleChecklistRemove, checklistSubmit, checklistInput, inputChange}) {
  const itemProps = {checklist, handleChecklistRemove}
  const inputProps = {checklistSubmit, checklistInput, inputChange}
  return(
    <div className="flex flex-col items-end">
        <TodoChecklistItem {...itemProps} />
        <TodoChecklistInput {...inputProps} />    
    </div>
  )
}