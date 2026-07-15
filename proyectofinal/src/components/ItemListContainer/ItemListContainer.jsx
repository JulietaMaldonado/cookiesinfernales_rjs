import { Productos } from "../../pages/Productos/Productos"
import { ItemList } from "../ItemList/ItemList"
import Cookie1 from '../../assets/chocolatechip.png'
import Cookie2 from '../../assets/triplechocolate.png'
import Cookie3 from '../../assets/mantequillademani.png'
import Cookie4 from '../../assets/nutella.png'
import Cookie5 from '../../assets/redvelvet.png'
import Cookie6 from '../../assets/cheesecake.png'
import Cookie7 from '../../assets/bananitadolca.png'
import Cookie8 from '../../assets/vauquita.png'
import Cookie9 from '../../assets/birthdaycake.png'
import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../src/firebase';
import { productosBase } from "../../data/productosBase";

export function ItemListContainer() {

    const productos = [

    ...productosBase,

    ...productosFirebase

];

    const [productosFirebase, setProductosFirebase] = useState([]);

    useEffect(() => {

        const obtenerProductos = async () => {

            try {

                const consulta = await getDocs(
                    collection(db, "productos")
                );

                const lista = consulta.docs.map(doc => ({
                    ...doc.data()
                }));

                setProductosFirebase(lista);

            } catch (error) {

                console.log(error);

            }

        };

        obtenerProductos();

    }, []);

    return (

        <>
            <div className="cookiescontenedor">

                <ItemList productos={productos} />

            </div>
        </>

    );

}