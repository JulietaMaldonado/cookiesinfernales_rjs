import '../../components/NavBar/NavBar.css'
import {Link} from 'react-router-dom';
import { Inicio } from '../../pages/Inicio/Inicio';
import { Productos } from '../../pages/Productos/Productos';
import { Contacto } from '../../pages/Contacto/Contacto';

export function NavBar() {

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
                    className="enlacenav"
                >
                    CARRITO
                </Link>

            </div>

        </nav>

    );
}