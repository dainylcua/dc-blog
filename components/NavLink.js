import Link from "next/link"
import { useRouter } from "next/router"

export default function NavLink({name, href}) {
  const router = useRouter()
  const isActive = router.asPath === `/${href}` ? 'dark:text-rose-200' : 'text-zinc-500'
  return(
    <div className={`dark:hover:bg-zinc-700 hover:bg-zinc-300 p-1.5 ${isActive} rounded-md transition-colors ease-in-out`}>
      <Link passHref href={`/${href}`}>
        <a>{name}</a>
      </Link>
    </div>
  )
}