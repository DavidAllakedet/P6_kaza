import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DarkLogo from '../../assets/LOGO.png';

const StyledLink = styled(Link)`
  padding: 10px;
  color: #ff6060;
  text-decoration: none;
  font-size: 24px;
  ${(props) => props.$isFullLink && `color: white; border-radius: 30px; background-color: #5843E4;`}
  ${(props) => props.$isAccueil && `margin-right: 20px;`}
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
  gap: 30px; /* Increase the gap between links */
`;

const StyledHeader = styled.header`
  text-align: center;
`;

function Header() {
  return (
    <StyledHeader>
      <NavLinkContainer>
        <Link to="/">
          <HomeLogo src={DarkLogo} />
        </Link>
        <PageLink>
          <StyledLink to="/" $isAccueil>
            Accueil
          </StyledLink>
          <StyledLink to="/about">A Propos</StyledLink>
        </PageLink>
      </NavLinkContainer>
    </StyledHeader>
  );
}

export default Header;
