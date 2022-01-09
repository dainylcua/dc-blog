import { MdDarkMode, MdLightMode } from "react-icons/md"
import { IconContext } from "react-icons/lib"
import { useEffect, useState } from "react"

export default function DarkToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if(typeof window !== 'undefined') {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          setIsDark(true)
          document.documentElement.classList.add('dark')
        } else {
          setIsDark(false)
          document.documentElement.classList.remove('dark')
        }
    }
  }, [])

  useEffect(() => {
    if(typeof window !== 'undefined') {
      if(isDark) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
      }
    }
  }, [isDark])

  return(
    <div className="absolute p-4 top-4 right-4">
      <button onClick={() => setIsDark((prev) => !prev)}>
        <IconContext.Provider value={{ className: "text-rose-900 hover:text-rose-500 dark:text-sky-200 dark:hover:text-sky-100 cursor-pointer ", size: "2.5em"}}>
          {
            isDark ?
              <MdDarkMode />
            :
              <MdLightMode />
          }
        </IconContext.Provider>
      </button>
    </div>
  )
}