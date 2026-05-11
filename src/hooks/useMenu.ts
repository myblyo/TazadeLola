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
}

const BASE_URL = 'http://localhost:3000/api/menu'

export function useMenu(): UseMenuState {
  const [data, setData] = useState<Producto[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(BASE_URL)

        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`)
        }

        const json = await res.json()
        setData(json.data)

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [])

  return { data, loading, error }
}

export function useMenuByCategoria(categoria: Categoria): UseMenuState {
  const [data, setData] = useState<Producto[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(`${BASE_URL}/categoria/${categoria}`)

        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`)
        }

        const json = await res.json()
        setData(json.data)

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchCategoria()
  }, [categoria])

  return { data, loading, error }
}