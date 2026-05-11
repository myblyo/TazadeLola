import { Router } from 'express'
import { menuController } from '../controllers/menu.controller.ts'

const router = Router()

// GET /api/menu                        → todos los productos
router.get('/', menuController.getAll)

// GET /api/menu/disponibles            → solo los disponibles
router.get('/disponibles', menuController.getSoloDisponibles)

// GET /api/menu/categoria/:categoria   → por categoría (bebida, bolleria, pan, salado, oferta)
router.get('/categoria/:categoria', menuController.getByCategoria)

// GET /api/menu/temperatura/:temperatura → por temperatura (caliente, fria)
router.get('/temperatura/:temperatura', menuController.getByTemperatura)

// GET /api/menu/:id                    → producto concreto
router.get('/:id', menuController.getById)

export default router
