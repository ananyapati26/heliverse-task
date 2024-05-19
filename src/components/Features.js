import React from 'react';
// import { gsap } from 'gsap';
import './Features.css';
import img6 from '../assets/motionarteffect-img7.png'
import img7 from '../assets/motionarteffect-img6.png'
import img9 from '../assets/motionarteffect-img9.png'

const Features = () => {

  return (
    <section className='features'>
      <h2>Features</h2>
      <div className='container'>
      <div className='heading'>
        <div>An All-Round Plugin With Powerful Features</div>
        <div className='p'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</div>
      </div>
      <div className='feature'>
        <div className="feature-child">
          <div className='feature-img'><img src={img6} alt="feature-img"  width={"90%"} /></div>
          <div className='desc'><h2>Light Weight</h2><div><p>Motion Art for Elementor is designed to be lightweight.</p></div></div>
        </div>
        <div className="feature-child">
          <div className='feature-img'><img src={img9} alt="feature-img"  width={"90%"} /></div>
          <div className='desc'><h2>Light Weight</h2><div><p>Motion Art for Elementor is designed to be lightweight.</p></div></div>
        </div>
        <div className="feature-child">
          <div className='feature-img'><img src={img7} alt="feature-img"  width={"90%"} /></div>
          <div className='desc'><h2>Light Weight</h2><div><p>Motion Art for Elementor is designed to be lightweight.</p></div></div>
        </div>
        
      </div>
      </div>     
    </section>
  );
};

export default Features;
