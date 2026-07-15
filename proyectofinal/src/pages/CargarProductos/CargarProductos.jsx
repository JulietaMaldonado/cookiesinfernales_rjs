import '../CargarProductos/CargarProductos.css'
import { useState, useEffect } from "react";
import { db } from '../../../src/firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { useRef } from "react";
import { productosBase } from "../../data/productosBase";


export function CargarProductos() {
    const formularioRef = useRef(null);
    const [productos, setProductos] = useState([]);

    const [id, setId] = useState("");
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");

    const [productoEditar, setProductoEditar] = useState(null);

    const [mostrarModal, setMostrarModal] = useState(false);

    const [productoEliminar, setProductoEliminar] = useState(null);

    const productosTotales = [

    ...productosBase,

    ...productos

    ];

    const [cupones, setCupones] = useState([]);

    const [codigo, setCodigo] = useState("");

    const [descuento, setDescuento] = useState("");



    const obtenerProductos = async () => {

        const consulta = await getDocs(
            collection(db, "productos")
        );

        const lista = consulta.docs.map(doc => ({

            idFirestore: doc.id,

            ...doc.data()

        }));

        setProductos(lista);

    };

useEffect(() => {

    obtenerProductos();

    obtenerCupones();

}, []);



    const limpiarFormulario = () => {

        setId("");
        setNombre("");
        setImagen("");
        setPrecio("");
        setStock("");

        setProductoEditar(null);

    };



    const guardarProducto = async (e) => {

        e.preventDefault();

        try {

            if (productoEditar) {

                await updateDoc(

                    doc(db, "productos", productoEditar),

                    {

                        id: id,

                        nombre: nombre,

                        imagen: imagen,

                        precio: Number(precio),

                        stock: Number(stock)

                    }

                );

                alert("Producto actualizado");

            } else {

                await addDoc(

                    collection(db, "productos"),

                    {

                        id: id,

                        nombre: nombre,

                        imagen: imagen,

                        precio: Number(precio),

                        stock: Number(stock)

                    }

                );

                alert("Producto agregado");

            }

            limpiarFormulario();

            obtenerProductos();

        }

        catch (error) {

            console.log(error);

            alert("Ocurrió un error.");

        }

    };



 const editarProducto = (producto) => {

    console.log(producto);

    setProductoEditar(producto.idFirestore);

    setId(producto.id);
    setNombre(producto.nombre);
    setImagen(producto.imagen);
    setPrecio(producto.precio);
    setStock(producto.stock);

}



    const eliminarProducto = async () => {

        try {

            await deleteDoc(

                doc(db, "productos", productoEliminar)

            );

            setMostrarModal(false);

            setProductoEliminar(null);

            obtenerProductos();

        }

        catch (error) {

            console.log(error);

        }

    };

const obtenerCupones = async () => {

    const consulta = await getDocs(

        collection(db,"cupones")

    );

    const lista = consulta.docs.map(doc=>({

        idFirestore:doc.id,

        ...doc.data()

    }));

    setCupones(lista);

}

const guardarCupon = async(e)=>{

    e.preventDefault();

    await addDoc(

        collection(db,"cupones"),

        {

            codigo,

            descuento:Number(descuento)

        }

    );

    setCodigo("");

    setDescuento("");

    obtenerCupones();

}

const eliminarCupon = async (id) => {

    try {

        await deleteDoc(

            doc(db, "cupones", id)

        );

        obtenerCupones();

    }

    catch (error) {

        console.log(error);

    }

};

    return (

        <div className="contenedorFormulario">

           <form
    ref={formularioRef}
    onSubmit={guardarProducto}
    className='formProducto'
>

                <h2>

                    {productoEditar ?

                        "Editar producto"

                        :

                        "Nuevo producto"

                    }

                </h2>

                <input

                    type="number"

                    placeholder="ID"

                    value={id}

                    onChange={(e) => setId(e.target.value)}

                    required

                />

                <input

                    type="text"

                    placeholder="Nombre"

                    value={nombre}

                    onChange={(e) => setNombre(e.target.value)}

                    required

                />

                <input

                    type="text"

                    placeholder="URL Imagen"

                    value={imagen}

                    onChange={(e) => setImagen(e.target.value)}

                    required

                />

                <input

                    type="number"

                    placeholder="Precio"

                    value={precio}

                    onChange={(e) => setPrecio(e.target.value)}

                    required

                />

                <input

                    type="number"

                    placeholder="Stock"

                    value={stock}

                    onChange={(e) => setStock(e.target.value)}

                    required

                />

                <button type="submit">

    {
        productoEditar
            ? "Actualizar producto"
            : "Guardar producto"
    }

</button>

            </form>



            <div className="listaProductos">

                <h2>

                    Productos cargados

                </h2>
                
                <div className="productosContenedor">
                {

                  productosTotales.map(producto => (

    <div
        className="productoAdmin"
        key={producto.idFirestore || producto.id}
    >

                            <img

                                src={producto.imagen}

                                width="120"

                                alt={producto.nombre}

                            />

                            <h3>

                                {producto.nombre}

                            </h3>

                            <p>

                                Precio: ${producto.precio}

                            </p>

                            <p>

                                Stock: {producto.stock}

                            </p>

                            <button

                                onClick={() => editarProducto(producto)}

                            >

                                Editar

                            </button>

                            <button

                                onClick={() => {

                                    setProductoEliminar(producto.idFirestore);

                                    setMostrarModal(true);

                                }}

                            >

                                Eliminar

                            </button>

                        </div>  ))

                }   
                </div>
                

                   

            </div>



            {

                mostrarModal &&

                <div className="modal">

                    <div className="modalContenido">

                        <h3>

                            ¿Está seguro que desea eliminar este producto?

                        </h3>

                        <button

                            onClick={eliminarProducto}

                        >

                            Sí, eliminar

                        </button>

                        <button

                            onClick={() => setMostrarModal(false)}

                        >

                            Cancelar

                        </button>

                    </div>

                </div>

            }
           <div className="crearCupon">
                <h2>

Administrar cupones

</h2>

<form onSubmit={guardarCupon}>

    <input

        type="text"

        placeholder="Código"

        value={codigo}

        onChange={(e)=>setCodigo(e.target.value)}

        required

    />

    <input

        type="number"

        placeholder="Descuento"

        value={descuento}

        onChange={(e)=>setDescuento(e.target.value)}

        required

    />

    <button>

        Crear cupón

    </button>

</form>

    {

cupones.map(cupon=>(

<div
key={cupon.idFirestore}

className="cuponAdmin"

>

   <h3>

{cupon.codigo}

</h3>

<p className='descuentoPrecio'>

-${cupon.descuento}

</p>

<button

onClick={()=>eliminarCupon(cupon.idFirestore)}

>

Eliminar

</button>

</div>

))

}
</div> 
        </div>

 

    );

}