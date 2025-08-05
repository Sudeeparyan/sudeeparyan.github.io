import React, { useState, useEffect } from 'react';
import rover from '../Images/Projects/rover.jpg';
import drone from '../Images/Projects/Quadcopter.jpeg';
import './Projects.css';

// Dummy image URL for placeholder
const dummyImage = 'https://via.placeholder.com/800x450/0f1724/00c3ff?text=Project+Preview';

// Project category icons - you can replace with actual icon imports if available
const CATEGORY_ICONS = {
  soliton: "🏢", // Company
  aiAcademy: "🧠", // AI/Learning
  personal: "💻", // Personal
  university: "🎓", // University
};

// TabSelector component for category switching
const TabSelector = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => setActiveCategory(category.id)}
        >
          <span className="tab-icon">{category.icon}</span>
          <span className="tab-label">{category.label}</span>
        </button>
      ))}
    </div>
  );
};

const ProjectItem = ({ isActive, name, objective, tools, outcome, image, demoVideo, repoLink, liveLink, category, roleTimeline, children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state when active project changes
  useEffect(() => {
    setIsFlipped(false);
  }, [isActive]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Extract key points from objective and outcome
  const highlights = objective?.split('.')[0] || 'This project showcases innovative technology solutions';

  // Use placeholder content for empty fields to showcase full styling potential
  const displayName = name || "Example Project Title";
  const displayObjective = objective || "This is a sample project objective that demonstrates the styling of content within the project card. It includes details about what the project aims to accomplish.";
  const displayTools = tools || "React, Node.js, TensorFlow, Python, AWS, Docker";
  const displayOutcome = outcome || "Successfully delivered a fully functional solution that exceeded client expectations and demonstrated innovative problem-solving approaches.";
  const displayImage = image || dummyImage;
  const displayDemoVideo = demoVideo || "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Sample video embed
  const displayRepoLink = repoLink || "https://github.com/example/repo";
  const displayLiveLink = liveLink || "https://example.com/demo";
  const displayRoleTimeline = roleTimeline || "";
  const categoryIcon = category ? CATEGORY_ICONS[category] : "🔍";
  
  return (
    <div className={`project-item ${isActive ? 'active' : ''}`} data-interval="false">
      <div className={`project-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-inner">
          <div className="card-front">
            <div className="category-indicator">{categoryIcon}</div>
            
            <div className="project-image-container">
              <img alt={displayName} src={displayImage} className="project-image" />
              <div className="image-overlay"></div>
            </div>
            
            <div className="project-content">
              <h2 className="project-name">{displayName}</h2>
              
              {displayRoleTimeline && (
                <div className="role-timeline">
                  <span>{displayRoleTimeline}</span>
                </div>
              )}
              
              <div className="project-highlight">
                <p>{highlights}</p>
              </div>
              
              <div className="tech-stack">
                {typeof displayTools === 'string' ? 
                  displayTools.split(',').map((tool, index) => (
                    <span key={index} className="tech-tag">{tool.trim()}</span>
                  )) : 
                  <p>{displayTools}</p>
                }
              </div>
              
              <div className="project-actions">
                <button className="view-details-btn" onClick={handleFlip}>
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          <div className="card-back">
            <button 
              className="close-btn" 
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                handleFlip();
              }} 
              aria-label="Close details"
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '10px',
                right: '10px',
                zIndex: 1000,
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span>×</span>
            </button>
            
            <h2 className="project-name">{displayName}</h2>
            
            <div className="project-video-container">
              {displayDemoVideo ? (
                <iframe 
                  src={displayDemoVideo}
                  title={`${displayName} demo`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              ) : (
                <img alt={displayName} src={displayImage} className="project-detail-image" />
              )}
            </div>
            
            <div className="project-details">
              <div className="project-outcome">
                <p>{displayOutcome}</p>
              </div>
              
              <div className="project-links">
                {displayRepoLink && (
                  <a href={displayRepoLink} target="_blank" rel="noopener noreferrer" className="project-link repo-link">
                    <span>GitHub</span>
                  </a>
                )}
                {displayLiveLink && (
                  <a href={displayLiveLink} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
              
              <div className="project-additional-info">
                {children || <p>This project demonstrates my expertise in modern web development techniques and problem-solving abilities.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  // Define categories
  const categories = [
    { id: 'aiAcademy', label: 'AI Academy Projects', icon: CATEGORY_ICONS.aiAcademy },
    { id: 'soliton', label: 'Soliton Projects', icon: CATEGORY_ICONS.soliton },    
    { id: 'personal', label: 'Personal Projects', icon: CATEGORY_ICONS.personal },
    { id: 'university', label: 'University Projects', icon: CATEGORY_ICONS.university },
  ];
  
  // Projects data organized by categories
  const projectsByCategory = {
    soliton: [
      {
        name: "Ventures 360",
        objective: "Working on Agile Methodology : Connecting with customer & getting the requirements, Backlog refinement, Development, Testing & Release.",
        tools: "Completed the mandatory Training that should be done before joining the project. Worked on Polymer JS and completed SDLC project",
        outcome: "Currently Developing a graphical user interface (GUI) and working on Hardware Validation and chips testing given by Texas Instruments",
        roleTimeline: "Nov 2023 - Present",
        category: "soliton",
        children: (
          <p>
            And also working on Generative AI chat bot assistant.(Due to
            the confidentiality of company operations, further details
            cannot be disclosed.)
          </p>
        ),
      },
      {
        name: "Device Vision (Soliton)",
        objective: "Customer asked to develop Data analyzing and Visualization tool for Validation Enginners.",
        tools: "Front-End: React(Advanced Redux Tool kit-RTKQuery), Back-End: Python, Machine Learning: Regression, MLOPS and DevOps Tools.",
        outcome: "Tool that Visualization and Analyzing data which is given by Validation Engineer so that they can easily train any data and Predict the values which is beyond the range of his collected data.",
        roleTimeline: "Jan 2023 - Nov 2023",
        category: "soliton",
        children: (
          <p>
            (Due to the confidentiality of company operations, further
            details cannot be disclosed.)
          </p>
        ),
      },
      {
        name: "Texas Instruments - Battery Management System",
        objective: "Working on Agile Methodology : Connecting with customer & getting the requirements, Backlog refinement, Development, Testing & Release.",
        tools: "Completed the mandatory Training that should be done before joining the project. Worked on Polymer JS and completed SDLC project",
        outcome: "Currently Developing a graphical user interface (GUI) and working on Hardware Validation and chips testing given by Texas Instruments",
        roleTimeline: "Nov 2023 - Present",
        category: "soliton",
        children: (
          <p>
            And also working on Generative AI chat bot assistant.(Due to
            the confidentiality of company operations, further details
            cannot be disclosed.)
          </p>
        ),
      },
      
    ],
    aiAcademy: [
      {
        name: "AI Academy",
        objective: "Created a platform offering AI courses, projects, and mentorship to help students and professionals learn and apply AI skills.",
        tools: "React, Node.js, MongoDB, TensorFlow, PyTorch, OpenAI APIs",
        outcome: "Successfully launched the platform with comprehensive AI curriculum and personalized learning paths.",
        roleTimeline: "Co-Founder (Nov '24 – Present)",
        category: "aiAcademy",
        liveLink: "https://ai-academy.example.com", // Add actual link when available
        children: (
          <p>
            Leading the development of cutting-edge AI education materials and fostering a community
            of AI enthusiasts and practitioners.
          </p>
        ),
      },
      {
        name: "AI Notebook",
        objective: "Built an AI-powered student performance tool using multi-model interactive Q&A system.",
        tools: "Python, React, TensorFlow, NLP, Data Visualization Libraries, OpenAI APIs",
        outcome: "Enables uploads, dynamic data visualizations, and personalized academic recommendations. Notes are saved and anchored in the central AI Knowledge Base.",
        category: "aiAcademy",
        children: (
          <>
            <h3>
              <a
                href="Link" // Replace with actual link when available
                target="_blank"
                rel="noopener noreferrer"
              >
                View AI Notebook Project
              </a>
            </h3>
          </>
        ),
      },
      {
        name: "AI Solution Builder",
        objective: "Developed a platform that guides users in designing AI application architectures.",
        tools: "JavaScript, React, Node.js, D3.js, AI Decision Systems",
        outcome: "Provides a structured workflow for selecting optimal techniques, generates tailored suggestions, and produces architecture diagrams as references for development.",
        category: "aiAcademy",
        children: (
          <>
            <h3>
              <a
                href="Link" // Replace with actual link when available
                target="_blank"
                rel="noopener noreferrer"
              >
                View AI Solution Builder
              </a>
            </h3>
          </>
        ),
      },
      {
        name: "AI Knowledge Base",
        objective: "Created a web-based platform to document and share AI learnings, best practices, and reusable assets.",
        tools: "React, GraphQL, MongoDB, Semantic Search, Vector Databases",
        outcome: "Empowers developers to build GenAI solutions efficiently and collaboratively by providing centralized access to AI knowledge resources.",
        category: "aiAcademy",
        children: (
          <>
            <h3>
              <a
                href="Link" // Replace with actual link when available
                target="_blank"
                rel="noopener noreferrer"
              >
                View AI Knowledge Base
              </a>
            </h3>
          </>
        ),
      },
      {
        name: "AI Finance",
        objective: "Created a web-based platform to document and share AI learnings, best practices, and reusable assets.",
        tools: "React, GraphQL, MongoDB, Semantic Search, Vector Databases",
        outcome: "Empowers developers to build GenAI solutions efficiently and collaboratively by providing centralized access to AI knowledge resources.",
        category: "aiAcademy",
        children: (
          <>
            <h3>
              <a
                href="Link" // Replace with actual link when available
                target="_blank"
                rel="noopener noreferrer"
              >
                View AI Finance
              </a>
            </h3>
          </>
        ),
      },
    ],
    personal: [
      {
        name: "S-Cart (E-commerce Prototype)",
        objective: "Created an e-commerce web page that incorporates all the concepts and skills I acquired during my internship.",
        tools: "HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB, Express, Heroku, Docker, Kubernetes, Prometheus",
        outcome: "Fully functional e-commerce site with product listings, cart functionality, and checkout process.",
        category: "personal",
        liveLink: "https://sudeeparyan.github.io/SudeepCart/",
        repoLink: "https://github.com/sudeeparyan/SudeepCart",
      },
      {
        name: "S-Movies (E-commerce Prototype)",
        objective: "Created an e-commerce web page that incorporates all the concepts and skills I acquired during my internship.",
        tools: "HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB, Express, Heroku, Docker, Kubernetes, Prometheus",
        outcome: "Fully functional e-commerce site with product listings, cart functionality, and checkout process.",
        category: "personal",
        liveLink: "https://sudeeparyan.github.io/SudeepCart/",
        repoLink: "https://github.com/sudeeparyan/SudeepCart",
      },
      {
        name: "Weather Applications",
        objective: "Created an e-commerce web page that incorporates all the concepts and skills I acquired during my internship.",
        tools: "HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB, Express, Heroku, Docker, Kubernetes, Prometheus",
        outcome: "Fully functional e-commerce site with product listings, cart functionality, and checkout process.",
        category: "personal",
        liveLink: "https://sudeeparyan.github.io/SudeepCart/",
        repoLink: "https://github.com/sudeeparyan/SudeepCart",
      },
      {
        name: "Planner",
        objective: "Created an e-commerce web page that incorporates all the concepts and skills I acquired during my internship.",
        tools: "HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB, Express, Heroku, Docker, Kubernetes, Prometheus",
        outcome: "Fully functional e-commerce site with product listings, cart functionality, and checkout process.",
        category: "personal",
        liveLink: "https://sudeeparyan.github.io/SudeepCart/",
        repoLink: "https://github.com/sudeeparyan/SudeepCart",
      },
    ],
    university: [
      {
        name: "Self-Driving Rover",
        objective: "Implementation of self driving rover using ML(Reinforcement learning) with Raspberry pi, which is able to detect and avoid obstacles in its path and also able to move in the given lane.",
        tools: "Raspberry Pi 3b+, NVIDIA's CNN model, Ultra-sonic sensor, Pi camera, Servo motor, DC motors.",
        outcome: "Successfully built an autonomous rover capable of lane following and obstacle avoidance using computer vision and sensors.",
        image: rover,
        roleTimeline: "Aug 2022 - Jun 2023",
        category: "university",
      },
      {
        name: "Quadcopter",
        objective: "To build a drone with four wings and complete the given task.",
        tools: "Arduino UNO, ESC, Bluetooth Module, PDB.",
        outcome: "Quad copter is capable to fly in air and flips, rotates in its same position.",
        image: drone,
        roleTimeline: "May 2019 - Jan 2020",
        category: "university",
      },
    ],
  };
  
  // State for current active category and projects
  const [activeCategory, setActiveCategory] = useState('soliton');
  const [animating, setAnimating] = useState(false);
  
  // Get current projects based on active category
  const currentProjects = projectsByCategory[activeCategory] || [];
  
  // Animation effect when changing categories
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 500); // Match this with CSS transition time
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="projects-headline">
          <span className="text-gradient">Projects</span>
          <div className="underline"></div>
        </h1>
        
        <TabSelector 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <div className={`projects-grid ${animating ? 'animating' : ''}`}>
          {currentProjects.map((project, index) => (
            <div 
              key={`${activeCategory}-${index}`} 
              className="grid-item"
            >
              <ProjectItem {...project} isActive={true} />
            </div>
          ))}
          
          {currentProjects.length === 0 && (
            <div className="no-projects-message">
              <p>No projects in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}