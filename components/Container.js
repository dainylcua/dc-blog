import Footer from "./Footer/Footer"
import Nav from "./Nav/Nav"
export default function Container({children}) {
  return (
    <div className="h-full min-h-screen font-normal leading-relaxed dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300">
      <div className="flex flex-col w-4/5 mx-auto lg:w-[50rem]">
        <Nav />
        <main className="py-12">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}