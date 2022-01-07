import titles from "../constants/titles"
import { useState, useEffect } from 'react'

export default function Hero() {
  const [title, setTitle] = useState(0)
  let displayTitle = titles[title]
  const changeTitle = () => {
    const rand = Math.floor(Math.random() * (titles.length))
    setTitle(rand)
  }
  return(
    <section>
      <div>Hi - I am</div>
      <div>Dainyl Cua!</div>
      <div>I am a full-stack, multi-techstack developer.</div>
      <button onClick={changeTitle} className="cursor-pointer font-medium">aka: {displayTitle ? displayTitle : 'An Unexpected Error'}</button>
    </section>
  )
}