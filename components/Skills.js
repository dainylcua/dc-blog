export default function Skills() {
  return(
    <section className="flex flex-col w-full py-4 gap-y-4">
      <div>I&apos;m primarily a MERN stack and Jamstack developer, but I love picking up new technologies to expand my toolset. Check out my featured ones below!</div>
      <div className="flex flex-col items-start py-4 md:flex-row md:gap-y-4">
        <ul className="flex flex-col flex-grow">
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
        <ul className="flex flex-col flex-grow">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Contentful</li>
        </ul>
        <ul className="flex flex-col flex-grow">
          <li>Python</li>
          <li>Django</li>
          <li>PostgreSQL</li>
          <li>Git</li>
        </ul>
      </div>
      <div>In addition, here are some technologies I&apos;m really dying to learn!</div>
      <div className="flex flex-col items-start py-4 md:flex-row md:gap-y-4">
        <ul className="flex flex-col flex-grow">
          <li>TypeScript</li>
          <li>Jest</li>
          <li>Material UI</li>
        </ul>
        <ul className="flex flex-col flex-grow">
          <li>Flask</li>
          <li>Rust</li>
          <li>Vue</li>
        </ul>
        <ul className="flex flex-col flex-grow"></ul>
      </div>
    </section>
  )
}