import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DarkLogo from '../../assets/LOGO.png';

const StyledNavLink = styled(NavLink)`
  color: #ff6060;
  text-decoration: none;
  font-size: 24px;
  
   &.active {
    text-decoration: underline;
   }

   @media screen and (max-width: 600px) {
    
    font-size: 12px;
    padding:0;
    text-transform: uppercase;
  `;

const HomeLogo = styled.img`
  height: 70px;

  @media screen and (max-width: 600px) {
    width: 145px;
    height: 46.881px;
    flex-shrink: 0;
    
`;

const NavLinkContainer = styled.div`
  padding: 50px 0;
  display: flex;
  width: 1240px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    height: auto;
    width:335px;
    padding: 30px 0;
`;

const PageLink = styled.nav`
  font-family: Montserrat;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    gap: 20px;
`;

const StyledHeader = styled.header`
  text-align: center;


`;

function Header() {
  return (
    <StyledHeader>
      <NavLinkContainer>
        <NavLink to="/">
          <HomeLogo src={DarkLogo} />
        </NavLink>
        <PageLink>
          <StyledNavLink to="/" activeclassname="active">Accueil</StyledNavLink>
          <StyledNavLink to="/about" activeclassname="active">A Propos</StyledNavLink>
        </PageLink>
      </NavLinkContainer>
    </StyledHeader>
  );
}

export default Header;


