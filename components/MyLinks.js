export default function MyLinks() {
  return(
    <section className="flex flex-col w-full py-4 gap-y-4">
      <div>Want to contact me? You can find me on <a className="underline cursor-pointer text-sky-600 dark:text-sky-300" target="_blank" rel="noreferrer noopener" href="https://github.com/dainylcua/"> GitHub</a>, <a className="underline cursor-pointer text-sky-600 dark:text-sky-300" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/dainylcua/"> LinkedIn</a>, and <a className="underline cursor-pointer text-sky-600 dark:text-sky-300" target="_blank" rel="noreferrer noopener" href="https://twitter.com/dainylcua"> Twitter</a>.</div>
      <div>Check out my&nbsp;
        <span>
          <a className="underline cursor-pointer text-sky-600 dark:text-sky-300"
            href="https://github.com/dainylcua/dc-resume/raw/main/Dainyl%20Cua%20-%20Tech%20Resume%20General.pdf" 
            target="_blank" 
            rel="noreferrer noopener"
          >
            resume
          </a>
        </span>&nbsp;and&nbsp;
        <span>
          <a className="underline cursor-pointer text-sky-600 dark:text-sky-300"
            href="https://dainylcua.netlify.app/" 
            target="_blank" 
            rel="noreferrer noopener"
          >
            portfolio!
          </a>
          </span>
      </div>
    </section>
  )
}