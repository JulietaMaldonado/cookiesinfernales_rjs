import { ItemDestacado } from "../ItemDestacado/ItemDestacado";
import '../ItemListDestacados/ItemListDestacados.css'

export function ItemListDestacados({productos}){

    return(

        <>
        <div className="productoscontenedor">
            {

                productos.map(producto=>(

                    <ItemDestacado

                        key={producto.id}

                        nombre={producto.nombre}

                        imagen={producto.imagen}

                        precio={producto.precio}

                    />

                ))

            }
        </div>

            

        </>

    );

}