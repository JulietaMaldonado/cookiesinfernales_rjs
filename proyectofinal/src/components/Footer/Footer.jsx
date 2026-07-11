import LogoCookies from '../../assets/logocookies.png'
import '../Footer/Footer.css'

export function Footer() {
  return (
    <>
    <footer>
           <div className="redes">
            <h5>REDES SOCIALES</h5>
           <div className="redesfooter"> 
            <a href="https://www.instagram.com/cookiesinfernales/">
                <i className="fa-brands fa-instagram fa-2x"></i>
            </a>
        </div>
    </div>
        <div className="contactofooter">
            <h5>CONTACTO</h5>
            <ul>
                <li>Whatsapp: (+54) 11-3442-5418</li>
                <li>Mail: cookiesinfernales@gmail.com</li>
            </ul>
        </div>
        <div className="tarjetasfooter">
          <h5>EMPLEADOS</h5>
          <div className="empletarjetas">
             <div className="empleados">
            <h6>Helena Barton</h6>
            <p>Fundadora y CEO de Cookies Infernales.</p>
          </div>
          <div className="empleados">
            <h6>Camille Simon</h6>
            <p>Diseñadora gráfica principal de Cookies Infernales.</p>
          </div>
          <div className="empleados">
            <h6>Ashley Carson</h6>
            <p>Community manager principal de Cookies Infernales.</p>
          </div>
          </div>
       </div>
    </footer>
    </>
  )
}