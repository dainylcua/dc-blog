export default function TimerBar({timerColor, time, startTime}) {
  return(
    <div className="w-3/5 h-2 mx-auto bg-zinc-300 dark:bg-zinc-700">
      <div className={`h-2 ${timerColor}`} style={{width: `${(1 - time/startTime)*100}%`}}></div>
    </div>
  )
}