/* eslint-disable react/display-name */
import { useRouter } from "next/router"
import React from "react"

const NavLink = React.forwardRef(({name, href, onClick}, ref) => {
  const router = useRouter()
  const isActive = router.asPath === `${href}` ? 'dark:text-rose-200' : 'text-zinc-500'
  return(
    <div className={`dark:hover:bg-zinc-700 hover:bg-zinc-300 p-1.5 ${isActive} rounded-md transition-colors ease-in-out`}>
      <a href={href} ref={ref} onClick={onClick}>{name}</a>
    </div>
  )
})

export default NavLink