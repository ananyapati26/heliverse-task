import React from 'react';
// import { gsap } from 'gsap';
import './HeroSection.css';
import img1 from '../assets/motionarteffect-img1.png'
import img2 from '../assets/motionarteffect-img2.png'
import img3 from '../assets/motionarteffect-img3.png'
import img4 from '../assets/motionarteffect-img4.png'
import img5 from '../assets/motionarteffect-img5.png'
import photo from '../assets/MotionArtEffect-logo.png'

const HeroSection = () => {

    return (
        <section className="hero-section" id="home">
            <div className="head-1">
                <span><img src={photo} width={"70%"}/></span>
                <button className='btn'>Purchase Now</button>
            </div>
            <div className="head-2">
                <div className='child-1'>
                    <div><p className='transform'>Transform</p></div>
                    <div><p className='transform'>your website</p></div>
                    <div><p className='withmotion'>with motion art</p></div>
                    <div><p className='withmotion'>effect</p></div></div>
                <div className='child-2'>
                    <div className='attract'>Attract Your Visitors Attention With Colorful <span className='MAE'>Motion Art Effect</span></div>
                    <div className='description'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </div>
                </div>
            </div>
            <div className="head-3">
                <div className='child-3'>
                    <p className='text'>Trusted by thousands of users around the world</p>
                    <div className='logos'>
                        <div className='l'>
                            <img src={img2} alt='ntg' width={"25%"} />
                            <div className='star'>
                                <img src={img4} alt='ntg' width={"60%"} height={"60%"} />
                                <div><strong>4.5 score,9 reviews</strong></div></div>
                        </div>
                        <div className='l'>
                            <img src={img1} alt='ntg' width={"25%"} />
                            <div className='star'>
                                <img src={img4} alt='ntg' width={"60%"} height={"60%"} />
                                <div><strong>4.5 score,9 reviews</strong></div></div>
                        </div>
                        <div className='l'>
                            <img src={img3} alt='ntg' width={"25%"} />
                            <div className='star'>
                                <img src={img4} alt='ntg' width={"60%"} height={"60%"} />
                                <div><strong>4.5</strong> score,9 reviews</div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="head-4">
                <div className='c-1'>
                    <div className='h-3-text'>Turn Your Cursor Into A Colorful
                    Magic Wand & Charm Your Visitors</div>
                   <p className='para'> Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse
                    your website with visually stunning motion art elements.</p>
                    <button className='btn-2'>purchase from envato </button>
                </div>
                <div className='c-2'>
                    <img src={img5} alt='ntg' width={"100%"} height={"60%"} />
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
