import '../Item/Item.css';
import { useContext, useState } from 'react';
import { ContextoCarrito } from '../ContextoCarrito/ContextoCarrito';

export function Item({id, nombre, imagen, precio, stock}){

    const { aniadirCarrito } = useContext(ContextoCarrito);

    const [mensaje, setMensaje] = useState(false);

    return(

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

                {stock}

            </p>

            <button

                className="agregarbutton"

                onClick={() => {

                    aniadirCarrito({
                        id,
                        nombre,
                        imagen,
                        precio
                    });

                    setMensaje(true);

                    setTimeout(() => {

                        setMensaje(false);

                    }, 2000);

                }}

            >

                Agregar a carrito

            </button>

            {

                mensaje &&

                <p className="mensajeAgregado">

                    ¡Producto agregado con éxito!

                </p>

            }

        </div>

    );

}