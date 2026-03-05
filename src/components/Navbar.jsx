import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = ["Accueil", "A propos", "Projets", "Skills", "Contact"]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#2D1F5E]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="font-serif text-xl text-[#F0EFF4] hover:text-[#A78BFA]">
          RAMANANDRAIBE Nomena
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-[#9B97B2] hover:text-[#F0EFF4] transition-colors duration-200 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#A78BFA] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button className="hidden md:block text-sm text-[#A78BFA] border border-[#2D1F5E] px-4 py-2 rounded-lg hover:bg-[#6C3FC720] hover:border-[#6C3FC7] transition-all duration-200">
          Me contacter
        </button>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-5 h-px bg-[#F0EFF4] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-[#F0EFF4] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#F0EFF4] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-64 border-b border-[#2D1F5E]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 bg-[#0A0A0F]/95 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-[#9B97B2] hover:text-[#A78BFA] transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

    </nav>
  )
}
