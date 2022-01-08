export default function TodoChecklistItem({handleChecklistRemove, item}) {
  return(
    <div className="flex justify-between">
      <div className="break-words">
        {item.value}
      </div>
      <div id={item.count} onClick={handleChecklistRemove} className="w-8 border cursor-pointer">
        x
      </div>
    </div>
  )
}