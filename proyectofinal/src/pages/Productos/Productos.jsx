import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'
import '../../pages/Productos/Productos.css'
import { db } from '../../../src/firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";

export function Productos(){
    const [productos,setProductos]=useState([]);

useEffect(()=>{

const obtenerProductos=async()=>{

const consulta=await getDocs(

collection(db,"productos")

);

const lista=consulta.docs.map(doc=>(

doc.data()

));

setProductos(lista);

}

obtenerProductos();

},[]);

    return(
    <>
 <div className='nuestrascookies'>
 <h2 className='nuestrascookietitulo'>Nuestras cookies</h2>
            <ItemListContainer />
</div>
    </>
    )
}