export default function TodoTask({value}) {
  return(
    <div className="border w-full">
      <div className="break-words">
        {value}
      </div>
    </div>
  )
}