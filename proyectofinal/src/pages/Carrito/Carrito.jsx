import { ContextoCarrito } from '../../components/ContextoCarrito/ContextoCarrito';
import '../Carrito/Carrito.css';
import { useContext, useState } from "react";

export function Carrito(){

 const {

    carrito,

    eliminarProducto,

    precioTotal,

    vaciarCarrito,

    codigoDescuento,

    setCodigoDescuento,

    descuentoAplicado,

    aplicarDescuento,

    quitarDescuento

} = useContext(ContextoCarrito);

const [mensaje, setMensaje] = useState("");


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

<div className="cupon">

    <h3>Código de descuento</h3>

    <input

        type="text"

        placeholder="Ingrese el código"
        
        className='descuentoinput'

        value={codigoDescuento}

        onChange={(e)=>

            setCodigoDescuento(e.target.value)

        }

    />

    <button

        onClick={() => {

            if(aplicarDescuento(codigoDescuento)){

                setMensaje("Código aplicado correctamente.");

            }else{

                setMensaje("Código inválido.");

            }

        }}

    >

        Aplicar

    </button>

   {

descuentoAplicado > 0 &&

<button

    onClick={() => {

        quitarDescuento();

        setMensaje("");

    }}

>

    Quitar descuento

</button>

}

    <p>{mensaje}</p>

<p className='descuento'>

Descuento: -${descuentoAplicado}

</p>

</div>



<h2>

Total: ${precioTotal}

</h2>
        </div>

    );

}