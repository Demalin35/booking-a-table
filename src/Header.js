import React from 'react';
import Nav from './components/Nav';  // Import the Nav component
import logo from '../assets/logo.png';  // Correct path to the logo image

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
