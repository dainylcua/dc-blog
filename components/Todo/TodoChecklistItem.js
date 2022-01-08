
export default function TodoChecklistItem({checklist, handleChecklistRemove}) {
  return(
    <div className="flex flex-col w-5/6">
      {
        checklist.map((item) => (
          <div key={item.count} className="flex justify-between">
            <div className="break-words">
              {item.value}
            </div>
            <div id={item.count} onClick={handleChecklistRemove} className="w-8 border cursor-pointer">
              x
            </div>
          </div>
        ))
      }
  </div>
  )
}