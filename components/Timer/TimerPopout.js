import TimerInput from './TimerInput'
export default function TimerPopout({confirmTimeChange, checkTimeInput, timeChange, inputTime, timerStatus, toggleProductive, productive}) {
  const timerInputProps = {confirmTimeChange, checkTimeInput, timeChange, inputTime}
  return(
    <div className={`${timerStatus ? 'hidden' : 'block'} flex flex-col`}>
        <button onClick={toggleProductive} className='h-8 font-medium'>
            Switch to {productive ? 'Break' : 'Productivity'}
        </button>
        <TimerInput {...timerInputProps} />
    </div>
  )
}