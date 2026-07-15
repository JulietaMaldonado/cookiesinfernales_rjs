import '../../components/NavBar/NavBar.css'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ContextoCarrito } from "../ContextoCarrito/ContextoCarrito";
import { AuthContext } from "../AuthContext/AuthContext";

export function NavBar() {

    const { cantidadProductos } = useContext(ContextoCarrito);
    const { logueado, logout } = useContext(AuthContext);

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
                
                
               {
    !logueado ?

    <Link
        to="/login"
        className="enlacenav"
    >
        INICIAR SESIÓN
    </Link>

    :

    <>

        <Link
            to="/admin"
            className="enlacenav"
        >
            CARGAR PRODUCTO
        </Link>

        <button
            onClick={logout}>
            CERRAR SESIÓN
        </button>

    </>

}

            </div>

        </nav>

    );
}