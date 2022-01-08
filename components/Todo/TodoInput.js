export default function TodoInput({handleSubmit, todoInput, inputChange}) {
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={todoInput} 
          onChange={inputChange} 
          placeholder="ex: Get candy"
          className="w-auto text-center border-b dark:bg-zinc-900 dark:border-rose-200 bg-zinc-100 border-zinc-900" 
        />
      </form>
    </div>
  )
}