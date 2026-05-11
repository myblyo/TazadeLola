import type { JSX } from 'react'
import foto1 from '../assets/ima1.jpg'
import foto2 from '../assets/ima2.jpg'
import foto3 from '../assets/ima3.jpg'
import foto4 from '../assets/ima4.jpg'
import photo from '../assets/photo1.jpeg'
import photo2 from '../assets/photo2.jpeg'
import photo3 from '../assets/photo3.jpeg'
import photo4 from '../assets/photo4.jpeg'


const galleryRowOne = [
  { border: 'border-[#f8ede6]', backgroundImage: foto1, ariaLabel: 'Imagen de galería 1' },
  { border: 'border-[#f8ede6]', backgroundImage: photo, ariaLabel: 'Imagen de galería 2' },
  { border: 'border-[#f6e0ce]', backgroundImage: foto2, ariaLabel: 'Imagen de galería 3' },
  { border: 'border-[#f6e0ce]', backgroundImage: photo2, ariaLabel: 'Imagen de galería 4' },
]

const galleryRowTwo = [
  { border: 'border-[#f8ede6]', backgroundImage: foto4, ariaLabel: 'Imagen de galería 5' },
  { border: 'border-[#f8ede6]', backgroundImage: photo4, ariaLabel: 'Imagen de galería 6' },
  { border: 'border-[#f6e0ce]', backgroundImage: foto3, ariaLabel: 'Imagen de galería 7' },
  { border: 'border-[#f6e0ce]', backgroundImage: photo3, ariaLabel: 'Imagen de galería 8' },
  { border: 'border-[#f6e0ce]', backgroundImage: foto2, ariaLabel: 'Imagen de galería 9' },
]

interface GalleryRowProps {
  items: typeof galleryRowOne
  direction?: 'left' | 'right'
}

function GalleryRow({ items, direction = 'left' }: GalleryRowProps): JSX.Element {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-10"
        style={{
          animation: `marquee-${direction} 30s linear infinite`,
          width: 'max-content',
        }}
      >
        {doubled.map((item, index) => (
          <img
            key={index}
            src={item.backgroundImage}
            alt={item.ariaLabel}
            className={`shrink-0 h-[388px] w-[353px] rounded-[25px] border-[6px] border-solid object-cover ${item.border}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Galeria(): JSX.Element {
  return (
    <section
      id="galeria"
      aria-labelledby="galeria-titulo"
      className="w-full h-[1050px] bg-[#f7ede5] py-24 flex flex-col gap-8 overflow-hidden justify-center items-center mt-[88px]"
    >
      <h2
        id="galeria-titulo"
        className="[font-family:'Sedan',Helvetica] text-4xl md:text-5xl font-normal text-black text-center px-8"
      >
        Galería
      </h2>

      <GalleryRow items={galleryRowOne} direction="left" />
      <GalleryRow items={galleryRowTwo} direction="right" />
    </section>
  )
}