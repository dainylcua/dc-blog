import Link from "next/link"
export default function Blogpost({blogpost}) {
  return(
    <Link passHref href={`/blogposts/${blogpost.slug}`}>
      <div key={blogpost.slug} 
          className="flex flex-col items-center justify-center w-full md:w-[48%] font-bold rounded-lg shadow-xl cursor-pointer h-64 md:h-80 bg-zinc-200 dark:bg-zinc-800 md:hover:scale-110 md:transition-transform md:ease-in-out">
          <div className="flex items-center justify-center px-10 pb-6 lg:px-12 lg:pb-8">
              <a className="text-xl text-center md:text-2xl lg:text-3xl">
                {blogpost.title}
              </a>
          </div>
          <div className="w-[90%] border border-zinc-900 dark:border-rose-200 rounded-full opacity-40"></div>
          <div className="px-10 pt-6 break-words lg:px-12 lg:pt-8">
            <div className="text-center">
              {blogpost.description}
            </div>
          </div>
      </div>
    </Link>
  )
}