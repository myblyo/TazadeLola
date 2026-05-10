import type { ReactElement } from 'react'

import placeholderSvg from './assets/vite.svg'
import heroImg from './assets/hero.png'

const navItems = [
  { label: 'SOBRE NOSOTROS', href: '#sobre-nosotros', widthClass: 'w-[198px]' },
  { label: 'CARTA', href: '#carta', widthClass: 'w-[129px]' },
  { label: 'INFORMACIÓN', href: '#informacion', widthClass: 'w-[172px]' },
  { label: 'IMÁGENES', href: '#galeria', widthClass: 'w-[172px]' },
]

const cartaImages = [
  { src: heroImg, alt: 'Carta de bebidas' },
  { src: heroImg, alt: 'Carta de ofertas 1' },
  { src: heroImg, alt: 'Carta de ofertas 2' },
  { src: heroImg, alt: 'Carta de ofertas 3' },
]

const galleryRowOne = [
  {
    border: 'border-[#f8ede6]',
    backgroundImage: 'bg-[url(/frame-3.png)]',
    marginClass: 'ml-[-3.00px]',
    ariaLabel: 'Imagen de galería 1',
  },
  {
    border: 'border-[#f8ede6]',
    backgroundImage: 'bg-[url(/frame-4.png)]',
    marginClass: '',
    ariaLabel: 'Imagen de galería 2',
  },
  {
    border: 'border-[#f6e0ce]',
    backgroundImage: 'bg-[url(/frame-5.png)]',
    marginClass: '',
    ariaLabel: 'Imagen de galería 3',
  },
  {
    border: 'border-[#f6e0ce]',
    backgroundImage: 'bg-[url(/frame-6.png)]',
    marginClass: '',
    ariaLabel: 'Imagen de galería 4',
  },
  {
    border: 'border-[#f6e0ce]',
    backgroundImage: 'bg-[url(/frame-7.png)]',
    marginClass: '',
    ariaLabel: 'Imagen de galería 5',
  },
]

const galleryRowTwo = [
  {
    border: 'border-[#f8ede6]',
    backgroundImage: 'bg-[url(/image.png)]',
    marginClass: 'ml-[-3.00px]',
    ariaLabel: 'Imagen de galería 6',
  },
  {
    border: 'border-[#f8ede6]',
    backgroundImage: 'bg-[url(/frame-4-2.png)]',
    marginClass: '',
    ariaLabel: 'Imagen de galería 7',
  },
  {
    border: 'border-[#f6e0ce]',
    backgroundImage: 'bg-[url(/frame-5-2.png)]',
    marginClass: '',
    ariaLabel: 'Imagen de galería 8',
  },
  {
    border: 'border-[#f6e0ce]',
    backgroundImage: 'bg-[url(/frame-6-2.png)]',
    marginClass: '',
    ariaLabel: 'Imagen de galería 9',
  },
  {
    border: 'border-[#f6e0ce]',
    backgroundImage: 'bg-[url(/frame-7-2.png)]',
    marginClass: '',
    ariaLabel: 'Imagen de galería 10',
  },
]

export default function Wireframe(): ReactElement {
  return (
    <div className="relative min-h-[4141px] w-full min-w-[1440px] overflow-hidden bg-[#f7ede5]">
      <header className="fixed top-[-46px] left-[-5px] z-20 h-[218px] w-[1449px]">
        <div className="absolute left-0 top-0 flex h-[88.83%] w-full flex-col items-center shadow-[0px_4px_10px_#00000040]">
          <div className="relative h-[152.1px] w-full self-stretch bg-[#f6e0ce]" />
        </div>
        <nav
          aria-label="Navegación principal"
          className="absolute left-[48.93%] top-[42.66%] flex h-[20.64%] w-[49.21%] items-center gap-1.5 shadow-[0px_4px_7px_#00000040]"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${item.widthClass} relative [font-family:'Sedan-Regular',Helvetica] text-center text-xl font-normal leading-[normal] tracking-[0] text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#inicio"
          aria-label="Ir al inicio"
          className="absolute left-[6.07%] top-[59px] h-[85px] w-[93.93%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <img
            className="aspect-[4.96] h-full w-full"
            alt="Logo Taza de Lola"
            src={placeholderSvg}
          />
        </a>
      </header>
      <main id="inicio">
        <section aria-label="Portada">
          <img
            className="absolute left-[5px] top-[47px] h-[973px] w-[1435px]"
            alt="Interior de la cafetería"
            src={heroImg}
          />
          <h1 className="absolute left-[75px] top-[779px] w-[541px] text-center [font-family:'Playfair_Display_SC-Regular',Helvetica] text-[64px] font-normal leading-[normal] tracking-[0] text-black [text-shadow:0px_4px_10px_#00000040]">
            Un rincón para compartir
          </h1>
        </section>
        <img
          className="absolute left-0 top-[1020px] h-[calc(100%_-_1020px)] w-[1439px]"
          alt="Fondo decorativo"
          src={placeholderSvg}
        />
        <section id="sobre-nosotros" aria-labelledby="sobre-nosotros-titulo">
          <h2 className="absolute left-28 top-[1210px] w-[541px] text-center [font-family:'Playfair_Display_SC-Regular',Helvetica] text-5xl font-normal leading-[normal] tracking-[0] text-black [text-shadow:0px_4px_4px_#00000040]">
            Sobre nosotros
          </h2>
          <p className="absolute bottom-[2440px] left-[87px] w-[594px] text-center [font-family:'Libre_Baskerville-Regular',Helvetica] text-lg font-normal leading-[normal] tracking-[0] text-black">
            En nuestra cafetería creemos en lo sencillo: buen café, trato
            cercano y un espacio donde sentirse como en casa. Nacimos como un
            proyecto familiar con la idea de crear un punto de encuentro para el
            barrio, un lugar donde vecinos y amigos puedan compartir momentos,
            conversaciones y pequeñas pausas del día a día.
            <br />
            Seleccionamos cuidadosamente nuestros cafés y productos, apostando
            por ingredientes de calidad y opciones hechas con cariño. Aquí no
            solo servimos bebidas y dulces, servimos experiencias: desde el
            primer café de la mañana hasta esa merienda que se alarga entre
            risas.
            <br />
            Nos gusta conocer a quienes nos visitan, recordar sus gustos y
            formar parte de su rutina. Porque más que una cafetería, somos un
            espacio de comunidad, donde cada persona cuenta y cada visita suma.
            <br />
            Gracias por formar parte de nuestra historia.
          </p>
          <img
            className="absolute left-[741px] top-[1210px] aspect-[1.36] h-[448px] w-[611px]"
            alt="Entrada de Taza de Lola"
            src={heroImg}
          />
        </section>
        <section id="carta" aria-labelledby="carta-titulo">
          <h2 className="absolute left-[642px] top-[1893px] w-[154px] [font-family:'Playfair_Display_SC-Regular',Helvetica] text-5xl font-normal leading-[normal] tracking-[0] text-black [text-shadow:0px_4px_4px_#00000040]">
            Carta
          </h2>
          <div
            className="fixed left-[27px] top-[1988px] inline-flex h-[802px] items-center gap-5 overflow-x-scroll px-0 pb-6 pt-0"
            role="region"
            aria-label="Cartas del menú"
          >
            {cartaImages.map((image) => (
              <img
                key={image.alt}
                className="relative aspect-[0.71] h-[732px] w-[523px] shrink-0 object-cover"
                alt={image.alt}
                src={image.src}
              />
            ))}
          </div>
        </section>
        <section id="galeria" aria-labelledby="galeria-titulo">
          <h2 className="absolute left-[618px] top-[2811px] w-[202px] [font-family:'Playfair_Display_SC-Regular',Helvetica] text-5xl font-normal leading-[normal] tracking-[0] text-black [text-shadow:0px_4px_4px_#00000040]">
            Galería
          </h2>
          <div className="absolute left-[-61px] top-[2843px] flex h-[547px] w-[1917px] items-center gap-5">
            {galleryRowOne.map((item, index) => (
              <div
                key={`gallery-row-one-${index}`}
                role="img"
                aria-label={item.ariaLabel}
                className={`relative h-[388px] w-[353px] rounded-[25px] border-[6px] border-solid ${item.marginClass} ${item.border} ${item.backgroundImage} bg-cover bg-[50%_50%]`}
              />
            ))}
          </div>
          <div className="absolute left-[-296px] top-[3276px] flex h-[502px] w-[1917px] items-center gap-5">
            {galleryRowTwo.map((item, index) => (
              <div
                key={`gallery-row-two-${index}`}
                role="img"
                aria-label={item.ariaLabel}
                className={`relative h-[388px] w-[353px] rounded-[25px] border-[6px] border-solid ${item.marginClass} ${item.border} ${item.backgroundImage} bg-cover bg-[50%_50%]`}
              />
            ))}
          </div>
        </section>
        <footer
          id="informacion"
          className="absolute left-0 top-[3795px] flex h-[346px] w-[1440px] items-end bg-[#efd0c1]"
        >
          <p className="mb-[95px] ml-[812px] h-[173px] w-[398px] [font-family:'Libre_Baskerville-Regular',Helvetica] text-xl font-normal leading-[normal] tracking-[0] text-black">
            📍 Calle Example 23, Barcelona
            <br />
            <br />
            🕒 Horario
            <br />
            Lunes a Viernes · 7:00 – 18:00
            <br />
            Sábado y Domingo · 7:00 – 14:00
            <br />
            <br />
            📞 000 000 000
          </p>
        </footer>
        <img
          className="absolute left-[3.54%] top-[3968px] aspect-[4.96] h-32 w-[96.46%]"
          alt="Logo Taza de Lola"
          src={placeholderSvg}
        />
      </main>
    </div>
  )
}
