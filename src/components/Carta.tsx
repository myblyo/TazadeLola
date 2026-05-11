    import type { JSX } from 'react'
    import bebidas from '../assets/bebidas.png'  // cambia el nombre
    import ofertas from '../assets/ofertas.png'  // cambia el nombre
    import cartaFondo from '../assets/Stripe_bg.png'  // cambia el nombre

    const cartaImages = [
    { src: bebidas, alt: 'Carta de bebidas' },
    { src: ofertas, alt: 'Carta de ofertas 1' },
    { src: bebidas, alt: 'Carta de bebidas 2' },
    { src: ofertas, alt: 'Carta de ofertas 3' },
    ]

    export default function Carta(): JSX.Element {
    return (
        <section
        id="carta"
        style={{
                backgroundImage: `url(${cartaFondo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        aria-labelledby="carta-titulo"
        className="w-full bg-[#f7ede5] py-24 px-8"
        >
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">

            {/* Título */}
            <h2
            id="carta-titulo"
            className="text-center [font-family:'Sedan',Helvetica] text-7xl font-heading text-black [text-shadow:0px_4px_4px_#00000040]">
            Carta
            </h2>

            {/* Carrusel horizontal */}
            <div
            role="region"
            aria-label="Cartas del menú"
            className="flex flex-row items-center gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
            >
            {cartaImages.map((image) => (
                <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="shrink-0 snap-start w-[523px] h-[732px] object-cover rounded-xl shadow-md"
                />
            ))}
            </div>

        </div>
        </section>
    )
    }
