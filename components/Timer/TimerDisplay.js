export default function TimerDisplay({productive, adjustStartTime, displayTime}) {
  return(
    <div className="w-3/5 mx-auto flex flex-col items-center">
    <div>
      {productive ? 'Productive' : 'Break'} Time!
    </div>
    <div className="w-2/5 flex justify-between">
      <button onClick={() => adjustStartTime(60*1000)}>+</button>
      <div className={displayTime.hours == '0' ? 'block' : 'hidden'}>
        {`${displayTime.minutes}:${displayTime.seconds}`}
      </div>
      <div className={displayTime.hours == '0' ? 'hidden' : 'block'}>
        {`${displayTime.hours}:${displayTime.minutes}:${displayTime.seconds}`}
      </div>
      <button onClick={() => adjustStartTime(-60*1000)}>-</button>
    </div>
  </div>
  )
}