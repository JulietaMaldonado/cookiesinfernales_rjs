import '../../components/NavBar/NavBar.css'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ContextoCarrito } from "../ContextoCarrito/ContextoCarrito";


export function NavBar() {

    const { cantidadProductos } = useContext(ContextoCarrito);


    return (

        <nav>

            <div className="enlaces">

                <Link
                    to="/"
                    className="enlacenav"
                >
                    INICIO
                </Link>


                <Link
                    to="/productos"
                    className="enlacenav"
                >
                    PRODUCTOS
                </Link>


                <Link
                    to="/contacto"
                    className="enlacenav"
                >
                    CONTACTO
                </Link>


                <Link
                    to="/carrito"
                    className="enlacenav carritoLink"
                >

                    <div className="iconoCarrito">

                        <i className="fa-solid fa-cart-shopping"></i>


                        {
                            cantidadProductos > 0 &&

                            <span>
                                {cantidadProductos}
                            </span>

                        }

                    </div>

                </Link>


            </div>

        </nav>

    );
}