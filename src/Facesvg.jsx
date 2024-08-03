import React, { useState } from 'react';
import FaceImg from './Images/bot/robo.png';
import "./Facesvg.css";
import "./Home.css"
export default function Facesvg() {
    const eyescale=20;
    const [EyePosition, setEyePosition] = useState({
        ex: 0,
        ey: 0
    })
    function handleMouseMove(ev) { 
        const width=ev.view.innerWidth;
        const height=ev.view.innerHeight;
        const mx=ev.pageX;
        const my=ev.pageY;
        const cx=width/2;
        const cy=height/2;

        const angle=Math.atan2(cy-my,cx-mx);
        setEyePosition({ex: Math.cos(angle), ey: Math.sin(angle)});
    
    }

    return (
    <div className='face'>
        <img src={FaceImg}  className='FaceImage' alt='img'/> 
        <svg onMouseMove={(ev)=> handleMouseMove(ev)} className="eyes" version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="1300.000000pt" height="1300.000000pt" viewBox="0 0 1300.000000 1300.000000"
        preserveAspectRatio="xMidYMid meet" >
            <circle cx={501-EyePosition.ex*eyescale} cy={743-EyePosition.ey*eyescale} r="10"  className="eyeball" /> 
            <circle cx={801-EyePosition.ex*eyescale} cy={743-EyePosition.ey*eyescale} r="10"  className="eyeball" /> 
        </svg>
    </div>
    )
}