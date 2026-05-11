import express from 'express'
import cors from 'cors'
import menuRoutes from './routes/menu.routes.ts'
 
const app = express()
const PORT = 3000
 
app.use(cors())
app.use(express.json())
 
// Rutas
app.use('/api/menu', menuRoutes)
 
// Health check
app.get('/', (_req, res) => {
  res.json({ ok: true, message: 'Taza de Lola API funcionando ☕' })
})
 
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
 
export default app
 