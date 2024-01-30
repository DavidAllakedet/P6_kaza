import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/LOGO.png';
import '../../styles/Header.scss'; 

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="Logo" />
      <div className="header__liens">
        
        <NavLink to="/" activeclassname="active" className='header__liens__lien'>
          Accueil
        </NavLink>
        <NavLink to="/about" activeclassname="active" className='header__liens__lien'>
          A Propos
        </NavLink>
        
        </div>
    </div>
  );
}

export default Header;
