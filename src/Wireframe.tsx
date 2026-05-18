import type { JSX } from 'react'
import Navbar from './components/Navbar.tsx'
import Carta from './components/Carta.tsx'
import Galeria from './components/Galeria.tsx'
import Footer from './components/Footer.tsx'
import Hero from './components/Hero.tsx'

export default function Wireframe(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-[#f7ede5]">
      <Navbar />
      <main>
        <Hero />
        <Carta />
        <Galeria />
      </main>
      <Footer />
    </div>
  )
}