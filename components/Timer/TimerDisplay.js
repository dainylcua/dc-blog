export default function TimerDisplay({productive, adjustStartTime, displayTime}) {
  return(
    <div className="flex flex-col items-center w-3/5 pb-4 mx-auto">
      <div>
        {productive ? 'Productive' : 'Break'} Time!
      </div>
      <div className="flex items-center justify-center w-3/5 text-2xl md:text-3xl sm:w-2/5">
        <button onClick={() => adjustStartTime(60*1000)} className="p-4">+</button>
        <div className={displayTime.hours == '0' ? 'block' : 'hidden'}>
          {`${displayTime.minutes}:${displayTime.seconds}`}
        </div>
        <div className={`${displayTime.hours == '0' ? 'hidden' : 'block'} mx-auto`}>
          {`${displayTime.hours}:${displayTime.minutes}:${displayTime.seconds}`}
        </div>
        <button onClick={() => adjustStartTime(-60*1000)} className="p-4">-</button>
      </div>
    </div>
  )
}