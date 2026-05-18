import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wireframe from './Wireframe'
import CartaPage from './pages/cartapage'
import Navbar from './components/Navbar'
import SobreNosotros from './pages/SobreNosotros'
import Info from './pages/información'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Wireframe />} />
        <Route path="/carta" element={<CartaPage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/informacion" element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}