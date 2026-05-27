import {Header} from '../../components/Header/Header';
import {Nav} from '../../components/Nav/Nav';
import {Footer} from '../../components/Footer/Footer';
import '../Inicio/Inicio.css';
import Cookie1 from '../../assets/chocolatechip.png'
import Cookie2 from '../../assets/triplechocolate.png'
import Cookie3 from '../../assets/mantequillademani.png'
import Cookie4 from '../../assets/birthdaycake.png'
import Cookie5 from '../../assets/nutella.png'
import Cookie6 from '../../assets/redvelvet.png'
import Cookie7 from '../../assets/cheesecake.png'
import Cookie8 from '../../assets/vauquita.png'
import Cookie9 from '../../assets/bananitadolca.png'

export function Inicio(){
    <>
    <Header />
    <Nav />
        
    <div className="quienessomos">
          <h2>Quienes somos</h2>
           <div className="infoemprendimiento">
            <p>Cookies Infernales es un emprendimiento ubicado en el barrio de Flores, que se especializa en la preparación y venta de galletitas estilo Nueva York. </p>
            <p>Especialmente chocolate chip cookies que no van desde el sabor clásico para este tipo de galletitas sino también hasta sabores diferentes y complejos como cheesecake de arándanos, bananita dolca, vauquita, etc.</p>
            <p>Pero también ofrece otros productos que varian desde la época del año hasta las festividades donde se pueden ver promociones especiales de productos no vistos comúnmente en este negocio.</p>
            </div>
    </div>

 <div class="nuestrascookies">
            <h2 class="nuestrascookietitulo">Nuestras cookies</h2>
            <div class="productoscookies">
                <div className="tarjeta"><img src={Cookie1} alt="" className='cookiesabor'/>
                    <h3>CHOCOLATE CHIP</h3></div>
                <div className="tarjeta"><img src={Cookie2} alt="" className='cookiesabor'/>
                    <h3>TRIPLE CHOCOLATE</h3></div>
                <div className="tarjeta"><img src={Cookie3} alt="" className='cookiesabor'/>
                    <h3>MANTEQUILLA DE MANI</h3></div>
                <div className="tarjeta"> <img src={Cookie4} alt="" className='cookiesabor'/>
                    <h3>BIRTHDAY CAKE</h3></div>
                <div className="tarjeta">   <img src={Cookie5} alt="" className='cookiesabor'/>
                    <h3>NUTELLA</h3></div>
                <div className="tarjeta"><img src={Cookie6} alt="" className='cookiesabor'/>
                    <h3>RED VELVET</h3></div>
                <div className="tarjeta"><img src={Cookie7} alt="" className='cookiesabor'/>
                    <h3>CHEESECAKE DE ARANDANOS</h3></div>
                <div className="tarjeta"> <img src={Cookie8} alt="" className='cookiesabor'/>
                    <h3>VAUQUITA</h3></div>
                <div className="tarjeta"> <img src={Cookie9} alt="" className='cookiesabor'/>
                    <h3>BANANITA DOLCA</h3></div>
            </div>
</div>

<Footer />
    </>
    }