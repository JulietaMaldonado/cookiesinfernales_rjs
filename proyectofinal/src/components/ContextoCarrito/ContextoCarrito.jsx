import { createContext, useState } from "react";


export const ContextoCarrito = createContext();


export function CarritoProvider({children}){


    const [carrito, setCarrito] = useState([]);



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



   const precioTotal = carrito.reduce(

    (total,item) =>
        total + (item.precio * item.cantidad),

    0

);


const cantidadProductos = carrito.reduce(
    (total,item) => total + item.cantidad,
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
        cantidadProductos
    }}
>
    {children}
</ContextoCarrito.Provider>

    );

}