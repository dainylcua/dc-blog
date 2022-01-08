import Blogpost from "./Blogpost"
import Link from "next/link"

export default function Featured({featured}) {
  return (
    <div className="flex flex-col py-16">
      <div className="pb-8 text-3xl lg:text-5xl dark:text-rose-200">Featured Posts</div>
      <div className="flex flex-col lg:justify-between md:flex-row md:flex-wrap gap-x-8 gap-y-8">
        {
          featured.map((blogpost) => (
            <Blogpost key={blogpost.slug} blogpost={blogpost} />
          ))
        }
      </div>
      <div className="pt-4">
        <Link href="/blogposts">
          <a className="cursor-pointer">
            Read all posts &rarr;
          </a>
        </Link>
      </div>
    </div>
  )
}
