import { useState, useEffect, useCallback } from 'react'

export default function Timer() {
  const [productive, setProductive] = useState(true)
  const [startTime, setStartTime] = useState(25*60*1000)
  const [time, setTime] = useState(25*60*1000)
  const [inputTime, setInputTime] = useState(25)
  const [displayTime, setDisplayTime] = useState({'hours': '', 'minutes': '', 'seconds': ''})
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

  const convertTime = useCallback((time) => {
    const hours = Math.floor((time/(60*60*1000)) % 60)
    const minutes = Math.floor((time/(60*1000)) % 60)
    const seconds = Math.floor((time/1000) % 60)
    const strHours = hours.toString()
    const strMinutes = ("0" + minutes.toString()).slice(-2)
    const strSeconds = ("0" + seconds.toString()).slice(-2)
    return { 'hours': strHours, 'minutes': strMinutes, 'seconds': strSeconds }
  }, [])

  const timeChange = (e) => {
    setInputTime(parseInt(e.target.value) || e.target.value)
  }

  const confirmTimeChange = (e) => {
    if(parseInt(e.target.value) !== NaN && parseInt(e.target.value) > 0 && parseInt(e.target.value) <= 24*60) {
      setStartTime(inputTime*60*1000)
    } else if(parseInt(e.target.value) >= 24*60) {
      setInputTime(24*60)
      setStartTime(24*60*60*1000)
    } else {
      setInputTime(1)
      setStartTime(1*1000)
    }
  }

  const checkTimeInput = (e) => {
    if(e.key === 'Enter') {
      confirmTimeChange(e)
      document.activeElement.blur()
      e.preventDefault()
    }
  }


  // If startTime changes, set time
  useEffect(() => {
    setTime(startTime)
  }, [startTime])
  
  // Monitors time and resets once time hits 0
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
  
  // Sets display time based on time
  useEffect(() => {
    setDisplayTime(convertTime(time))
  }, [time, convertTime])
  
  return(
    <section className="flex flex-col w-full">
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

      <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800">
        <div className={`h-2 ${timerColor}`} style={{width: `${(1 - time/startTime)*100}%`}}></div>
      </div>

      <div className="w-3/5 mx-auto flex flex-col items-center">
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
        <div className={`${timerStatus ? 'hidden' : 'block'} flex flex-col`}>
          <button onClick={toggleProductive} className='h-8 font-medium'>
              Switch to {productive ? 'Break' : 'Productivity'}
          </button>
          <div className="flex flex-col items-center">
            <label htmlFor="productive">
              Set Timer (minutes)
            </label>
            <div>
              <input 
                className="dark:bg-zinc-900 dark:border-b border-rose-200 w-auto text-center"
                type="number" 
                name="start-time"
                onBlur={confirmTimeChange}
                onKeyDown={checkTimeInput}
                onChange={timeChange}
                value={inputTime}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}