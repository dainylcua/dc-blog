export default function TodoInput({handleSubmit, todoInput, inputChange}) {
  return(
    <div className="w-4/5 py-8">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">New Todo:</label>
        <input 
          type="text"
          name="todoInput"
          value={todoInput} 
          onChange={inputChange} 
          placeholder="ex: Buy candy"
          className="w-full text-center border-b dark:bg-zinc-900 dark:border-rose-200 bg-zinc-100 border-zinc-900" 
        />
      </form>
    </div>
  )
}