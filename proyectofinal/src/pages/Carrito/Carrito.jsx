import { useContext } from "react";
import { ContextoCarrito } from '../../components/ContextoCarrito/ContextoCarrito';
import '../Carrito/Carrito.css';

export function Carrito(){

    const {
        carrito,
        eliminarProducto,
        precioTotal,
        vaciarCarrito

    } = useContext(ContextoCarrito);

    return(

        <div className="contenedorCarrito">

            <h2>Carrito</h2>


           <div className="carritoContenedor">

{
carrito.map(producto => (

    <div className="tarjeta" key={producto.id}>

        <img 
            className="cookiesabor"
            src={producto.imagen}
            alt={producto.nombre}
        />

        <h3>
            {producto.nombre}
        </h3>

        <p>
            Precio: ${producto.precio}
        </p>

        <p>
            Cantidad: {producto.cantidad}
        </p>

        <p>
            Subtotal:
            ${producto.precio * producto.cantidad}
        </p>

        <button
            onClick={() =>
                eliminarProducto(producto.id)
            }
        >
            Eliminar producto
        </button>

    </div>

))

}

</div>


<button
    className="vaciarCarrito"
    onClick={vaciarCarrito}
>
    Vaciar carrito
</button>


<h2>
    Total: ${precioTotal}
</h2>
        </div>

    );

}