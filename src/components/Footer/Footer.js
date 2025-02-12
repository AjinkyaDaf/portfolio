import React from "react";
import "./Footer.css"; // Import external CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <div className="logo-circle yellow"></div>
          <div className="logo-circle blue"></div>
          <span className="logo-text">Farwa Ali</span>
        </div>

        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
        </nav>

        <div className="footer-socials">
          <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
        </div>

        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back To Top
        </button>
      </div>

      <div className="footer-bottom">
        <p>© 2023 <span className="bold">Farwa Ali</span> All Rights Reserved, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
