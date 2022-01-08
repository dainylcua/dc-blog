export default function TodoChecklistInput({checklistSubmit, checklistInput, inputChange}) {
  return(
    <div className="self-center">
      <form onSubmit={checklistSubmit}>
      <input 
        type="text" 
        value={checklistInput} 
        onChange={inputChange} 
        placeholder="ex: Pay for candy"
        className="w-auto text-center border-b dark:bg-zinc-900 dark:border-rose-200 bg-zinc-100 border-zinc-900" 
      />
      </form>
    </div>
  )
}