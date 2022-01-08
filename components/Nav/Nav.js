import { SiGithub, SiLinkedin, SiTwitter  } from "react-icons/si"
import { IconContext } from "react-icons/lib"
import NavLink from "./NavLink"
import Link from "next/link"

export default function Nav() {
  return(
    <nav className="h-auto">
      <div className="flex justify-between py-4">
        <div className="flex justify-between w-2/3">
          <Link href="/" passHref>
            <NavLink name="Home"/>
          </Link>
          <Link href="/blogposts" passHref>
            <NavLink name="Blogposts"/>
          </Link>
          <Link href="/goals" passHref>
            <NavLink name="Goals"/>
          </Link>
          <Link href="/pomodoro" passHref>
            <NavLink name="Pomodoro"/>
          </Link>
          <Link href="/info" passHref>
            <NavLink name="Info"/>
          </Link>
        </div>
        <div className="w-1/5 self-center pr-4">
            <IconContext.Provider value={{ className: "text-zinc-900 hover:text-zinc-500 dark:text-rose-200 dark:hover:text-rose-100 cursor-pointer ", size: "1.5em"}}>
              <div className="flex justify-between">
                <a href="https://github.com/dainylcua/">
                </a>
                  <SiGithub />
                <a href="https://www.aedin.com/in/dainylcua/">
                  <SiLinkedin />
                </a>
                <a href="https://twitter.com/dainylcua">
                  <SiTwitter />
                </a>
              </div>
            </IconContext.Provider>
        </div>
      </div>
      <div className="border border-zinc-900 dark:border-rose-200 rounded-b-full h-[1.5px]"></div>
    </nav>
  )
}