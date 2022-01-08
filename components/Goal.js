export default function Goal({goal}) {
  let completionDate = 'TBD'
  goal.completionStatus.completionDate ?
    completionDate = goal.completionStatus.completionDate
  :
    null
  const completionColor = completionDate === 'TBD' ? '' : 'dark:text-rose-200'
  return(
    <div className="flex h-20 gap-x-2">
      <div className={`shadow-xl bg-zinc-200 dark:bg-zinc-800 rounded-lg w-full max-w-[60%]  flex justify-center items-center text-sm md:text-md lg:text-xl font-bold`}>
        <div className={`${completionColor} p-4 text-center`}>
          {goal.goal}
        </div>
      </div>
      <div className="shadow-xl bg-zinc-200 dark:bg-zinc-800 rounded-lg min-w-[40%] flex justify-center items-center text-sm md:text-md lg:text-xl font-bold">
        <div className={`${completionColor} p-4 text-center`}>
          {completionDate}
        </div>
      </div>
    </div>
  )
}