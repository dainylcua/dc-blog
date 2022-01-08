import { useState, useEffect, useCallback } from 'react'

export default function Timer() {
  const [productive, setProductive] = useState(true)
  const [startTime, setStartTime] = useState(10000)
  const [time, setTime] = useState(10000)
  const [timerColor, setTimerColor] = useState('')
  const [timerStatus, setTimerStatus] = useState(false)
  
  const toggleTimer = () => {
    setTimerStatus(prevStatus => !prevStatus)
  }
  
  const resetTimer = useCallback(() => {
    setTime(startTime)
    setTimerStatus(false)
  }, [startTime])
  
  const toggleProductive = useCallback(() => {
    setProductive(prevProductive => !prevProductive)
    resetTimer()
  }, [resetTimer])

  const adjustStartTime = (modifier) => {
    if(!(time + modifier <= 0))
    setStartTime(prevStartTime => prevStartTime += modifier)
  }

  useEffect(() => {
    setTime(startTime)
  }, [startTime])
  
  useEffect(() => {
    let interval = null

    if(timerStatus && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime-=1000)
      }, 1000)
      setTimerColor('dark:bg-rose-500 bg-lime-500')
    } else {
      if(time <= 0) {
        setTimerStatus(false)
        resetTimer()
        toggleProductive()
      }
      clearInterval(interval)
      setTimerColor('dark:bg-sky-500 bg-amber-500')
    }

    // Cleanup function (prevents memory leaks)
    return () => clearInterval(interval)
  }, [timerStatus, timerColor, time, resetTimer, toggleProductive])
  
  
  return(
    <section className="flex flex-col w-full">
      <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800">
        <div className={`h-2 ${timerColor}`} style={{width: `${(1 - time/startTime)*100}%`}}></div>
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
          <div>
            <label htmlFor="productive">
              Set Timer (minutes)
            </label>
            <div>
              <button onClick={() => adjustStartTime(1000)}>+</button>
              <input 
                className="dark:bg-zinc-900 dark:border-b border-rose-200 w-8"
                type="number" 
                name="start-time"
              />
              <button onClick={() => adjustStartTime(-1000)}>-</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}