import type { JSX } from 'react'
import mainbg from '../assets/main_bg.jpeg'

export default function Hero(): JSX.Element {
    return (
        <section
            id="inicio"
            aria-label="Portada"
            className="relative w-full h-[900px] flex items-end pb-24 px-16 mt-[88px]"
            >
            {/* Imagen de fondo */}
            <img
                src={mainbg}
                alt="Interior de la cafetería"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Título */}
            <h1 className="relative z-10 w-[541px] text-center [font-family:'Playfair_Display_SC',Helvetica] text-[64px] font-normal leading-tight text-black [text-shadow:0px_4px_10px_#00000040]">
                Un rincón para compartir
            </h1>
        </section>
    )
}
