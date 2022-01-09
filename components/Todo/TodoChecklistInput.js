export default function TodoChecklistInput({checklistSubmit, checklistInput, inputChange}) {
  return(
    <div className="self-center w-4/5">
      <form onSubmit={checklistSubmit} className="flex flex-col items-start">
        <label htmlFor="checklistInput text-left">New Task:</label>
        <input 
          type="text"
          name="checklistInput"
          value={checklistInput} 
          onChange={inputChange} 
          placeholder="ex: Pay for candy"
          className="w-full text-center border-b dark:bg-zinc-800 dark:border-rose-200 bg-zinc-200 border-zinc-900" 
        />
      </form>
    </div>
  )
}