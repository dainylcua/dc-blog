export default function TodoInput({handleSubmit, todoInput, inputChange}) {
  return(
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
  )
}