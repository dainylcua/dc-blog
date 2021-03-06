export default function Filter({tags, filters, onClick}){
  const inactiveColor = 'bg-zinc-200 dark:bg-zinc-800'
  const activeColor = 'bg-zinc-300 dark:bg-zinc-700'

  return(
    <div className="w-full py-12">
      <div>Filter posts by tag:</div>
      <div className="flex flex-row items-center w-full h-16 overflow-auto gap-x-2">
        {
          tags.map((tag) => (
            <button 
              key={tag.name} 
              onClick={onClick}
              className={`py-1 px-2 w-fit whitespace-nowrap h-fit shadow-lg ${filters.includes(tag.name) ? activeColor : inactiveColor}`}>
              {tag.name}
            </button>
          ))
        }
      </div>
    </div>
  )
}