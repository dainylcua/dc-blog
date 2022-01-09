import TodoChecklistInput from "./TodoChecklistInput"
import TodoChecklistItem from "./TodoChecklistItem"
export default function TodoChecklist({checklist, handleChecklistRemove, checklistSubmit, checklistInput, inputChange}) {
  const itemProps = {handleChecklistRemove}
  const inputProps = {checklistSubmit, checklistInput, inputChange}
  return(
    <div className="flex flex-col w-full pt-4">
      <div className="flex flex-col w-5/6 pb-4 mx-auto gap-y-2">
      {
        checklist.map((item) => (
          <TodoChecklistItem key={item.count} item={item} {...itemProps} />
        ))
      }
      </div>
      <TodoChecklistInput {...inputProps} />    
    </div>
  )
}