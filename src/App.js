
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
  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   webGLFluidEnhanced.simulation(canvasRef.current, {
  //     SIM_RESOLUTION: 256,
  //     DENSITY_DISSIPATION: 0.8,
  //     PRESSURE_ITERATIONS: 30,
  //     COLOR_PALETTE: ['#61dafb', '#a8dadc', '#457b9d', '#1d3557', '#f1faee'],
  //   });
  // }, []);
  


  return (
    
    <div className="App" >
<<<<<<< HEAD
      {/* <canvas ref={canvasRef} style={{ width: '100%', height: '100%'}} id="particles" /> */}
=======
      {/* <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh'}}> */}
>>>>>>> 17154705038841d873959c1851e82a3ce150ce15

      <Header />
      <HeroSection />
      <Application/>
      <Sponsors />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
