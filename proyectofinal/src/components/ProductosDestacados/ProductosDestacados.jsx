import { Link } from "react-router-dom";
import { ItemListDestacados } from "../ItemListDestacados/ItemListDestacados";


import Cookie1 from "../../assets/chocolatechip.png";
import Cookie2 from "../../assets/triplechocolate.png";
import Cookie3 from "../../assets/mantequillademani.png";
import Cookie4 from "../../assets/nutella.png";
import Cookie5 from "../../assets/redvelvet.png";
import Cookie6 from "../../assets/cheesecake.png";

import "./ProductosDestacados.css";

export function ProductosDestacados(){

   const productos = [
   
           { id: '1', nombre: "Chocolate Chip", precio: 1200, stock: 20, imagen: Cookie1 },
           { id: '2', nombre: "Triple Chocolate", precio: 1200, stock: 20, imagen: Cookie2 },
           { id: '3', nombre: "Mantequilla de Mani", precio: 1500, stock: 15, imagen: Cookie3 },
           { id: '4', nombre: "Nutella", precio: 1500, stock: 10, imagen: Cookie4 },
           { id: '5', nombre: "Red Velvet", precio: 1500, stock: 10, imagen: Cookie5 },
           { id: '6', nombre: "Bananita Dolca", precio: 2000, stock: 10, imagen: Cookie6 }
       ];

    return(

        <div className="productosInicio">

            <h2>

                Nuestros productos

            </h2>

            <div className="productosGrid">

                <ItemListDestacados productos={productos}/>

            </div>

            <Link to="/productos" className="linkProductos"> Ver más productos </Link>

        </div>

    );

}