export default function FooterLink({name, href}) {
  return(
    <div className="py-1">
        <a className={`dark:hover:text-rose-200 hover:text-black text-zinc-500 transition-colors ease-in-out`} 
          href={`${href}`} 
          target="_blank" 
          rel="noreferrer noopener">
            {name}
        </a>
    </div>
  )
}