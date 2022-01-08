export default function Biography() {
  return(
    <section className="flex flex-col w-full gap-y-4">
      <div className="text-5xl lg:text-7xl dark:text-rose-200">About Me</div>
      <div className="text-">Hello again! I&apos;m Dainyl Cua, and I love developing elegant, accessible, and useful tools for many. I started my coding journey helping my sister with her HTML and CSS on her profile page for ToonTownCentral - a forum page for our one of our favorite games. </div>
      <div>I graduated from <span className="underline text-sky-600 dark:text-sky-300"><a className="cursor-pointer" target="_blank" rel="noreferrer noopener" href="https://www.tamu.edu/">Texas A&amp;M University</a></span>  in 2020 and learned to code in MATLAB for my numerical analysis class. Shortly after graduating, I started a consulting job which unfortunately fell through - but after that, I decided to pursue my true passion: coding.</div>
      <div>In April 2021 I started my software development journey and strengthened my fundamentals. In September, I joined <span className="underline text-sky-600 dark:text-sky-300"><a className="cursor-pointer" target="_blank" rel="noreferrer noopener" href="https://generalassemb.ly/">General Assembly&apos;s</a></span> Software Engineering Bootcamp and began developing 8-10 hours a day in multiple languages and tech stacks.</div>
    </section>
  )
}