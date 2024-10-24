import React from 'react';
import Nav from './components/Nav';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
