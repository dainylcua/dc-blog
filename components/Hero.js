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
    <section className="w-fit">
      <div>Hi! I am</div>
      <div className="py-4">
        <div className="text-4xl md:text-5xl lg:text-7xl dark:text-rose-200">Dainyl Cua!</div>
        <button 
          className="text-2xl md:text-3xl lg:text-3xl pl-1 dark:text-rose-100 text-zinc-800 md:animate-[pulse_5s_ease-in-out_infinite] md:hover:animate-[none_1s_ease-in]"
          onClick={changeTitle}
        >{displayTitle ? displayTitle : 'An Unexpected Error'}</button>
      </div>
      <div className="text-zinc-800 dark:text-zinc-200">
        <div className="w-3/5">I love creating elegant, accessible apps that help solve problems. I primarily use the MERN stack and Jamstack, but I pick up whatever technology is needed for my clients.</div>
        <div>Check out my&nbsp;
          <span>
            <a className="underline"
              href="https://github.com/dainylcua/dc-resume/raw/main/Dainyl%20Cua%20-%20Tech%20Resume%20General.pdf" 
              target="_blank" 
              rel="noreferrer noopener"
            >
              resume
            </a>
          </span>&nbsp;and&nbsp;
          <span>
            <a className="underline" 
              href="https://dainylcua.netlify.app/" 
              target="_blank" 
              rel="noreferrer noopener"
            >
              portfolio!
            </a>
            </span>
        </div>
      </div>
    </section>
  )
}