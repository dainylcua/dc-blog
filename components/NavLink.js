import Link from "next/link";

export default function NavLink({name, href}) {
  return(
    <div>
      <Link passHref href={`/${href}`}>
        <a>{name}</a>
      </Link>
    </div>
  )
}