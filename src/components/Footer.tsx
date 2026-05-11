    import type { JSX } from 'react'
    import logo from '../assets/logo.png'  // cambia el nombre

    export default function Footer(): JSX.Element {
    return (
        <footer
        id="informacion"
        className="w-full bg-[#efd0c1] py-16 px-8"
        >
        <div className="max-w-[1440px] mx-auto flex flex-row items-center justify-between gap-10">

            {/* Logo */}
            <img
            src={logo}
            alt="Logo Taza de Lola"
            className="h-80 w-auto self-center"
            />

            {/* Info de contacto */}
            <div className="flex flex-row justify-end">
            <p className="[font-family:'Libre_Baskerville',Helvetica] text-xl font-normal text-black leading-relaxed">
                📍 Calle Example 23, Barcelona
                <br /><br />
                🕒 Horario<br />
                Lunes a Viernes · 7:00 – 18:00<br />
                Sábado y Domingo · 7:00 – 14:00
                <br /><br />
                📞 000 000 000
            </p>
            </div>

        </div>
        </footer>
    )
    }
