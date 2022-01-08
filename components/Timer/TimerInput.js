export default function TimerInput({confirmTimeChange, checkTimeInput, timeChange, inputTime}) {
  return(
    <div className="flex flex-col items-center">
            <label htmlFor="productive">
              Set Timer (minutes)
            </label>
            <div>
              <input 
                className="dark:bg-zinc-900 dark:border-b border-rose-200 w-auto text-center"
                type="number" 
                name="start-time"
                onBlur={confirmTimeChange}
                onKeyDown={checkTimeInput}
                onChange={timeChange}
                value={inputTime}
              />
            </div>
          </div>
  )
}