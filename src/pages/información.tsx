    import type { JSX } from 'react'
    import Footer from '../components/Footer.tsx'
    import fondo from '../assets/fondo.png'

    export default function Info(): JSX.Element {
    return (
        <section
        id="informacion"
        aria-labelledby="informacion-titulo"
        className="w-full min-h-screen mt-0 pt-[120px] scroll-mt-[120px] items-center justify-center"
        style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >

        <div className="max-w-7xl h-150 w-150 m-10 px-6 items-center md:px-10 lg:px-16 py-12 ">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-50 h-full w-260 items-center justify-center">

                {/* TEXTO */}
                <div className="flex flex-col gap-4 h-100 pt-60 ">

                    <h2
                    id="informacion-titulo"
                    className="[font-family:'Sedan',Helvetica] text-4xl md:text-5xl lg:text-6xl text-[#2c1a0e] leading-tight mt-50"
                    >
                    Información
                    </h2>

                    <p className="text-base md:text-lg text-[#4a3728] leading-relaxed">
                    Dirección: Gran Via de les Corts Catalanes, 948, Sant Martí, 08018 Barcelona
                    </p>
                    <p className="text-base md:text-lg text-[#4a3728] leading-relaxed">
                    Teléfono: +34 000 123 456
                    </p>
                    <p className="text-base md:text-lg text-[#4a3728] leading-relaxed">
                    Correo electrónico: info@tazadelola.com
                    </p>

                    <p className="text-base md:text-lg text-[#4a3728] leading-relaxed">
                    Horario de apertura:
                    </p>
                    <ul className="list-disc list-inside text-base md:text-lg text-[#4a3728] leading-relaxed">
                        <li>Lunes a viernes: 6:00 - 17:00</li>
                        <li>Sábados y Domingos: 7:00 - 14:30</li>
                    </ul>
                </div>

                {/* IMAGEN */}
                <div className="relative w-full h-full flex items-center justify-center">
                    <iframe
                    title="Ubicación de Taza de Lola"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.1234567890123!2d-3.703790684593123!3d40.41677577936456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288a12345678%3A0x123456789abcdef0!2sTaza%20de%20Lola%20Cafeter%C3%ADa!5e0!3m2!1ses-419!2ses!4v1712345678901"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>

        <Footer />
        </section>
    )
    }