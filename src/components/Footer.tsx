    import type { JSX } from 'react'
    import logo from '../assets/logo.png'  // cambia el nombre

    export default function Footer(): JSX.Element {
    return (
        <footer
        id="informacion"
        className="w-full bg-[#efd0c1] py-16 px-8"
        >
        <div className="max-w-full mx-auto flex flex-col items-center justify-between gap-1">

              {/* Logo */}
            <img
            src={logo}
            alt="Logo Taza de Lola"
            className="h-30 w-auto self-center"
            />

            {/* Info de contacto */}
            <div className="flex flex-col justify-end">
                <div className="text-xl font-normal text-black leading-relaxed">
                    <a href="https://www.google.com/maps/place/TAZA+de+LOLA/@41.4094993,2.1935053,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a3686e792e8d:0xa8fb0425497495bb!8m2!3d41.4094953!4d2.1960802!16s%2Fg%2F11y_2r6tyd?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    📍 Gran Via de les Corts Catalanes, 948, Sant Martí, 08018 Barcelona
                    </a>
                    <br /><br />
                    🕒 Horario<br />
                    Lunes a Viernes · 7:00 – 18:00<br />
                    Sábado y Domingo · 7:00 – 14:00
                    <br /><br />
                    📞 000 000 000
                </div>
            </div>

        </div>

        </footer>
    )
    }