import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import img from '../assets/IMG_1208-modified.png'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-[100]
        backdrop-blur-md transition-colors duration-300
        bg-white/80 border-b border-slate-200
        dark:bg-slate-950/90 dark:border-slate-800
        text-slate-900 dark:text-slate-100
      "
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="nav-link flex items-center gap-2"
            onClick={closeMenu}
          >
            <img
              src={img}
              alt="Prajakta Wankhede"
              className="h-8 w-8 rounded-full object-cover hover:scale-105 transition-transform"
            />
            <span className="font-semibold text-base text-slate-900 dark:text-white">
              Prajakta Wankhede
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 cursor-pointer"
              aria-label="Toggle light/dark mode"
            >
              {theme === 'dark' ? (
                <HiOutlineMoon className="w-5 h-5" />
              ) : (
                <HiOutlineSun className="w-5 h-5" />
              )}
              {/* <span>{theme === 'dark' ? 'Dark' : 'Light'}</span> */}
            </button>
          </div>

          {/* Mobile: theme toggle then burger */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-sm"
              aria-label="Toggle light/dark mode"
            >
              {theme === 'dark' ? (
                <HiOutlineMoon className="w-5 h-5" />
              ) : (
                <HiOutlineSun className="w-5 h-5" />
              )}
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu (under burger) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            menuOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 py-2 border-t border-slate-200 dark:border-slate-800">
            <a
              href="#skills"
              className="nav-link py-3 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="nav-link py-3 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="nav-link py-3 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={closeMenu}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="nav-link py-3 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
