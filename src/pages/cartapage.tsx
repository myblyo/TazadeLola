import { useState } from 'react'
import type { JSX } from 'react'
import { useMenu, useMenuByCategoria } from '../hooks/useMenu'
import type { Categoria } from '../hooks/useMenu'
import Footer from '../components/Footer.tsx'

const categorias: { label: string; value: Categoria | 'todas' }[] = [
  { label: 'Todo', value: 'todas' },
  { label: '☕ Bebidas', value: 'bebida' },
  { label: '🥐 Bollería', value: 'bolleria' },
  { label: '🍞 Panes', value: 'pan' },
  { label: '🥪 Salado', value: 'salado' },
  { label: '🏷️ Ofertas', value: 'oferta' },
]

function ProductoCard({ nombre, descripcion, precio, disponible, temperatura }: {
  nombre: string
  descripcion: string
  precio: number
  disponible: boolean
  temperatura?: 'caliente' | 'fria' | null
}): JSX.Element {
  return (
    <div
      style={{
        background: disponible ? '#fff8f2' : '#f0ebe7',
        border: '1px solid #e8d5c4',
        borderRadius: 12,
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        opacity: disponible ? 1 : 0.5,
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        if (!disponible) return
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 12px 32px rgba(139,69,19,0.12)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'none'
      }}
    >
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {temperatura === 'caliente' && (
          <span style={{ fontSize: '0.7rem', background: '#fde8d8', color: '#8b4513', padding: '0.2rem 0.6rem', borderRadius: 999 }}>🔥 Caliente</span>
        )}
        {temperatura === 'fria' && (
          <span style={{ fontSize: '0.7rem', background: '#d8eafd', color: '#134b8b', padding: '0.2rem 0.6rem', borderRadius: 999 }}>❄️ Frío</span>
        )}
        {!disponible && (
          <span style={{ fontSize: '0.7rem', background: '#f0ebe7', color: '#888', padding: '0.2rem 0.6rem', borderRadius: 999 }}>No disponible</span>
        )}
      </div>
      <h3 style={{ fontFamily: "'Sedan', serif", fontSize: '1.1rem', color: '#2c1a0e', margin: 0 }}>{nombre}</h3>
      <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '0.85rem', color: '#6b4c3b', lineHeight: 1.5, margin: 0, flexGrow: 1 }}>{descripcion}</p>
      <span style={{ fontFamily: "'Sedan', serif", fontSize: '1.2rem', color: '#8b4513', marginTop: '0.5rem' }}>{precio.toFixed(2)} €</span>
    </div>
  )
}

function ProductosGrid({ categoriaActiva }: { categoriaActiva: Categoria | 'todas' }): JSX.Element {
  const todas = useMenu()
  const filtrada = useMenuByCategoria(categoriaActiva as Categoria)
  const { data, loading, error } = categoriaActiva === 'todas' ? todas : filtrada

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '4rem', color: '#8b6355', fontFamily: "'Libre Baskerville', serif" }}>
      Cargando productos...
    </div>
  )

  if (error) return (
    <div style={{ textAlign: 'center', padding: '4rem', color: '#c0392b', fontFamily: "'Libre Baskerville', serif" }}>
      ⚠️ Error al cargar: {error}
    </div>
  )

  if (!data.length) return (
    <div style={{ textAlign: 'center', padding: '4rem', color: '#8b6355', fontFamily: "'Libre Baskerville', serif" }}>
      No hay productos en esta categoría.
    </div>
  )

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
      {data.map(p => (
        <ProductoCard
          key={p.id}
          nombre={p.nombre}
          descripcion={p.descripcion}
          precio={p.precio}
          disponible={p.disponible}
          temperatura={p.temperatura}
        />
      ))}
    </div>
  )
}

export default function CartaPage(): JSX.Element {
  const [categoriaActiva, setCategoriaActiva] = useState<Categoria | 'todas'>('todas')

  return (
    <div style={{ minHeight: '100vh', background: '#fdf6f0', paddingTop: 88 }}>
      <div style={{ background: '#f6e0ce', padding: '3rem 2rem', textAlign: 'center', borderBottom: '1px solid #e8d5c4' }}>
        <h1 style={{ fontFamily: "'Sedan', serif", fontSize: '3rem', color: '#2c1a0e', margin: 0 }}>
          Nuestra Carta
        </h1>
        <p style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '1rem', color: '#6b4c3b', marginTop: '0.75rem', fontStyle: 'italic' }}>
          Productos frescos, hechos con cariño cada día
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
          {categorias.map(cat => (
            <button
              key={cat.value}
              onClick={() => setCategoriaActiva(cat.value)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 999,
                border: '1px solid',
                borderColor: categoriaActiva === cat.value ? '#8b4513' : '#e8d5c4',
                background: categoriaActiva === cat.value ? '#8b4513' : '#fff8f2',
                color: categoriaActiva === cat.value ? '#fff' : '#2c1a0e',
                fontFamily: "'Libre Baskerville', serif",
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <ProductosGrid categoriaActiva={categoriaActiva} />


      </div>
        <Footer />
    </div>
  )
}