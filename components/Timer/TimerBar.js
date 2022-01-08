export default function TimerBar({timerColor, time, startTime}) {
  return(
    <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800">
      <div className={`h-2 ${timerColor}`} style={{width: `${(1 - time/startTime)*100}%`}}></div>
    </div>
  )
}