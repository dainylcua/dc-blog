import FooterLink from "./FooterLink"
export default function Footer() {
  return(
    <footer>
      <div className="flex w-full justify-between">
        <div className="flex-col">
          <FooterLink name="GitHub" href="https://github.com/dainylcua/"/>
          <FooterLink name="LinkedIn" href="https://www.linkedin.com/in/dainylcua/"/>
          <FooterLink name="Twitter" href="https://twitter.com/dainylcua"/>
        </div>
        <div className="flex-col">
          <FooterLink name="Blogpost Repository" href="https://github.com/dainylcua/dc-blog"/>
          <FooterLink name="My Portfolio" href="https://dainylcua.netlify.app/"/>
          <FooterLink name="Resume" href="https://github.com/dainylcua/dc-resume/raw/main/Dainyl%20Cua%20-%20Tech%20Resume%20General.pdf"/>
        </div>
        <div className="flex-col">
          <div>Scroll to Top</div>
          <div>Contact Me</div>
        </div>
      </div>
    </footer>
  )
}