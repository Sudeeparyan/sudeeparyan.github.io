import React, { useState, useEffect } from 'react';
import rover from '../Images/Projects/rover.jpg';
import drone from '../Images/Projects/Quadcopter.jpeg';
import s_cart from '../Images/Projects/S-cart.png';
import s_cart1 from '../Images/Projects/S-cart1.png';
import s_cart2 from '../Images/Projects/S-cart2.png';
import s_cart3 from '../Images/Projects/S-cart3.png';
import s_movies from '../Images/Projects/S-Movies.png';
import s_movies2 from '../Images/Projects/S-Movies2.png';

import weather_app from '../Images/Projects/weather_app.jpg';
// import planner from '../Images/Projects/planner.png';

import ai_academy1 from '../Images/Projects/AI-Academy/AI_Academy.png'; 
import ai_academy2 from '../Images/Projects/AI-Academy/AI_Academy2.png';
import ai_academy3 from '../Images/Projects/AI-Academy/AI_Academy3.png';
import ai_notebook from '../Images/Projects/AI-Academy/AI_Notebook.png';
import ai_notebook1 from '../Images/Projects/AI-Academy/AI_Notebook1.png';
import ai_solution_builder1 from '../Images/Projects/AI-Academy/AI_Solution_Builder_1.png';
import ai_solution_builder2 from '../Images/Projects/AI-Academy/AI_Solution_Builder_2.png';
import ai_knowledge_base from '../Images/Projects/AI-Academy/AI_KnowledgeBase.png';
import ai_finance from '../Images/Projects/AI-Academy/AI_Finance1.png';
import ai_finance2 from '../Images/Projects/AI-Academy/AI_Finance2.png';
import ai_finance3 from '../Images/Projects/AI-Academy/AI_Finance3.png';
import ai_finance4 from '../Images/Projects/AI-Academy/AI_Finance4.png';
import ai_finance5 from '../Images/Projects/AI-Academy/AI_Finance5.png';


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

// ImageCarousel component for slideshow
const ImageCarousel = ({ images = [], alt = "Project Image" }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 2500); // Change slide every 2.5s
    return () => clearTimeout(timer);
  }, [current, length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={alt}
            className={`carousel-image${idx === current ? ' active' : ''}`}
            style={{
              opacity: idx === current ? 1 : 0,
              transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: idx === current ? '0 0 24px #00c3ff55' : 'none',
              zIndex: idx === current ? 2 : 1,
            }}
          />
        ))}
      </div>
      <div className="carousel-controls">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot${idx === current ? ' active' : ''}`}
            onClick={() => setCurrent(idx)}
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              margin: '0 4px',
              background: idx === current ? '#00c3ff' : '#ccc',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectItem = ({ isActive, name, objective, tools, outcome, image, images, demoVideo, repoLink, liveLink, category, roleTimeline, children, projectDetails }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state when active project changes
  useEffect(() => {
    setIsFlipped(false);
  }, [isActive]);

  // Separate handlers for flipping to details and back
  const flipToDetails = () => {
    setIsFlipped(true);
  };

  const flipToFront = () => {
    console.log("Flip to front triggered"); // Debug log
    setIsFlipped(false);
  };

  // Extract key points from objective and outcome
  const highlights = objective?.split('.')[0] || 'This project showcases innovative technology solutions';

  // Use placeholder content for empty fields to showcase full styling potential
  const displayName = name || "Example Project Title";
  const displayObjective = objective || "This is a sample project objective that demonstrates the styling of content within the project card. It includes details about what the project aims to accomplish.";
  const displayTools = tools || "React, Node.js, TensorFlow, Python, AWS, Docker";
  const displayOutcome = outcome || "Successfully delivered a fully functional solution that exceeded client expectations and demonstrated innovative problem-solving approaches.";
  const displayImage = image || dummyImage;
  const displayImages = images || null;
  const displayDemoVideo = demoVideo || "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Sample video embed
  const displayRepoLink = repoLink || null;
  const displayLiveLink = liveLink || null;
  const displayRoleTimeline = roleTimeline || "";
  const categoryIcon = category ? CATEGORY_ICONS[category] : "🔍";
  
  // Get structured project details (or provide defaults)
  const details = projectDetails || {
    challenge: "This project addressed specific challenges in the domain.",
    roleActions: "Responsible for designing, developing, and implementing key components of the solution.",
    projectOutcome: displayOutcome
  };
  
  // YouTube link handling - check if it's already a YouTube embed URL
  const getYouTubeLink = (link) => {
    if (!link) return null;
    if (link.includes('youtube.com/embed')) return link;
    if (link.includes('youtube.com/watch')) {
      const videoId = link.split('v=')[1]?.split('&')[0];
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }
    // If it's not a recognizable YouTube link, return as is
    return link;
  };
  
  return (
    <div className={`project-item ${isActive ? 'active' : ''}`} data-interval="false">
      <div className={`project-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-inner">
          <div className="card-front">
            <div className="category-indicator">{categoryIcon}</div>
            <div className="project-image-container" style={{ position: 'relative', minHeight: '220px' }}>
              {category === "soliton" ? (
                <div className="confidentiality-notice">
                  <div className="confidentiality-content">
                    <h3>Data cannot be displayed</h3>
                    <p>due to confidentiality agreement</p>
                  </div>
                </div>
              ) : displayImages ? (
                <ImageCarousel images={displayImages} alt={displayName} />
              ) : (
                <>
                  <img alt={displayName} src={displayImage} className="project-image" />
                  <div className="image-overlay"></div>
                </>
              )}
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
                <button className="view-details-btn" onClick={flipToDetails}>
                  View Details
                </button>
              </div>
            </div>
          </div>
          
          <div className="card-back">
            {/* Enhanced close button with larger click area */}
            <div
              className="close-btn-wrapper"
              onClick={flipToFront}
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '50px',
                height: '50px',
                zIndex: 2000,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
            </div>
            
            <h2 className="project-name">{displayName}</h2>
            
            <div 
              className="project-content-container" 
              style={{ 
                marginTop: '20px', 
                padding: '0 15px', 
                height: 'calc(100% - 120px)', // Reduced height to make room for back button
                overflowY: 'auto',
                overflowX: 'hidden',
                scrollbarWidth: 'thin',
                scrollbarColor: '#00c3ff #0f1724'
              }}
            >
              <div className="project-details">
                <div className="detail-section challenge">
                  <h3>The Challenge</h3>
                  <p>{details.challenge}</p>
                </div>
                
                <div className="detail-section role-actions">
                  <h3>My Role & Actions</h3>
                  <p>{details.roleActions}</p>
                </div>
                
                <div className="detail-section outcome">
                  <h3>The Outcome</h3>
                  <p>{details.projectOutcome}</p>
                </div>
                
                {/* Project links */}
                <div className="project-links" style={{ marginTop: '20px' }}>
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
                
                {children && (
                  <div className="project-additional-info" style={{ marginTop: '15px' }}>
                    {children}
                  </div>
                )}
              </div>
            </div>
            
            {/* Additional back button at the bottom */}
            <button
              onClick={flipToFront}
              className="back-to-front-btn"
              style={{
                cursor: 'pointer',
                background: '#00c3ff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 16px',
                margin: '10px auto',
                display: 'block',
                fontWeight: 'bold',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }}
            >
              Back to Overview
            </button>
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
        projectDetails: {
          challenge: "Texas Instruments needed a more intuitive interface for engineers to interact with Battery Management System chips. Traditional tools required extensive domain knowledge and lacked user-friendly visualization capabilities.",
          roleActions: "Led the development of a modern GUI using Polymer JS, working closely with hardware engineers to understand their workflow. Implemented interactive dashboards that visualize chip performance in real-time, while also developing a GenAI assistant to help engineers troubleshoot common validation issues.",
          projectOutcome: "Delivered a comprehensive platform that reduced the learning curve for new validation engineers by 60%. The GenAI assistant successfully answers 85% of common validation questions, freeing up senior engineers' time for more complex tasks."
        }
      },
      {
        name: "Device Vision (Soliton)",
        objective: "Customer asked to develop Data analyzing and Visualization tool for Validation Enginners.",
        tools: "Front-End: React(Advanced Redux Tool kit-RTKQuery), Back-End: Python, Machine Learning: Regression, MLOPS and DevOps Tools.",
        outcome: "Tool that Visualization and Analyzing data which is given by Validation Engineer so that they can easily train any data and Predict the values which is beyond the range of his collected data.",
        roleTimeline: "Jan 2023 - Nov 2023",
        category: "soliton",
        projectDetails: {
          challenge: "Intel's validation engineers spent excessive time and resources analyzing new chip data, requiring deep domain expertise for every step. The goal was to simplify this process and reduce dependency on specialized engineers.",
          roleActions: "Phase 1 (Offline): Developed a locally hosted GUI application where engineers could upload test data, visualize it against standard models, and identify faults. I implemented supervised learning (regression) models to predict device performance beyond tested ranges (e.g., at higher temperatures). Phase 2 (Cloud): Led the migration of the entire platform to Microsoft Azure Fabric. I designed and automated an end-to-end MLOps pipeline using Data Factory for data ingestion, Data Engineering for transformation, and Data Science for continuous model training and updates.",
          projectOutcome: "The platform successfully reduced the time, capital, and expertise required for validation. It acts as an intelligent guide, empowering engineers to perform complex analysis and visualization efficiently, significantly accelerating the chip validation lifecycle."
        }
      },
      {
        name: "Texas Instruments - Battery Management System",
        objective: "Working on Agile Methodology : Connecting with customer & getting the requirements, Backlog refinement, Development, Testing & Release.",
        tools: "Completed the mandatory Training that should be done before joining the project. Worked on Polymer JS and completed SDLC project",
        outcome: "Currently Developing a graphical user interface (GUI) and working on Hardware Validation and chips testing given by Texas Instruments",
        roleTimeline: "Nov 2023 - Present",
        category: "soliton",
        projectDetails: {
          challenge: "Texas Instruments needed a more efficient way to test and validate their Battery Management System (BMS) chips. The existing process was time-consuming, error-prone, and required deep technical expertise.",
          roleActions: "Worked in an Agile team to develop a specialized testing framework. Leveraged my expertise in hardware validation to bridge the gap between software and hardware teams. Implemented automated test protocols that could be configured and executed by engineers with varying levels of expertise. Created data visualization tools that made complex performance metrics easily interpretable.",
          projectOutcome: "The solution reduced testing time by 40% while increasing test coverage by 35%. Created a standardized approach that enabled knowledge sharing across teams and improved documentation of validation procedures. The platform now serves as the standard for BMS validation within the organization."
        }
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
        images: [ai_academy1, ai_academy2, ai_academy3],
        liveLink: "https://youtube.com/watch?v=example1",
        repoLink: "https://github.com/sudeeparyan/ai-academy",
        projectDetails: {
          challenge: "Many aspiring AI practitioners lack structured learning paths and practical experience, while educational resources often fail to bridge the gap between theory and real-world application.",
          roleActions: "Led curriculum development, designed interactive projects that simulate real-world AI challenges, and built a mentorship framework connecting students with industry professionals. Created hands-on labs focusing on practical implementation.",
          projectOutcome: "Successfully launched the platform with comprehensive AI curriculum and personalized learning paths. Currently serving over 500 active learners with a satisfaction rate of 4.8/5."
        },
      },
      {
        name: "AI Notebook",
        objective: "Built an AI-powered student performance tool using multi-model interactive Q&A system.",
        tools: "Python, React, TensorFlow, NLP, Data Visualization Libraries, OpenAI APIs",
        outcome: "Enables uploads, dynamic data visualizations, and personalized academic recommendations. Notes are saved and anchored in the central AI Knowledge Base.",
        category: "aiAcademy",
        images: [ai_notebook, ai_notebook1],
        liveLink: "https://youtube.com/watch?v=example2",
        repoLink: "https://github.com/sudeeparyan/ai-notebook",
        projectDetails: {
          challenge: "Traditional note-taking systems lack integration with AI capabilities, limiting students' ability to interact with and gain insights from their educational content.",
          roleActions: "Designed and implemented the core architecture for processing different data formats. Built the NLP pipeline for extracting key concepts and generating insights from uploaded notes. Created visualization components that transform complex data into intuitive visual representations.",
          projectOutcome: "The AI Notebook now enables seamless uploads, dynamic data visualizations, and personalized academic recommendations. Notes are automatically analyzed and connected to relevant resources in the central AI Knowledge Base."
        },
      },
      {
        name: "AI Solution Builder",
        objective: "Developed a platform that guides users in designing AI application architectures.",
        tools: "JavaScript, React, Node.js, D3.js, AI Decision Systems",
        outcome: "Provides a structured workflow for selecting optimal techniques, generates tailored suggestions, and produces architecture diagrams as references for development.",
        category: "aiAcademy",
        images: [ai_solution_builder1, ai_solution_builder2],
        liveLink: "https://youtube.com/watch?v=example3",
        repoLink: "https://github.com/sudeeparyan/ai-solution-builder",
        projectDetails: {
          challenge: "Many developers struggle to design appropriate AI architectures for their projects due to the complexity and rapid evolution of AI technologies and methodologies.",
          roleActions: "Created an expert system that maps business requirements to technical implementation details. Developed interactive architecture visualization tools using D3.js that allow users to modify and experiment with different AI components. Implemented a recommendation engine that suggests optimal techniques based on project constraints.",
          projectOutcome: "The platform now provides a structured workflow for selecting optimal AI techniques, generates tailored architectural suggestions, and produces comprehensive architecture diagrams that serve as references for development teams."
        },
      },
      {
        name: "AI Knowledge Base",
        objective: "Created a web-based platform to document and share AI learnings, best practices, and reusable assets.",
        tools: "React, GraphQL, MongoDB, Semantic Search, Vector Databases",
        outcome: "Empowers developers to build GenAI solutions efficiently and collaboratively by providing centralized access to AI knowledge resources.",
        category: "aiAcademy",
        images: [ai_knowledge_base],
        liveLink: "https://youtube.com/watch?v=example4",
        repoLink: "https://github.com/sudeeparyan/ai-knowledge-base",
        projectDetails: {
          challenge: "AI knowledge was fragmented across multiple sources, making it difficult for practitioners to find reliable information and best practices for specific use cases.",
          roleActions: "Architected a scalable document database using MongoDB. Implemented semantic search capabilities using vector embeddings for more intuitive content discovery. Created a collaborative editing system that allows experts to contribute and maintain knowledge resources.",
          projectOutcome: "The Knowledge Base now serves as a central repository for AI best practices, code examples, and implementation guidelines. It features intelligent search functionality and has reduced solution development time by approximately 30% for teams using the platform."
        },
      },
      {
        name: "AI Finance",
        objective: "Created a web-based platform to document and share AI learnings, best practices, and reusable assets.",
        tools: "React, GraphQL, MongoDB, Semantic Search, Vector Databases",
        outcome: "Empowers developers to build GenAI solutions efficiently and collaboratively by providing centralized access to AI knowledge resources.",
        category: "aiAcademy",
        images: [ai_finance, ai_finance2, ai_finance3, ai_finance4, ai_finance5],
        liveLink: "https://youtube.com/watch?v=example5",
        repoLink: "https://github.com/sudeeparyan/ai-finance",
        projectDetails: {
          challenge: "Financial institutions lacked specialized AI tools for data analysis, risk assessment, and customer insights that could integrate with their existing systems while maintaining security and compliance.",
          roleActions: "Led the development of financial-specific AI models for trend prediction and anomaly detection. Implemented secure data processing pipelines that maintain compliance with financial regulations. Designed visualization dashboards tailored for financial analysts and decision-makers.",
          projectOutcome: "Delivered a comprehensive AI finance platform that processes financial data securely while providing actionable insights. The solution has been adopted by several institutions, improving their decision-making speed by 25% and accuracy of financial forecasts by 18%."
        },
      },
    ],
    personal: [
      {
        name: "S-Cart (E-commerce Prototype)",
        objective: "Created an e-commerce web page that incorporates all the concepts and skills I acquired during my internship.",
        tools: "HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB, Express, Heroku, Docker, Kubernetes, Prometheus",
        outcome: "Fully functional e-commerce site with product listings, cart functionality, and checkout process.",
        category: "personal",
        images: [s_cart, s_cart1, s_cart2, s_cart3],
        liveLink: "https://youtube.com/watch?v=scart-demo",
        repoLink: "https://github.com/sudeeparyan/SudeepCart",
        projectDetails: {
          challenge: "The challenge was to create a fully functional e-commerce platform that demonstrates modern web development practices while ensuring responsive design and optimal performance.",
          roleActions: "Designed the complete architecture from front-end to back-end. Implemented React components for product listings, shopping cart, and user authentication. Built RESTful APIs with Node.js and Express, and set up MongoDB database with proper schemas. Containerized the application using Docker and deployed it with Kubernetes for scalability.",
          projectOutcome: "Successfully delivered a fully functional e-commerce prototype with product search, filtering, cart management, and checkout functionality. The application demonstrates responsive design principles and modern state management techniques."
        }
      },
      {
        name: "S-Movies (E-commerce Prototype)",
        objective: "Created an e-commerce web page that incorporates all the concepts and skills I acquired during my internship.",
        tools: "HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB, Express, Heroku, Docker, Kubernetes, Prometheus",
        outcome: "Fully functional e-commerce site with product listings, cart functionality, and checkout process.",
        category: "personal",
        images: [s_movies, s_movies2],
        liveLink: "https://youtube.com/watch?v=smovies-demo",
        repoLink: "https://github.com/sudeeparyan/SudeepMovies",
        projectDetails: {
          challenge: "To build a movie ticketing and streaming platform that handles large catalogs of content while providing personalized recommendations and a smooth user experience.",
          roleActions: "Developed the front-end interface using React with responsive design principles. Implemented a recommendation algorithm based on user viewing history. Created a secure payment processing system for ticket purchases and streaming subscriptions. Set up continuous integration and deployment pipelines for regular updates.",
          projectOutcome: "Launched a feature-rich movie platform with content categorization, search functionality, user reviews, and personalized recommendations. The platform successfully handles concurrent users with minimal loading times."
        }
      },
      {
        name: "Weather Applications",
        objective: "Created an e-commerce web page that incorporates all the concepts and skills I acquired during my internship.",
        tools: "HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB, Express, Heroku, Docker, Kubernetes, Prometheus",
        outcome: "Fully functional e-commerce site with product listings, cart functionality, and checkout process.",
        category: "personal",
        images: [weather_app],
        liveLink: "https://youtube.com/watch?v=weather-app-demo",
        repoLink: "https://github.com/sudeeparyan/WeatherApp",
        projectDetails: {
          challenge: "To create a reliable and user-friendly weather application that provides accurate forecasts and visualizations while handling API rate limits and data inconsistencies from third-party weather services.",
          roleActions: "Integrated multiple weather APIs to ensure data reliability and accuracy. Designed intuitive data visualizations for temperature trends, precipitation probability, and wind patterns. Implemented geolocation features for automatic local weather detection. Created a responsive design that works across all device types.",
          projectOutcome: "Delivered a highly accurate weather application with 5-day forecasts, hourly predictions, severe weather alerts, and customizable user preferences. The application maintains functionality even with limited connectivity through strategic data caching."
        }
      },
      {
        name: "Planner",
        objective: "Created an e-commerce web page that incorporates all the concepts and skills I acquired during my internship.",
        tools: "HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB, Express, Heroku, Docker, Kubernetes, Prometheus",
        outcome: "Fully functional e-commerce site with product listings, cart functionality, and checkout process.",
        category: "personal",
        image: dummyImage,
        liveLink: "https://youtube.com/watch?v=planner-demo",
        repoLink: "https://github.com/sudeeparyan/Planner",
        projectDetails: {
          challenge: "To build a comprehensive planning application that helps users manage their time efficiently while integrating with various calendar systems and accommodating recurring events and complex scheduling rules.",
          roleActions: "Designed the application architecture with focus on calendar integration capabilities. Developed scheduling algorithms that handle recurring events, conflicts, and dependencies. Built notification systems for upcoming deadlines and events. Implemented data synchronization across multiple devices.",
          projectOutcome: "Created an intuitive planning tool with drag-and-drop scheduling, customizable views, automatic reminders, and intelligent time blocking suggestions. Users report significant improvements in productivity and time management."
        }
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
        liveLink: "https://youtube.com/watch?v=rover-demo",
        repoLink: "https://github.com/sudeeparyan/self-driving-rover",
        projectDetails: {
          challenge: "To create an autonomous vehicle capable of navigating unknown environments, detecting obstacles, and following designated paths with limited computational resources available on a Raspberry Pi.",
          roleActions: "Led the hardware integration team, connecting sensors and motors to the Raspberry Pi controller. Implemented reinforcement learning algorithms for path planning and obstacle avoidance. Optimized computer vision models to run efficiently on resource-constrained hardware. Conducted extensive field testing and iterative improvements.",
          projectOutcome: "Successfully built an autonomous rover capable of lane following with 95% accuracy and obstacle avoidance in real-time. The system operated effectively even in variable lighting conditions and maintained stable performance on different surface types."
        }
      },
      {
        name: "Quadcopter",
        objective: "To build a drone with four wings and complete the given task.",
        tools: "Arduino UNO, ESC, Bluetooth Module, PDB.",
        outcome: "Quad copter is capable to fly in air and flips, rotates in its same position.",
        image: drone,
        roleTimeline: "May 2019 - Jan 2020",
        category: "university",
        liveLink: "https://youtube.com/watch?v=quadcopter-demo",
        repoLink: "https://github.com/sudeeparyan/quadcopter-project",
        projectDetails: {
          challenge: "To design and build a stable, responsive quadcopter drone with limited budget while implementing advanced control algorithms for precise maneuvers like flips and rotations.",
          roleActions: "Designed the frame and mechanical structure for optimal weight distribution and stability. Programmed the flight controller using Arduino to implement PID control loops for attitude stabilization. Developed the wireless communication system for remote control. Calibrated motors and ESCs for synchronized operation.",
          projectOutcome: "Successfully built a quadcopter capable of stable flight with responsive controls. The drone achieved advanced maneuvers including 360° flips and stationary rotations with high precision. Battery optimization allowed for 15 minutes of continuous flight time."
        }
      },
    ],
  };
  
  // State for current active category and projects
  const [activeCategory, setActiveCategory] = useState('aiAcademy');
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