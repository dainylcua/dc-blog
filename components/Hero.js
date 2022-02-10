import titles from "../constants/titles"
import { useState } from 'react'

export default function Hero() {
  const [title, setTitle] = useState(0)
  let displayTitle = titles[title]
  const changeTitle = () => {
    const rand = Math.floor(Math.random() * (titles.length))
    setTitle(rand)
  }
  return(
    <section className="w-full">
      <div className="pb-8">
        <div className="pb-2 text-5xl lg:text-7xl dark:text-rose-200">Dainyl Cua</div>
        <button 
          className="hidden md:block text-2xl lg:text-3xl dark:text-rose-100 text-zinc-800 lg:animate-[pulse_5s_ease-in-out_infinite] lg:hover:animate-[none_1s_ease-in]"
          onClick={changeTitle}
        >{displayTitle ? displayTitle : 'An Unexpected Error'}</button>
        <div className="block text-2xl lg:text-3xl dark:text-rose-100 text-zinc-800 md:hidden">{titles[0]}</div>
      </div>
      <div className="text-zinc-800 dark:text-zinc-200">
        <div className="w-4/5 pb-4">I love creating elegant, accessible apps that help solve problems. I primarily use the MERN stack and Jamstack, but I can pick up whatever technology is needed.</div>
        <div className="font-bold">Check out my&nbsp;
          <span>
            <a className="underline cursor-pointer text-sky-600 dark:text-sky-300"
              href="https://github.com/dainylcua/dc-resume/raw/main/Dainyl%20Cua%20-%20Tech%20Resume.pdf" 
              target="_blank" 
              rel="noreferrer noopener"
            >
              resume
            </a>
          </span>&nbsp;and&nbsp;
          <span>
            <a className="underline cursor-pointer text-sky-600 dark:text-sky-300"
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