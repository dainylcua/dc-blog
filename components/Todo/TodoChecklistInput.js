
export default function TodoChecklistInput({checklistSubmit, checklistInput, inputChange}) {
  return(
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
  )
}