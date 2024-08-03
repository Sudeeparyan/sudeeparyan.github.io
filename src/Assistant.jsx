import connector from './Images/bot/connector.svg';
import { useState } from "react";
import React from 'react';
import "./Home.css";
import Facesvg from './Facesvg';

export default function Assistant() {
    const [selected, setSelected] = useState(null);
    const skills = {
        "AI App Developer": {
            "Prompting": [],
            "RAG": [],
            "Lang Chain":[],
        },
        "Full-Stack Web Developer": {
            "FrontEnd": ["React"],
            "BackEnd": ["FastAPI"],
        },        
        "Validation Engineer": {
            "Hardware Testing": [],
            "Equipment Monitoring": [],
            "Troubleshoot":[],
            "Developing test protocols":[],
        },
        "DevOps Engineer": {
            "Docker": [],
            "Kubernetes": [],
            "CI/CD": [],
        },
    };

    return (
        <div className='main'>
    <div className={selected?'graphics selected':'graphics'}>
    {Object.keys(skills).map((skill)=>(
        <div className={skill === selected?'skill-card selected':'skill-card'} key={skill}>
        <img src={connector} className='connector' alt='img' />
        <h2   onClick={()=>setSelected(skill)}>{skill}</h2>
        </div>
    ))}
    <Facesvg/>
    </div>
    <div className='Content'>
        <h1>Skills</h1>
        <div className='container'>
        {selected && 
            <ul>
            {Object.entries(skills[selected]).map(([key, value], ind) =>
                <li key={ind} className='outer-list'>
                    {key}
                    <ul>
                    {value.map((skill, index) => 
                        <li key={index} className='inner-list'>
                            {skill}
                        </li>
                    )}
                    </ul>
                </li>
            )}
            </ul>
        }
        
        </div>       
    </div>
    </div>
    );
}
