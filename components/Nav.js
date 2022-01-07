import { SiGithub, SiLinkedin, SiTwitter  } from "react-icons/si"
import { IconContext } from "react-icons/lib"
import NavLink from "./NavLink"
import Link from "next/link"

export default function Nav() {
  return(
    <nav className="h-auto">
      <div className="flex justify-between py-4">
        <div className="flex justify-between w-3/5">
          <NavLink name="Home" href=""/>
          <NavLink name="Blogposts" href="blogposts"/>
          <NavLink name="Goals" href="goals"/>
          <NavLink name="Pomodoro" href="pomodoro"/>
          <NavLink name="My Info" href="my-info"/>
        </div>
        <div className="w-1/5 self-center pr-4">
            <IconContext.Provider value={{ className: "text-zinc-900 hover:text-zinc-500 dark:text-rose-200 dark:hover:text-rose-100 cursor-pointer ", size: "1.5em"}}>
              <div className="flex justify-between">
                <Link passHref href="https://github.com/dainylcua/">
                  <SiGithub />
                </Link>
                <Link passHref href="https://www.linkedin.com/in/dainylcua/">
                  <SiLinkedin />
                </Link>
                <Link passHref href="https://twitter.com/dainylcua">
                  <SiTwitter />
                </Link>
              </div>
            </IconContext.Provider>
        </div>
      </div>
      <div className="border border-zinc-900 dark:border-rose-200 rounded-b-full h-[1.5px]"></div>
    </nav>
  )
}