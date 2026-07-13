import { createContext, useState } from "react";


export const ContextoCarrito = createContext();


export function CarritoProvider({children}){


    const [carrito, setCarrito] = useState([]);
    const [codigoDescuento, setCodigoDescuento] = useState("");
    const [descuentoAplicado, setDescuentoAplicado] = useState(0);

    const aplicarDescuento = (codigo) => {

    if (codigo === "INFERNO98") {

        setDescuentoAplicado(1000);

        return true;

    }

    setDescuentoAplicado(0);

    return false;

}

const quitarDescuento = () => {

    setCodigoDescuento("");

    setDescuentoAplicado(0);

}

    const aniadirCarrito = (producto) => {

        const existe = carrito.find(
            item => item.id === producto.id
        );


        if(existe){

            setCarrito(
                carrito.map(item =>
                    item.id === producto.id
                    ?
                    {
                        ...item,
                        cantidad:item.cantidad + 1
                    }
                    :
                    item
                )
            );

        } else {

            setCarrito([
                ...carrito,
                {
                    ...producto,
                    cantidad:1
                }
            ]);

        }

    };



    const eliminarProducto = (id) => {

        setCarrito(

            carrito.map(item =>

                item.id === id

                ?
                {
                    ...item,
                    cantidad:item.cantidad - 1
                }

                :
                item

            )
            .filter(item => item.cantidad > 0)

        );

    };



    const vaciarCarrito = () => {

        setCarrito([]);

    };

const cantidadProductos = carrito.reduce(
    (total,item) => total + item.cantidad,
    0
);

const subtotal = carrito.reduce(

    (total,item)=>

        total + (item.precio * item.cantidad),

    0

);

const precioTotal = Math.max(

    subtotal - descuentoAplicado,

    0

);



    return(

      <ContextoCarrito.Provider
   value={{

    carrito,

    aniadirCarrito,

    eliminarProducto,

    vaciarCarrito,

    precioTotal,

    cantidadProductos,

    codigoDescuento,

    setCodigoDescuento,

    descuentoAplicado,

    aplicarDescuento,

    quitarDescuento

}}>
    {children}
</ContextoCarrito.Provider>

    );

}