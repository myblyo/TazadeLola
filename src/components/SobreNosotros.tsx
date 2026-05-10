import type { JSX } from 'react'
import heroImg from '../assets/hero.png'

export default function SobreNosotros(): JSX.Element {
  return (
    <section
      id="sobre-nosotros"
      aria-labelledby="sobre-nosotros-titulo"
      className="w-full bg-[#f7ede5] py-24 px-8"
    >
      <div className="max-w-[1440px] mx-auto flex flex-row items-center gap-16 flex-wrap">

        {/* Texto */}
        <div className="flex flex-col gap-6 flex-1 min-w-[300px]">
          <h2
            id="sobre-nosotros-titulo"
            className="[font-family:'Playfair_Display_SC',Helvetica] text-5xl font-normal text-black [text-shadow:0px_4px_4px_#00000040]"
          >
            Sobre nosotros
          </h2>
          <p className="[font-family:'Libre_Baskerville',Helvetica] text-lg font-normal text-black leading-relaxed">
            En nuestra cafetería creemos en lo sencillo: buen café, trato
            cercano y un espacio donde eeee sentirse como en casa. Nacimos como un
            proyecto familiar con la idea de crear un punto de encuentro para el
            barrio, un lugar donde vecinos y amigos puedan compartir momentos,
            conversaciones y pequeñas pausas del día a día.
          </p>
          <p className="[font-family:'Libre_Baskerville',Helvetica] text-lg font-normal text-black leading-relaxed">
            Seleccionamos cuidadosamente nuestros cafés y productos, apostando
            por ingredientes de calidad y opciones hechas con cariño. Aquí no
            solo servimos bebidas y dulces, servimos experiencias: desde el
            primer café de la mañana hasta esa merienda que se alarga entre
            risas.
          </p>
          <p className="[font-family:'Libre_Baskerville',Helvetica] text-lg font-normal text-black leading-relaxed">
            Nos gusta conocer a quienes nos visitan, recordar sus gustos y
            formar parte de su rutina. Porque más que una cafetería, somos un
            espacio de comunidad, donde cada persona cuenta y cada visita suma.
            <br />
            Gracias por formar parte de nuestra historia.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex-1 min-w-[300px]">
          <img
            src={heroImg}
            alt="Entrada de Taza de Lola"
            className="w-full h-[448px] object-cover rounded-xl shadow-md"
          />
        </div>

      </div>
    </section>
  )
}
