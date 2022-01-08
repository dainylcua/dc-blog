import { useState, useEffect } from 'react'

export default function Timer() {
  const [productive, setProductive] = useState(true)
  const [startTime, setStartTime] = useState(1000000)
  const [time, setTime] = useState(1000000)
  const [timerColor, setTimerColor] = useState('')
  const [timerStatus, setTimerStatus] = useState(false)

  useEffect(() => {
    let interval = null

    if(timerStatus) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime-=1000)
      }, 1000)
      setTimerColor('dark:bg-rose-500 bg-lime-500')
    } else {
      clearInterval(interval)
      setTimerColor('dark:bg-sky-500 bg-amber-500')
    }

    // Cleanup function (prevents memory leaks)
    return () => clearInterval(interval)
  }, [timerStatus, timerColor])

  const toggleTimer = () => {
    setTimerStatus(prevStatus => !prevStatus)
  }

  const resetTimer = () => {
    setTime(startTime)
    setTimerStatus(false)
  }

  const toggleProductive = () => {
    setProductive(prevProductive => !prevProductive)
    resetTimer()
  }


  return(
    <section className="flex flex-col w-full">
      <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800">
        <div className={`h-1 ${timerColor}`} style={{width: `${time/startTime}%`}}></div>
      </div>
      <div className="w-3/5 mx-auto flex flex-col items-center">
        <div>
          {productive ? 'Productive' : 'Break'} Time!
        </div>
        <div>
          {time}
        </div>
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
        <div className={timerStatus ? 'hidden' : 'block'}>
          <button onClick={toggleProductive} className='h-8 font-medium'>
              Switch to {productive ? 'Break' : 'Productive'}
          </button>
        </div>
      </div>
    </section>
  )
}