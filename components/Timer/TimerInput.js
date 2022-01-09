export default function TimerInput({confirmTimeChange, checkTimeInput, timeChange, inputTime}) {
  return(
    <div className="flex flex-row items-center w-full">
            <label htmlFor="productive" className="w-1/3">
              Timer (min)
            </label>
            <div className="w-2/3">
              <input 
                className="w-full text-center border-b dark:bg-zinc-900 dark:border-rose-200 bg-zinc-100 border-zinc-900"
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