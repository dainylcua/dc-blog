export default function TimerInput({confirmTimeChange, checkTimeInput, timeChange, inputTime}) {
  return(
    <div className="flex flex-col items-center">
            <label htmlFor="productive">
              Set Timer (minutes)
            </label>
            <div>
              <input 
                className="w-auto text-center border-b dark:bg-zinc-900 dark:border-rose-200 bg-zinc-100 border-zinc-900"
                type="number" 
                name="start-time"
                onBlur={confirmTimeChange}
                onKeyDown={checkTimeInput}
                onChange={timeChange}
                value={inputTime}
                placeholder="ex: 10"
              />
            </div>
          </div>
  )
}