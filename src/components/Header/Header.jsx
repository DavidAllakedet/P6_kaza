import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '../../assets/LOGO.png'

const StyledLink = styled(Link)`
    padding: 10px;
    color: #ff6060;
    text-decoration: none;
    font-size: 24px;
    ${(props) =>
      props.$isFullLink &&
      `color: white; border-radius: 30px; background-color: #5843E4;`}
`;
const HomeLogo = styled.img`
  padding: 30px;
  height: 70px;
`
const NavLinkContainer = styled.div`
  padding: 20px 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
    
`;
const HLink = styled.nav`
  
  justify-content: space-between;
  align-items: center;
    
`;

function Header() {
  return (
    <NavLinkContainer>
      <Link to="/">
        <HomeLogo src={DarkLogo} />
      </Link>
      <HLink>
        <StyledLink to="/">ACCUEIL</StyledLink>
        <StyledLink to="/about">A-PROPOS</StyledLink>
      </HLink>
    </NavLinkContainer>
    
  )
}

export default Header


