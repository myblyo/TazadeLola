import { useState, useEffect } from 'react'

export type Temperatura = 'caliente' | 'fria' | null

export type Categoria = 'bebida' | 'bolleria' | 'pan' | 'salado' | 'oferta'

export interface Producto {
  id: number
  nombre: string
  descripcion: string
  precio: number
  categoria: Categoria
  temperatura?: Temperatura
  disponible: boolean
  imagen?: string
}

interface UseMenuState {
  data: Producto[]
  loading: boolean
  error: string | null
  source: 'api' | 'local'
}

const BASE_URL = 'http://localhost:3000/api/menu'
const LOCAL_URL = '/menu.json'

async function fetchWithFallback(apiUrl: string): Promise<{ data: Producto[]; source: 'api' | 'local' }> {
  // Intentar backend primero
  try {
    const res = await fetch(apiUrl, { signal: AbortSignal.timeout(3000) })

    if (res.ok) {
      const json = await res.json()
      return { data: json.data, source: 'api' }
    }
  } catch {
    // Backend no disponible, caer al local
  }

  // Fallback: menu.json local
  const res = await fetch(LOCAL_URL)
  if (!res.ok) throw new Error(`Error cargando menu.json local: ${res.status}`)
  const data: Producto[] = await res.json()
  return { data, source: 'local' }
}

export function useMenu(): UseMenuState {
  const [data, setData] = useState<Producto[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [source, setSource] = useState<'api' | 'local'>('local')

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true)
        setError(null)

        const result = await fetchWithFallback(BASE_URL)
        setData(result.data)
        setSource(result.source)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [])

  return { data, loading, error, source }
}

export function useMenuByCategoria(categoria: Categoria): UseMenuState {
  const [data, setData] = useState<Producto[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [source, setSource] = useState<'api' | 'local'>('local')

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        setLoading(true)
        setError(null)

        const result = await fetchWithFallback(`${BASE_URL}/categoria/${categoria}`)

        // Si vino del local, filtramos aquí ya que el JSON no tiene endpoint por categoría
        const filtered = result.source === 'local'
          ? result.data.filter(p => p.categoria === categoria)
          : result.data

        setData(filtered)
        setSource(result.source)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchCategoria()
  }, [categoria])

  return { data, loading, error, source }
}