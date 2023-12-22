import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '../../assets/LOGOF.png'

function Footer() {

  const FooterDiv = styled(Link)`
  Display:flex;
  padding: 50px 0;
  width:100%;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  font-family: Montserrat;
  color: white;
  text-decoration: none;
  gap:30px;
  background-color: black;

  @media screen and (max-width: 600px){
    margin:0;
    width: 100%;
    font-size: 16px;
`

const FooterText = styled.div`
font-size: 24px;
white-space: nowrap;

@media screen and (max-width: 600px) {
  font-size: 12px;
  white-space: pre-line; 
`
const FooterLogo = styled.img`
  padding: 30px;
  height: 70px;
  
  @media screen and (max-width: 600px) {
    padding: 0;
    height:40px;
`
  return (
    <FooterDiv >
      <FooterLogo src={DarkLogo} alt="Logo du site" />
      <FooterText >© 2020 Kasa. All <br key="line-break" /> rights reserved</FooterText>
    </FooterDiv>
  )
}
export default Footer
