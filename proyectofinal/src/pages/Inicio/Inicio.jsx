import { ProductosDestacados } from '../../components/ProductosDestacados/ProductosDestacados';
import '../Inicio/Inicio.css';

export function Inicio(){
    return (
    <>
    <div className="quienessomos">
          
           <div className="infoemprendimiento">
            <h2>Quienes somos</h2>
            <p className='info'>Cookies Infernales es un emprendimiento ubicado en el barrio de Flores, que se especializa en la preparación y venta de galletitas estilo Nueva York. <br />
                Especialmente chocolate chip cookies que no van desde el sabor clásico para este tipo de galletitas sino también hasta sabores diferentes y complejos como cheesecake de arándanos, bananita dolca, vauquita, etc. <br />
                Pero también ofrece otros productos que varian desde la época del año hasta las festividades donde se pueden ver promociones especiales de productos no vistos comúnmente en este negocio.</p>
            </div>
    </div>
    <div className="productos">
      <ProductosDestacados />
    </div>
    </>    
    )
    }