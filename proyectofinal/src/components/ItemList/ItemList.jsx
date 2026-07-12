import { Item } from "../Item/Item";
import '../ItemList/ItemList.css'

export function ItemList ({productos}){
    return (
        <>
        {
            productos.map((productos) => (
              <Item 
              key={productos.id} 
              id={productos.id} 
              nombre={productos.nombre}  
              imagen={productos.imagen}
              precio={productos.precio}
              stock={productos.stock}
              />
            ))
        }
        </>
    )
}