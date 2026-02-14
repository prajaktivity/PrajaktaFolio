import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skill'
import Projects from './components/Project'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <main
      className="
        min-h-screen transition-colors duration-500
        bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100
        dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-800
        text-slate-900 dark:text-slate-100
      "
    >
      <Navbar />
      <div className="pt-20 pb-24">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
