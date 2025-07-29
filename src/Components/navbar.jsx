import React, { useState } from 'react';
import './navbar.css';
import logo from '/Images/logo.png';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  const navbar = document.querySelector('.navbar');

  if (section && navbar) {
    const navbarHeight = navbar.offsetHeight;
    const sectionTop = section.offsetTop - navbarHeight;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logoWrapper">
        <img src={logo} alt="Sunflower Sunrays Logo" className="logo-img" />
        <div className="logoMotto">
          <strong>Brightening lives one ray at a time</strong>
        </div>
      </div>

      {/* Hamburger */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <div className={`navRightGroup ${menuOpen ? 'open' : ''}`}>
        <ul className="navbarLinks">
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
          <li><button onClick={() => scrollToSection('our beautiful home')}>Our Beautiful Home</button></li>
          <li><button onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
        <div className="telephoneText">📞 817-583-4801</div>
      </div>
    </nav>
  );
};

export default Navbar;
