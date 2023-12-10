import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '../../assets/LOGOF.png'

function Footer() {

  const FooterDiv = styled(Link)`
  Display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
    padding: 10px;
    color: white;
    text-decoration: none;
    font-size: 24px;
    background-color: black;
    `
const FooterLogo = styled.img`
  padding: 30px;
  height: 70px;
`



  return (
    <FooterDiv className="footer">
      <FooterLogo src={DarkLogo} alt="Logo du site" className="footer__logo" />
      <p className="footer__right">© 2020 Kasa, All rights reserved</p>
    </FooterDiv>
  )
}
export default Footer