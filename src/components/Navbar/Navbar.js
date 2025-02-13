import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <div className="circle yellow"></div>
        <div className="circle blue"></div>
        <span className="brand-name">Ajinkya Daf</span>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>

      {/* Contact Button */}
      <button className="contact-btn">Contact Me</button>
    </nav>
  );
};

export default Navbar;
