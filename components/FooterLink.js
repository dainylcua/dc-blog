import Link from "next/link"

export default function FooterLink({name, href}) {
  return(
    <div className={`dark:hover:text-rose-200 hover:text-black text-zinc-500 transition-colors ease-in-out`}>
        <a href={`${href}`} target="_blank" rel="noreferrer noopener">{name}</a>
    </div>
  )
}