export default function TimerBar({timerColor, time, startTime}) {
  return(
    <div className="w-3/5 h-2 bg-zinc-200 dark:bg-zinc-800 mx-auto">
      <div className={`h-2 ${timerColor}`} style={{width: `${(1 - time/startTime)*100}%`}}></div>
    </div>
  )
}