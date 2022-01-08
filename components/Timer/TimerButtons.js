export default function TimerButtons({toggleTimer, resetTimer, timerStatus}) {
  return(
    <div className="flex w-1/5 justify-center mx-auto gap-x-8">
      <button onClick={toggleTimer} className="h-8 font-medium">
        {
          timerStatus ? 'Stop' : 'Start'
        }
      </button>
      <button onClick={resetTimer} className="h-8 font-medium">
        Reset
      </button>
    </div>
  )
}