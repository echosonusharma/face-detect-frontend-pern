import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain-ai.png';



const tiltOptions = {
    reverse: true,  // reverse the tilt direction
    max: 65,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,      // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,    // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,  // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Logo = () => {


    return (
        <div className='ma4 mt4' >
            <Tilt className="Tilt br2 shadow-2" options={tiltOptions} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa2 pl3" style={{ paddingTop: '18px', paddingRight: '20px' }}>
                    <img src={brain} alt='logo' />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;
