import { SiGithub, SiLinkedin, SiTwitter  } from "react-icons/si"
import { IconContext } from "react-icons/lib"
import NavLink from "./NavLink"

export default function Nav() {
  return(
    <nav className="h-auto">
      <div className="flex justify-between px-12 py-4">
        <div className="flex justify-between w-3/5">
          <NavLink name="Home" href=""/>
          <NavLink name="Blogposts" href="blogposts"/>
          <NavLink name="Goals" href="goals"/>
          <NavLink name="Pomodoro" href="pomodoro"/>
          <NavLink name="My Info" href="my-info"/>
        </div>
        <div className="self-end w-1/5">
            <IconContext.Provider value={{ className: "text-zinc-900 dark:text-rose-200", size: "1.5em"}}>
              <div className="flex justify-between">
                <SiGithub />
                <SiLinkedin />
                <SiTwitter />
              </div>
            </IconContext.Provider>
        </div>
      </div>
      <div className="border border-zinc-900 dark:border-rose-200 rounded-b-full h-[1.5px]"></div>
    </nav>
  )
}