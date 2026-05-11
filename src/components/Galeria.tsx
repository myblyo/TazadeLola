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
    direction?: 'left' | 'right'
    }

    function GalleryRow({ items, direction = 'left' }: GalleryRowProps): JSX.Element {
    // Duplicamos los items para que el loop sea infinito y no haya saltos
    const doubled = [...items, ...items]

    return (
        <div className="overflow-hidden w-full">
        <div
            className="flex gap-5"
            style={{
            animation: `marquee-${direction} 30s linear infinite`,
            width: 'max-content',
            }}
        >
            {doubled.map((item, index) => (
            <div
                key={index}
                role="img"
                aria-label={item.ariaLabel}
                className={`shrink-0 h-[388px] w-[353px] rounded-[25px] border-[6px] border-solid bg-cover bg-center bg-[#f0d8c8] ${item.border} ${item.backgroundImage}`}
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
        className="w-full bg-[#f7ede5] py-24 flex flex-col gap-8 overflow-hidden"
        >
        <h2
            id="galeria-titulo"
            className="text-center px-8"
        >
            Galería
        </h2>

        <GalleryRow items={galleryRowOne} direction="left" />
        <GalleryRow items={galleryRowTwo} direction="right" />
        </section>
    )
    }