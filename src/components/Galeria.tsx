import type { JSX } from 'react'

const galleryRowOne = [
  { border: 'border-[#f8ede6]', backgroundImage: 'bg-[url(/frame-3.png)]', ariaLabel: 'Imagen de galería 1' },
  { border: 'border-[#f8ede6]', backgroundImage: 'bg-[url(/frame-4.png)]', ariaLabel: 'Imagen de galería 2' },
  { border: 'border-[#f6e0ce]', backgroundImage: 'bg-[url(/frame-5.png)]', ariaLabel: 'Imagen de galería 3' },
  { border: 'border-[#f6e0ce]', backgroundImage: 'bg-[url(/frame-6.png)]', ariaLabel: 'Imagen de galería 4' },
  { border: 'border-[#f6e0ce]', backgroundImage: 'bg-[url(/frame-7.png)]', ariaLabel: 'Imagen de galería 5' },
]

const galleryRowTwo = [
  { border: 'border-[#f8ede6]', backgroundImage: 'bg-[url(/image.png)]',     ariaLabel: 'Imagen de galería 6' },
  { border: 'border-[#f8ede6]', backgroundImage: 'bg-[url(/frame-4-2.png)]', ariaLabel: 'Imagen de galería 7' },
  { border: 'border-[#f6e0ce]', backgroundImage: 'bg-[url(/frame-5-2.png)]', ariaLabel: 'Imagen de galería 8' },
  { border: 'border-[#f6e0ce]', backgroundImage: 'bg-[url(/frame-6-2.png)]', ariaLabel: 'Imagen de galería 9' },
  { border: 'border-[#f6e0ce]', backgroundImage: 'bg-[url(/frame-7-2.png)]', ariaLabel: 'Imagen de galería 10' },
]

interface GalleryRowProps {
  items: typeof galleryRowOne
}

function GalleryRow({ items }: GalleryRowProps): JSX.Element {
  return (
    <div className="flex flex-row items-center gap-5 overflow-x-auto pb-2">
      {items.map((item, index) => (
        <div
          key={index}
          role="img"
          aria-label={item.ariaLabel}
          className={`shrink-0 h-[388px] w-[353px] rounded-[25px] border-[6px] border-solid bg-cover bg-center bg-[#f0d8c8] ${item.border} ${item.backgroundImage}`}
        />
      ))}
    </div>
  )
}

export default function Galeria(): JSX.Element {
  return (
    <section
      id="galeria"
      aria-labelledby="galeria-titulo"
      className="w-full bg-[#f7ede5] py-24 px-8"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">

        {/* Título */}
        <h2
          id="galeria-titulo"
          className="text-center [font-family:'Playfair_Display_SC',Helvetica] text-5xl font-normal text-black [text-shadow:0px_4px_4px_#00000040]"
        >
          Galería
        </h2>

        {/* Fila 1 */}
        <GalleryRow items={galleryRowOne} />

        {/* Fila 2 */}
        <GalleryRow items={galleryRowTwo} />

      </div>
    </section>
  )
}
