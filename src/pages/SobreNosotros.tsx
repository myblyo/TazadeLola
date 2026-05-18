    import type { JSX } from 'react'
    import front from '../assets/Tazadelola.jpeg'
    import Footer from '../components/Footer.tsx'
    import fondo from '../assets/fondo.png'

    export default function SobreNosotros(): JSX.Element {
    return (
        <section
        id="sobre-nosotros"
        aria-labelledby="sobre-nosotros-titulo"
        className="w-full min-h-screen mt-0 pt-[120px] scroll-mt-[120px] items-center justify-center"
        style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >

        <div className="max-w-7xl h-150 w-150 m-10 px-6 items-center md:px-10 lg:px-16 py-12 ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-50 h-full w-260 items-center justify-center">

                {/* TEXTO */}
                <div className="flex flex-col gap-4 h-100 pt-60 ">

                    <h2
                    id="sobre-nosotros-titulo"
                    className="[font-family:'Sedan',Helvetica] text-4xl md:text-5xl lg:text-6xl text-[#2c1a0e] leading-tight mt-50"
                    >
                    Sobre nosotros
                    </h2>

                    <p className="text-base md:text-lg text-[#4a3728] leading-relaxed">
                    En nuestra cafetería creemos en lo sencillo: buen café,
                    trato cercano y un espacio donde sentirse como en casa.
                    Nacimos como un proyecto familiar con la idea de crear
                    un punto de encuentro para el barrio.
                    </p>

                    <p className="text-base md:text-lg text-[#4a3728] leading-relaxed">
                    Seleccionamos cuidadosamente nuestros cafés y productos,
                    apostando por ingredientes de calidad y opciones hechas
                    con cariño.
                    </p>

                    <p className="text-base md:text-lg text-[#4a3728] leading-relaxed">
                    Gracias por formar parte de nuestra historia.
                    </p>
                </div>

                {/* IMAGEN */}
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                    src={front}
                    alt="Entrada de Taza de Lola"
                    className="w-full h-auto max-h-[650px] object-cover rounded-2xl shadow-lg"
                    />

                </div>

            </div>
        </div>

        <Footer />
        </section>
    )
    }