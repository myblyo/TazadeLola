    import { type Request, type Response } from 'express'
    import { menuService } from '../services/menu.service.ts'
    import { type Categoria, type Temperatura } from '../data/menu.data'

    export const menuController = {

    getAll(_req: Request, res: Response): void {
        const productos = menuService.getAll()
        res.json({ ok: true, data: productos })
    },

    getByCategoria(req: Request, res: Response): void {
        const { categoria } = req.params
        const productos = menuService.getByCategoria(categoria as Categoria)

        if (!productos.length) {
        res.status(404).json({ ok: false, message: `No hay productos en la categoría "${categoria}"` })
        return
        }

        res.json({ ok: true, data: productos })
    },

    getByTemperatura(req: Request, res: Response): void {
        const { temperatura } = req.params
        const productos = menuService.getByTemperatura(temperatura as Temperatura)

        if (!productos.length) {
        res.status(404).json({ ok: false, message: `No hay productos con temperatura "${temperatura}"` })
        return
        }

        res.json({ ok: true, data: productos })
    },

    getById(req: Request, res: Response): void {
        const id = Number(req.params.id)
        const producto = menuService.getById(id)

        if (!producto) {
        res.status(404).json({ ok: false, message: `Producto con id ${id} no encontrado` })
        return
        }

        res.json({ ok: true, data: producto })
    },

    getSoloDisponibles(_req: Request, res: Response): void {
        const productos = menuService.getSoloDisponibles()
        res.json({ ok: true, data: productos })
    },

    }
