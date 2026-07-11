import { createElement } from 'react'
import '../Item/Item.css'

export function Item({nombre, imagen, precio, stock}){
    const AgregarCookie = <p>¡Cookie agregada al carrito!</p>
    
    return(
        <>
         <div className="tarjeta">
          <img src={imagen} alt="cookieinfernal" className="cookiesabor" />
          <h3 className='nombrecookie'>{nombre}</h3>
          <p className="preciocookie">${precio}</p>
          <p className="stocknumero">{stock}</p>
        
          <button className='agregarbutton' onClick={AgregarCookie}>Agregar a carrito</button>
        </div>
        </>

    )
}