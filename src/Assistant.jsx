import connector from './Images/bot/connector.svg'; 
import { useState, useEffect } from "react"; 
import React from 'react';
import "./Home.css"; 
import Facesvg from './Facesvg';  

export default function Assistant() {
    const [selected, setSelected] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const skills = {
        "AI App Developer": {
            "RAG": [],
            "Agents": [],
            "Fine Tuning": [],
        },
        "Cloud Engineer": {
            "Devops Tools": [],
            "Microsoft Azure": [],
            "AWS": [],
        },
        "Validation Engineer": {
            "Hardware Testing": [],
            "Equipment Monitoring": [],
            "Troubleshoot": [],
            "Developing test protocols": [],
        },
        "Full-Stack Web Developer": {
            "FrontEnd": ["React"],
            "BackEnd": ["Python"],
        },
    };
    
    // Handle skill selection
    const handleSkillClick = (skill) => {
        if (selected === skill) {
            setSelected(null); // Toggle off if already selected
        } else {
            setSelected(skill);
        }
    };
    
    return (
        <div className={`main ${selected ? 'has-selected' : ''}`}>
            <div className={`graphics ${selected ? 'selected' : ''}`}>
                {Object.keys(skills).map((skill) => (
                    <div 
                        className={`skill-card ${skill === selected ? 'selected' : ''}`} 
                        key={skill}
                        onClick={() => handleSkillClick(skill)}
                    >
                        <img src={connector} className='connector' alt='connector' />
                        <h2>{skill}</h2>
                    </div>
                ))}
                <Facesvg windowWidth={windowWidth} />
            </div>
            
            <div className={`Content ${selected ? 'visible' : ''}`}>
                <h1>Skills</h1>
                <div className='container'>
                    {selected && 
                        <ul>
                            {Object.entries(skills[selected]).map(([key, value], ind) =>
                                <li key={ind} className='outer-list'>
                                    {key}
                                    {value.length > 0 && (
                                        <ul>
                                            {value.map((skill, index) => 
                                                <li key={index} className='inner-list'>
                                                    {skill}
                                                </li>
                                            )}
                                        </ul>
                                    )}
                                </li>
                            )}
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
}