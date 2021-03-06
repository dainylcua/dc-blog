/* eslint-disable react/display-name */
import { useRouter } from "next/router"
import React from "react"

const NavLink = React.forwardRef(({name, href, onClick}, ref) => {
  const router = useRouter()
  const reg = /[/][\w]+/g
  const startRoute = (router.asPath.match(reg) ? router.asPath.match(reg)[0] : "/")
  const isActive = startRoute === `${href}` ? 'dark:text-rose-200 dark:bg-zinc-800 bg-zinc-200' : 'text-zinc-500'
  return(
    <a href={href} ref={ref} onClick={onClick}>
      <div className={`dark:active:text-rose-200 dark:hover:bg-zinc-700 active:text-black dark:active:bg-zinc-700 active:bg-zinc-300 hover:bg-zinc-300 p-1.5 ${isActive} rounded-md transition-colors ease-in-out`}>
        {name}
      </div>
    </a>
  )
})

export default NavLink