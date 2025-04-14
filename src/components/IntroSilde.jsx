import React, { useEffect, useRef, useState } from 'react';
import './SildeShow.css'; // Keep your existing CSS file
import sudeep from '../Images/sudeep.jpg';
import sudeep1 from "../Images/sudeep1.jpg";

export default function IntroSlide() {
    // State to track current active section
    const [activeSection, setActiveSection] = useState('intro');
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // References for sections
    const containerRef = useRef(null);
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    
    // Define the sections for easy iteration
    const sections = ['intro', 'aboutme'];
    
    // Function to transition to the next section
    const goToNextSection = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        
        const currentIndex = sections.indexOf(activeSection);
        const nextIndex = (currentIndex + 1) % sections.length;
        const nextSection = sections[nextIndex];
        
        // Apply transitions
        if (nextSection === 'aboutme') {
            if (introRef.current && aboutRef.current) {
                aboutRef.current.classList.add('visible');
                aboutRef.current.classList.add('page-turning');
                
                // Remove animation class after completion
                setTimeout(() => {
                    if (aboutRef.current) {
                        aboutRef.current.classList.remove('page-turning');
                    }
                    setActiveSection('aboutme');
                    setIsTransitioning(false);
                }, 800);
            }
        } else {
            // Transition back to intro with a reverse effect
            if (introRef.current && aboutRef.current) {
                aboutRef.current.classList.add('page-returning');
                
                setTimeout(() => {
                    aboutRef.current.classList.remove('visible');
                    aboutRef.current.classList.remove('page-returning');
                    setActiveSection('intro');
                    setIsTransitioning(false);
                }, 800);
            }
        }
    };
    
    // Set up continuous rotation
    useEffect(() => {
        // Initially show the intro section
        if (introRef.current) {
            introRef.current.classList.add('visible');
        }
        
        // Set interval for continuous rotation
        const interval = setInterval(() => {
            goToNextSection();
        }, 2000);
        
        // Cleanup timer on component unmount
        return () => clearInterval(interval);
    }, [activeSection, isTransitioning]);
    
    // Manual navigation when clicking indicators
    const handleSectionClick = (section) => {
        if (isTransitioning || section === activeSection) return;
        
        setIsTransitioning(true);
        
        if (section === 'intro' && activeSection !== 'intro') {
            if (aboutRef.current) {
                aboutRef.current.classList.add('page-returning');
                
                setTimeout(() => {
                    aboutRef.current.classList.remove('visible');
                    aboutRef.current.classList.remove('page-returning');
                    setActiveSection('intro');
                    setIsTransitioning(false);
                }, 800);
            }
        } else if (section === 'aboutme' && activeSection !== 'aboutme') {
            if (introRef.current && aboutRef.current) {
                aboutRef.current.classList.add('visible');
                aboutRef.current.classList.add('page-turning');
                
                setTimeout(() => {
                    aboutRef.current.classList.remove('page-turning');
                    setActiveSection('aboutme');
                    setIsTransitioning(false);
                }, 800);
            }
        }
    };
    
    return (
        <div className="book-container-wrapper">
            <div className="book-container" ref={containerRef}>
                {/* Introduction Section */}
                <div 
                    id="intro" 
                    className="book-section" 
                    ref={introRef}
                >
                    <div className="page-effect">
                        <div className="page-content">
                            <div className="row book-page">
                                <div className="col-md-6 image-column">
                                    <div className="image-wrapper">
                                        <img src={sudeep1} alt="My profile" className="profile-image" />
                                        <div className="page-corner"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-column">
                                    <h1 className="heading">
                                        Hello, I am <span className="highlight">Sudeep Aryan</span>
                                    </h1>
                                    <h2 className="subheading">Welcome to my World.</h2>
                                    <div className="scroll-indicator">
                                        <p>Automatic Page Transitions</p>
                                        <div className="scroll-arrow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* About Me Section */}
                <div 
                    id="aboutme" 
                    className="book-section" 
                    ref={aboutRef}
                >
                    <div className="page-effect">
                        <div className="page-content">
                            <div className="row book-page">
                                <div className="col-md-6 text-column">
                                    <h1 className="heading">About me!</h1>
                                    <p className="about-text">
                                        With overall experience of 2 years spanning Machine Learning,
                                        Generative AI, DevOps, and full stack development. I am a tech
                                        enthusiast who enjoys tackling diverse challenges. My journey
                                        involves building Machine Learning models, and optimizing
                                        processes through DevOps. My reputation lies in adaptability,
                                        creative problem-solving, and an unwavering commitment to
                                        staying at the forefront of these ever-evolving domains. I am
                                        poised to contribute effectively to dynamic teams and
                                        organizations, driven by a passion for continuous innovation.
                                    </p>
                                </div>
                                <div className="col-md-6 image-column">
                                    <div className="image-wrapper">
                                        <img src={sudeep} alt="My profile" className="profile-image" />
                                        <div className="page-corner"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Page indicator - subtle dots on the right */}
                <div className="page-progress-indicator">
                    <span 
                        className={`indicator-dot ${activeSection === 'intro' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('intro')}
                    ></span>
                    <span 
                        className={`indicator-dot ${activeSection === 'aboutme' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('aboutme')}
                    ></span>
                </div>
            </div>
        </div>
    );
}