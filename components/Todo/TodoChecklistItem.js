import { IconContext } from "react-icons/lib"
import { MdCancel } from "react-icons/md"
export default function TodoChecklistItem({handleChecklistRemove, item}) {
  return(
    <div className="flex justify-between py-2">
      <div className="overflow-hidden break-words max-w-[70%] text-left">
        {item.value}
      </div>
      <div id={item.count} onClick={handleChecklistRemove} className="min-w-[10%]">
        <IconContext.Provider value={{ className: "min-w-[20%] text-rose-900 hover:text-rose-500 dark:text-sky-200 dark:hover:text-sky-100 cursor-pointer mx-auto w-full", size: "1.5em"}} >
          <MdCancel />
        </IconContext.Provider>
      </div>
    </div>
  )
}