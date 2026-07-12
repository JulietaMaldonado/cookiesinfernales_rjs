import '../Item/Item.css'
import { useContext } from 'react'
import { ContextoCarrito } from '../ContextoCarrito/ContextoCarrito'

export function Item({ id, nombre, imagen, precio, stock }) {

    const { aniadirCarrito } = useContext(ContextoCarrito);

    const producto = {
        id,
        nombre,
        imagen,
        precio
    };

    return (
        <div className="tarjeta">

            <img
                src={imagen}
                alt={nombre}
                className="cookiesabor"
            />

            <h3 className="nombrecookie">
                {nombre}
            </h3>

            <p className="preciocookie">
                ${precio}
            </p>

            <p className="stocknumero">
                Stock: {stock}
            </p>

            <button
                className="agregarbutton"
                onClick={() => aniadirCarrito(producto)}
            >
                Agregar a carrito
            </button>

        </div>
    );
}