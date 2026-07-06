import './App.css'
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { NavBar } from "./components/NavBar/NavBar"
import { Carrito } from './pages/Carrito/Carrito';
import { Contacto } from './pages/Contacto/Contacto';
import { Inicio } from './pages/Inicio/Inicio';
import { Productos } from './pages/Productos/Productos';
import { Layout } from './Layout';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/contacto' element={<Contacto />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );

}
