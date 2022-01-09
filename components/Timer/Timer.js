import { useState, useEffect, useCallback } from 'react'
import TimerBar from './TimerBar'
import TimerButtons from './TimerButtons'
import TimerDisplay from './TimerDisplay'
import TimerPopout from './TimerPopout'

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
      setStartTime(1*60*1000)
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
        const audio = new Audio("/mixkit-short-rooster-crowing-2470.wav")
        audio.play()
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

  const timerProps = {time, startTime, timerColor}
  const timerButtonProps = {toggleTimer, resetTimer, timerStatus}
  const timerDisplayProps = {productive, adjustStartTime, displayTime}
  const timerPopoutProps = {confirmTimeChange, checkTimeInput, timeChange, inputTime, timerStatus, toggleProductive, productive}
  
  return(
    <section className="flex flex-col w-full">
      <div className="w-4/5 py-8 mx-auto text-lg md:text-3xl dark:bg-zinc-800 bg-zinc-200 rounded-xl">
        <TimerDisplay {...timerDisplayProps} />
        <TimerBar {...timerProps}/>
        <TimerButtons {...timerButtonProps} />
      </div>
      <div className="flex flex-col items-center w-3/5 py-8 mx-auto">
        <TimerPopout {...timerPopoutProps} />
      </div>
    </section>
  )
}