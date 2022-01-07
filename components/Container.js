import Footer from "./Footer"
import Nav from "./Nav"
export default function Container({children}) {
  return (
    <div className="h-screen dark:bg-zinc-900 bg-zinc-100 dark:text-white font-medium">
      <div className="flex flex-col w-4/5 md:w-3/5 lg:w-2/5 mx-auto">
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}