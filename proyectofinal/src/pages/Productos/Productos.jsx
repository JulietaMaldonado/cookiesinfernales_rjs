import { ItemListContainer } from '../../components/ItemListContainer/ItemListContainer'
import '../../pages/Productos/Productos.css'

export function Productos(){
    return(
    <>
 <div className='nuestrascookies'>
 <h2 className='nuestrascookietitulo'>Nuestras cookies</h2>
            <ItemListContainer />
</div>
    </>
    )
}