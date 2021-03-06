import FooterLink from "./FooterLink"
import ScrollToTop from "../ScrollToTop"
export default function Footer() {
  return(
    <footer className="pb-24">
      <div className="border border-zinc-900 dark:border-rose-200 rounded-t-full h-[1.5px]"></div>
      <div className="flex flex-col items-start w-full py-4 md:flex-row md:gap-y-4 justify-evenly">
        <div className="flex-col w-full md:w-1/3">
          <FooterLink name="GitHub" href="https://github.com/dainylcua/"/>
          <FooterLink name="LinkedIn" href="https://www.linkedin.com/in/dainylcua/"/>
          <FooterLink name="Twitter" href="https://twitter.com/dainylcua"/>
        </div>
        <div className="flex-col w-full md:w-1/3">
          <FooterLink name="Blog Repository" href="https://github.com/dainylcua/dc-blog"/>
          <FooterLink name="My Portfolio" href="https://dainylcua.netlify.app/"/>
          <FooterLink name="Resume" href="https://github.com/dainylcua/dc-resume/raw/main/Dainyl%20Cua%20-%20Tech%20Resume%20General.pdf"/>
        </div>
        <div className="flex-col w-full md:w-1/3">
          <ScrollToTop />
        </div>
      </div>
    </footer>
  )
}