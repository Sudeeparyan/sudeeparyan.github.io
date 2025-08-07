import React, { useEffect, useRef, useState } from 'react';
import './SildeShow.css'; // Keep your existing CSS file
import './AboutMe.css'; // Import the new About Me specific styles
import sudeep from '../Images/sudeep.jpg';
import sudeep1 from "../Images/sudeep1.jpg";
import profile from '../Images/profile.jpg';
import google from '../Images/google.jpg';

export default function IntroSlide() {
    // State to track current active section
    const [activeSection, setActiveSection] = useState('intro');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    
    // References for sections
    const containerRef = useRef(null);
    const introRef = useRef(null);
    const aboutRef = useRef(null);
    const interestsRef = useRef(null);
    
    // Define the sections for easy iteration
    const sections = ['intro', 'aboutme', 'interests'];
    
    // Slide timing configuration (in milliseconds)
    const slideTiming = {
        intro: 20000,      // Show intro for 2 seconds
        aboutme: 50000,    // Show aboutme for 5 seconds
        interests: 50000   // Show interests for 5 seconds
    };
    
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
                // First clear any existing classes on aboutRef
                aboutRef.current.classList.remove('page-returning');
                
                // Add the visible and turning animation
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
        } else if (nextSection === 'interests') {
            if (aboutRef.current && interestsRef.current) {
                // First clear any existing classes on interestsRef
                interestsRef.current.classList.remove('page-returning');
                
                // Hide about section with returning animation
                aboutRef.current.classList.add('page-returning');
                
                // After a small delay, show interests section
                setTimeout(() => {
                    aboutRef.current.classList.remove('visible');
                    aboutRef.current.classList.remove('page-returning');
                    
                    // Show interests with proper animation
                    interestsRef.current.classList.add('visible');
                    interestsRef.current.classList.add('page-turning');
                    
                    setTimeout(() => {
                        interestsRef.current.classList.remove('page-turning');
                        setActiveSection('interests');
                        setIsTransitioning(false);
                    }, 600);
                }, 400);
            }
        } else {
            // Transition back to intro with a reverse effect
            if (activeSection === 'aboutme') {
                // First clear any existing classes
                aboutRef.current.classList.remove('page-turning');
                
                // Add returning animation
                aboutRef.current.classList.add('page-returning');
                
                setTimeout(() => {
                    aboutRef.current.classList.remove('visible');
                    aboutRef.current.classList.remove('page-returning');
                    
                    // Show intro again
                    introRef.current.classList.add('visible');
                    setActiveSection('intro');
                    setIsTransitioning(false);
                }, 800);
            } else if (activeSection === 'interests') {
                // First clear any existing classes
                interestsRef.current.classList.remove('page-turning');
                
                // Add returning animation
                interestsRef.current.classList.add('page-returning');
                
                setTimeout(() => {
                    interestsRef.current.classList.remove('visible');
                    interestsRef.current.classList.remove('page-returning');
                    
                    // Show intro again
                    introRef.current.classList.add('visible');
                    setActiveSection('intro');
                    setIsTransitioning(false);
                }, 800);
            }
        }
    };
    
    // Mouse event handlers to detect hover
    const handleMouseEnter = () => {
        setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    
    // Set up continuous rotation
    useEffect(() => {
        // Initially show the intro section
        if (introRef.current) {
            introRef.current.classList.add('visible');
        }
        
        // Skip setting interval if user is hovering
        if (isHovering) return;
        
        // Set interval for continuous rotation with dynamic timing
        const currentTiming = slideTiming[activeSection] || 5000;
        const interval = setInterval(() => {
            goToNextSection();
        }, currentTiming);
        
        // Cleanup timer on component unmount or when dependencies change
        return () => clearInterval(interval);
    }, [activeSection, isTransitioning, isHovering]);
    
    // Manual navigation when clicking indicators
    const handleSectionClick = (section) => {
        if (isTransitioning || section === activeSection) return;
        
        setIsTransitioning(true);
        
        if (section === 'intro' && activeSection !== 'intro') {
            // Return to intro from any section
            if (activeSection === 'aboutme' && aboutRef.current) {
                aboutRef.current.classList.add('page-returning');
                
                setTimeout(() => {
                    aboutRef.current.classList.remove('visible');
                    aboutRef.current.classList.remove('page-returning');
                    setActiveSection('intro');
                    setIsTransitioning(false);
                }, 800);
            } else if (activeSection === 'interests' && interestsRef.current) {
                interestsRef.current.classList.add('page-returning');
                
                setTimeout(() => {
                    interestsRef.current.classList.remove('visible');
                    interestsRef.current.classList.remove('page-returning');
                    setActiveSection('intro');
                    setIsTransitioning(false);
                }, 800);
            }
        } else if (section === 'aboutme') {
            if (activeSection === 'intro') {
                // From intro to about
                aboutRef.current.classList.add('visible');
                aboutRef.current.classList.add('page-turning');
                
                setTimeout(() => {
                    aboutRef.current.classList.remove('page-turning');
                    setActiveSection('aboutme');
                    setIsTransitioning(false);
                }, 800);
            } else if (activeSection === 'interests') {
                // From interests to about
                interestsRef.current.classList.add('page-returning');
                
                setTimeout(() => {
                    interestsRef.current.classList.remove('visible');
                    interestsRef.current.classList.remove('page-returning');
                    aboutRef.current.classList.add('visible');
                    setActiveSection('aboutme');
                    setIsTransitioning(false);
                }, 800);
            }
        } else if (section === 'interests') {
            if (activeSection === 'intro') {
                // From intro to interests
                interestsRef.current.classList.add('visible');
                interestsRef.current.classList.add('page-turning');
                
                setTimeout(() => {
                    interestsRef.current.classList.remove('page-turning');
                    setActiveSection('interests');
                    setIsTransitioning(false);
                }, 800);
            } else if (activeSection === 'aboutme') {
                // From about to interests
                aboutRef.current.classList.add('page-returning');
                
                setTimeout(() => {
                    aboutRef.current.classList.remove('visible');
                    aboutRef.current.classList.remove('page-returning');
                    interestsRef.current.classList.add('visible');
                    setActiveSection('interests');
                    setIsTransitioning(false);
                }, 800);
            }
        }
    };
    
    return (
        <div className="book-container-wrapper">
            <div 
                className="book-container" 
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
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
                                        <img src={profile} alt="My profile" className="profile-image" style={{ minHeight: '350px',  }} />
                                        <div className="page-corner"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 text-column">
                                    <h1 className="heading">
                                        Hello, I am <span className="highlight">Sudeep Aryan</span>
                                    </h1>
                                    <h2 className="subheading">Welcome to my World.</h2>
                                    
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
                                <div className="col-md-6 text-column about-me-content">
                                    <h1 className="heading about-heading">About me!</h1>
                                    <div className="about-section">
                                        <p className="about-text highlight-text">
                                            I don't have many hobbies outside coding—I'm not athletic, I'm bad at singing, I don't drink, and I can't dance. <span className="emphasis">Building is the one thing I'm truly passionate about.</span> Right now, I'm laser‑focused on taking things from 0→1 or 1→100, and I'm ready to go heads‑down to chase that goal.
                                        </p>
                                        <p className="about-text">
                                            With <span className="highlight">3+ years of experience</span> across Machine Learning, Generative AI, DevOps, and full-stack development, I've designed and shipped scalable systems, from backend pipelines to cloud-native infrastructure and interactive front-end experiences.
                                        </p>
                                        <p className="about-text">
                                            I also love thinking creatively—dreaming up side projects, building minimal prototypes, and writing about emerging technologies. I view building as not just coding—but as <span className="keyword">ideating</span>, <span className="keyword">owning</span>, <span className="keyword">executing</span>, and <span className="keyword">scaling</span>.
                                        </p>
                                        <p className="about-text call-to-action">
                                            🔥 If you value vision, drive, and hands-on execution—let's connect. I'm excited to build meaningful solutions and grow alongside people who want to do the same.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 image-column">
                                    <div className="image-wrapper">
                                        <img src={google} alt="My profile" className="profile-image" style={{ minHeight: '350px', }}/>
                                        <div className="page-corner"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Interests & Growth Section */}
                <div 
                    id="interests" 
                    className="book-section" 
                    ref={interestsRef}
                >
                    <div className="page-effect">
                        <div className="page-content">
                            <div className="row book-page">
                                <div className="col-md-6 text-column about-me-content">
                                    <h1 className="heading about-heading">My Interests & Growth</h1>
                                    <div className="about-section">
                                        <p className="about-text section-header">
                                            I continuously fuel my curiosity and growth through:
                                        </p>
                                        <ul className="about-list">
                                            <li><span className="list-icon">🌐</span> Attending tech conferences & startup summits, where I stay current, get inspired, and build meaningful professional connections.</li>
                                            <li><span className="list-icon">⚡</span> Participating in hackathons, embracing rapid ideation and prototyping under tight timelines to push my problem-solving muscle.</li>
                                            <li><span className="list-icon">📝</span> Publishing research papers & technical posts, openly sharing insights and contributing to the global developer community.</li>
                                            <li><span className="list-icon">🚀</span> Connecting with founders & startups, exploring ideas, exchanging expertise, and engaging with early-stage innovation firsthand.</li>
                                            <li><span className="list-icon">📱</span> Creating tech content and sharing knowledge through LinkedIn posts, YouTube tutorials, and detailed blog articles that help others learn and grow.</li>
                                        </ul>
                                        <p className="about-text">
                                            Beyond work, I'm passionate about continuous learning, exploring cutting-edge technologies, and finding creative ways to solve real-world problems. I believe in the power of community and collaboration to drive innovation forward.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 image-column">
                                    <div className="image-wrapper">
                                        <img 
                                            src={sudeep1} 
                                            alt="My profile" 
                                            className="profile-image" 
                                            style={{ minHeight: '350px', objectFit: 'cover' }}
                                        />
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
                    <span 
                        className={`indicator-dot ${activeSection === 'interests' ? 'active' : ''}`}
                        onClick={() => handleSectionClick('interests')}
                    ></span>
                </div>
            </div>
        </div>
    );
}