import { useState, useEffect } from 'react'

export default function Timer() {
  const [startTime, setStartTime] = useState(100)
  const [time, setTime] = useState(100)
  const [timerStatus, setTimerStatus] = useState(false)

  useEffect(() => {
    let interval = null

    if(timerStatus) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          prevTime--
        })
      }, 1000)
    }

  }, [timerStatus])


  return(
    <section className="flex flex-col w-full">
      <div className="w-full h-1 bg-zinc-200 dark:bg-zinc-800">
        <div className="dark:bg-rose-700 h-1" style={{width: `${time/startTime}%`}}></div>
      </div>
      <div className="w-3/5 mx-auto flex flex-col items-center">
        <div>
          {time}
        </div>
        <div className="flex w-1/5 justify-center mx-auto gap-x-8">
          <button onClick={() => setTimerStatus(prevStatus => !prevStatus)} className="h-8">
            {
              timerStatus ? 'Stop' : 'Start'
            }
          </button>
          <button className="h-8">
            Reset
          </button>
        </div>
      </div>
    </section>
  )
}