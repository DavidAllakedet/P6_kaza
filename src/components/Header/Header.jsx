import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DarkLogo from '../../assets/LOGO.png';

const StyledNavLink = styled(NavLink)`
  padding: 10px;
  color: #ff6060;
  text-decoration: none;
  font-size: 24px;
  ${(props) => props.$isFullLink && `color: white; border-radius: 30px; background-color: #5843E4;`}
  ${(props) => props.$isAccueil && `margin-right: 20px;`}
  
   &.active {
    text-decoration: underline;
   }
`;

const HomeLogo = styled.img`
  height: 70px;
`;

const NavLinkContainer = styled.div`
  padding: 50px 0;
  display: flex;
  width: 1240px;
  justify-content: space-between;
  align-items: center;
`;

const PageLink = styled.nav`
  font-family: Montserrat;
  display: flex;
  gap: 30px;
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
          <StyledNavLink to="/" $isAccueil activeClassName="active">Accueil</StyledNavLink>
          <StyledNavLink to="/about" activeClassName="active">A Propos</StyledNavLink>
        </PageLink>
      </NavLinkContainer>
    </StyledHeader>
  );
}

export default Header;
