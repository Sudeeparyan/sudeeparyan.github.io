import React, { useState, useEffect } from 'react';
import FaceImg from './Images/bot/robo.png';
import "./Facesvg.css";
import "./Home.css";

export default function Facesvg({ windowWidth }) {
    const eyescale = windowWidth > 768 ? 20 : 15;
    const [EyePosition, setEyePosition] = useState({
        ex: 0,
        ey: 0
    });
    
    // Handle mouse movement for eye tracking
    function handleMouseMove(ev) { 
        const width = ev.view.innerWidth;
        const height = ev.view.innerHeight;
        const mx = ev.pageX;
        const my = ev.pageY;
        const cx = width/2;
        const cy = height/2;

        const angle = Math.atan2(cy-my, cx-mx);
        setEyePosition({
            ex: Math.cos(angle), 
            ey: Math.sin(angle)
        });
    }
    
    // Handle touch movement for mobile devices
    function handleTouchMove(ev) {
        if (ev.touches && ev.touches[0]) {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const mx = ev.touches[0].pageX;
            const my = ev.touches[0].pageY;
            const cx = width/2;
            const cy = height/2;
            
            const angle = Math.atan2(cy-my, cx-mx);
            setEyePosition({
                ex: Math.cos(angle), 
                ey: Math.sin(angle)
            });
        }
    }
    
    // Reset eye position periodically for blinking effect
    useEffect(() => {
        const interval = setInterval(() => {
            setEyePosition(prev => ({ ...prev })); // Trigger re-render
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='face'>
            <img src={FaceImg} className='FaceImage' alt='Robot face' /> 
            <svg 
                onMouseMove={(ev) => handleMouseMove(ev)}
                onTouchMove={(ev) => handleTouchMove(ev)}
                className="eyes" 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="1300.000000pt" 
                height="1300.000000pt" 
                viewBox="0 0 1300.000000 1300.000000"
                preserveAspectRatio="xMidYMid meet"
            >
                <circle 
                    cx={501-EyePosition.ex*eyescale} 
                    cy={743-EyePosition.ey*eyescale} 
                    r={windowWidth > 768 ? "10" : "8"} 
                    className="eyeball" 
                /> 
                <circle 
                    cx={801-EyePosition.ex*eyescale} 
                    cy={743-EyePosition.ey*eyescale} 
                    r={windowWidth > 768 ? "10" : "8"} 
                    className="eyeball" 
                /> 
            </svg>
        </div>
    );
}