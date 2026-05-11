    import type { JSX } from 'react'
    import front from '../assets/Tazadelola.jpeg'

    export default function SobreNosotros(): JSX.Element {
    return (
    <section
    id="sobre-nosotros"
    aria-labelledby="sobre-nosotros-titulo"
    className="w-400 h-[800px] bg-[#f7ede5] p-24 ml-24 mr-auto flex items-center justify-center mt-[88px] relative"
    >
    <div className="max-w-350  h-[800px]  flex flex-col md:flex-row items-center gap-12">

        <div className="flex flex-col gap-6 flex-1 text-center mx-8">
        <h2
            id="sobre-nosotros-titulo"
            className="[font-family:'Sedan',Helvetica] text-4xl md:text-5xl font-normal text-black"
        >
            Sobre nosotros
        </h2>
        <p className="text-base md:text-lg text-black leading-relaxed">
            En nuestra cafetería creemos en lo sencillo: buen café, trato
            cercano y un espacio donde sentirse como en casa. Nacimos como un
            proyecto familiar con la idea de crear un punto de encuentro para el
            barrio.
        </p>
        <p className="text-base md:text-lg text-black leading-relaxed">
            Seleccionamos cuidadosamente nuestros cafés y productos, apostando
            por ingredientes de calidad y opciones hechas con cariño.
        </p>
        <p className="text-base md:text-lg text-black leading-relaxed">
            Gracias por formar parte de nuestra historia.
        </p>
        </div>

        <div className="flex-1 w-full">
        <img
            src={front}
            alt="Entrada de Taza de Lola"
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
        />
        </div>

    </div>
    </section>
    )
    }