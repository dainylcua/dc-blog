export default function Skills() {
  return(
    <section className="flex flex-col w-full">
      <div>Skills</div>
      <div>I&apos;m primarily a MERN stack and Jamstack developer, but I love picking up new technologies to expand my toolset. Check out my feature ones below!</div>
      <div className="flex">
        <ul className="flex flex-col">
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
        <ul className="flex flex-col">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Contentful</li>
        </ul>
        <ul className="flex flex-col">
          <li>Python</li>
          <li>Django</li>
          <li>PostgreSQL</li>
          <li>Git</li>
        </ul>
      </div>
      <div>In addition, here are some technologies I&apos;m really dying to learn!</div>
      <div className="flex">
        <ul>
          <li>TypeScript</li>
          <li>Jest</li>
          <li>Material UI</li>
        </ul>
        <ul>
          <li>Flask</li>
          <li>Rust</li>
          <li>Vue</li>
        </ul>
      </div>
    </section>
  )
}