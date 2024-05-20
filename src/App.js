
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Application from './components/Application';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import './App.css';
import { useEffect, useRef } from 'react';
import webGLFluidEnhanced from 'webgl-fluid-enhanced';
const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    webGLFluidEnhanced.simulation(canvasRef.current, {
      SIM_RESOLUTION: 128,
      DENSITY_DISSIPATION: 0.6,
      PRESSURE_ITERATIONS: 30,
      BACK_COLOR: '#0c0c1a', 
      SPLAT_AMOUNT: 4,
      });
  }, []);
  


  return (
    <>
    <canvas ref={canvasRef} style={{ width: '100%', height: '100%',position:"fixed",zIndex:"0"}} id="particles" />
    <div className="App" >
      {/* <canvas ref={canvasRef} style={{ width: '100%', height: '100%'}} id="particles" /> */}

      <Header />
      <HeroSection />
      <Application/>
      <Sponsors />
      <Features />
      <Footer />
    </div>
    </>
  );
};

export default App;
