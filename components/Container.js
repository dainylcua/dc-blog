import Footer from "./Footer/Footer"
import Nav from "./Nav/Nav"
import DarkToggle from "./DarkToggle"
export default function Container({children}) {
  return (
    <div className="h-full min-h-screen font-normal leading-relaxed transition-colors ease-in-out dark:bg-zinc-900 bg-zinc-100 dark:text-zinc-300 dark:selection:bg-rose-900 dark:selection:text-rose-100">
      <div className="flex flex-col w-4/5 mx-auto md:w-[50rem]">
        <Nav />
        <main className="relative py-12">
          {children}
        <DarkToggle />
        </main>
        <Footer />
      </div>
    </div>
  )
}