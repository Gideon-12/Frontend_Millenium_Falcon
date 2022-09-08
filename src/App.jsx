import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navbars.jsx';
import Footer from './components/Navigation/Footer.jsx';
import Tests from './components/Screens/Tests/Testings.jsx';
import { ParticlesCircle } from './components/Particlejs/ParticlesCircle.jsx';
import { loadFull } from "tsparticles";
import { Card } from './components/Cards/Card.jsx';
import {BrowserRouter} from 'react-router-dom';
import {Route} from "react-router-dom";


function App() {

    const particlesInit = async (main) => {
        await loadFull(main);
    };


  return (
    
  <BrowserRouter>
    <div className="main">
        <ParticlesCircle particlesInit={particlesInit} />
        <Navigation />
        <h1 className='mainTitle'>Millenium Falcon</h1>
        <Route exact path="/" component={Card} />
        <Route exact path="/testings" component={Tests} />
        <Footer />

    </div>
  </BrowserRouter>
  );
}

export default App;
