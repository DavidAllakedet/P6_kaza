import LogoF from '../../assets/LOGOF.png'
import '../../styles/Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <img src={LogoF} alt="Logo du site" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa, All rights reserved</p>
    </div>
  )
}
export default Footer
