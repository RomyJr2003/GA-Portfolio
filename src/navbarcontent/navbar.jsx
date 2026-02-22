import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollingDown = currentScrollY > lastScrollY
          const beyondRevealPoint = currentScrollY > 80

          if (!beyondRevealPoint) {
            setIsNavVisible(true)
          } else {
            setIsNavVisible(!scrollingDown)
          }

          lastScrollY = currentScrollY
          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/MyResume_Romy.pdf'
    link.download = 'Romy_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div
      className={`font-display min-h-screen overflow-x-hidden text-[#123237] selection:bg-primary selection:text-white dark:text-[#f8f6f6] ${
        isDark ? 'bg-dark-gradient' : 'bg-joyful-gradient'
      }`}
    >
      <nav
        className={`fixed left-1/2 top-4 z-50 w-full max-w-[960px] -translate-x-1/2 px-4 transition-transform duration-300 ${
          isNavVisible ? 'translate-y-0' : '-translate-y-24'
        }`}
      >
        <div className="flex items-center justify-between rounded-full border border-white/50 bg-white/80 px-6 py-3 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#12363a]/80">
          <div className="group flex cursor-pointer items-center gap-2">
            <img className="h-10 w-15" src="/white.png" alt="r23" />
            <span className="text-lg font-bold tracking-tight">R23 GFX</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200"
              to="/about"
            >
              About
            </Link>
            <Link className="text-sm font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200" to="/contact">
              Contact
            </Link>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button onClick={handleDownload} className="flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer">
              Download Resume
            </button>
            <button
              aria-label="Toggle dark mode"
              className="flex items-center justify-center rounded-full border border-gray-200 bg-white/70 px-3 py-2 text-xs font-semibold text-gray-700 transition-all hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/10 dark:text-white"
              onClick={() => setIsDark((prev) => !prev)}
              type="button"
            >
              <span className="material-symbols-outlined text-base">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <button
              aria-label="Toggle dark mode"
              className="flex items-center justify-center rounded-full border border-gray-200 bg-white/70 p-2 text-gray-700 transition-all hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/10 dark:text-white"
              onClick={() => setIsDark((prev) => !prev)}
              type="button"
            >
              <span className="material-symbols-outlined text-base">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button
              aria-label="Open menu"
              className="p-2 text-gray-700 dark:text-gray-200"
              onClick={() => setIsMenuOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
        role="button"
        tabIndex={-1}
      />
      <aside
        aria-hidden={!isMenuOpen}
        className={`fixed right-0 top-0 z-50 h-full w-72 max-w-[85vw] transform bg-white p-6 shadow-2xl transition-transform duration-300 md:hidden dark:bg-[#12363a] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            R23 GFX
          </span>
          <button
            aria-label="Close menu"
            className="rounded-full p-2 text-gray-700 transition-colors hover:text-primary dark:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-4">
          <Link
            className="text-base font-semibold text-gray-700 hover:text-primary dark:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-base font-semibold text-gray-700 hover:text-primary dark:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
            to="/about"
          >
            About
          </Link>
          <a className="text-base font-semibold text-gray-700 hover:text-primary dark:text-gray-200" href="#">
            Services
          </a>
          <Link
            className="text-base font-semibold text-gray-700 hover:text-primary dark:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
            to="/contact"
          >
            Contact
          </Link>
        </nav>
        <button onClick={handleDownload} className="mt-8 w-full rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg cursor-pointer">
          Download Resume
        </button>
      </aside>

      <Outlet />
    </div>
  );
}

export default Navbar
