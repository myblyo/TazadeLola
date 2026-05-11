    import { menuData, type Categoria, type Temperatura, type Producto } from '../data/menu.data'

    export const menuService = {

    getAll(): Producto[] {
        return menuData
    },

    getByCategoria(categoria: Categoria): Producto[] {
        return menuData.filter(p => p.categoria === categoria)
    },

    getByTemperatura(temperatura: Temperatura): Producto[] {
        return menuData.filter(p => p.temperatura === temperatura)
    },

    getById(id: number): Producto | undefined {
        return menuData.find(p => p.id === id)
    },

    getSoloDisponibles(): Producto[] {
        return menuData.filter(p => p.disponible)
    },

    }
