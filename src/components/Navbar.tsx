import type { JSX } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'  // cambia el nombre

const navItems = [
  { label: 'SOBRE NOSOTROS', href: '/sobre-nosotros', external: false },
  { label: 'CARTA', href: '/carta', external: false },
  { label: 'INFORMACIÓN', href: '/#informacion', external: true },
  { label: 'IMÁGENES', href: '/#galeria', external: true },
]

export default function Navbar(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 z-20 w-full h-[100px] bg-[#f6e0ce] shadow-[0px_4px_10px_#00000040] flex items-center px-2 md:px-8">
    <div className="flex items-center justify-between w-full px-20 max-w-[1850px] mx-auto">
        {/* Logo */}
        <Link to="/" aria-label="Ir al inicio" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
          <img
            src={logo}
            alt="Logo Taza de Lola"
            className="h-50 w-auto ml-20"
          />
        </Link>

        {/* Nav links */}
        <nav aria-label="Navegación principal" className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                className="[font-family:'Libre Baskerville', serif] text-sm md:text-base font-normal tracking-wide text-black hover:text-[#8b4513] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="[font-family:'Libre Baskerville', serif] text-sm md:text-base font-normal tracking-wide text-black hover:text-[#8b4513] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

      </div>
    </header>
  )
}
