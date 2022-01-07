import { SiGithub, SiLinkedin, SiTwitter  } from "react-icons/si"
import { IconContext } from "react-icons/lib"

export default function Nav() {
  return(
    <nav className="h-auto">
      <div className="flex justify-between px-12 py-4">
        <div className="flex justify-between w-3/5">
          <div>Home</div>
          <div>Blogposts</div>
          <div>Goals</div>
          <div>Timer</div>
          <div>My Info</div>
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