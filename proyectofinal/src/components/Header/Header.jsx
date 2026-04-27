import LogoCookies from '../../assets/logocookies.png'
import '../Header/Header.css'

export function Header() {
  return (
    <>
    <header>
      <img src={LogoCookies} alt="Cookies Infernales Logo" className='logo'/>
    </header>
    </>
  )
}