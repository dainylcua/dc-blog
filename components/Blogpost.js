import Link from "next/link"
export default function Blogpost({blogpost}) {

  return(
    <div key={blogpost.slug} 
        className="flex flex-row md:flex-col items-center justify-center w-[48%] font-bold rounded-lg shadow-xl cursor-pointer h-80 bg-zinc-100 dark:bg-zinc-800">
      <div className="flex items-center justify-center px-16 pb-8">
        <Link passHref href={`/blogposts/${blogpost.slug}`}>
          <a className="text-center md:text-3xl">
            {blogpost.title}
          </a>
        </Link>
      </div>
      <div className="hidden md:block w-[90%] border border-zinc-900 dark:border-rose-200 rounded-full opacity-40"></div>
      <div className="px-16 pt-8 break-words">
        <div className="text-center">
          {blogpost.description}
        </div>
      </div>
    </div>
  )
}