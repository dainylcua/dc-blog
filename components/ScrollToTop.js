export default function ScrollToTop() {
  return(
    <div className="py-1">
        <a className={`dark:hover:text-rose-200 hover:text-black text-zinc-500 transition-colors ease-in-out cursor-pointer`} 
          onClick={ e => window.scrollTo(0,0)}>
          Scroll To Top
        </a>
    </div>
  )
}