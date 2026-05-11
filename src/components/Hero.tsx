import type { JSX } from 'react'
import main from '../assets/main_bg.jpeg'

export default function Hero(): JSX.Element {
  return (
    <section
      id="inicio"
      aria-label="Portada"
      className="relative w-full h-[100vh] flex items-center justify-center mt-[88px]"
    >
      <img
        src={main}
        alt="Interior de la cafetería"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <h1 className="relative z-10 text-center px-8 [font-family:'Sedan',Helvetica] text-5xl md:text-7xl font-normal text-white drop-shadow-lg">
        Un rincón para compartir
      </h1>
    </section>
  )
}
