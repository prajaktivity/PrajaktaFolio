import { useTheme } from "../context/ThemeContext"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  console.log("Current theme:", theme)
  return (
    <nav
      className="
        fixed top-0 z-50 w-full border-b
        bg-emerald-50/80 text-zinc-900 backdrop-blur
        dark:bg-zinc-950/80 dark:text-zinc-100
        border-zinc-200 dark:border-zinc-800
      "
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <span className="font-semibold text-zinc-900 dark:text-zinc-100">
  Prajakta
</span>


        <div className="flex items-center gap-6 text-sm">
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>

          <button onClick={toggleTheme}>
  {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
</button>

        </div>
      </div>
    </nav>
  )
}
