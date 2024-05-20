import React from 'react'
import './Application.css';
import img10 from '../assets/motionarteffect-img10.png'
import img11 from '../assets/motionarteffect-img11.png'

const Application = () => {
    return (
        <section className='Application'>
            <p className='a-text a-text1'>Apply On Any Section Or Enable For Whole Page</p>
            <div className="a-1">
                <div className='app-1'>
                    <h2>Apply On Section</h2>
                    <p className='card-text'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                    <img className='card-1' src={img10} alt='ntg' />
                </div>
                <div className='app-2'>
                    <h2>Apply On Page</h2>
                    <p className='card-text'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                    <img className='card-1' src={img10} alt='ntg' />
                </div>
            </div>

        </section>

    )
}

export default Application