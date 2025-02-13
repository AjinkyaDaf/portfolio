import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

import profileImage from '../../assets/biker.jpg'; // Updated image path

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <p className="intro">Hi, I am</p>
          <h1 className="name">Ajinkya Daf</h1>
          <h2 className="title">UI & UX Designer</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor
            massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh
            libero pharetra tristique.
          </p>

          <div className="buttons">
            <button className="btn hire-btn">Hire Me</button>
            <button className="btn download-btn">📥 Download CV</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImage} alt="Farwa Ali" />
        </div>
      </section>
      <div className="social-icons">
      <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
      <a href="#"><i className="fab fa-linkedin"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-whatsapp"></i></a>
    </div>

    </div>
  );
};

export default Home;