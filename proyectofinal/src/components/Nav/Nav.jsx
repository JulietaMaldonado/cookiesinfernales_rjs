import '../Nav/Nav.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Inicio } from '../../pages/Inicio/Inicio';

export function Nav() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <div className="enlaces">
        <Link to="/inicio" element={<Inicio />} className='enlacenav'>INICIO</Link>
        <Link to="/productos" className='enlacenav'>PRODUCTOS</Link>
        <Link to="/contacto" className='enlacenav'>CONTACTO</Link>
        <Link to="/carrito" className='enlacenav'>CARRITO</Link>
        </div>
      </nav>
      </BrowserRouter>
    </>
  )
}