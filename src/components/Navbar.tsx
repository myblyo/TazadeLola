import type { JSX } from 'react'
import placeholderSvg from '../assets/vite.svg'

const navItems = [
  { label: 'SOBRE NOSOTROS', href: '#sobre-nosotros' },
  { label: 'CARTA', href: '#carta' },
  { label: 'INFORMACIÓN', href: '#informacion' },
  { label: 'IMÁGENES', href: '#galeria' },
]

export default function Navbar(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 z-20 w-full h-[88px] bg-[#f6e0ce] shadow-[0px_4px_10px_#00000040] flex items-center px-8">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">

        {/* Logo */}
        <a href="#inicio" aria-label="Ir al inicio" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-black">
          <img
            src={placeholderSvg}
            alt="Logo Taza de Lola"
            className="h-10 w-auto"
          />
        </a>

        {/* Nav links */}
        <nav aria-label="Navegación principal" className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="[font-family:'Sedan',Helvetica] text-base font-normal tracking-wide text-black hover:text-[#8b4513] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  )
}
