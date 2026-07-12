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

export function ItemListContainer (){
 const productos = [

        {id: '1', nombre: "Chocolate Chip", precio: 1200, stock: 20, imagen: Cookie1},
        {id: '2', nombre: "Triple Chocolate", precio: 1200, stock: 20, imagen: Cookie2},
        {id: '3', nombre: "Mantequilla de Mani", precio: 1500, stock: 15, imagen: Cookie3},
        {id: '4', nombre: "Nutella", precio: 1500, stock: 10, imagen: Cookie4},
        {id: '5', nombre: "Red Velvet", precio: 1500, stock: 10, imagen: Cookie5},
        {id: '6', nombre: "Bananita Dolca", precio: 2000, stock: 10, imagen: Cookie6},
        {id: '7', nombre: "Cheesecake", precio: 2200, stock: 8, imagen: Cookie7},
        {id: '8', nombre: "Vauquita", precio: 2200, stock: 20, imagen: Cookie8},
        {id: '9', nombre: "Birthday Cake", precio: 1200, stock: 15, imagen: Cookie9},
      
    ] 

        return(

        <>
        <div className="cookiescontenedor">
             <ItemList productos={productos} />  
        </div>
         
       </>

        ) 
 }