import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./views/Home/Home.js";
import './index.css';
import AboutMe from './views/About/About.js';
import Projects from './components/Projects/Project.js';
import Footer from './components/Footer/Footer.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>

<Home/>
<AboutMe/>
<Projects/>
<Footer/>
</>
);

