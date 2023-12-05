import HomeLogo from '../../assets/HomeLogo.svg'
import '../../style/Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <img src={HomeLogo} alt="Logo du site" className="footer__logo" />
      <p className="footer__right">© 2020 Kasa, All rights reserved</p>
    </div>
  )
}
export default Footer