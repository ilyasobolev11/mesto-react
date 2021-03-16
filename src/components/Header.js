import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header root__header">
      <a href="#anchor" className="header__logo-link" target="_self">
        <img src={logo} className="header__logo" alt="логотип" />
      </a>
    </header>
  );
}

export default Header;
