import React from 'react'
import './Sponsors.css';
import img8 from '../assets/motionarteffect-img8.png'

const Sponsors = () => {
    return (
        <section className='Sponsors'>
            <div className="s-1">
                <p className='s-text s-text1'>Supported by All Popular Browsers</p>
                <p className='s-text s-text2'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
                
                    <img className='pic' src={img8} alt='ntg' />
            </div>
        </section>
    )
}

export default Sponsors