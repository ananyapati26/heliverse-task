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
                    <h2>lalalal</h2>
                    <p className='card-text'>dhnjudefhdehbfjbfujf</p>
                    <img className='card-1' src={img10} alt='ntg' />
                </div>
                <div className='app-2'>
                    <h2>lalalal</h2>
                    <p className='card-text'>dhnjudefhdehbfjbfujf</p>
                    <img className='card-1' src={img10} alt='ntg' />
                </div>
            </div>

        </section>

    )
}

export default Application