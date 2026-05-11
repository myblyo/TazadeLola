    import type { JSX } from 'react'
    import bebidas from '../assets/bebidas.png'  // cambia el nombre
    import ofertas from '../assets/ofertas.png'  // cambia el nombre
    import cartaFondo from '../assets/Stripe_bg.png'  // cambia el nombre

    const cartaImages = [
    { src: bebidas, alt: 'Carta de bebidas' },
    { src: ofertas, alt: 'Carta de ofertas 1' },
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
        className="w-full h-[1000px] bg-[#f7ede5] py-24 px-8 items-center justify-center mt-[88px] flex gap-7 overflow-hidden"
        >
        <div className="max-w-600 mx-auto flex flex-col gap-10  items-center justify-center mt-[88px]">

            {/* Título */}
            <h2
                id="carta-titulo"
                className="[font-family:'Sedan',Helvetica] text-4xl md:text-5xl font-normal text-black "
            >
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
