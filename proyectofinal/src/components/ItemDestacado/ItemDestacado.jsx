import "../ItemDestacado/ItemDestacado.css";

export function ItemDestacado({nombre, imagen, precio}){

    return(

        <div className="tarjetaDestacada">

            <img
                src={imagen}
                alt={nombre}
                className="cookieDestacada"
            />

            <h3 className="nombrecookie">

                {nombre}

            </h3>

            <p className="precioDestacado">

                ${precio}

            </p>

        </div>

    );

}