import Navbar from "./components/Navbar"
 import Hero from "./components/Hero"
 import Skills from "./components/Skill"
 import Projects from "./components/Project"
 import Experience from "./components/Experience"

export default function App() {
  return (
    <main
      className="
        min-h-screen transition-colors duration-500
        bg-[linear-gradient(120deg,#fde2e4,#e0f2fe)]
        dark:bg-[linear-gradient(120deg,#0a1020,#0f172a)]
        text-zinc-900 dark:text-zinc-100
      "
    >
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </main>
  )
}
