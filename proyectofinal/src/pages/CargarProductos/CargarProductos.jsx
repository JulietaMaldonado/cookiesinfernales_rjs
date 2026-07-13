import '../CargarProductos/CargarProductos.css'
import { useState } from "react";
import { db } from '../../../src/firebase';
import { collection, addDoc } from "firebase/firestore";

export function CargarProductos() {
    const [id, setId] = useState("");

    const [nombre, setNombre] = useState("");

    const [imagen, setImagen] = useState("");

    const [precio, setPrecio] = useState("");

    const [stock, setStock] = useState("");

    const guardarProducto = async (e) => {

        e.preventDefault();

        try {

            await addDoc(

                collection(db, "productos"),

                {

                    id: Number(id),

                    nombre,

                    imagen,

                    precio: Number(precio),

                    stock: Number(stock)

                }

            );

            alert("Producto agregado correctamente");

            setId("");

            setNombre("");

            setImagen("");

            setPrecio("");

            setStock("");

        }

        catch (error) {

            console.log(error);

            alert("No se pudo guardar el producto");

        }

    };

    return (

        <div className="contenedorFormulario">

            <form
                className="formProducto"
                onSubmit={guardarProducto}
            >

                <h2>Nuevo Producto</h2>

                <input

                    type="number"

                    placeholder="ID"

                    value={id}

                    onChange={(e)=>setId(e.target.value)}

                    required

                />

                <input

                    type="text"

                    placeholder="Nombre"

                    value={nombre}

                    onChange={(e)=>setNombre(e.target.value)}

                    required

                />

                <input

                    type="text"

                    placeholder="URL Imagen"

                    value={imagen}

                    onChange={(e)=>setImagen(e.target.value)}

                    required

                />

                <input

                    type="number"

                    placeholder="Precio"

                    value={precio}

                    onChange={(e)=>setPrecio(e.target.value)}

                    required

                />

                <input

                    type="number"

                    placeholder="Stock"

                    value={stock}

                    onChange={(e)=>setStock(e.target.value)}

                    required

                />

                <button>

                    Guardar producto

                </button>

            </form>

        </div>

    );
}