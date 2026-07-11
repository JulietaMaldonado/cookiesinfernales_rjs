import { Item } from "../Item/Item";
import '../ItemList/ItemList.css'

export function ItemList ({productos}){
    return (
        <>
        <div className="cookiescontenedor">
        {productos.map(prod =>(
            <Item key={prod.id} {...prod} />
        ))}
       </div>
        </>
    )
}