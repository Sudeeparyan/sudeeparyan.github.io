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
  const displayTools = tools || "React"
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
                  {category === "aiAcademy" && (
                    <button 
                      className="project-link youtube-link disabled" 
                      disabled 
                      title="Video will be uploaded soon"
                    >
                      <span>YouTube Demo</span>
                      <span className="coming-soon-badge">Coming Soon</span>
                    </button>
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
    { id: 'aiAcademy', label: 'AI StartUp Projects', icon: CATEGORY_ICONS.aiAcademy },
    { id: 'soliton', label: 'Companies Projects', icon: CATEGORY_ICONS.soliton },    
    { id: 'personal', label: 'Personal Pet Projects', icon: CATEGORY_ICONS.personal },
    { id: 'university', label: 'University Projects', icon: CATEGORY_ICONS.university },
  ];
  
  // Projects data organized by categories
  const projectsByCategory = {
    soliton: [
      {
        name: "RAG 360",
        objective: "Joined R&D Department objective is to create a centralized, structured, and evolving knowledge hub that empowers AI developers especially in the Generative AI space with proven methods, tools, and domain expertise. It aims to bridge knowledge gaps across teams by capturing insights from experienced professionals and making them accessible to everyone, thereby accelerating development, ensuring consistency, and enabling smarter decision-making in building AI applications.",
        tools: "Research paper, Python, ML Domain Expertise, Knowledge Management",
        roleTimeline: "Mar 2024 - Sep 2025",
        category: "soliton",
        projectDetails: {
          challenge: "In fast-moving AI development, knowledge is often siloed—experts in embeddings, retrieval, testing, or evaluation rarely share unified documentation. This created a major gap for junior developers, slowed progress, and led to repeated effort across projects.",
          roleActions: "I took the initiative to bridge this gap by launching RAG360. I directly collaborated with domain experts (each with 10+ years of experience), conducted deep knowledge transfer sessions, and documented their insights into a single, structured platform. I organized this information into reusable modules—covering data cleaning, vector stores, embedding pipelines, retrieval strategies, and evaluation techniques—to make it accessible and practical for all developers.",
          projectOutcome: "RAG360 became a key internal resource that accelerated onboarding, reduced repeated efforts, and improved collaboration across AI teams. By capturing expert knowledge in one place, it helped developers build AI applications more efficiently and consistently. It also gave the organization a unique advantage with a structured, proven approach tailored to test and measurement needs."
        }
      },
      {
        name: "Texas Instruments - Texas AI Validation Platform ",
        objective: "Its a POC Project worked  Agile Methodology : Connecting with customer & getting the requirements, Backlog refinement, Development, Testing & Release.",
        roleTimeline: "Oct 2023 - Mar 2024",
        tools: "Python, Graph RAG, LlamaIndex, Qdrant, Docker, Azure",
        category: "soliton",
        projectDetails: {
          challenge: "Texas Instruments faced a major challenge in their chip validation process. The existing workflow was slow, error-prone, and relied heavily on deep technical expertise. Engineers often dealt with broken datasheet links, inconsistent documentation, and manual testing procedures, which delayed product timelines and increased the risk of errors.",
          roleActions: "To solve this, I worked in an Agile team to develop an advanced AI chatbot using Agentic RAG systems. I contributed by implementing automated test protocols, integrating intelligent features that detected datasheet issues and broken links, and enabling context-aware assistance through a smart RAG pipeline. I also tackled critical performance issues by designing a multi-region architecture using Docker and Kubernetes, and optimized API performance by adding intelligent request batching, caching, and load balancing—bringing latency down from 300 seconds to under 10.",
          projectOutcome: "The POC was so successful that it was adopted as a full-time product, delivering a 40% reduction in testing time and a 35% increase in test coverage. It streamlined validation, enabled better knowledge sharing, and became a profitable asset for the company by significantly improving engineering efficiency and accelerating chip development cycles."
        }
      },
      {
        name: "Intel - Device Vision",
        objective: "It's a Catalyst POC (Proof of Concept) project.",
        tools: "Front-End: React(Advanced Redux Tool kit-RTKQuery), Back-End: Python, Machine Learning: Regression, MLOPS and DevOps Tools.",
        roleTimeline: "Jan 2023 - Oct 2023",
        category: "soliton",
        projectDetails: {
          challenge: "Intel's validation engineers spent excessive time and resources analyzing new chip data, requiring deep domain expertise for every step. The goal was to simplify this process and reduce dependency on specialized engineers.",
          roleActions: "Phase 1 (Offline): Developed a locally hosted GUI application where engineers could upload test data, visualize it against standard models, and identify faults. I implemented supervised learning (regression) models to predict device performance beyond tested ranges (e.g., at higher temperatures). Phase 2 (Cloud): Led the migration of the entire platform to Microsoft Azure Fabric. I designed and automated an end-to-end MLOps pipeline using Data Factory for data ingestion, Data Engineering for transformation, and Data Science for continuous model training and updates.",
          projectOutcome: "The platform successfully reduced the time, capital, and expertise required for validation. It acts as an intelligent guide, empowering engineers to perform complex analysis and visualization efficiently, significantly accelerating the chip validation lifecycle."
        }
      },
    ],
    aiAcademy: [
      {
        name: "AI Academy",
        objective: "To build an interactive platform that provides structured AI education through recorded classes, mentorship, real-world projects, and the latest AI updates empowering students and professionals to learn and apply AI skills effectively.",
        tools: "React, Node.js, MongoDB, TensorFlow, PyTorch, OpenAI APIs",
        outcome: "Successfully launched the platform with comprehensive AI curriculum and personalized learning paths.",
        roleTimeline: "Co-Founder (Nov '24 – Present)",
        category: "aiAcademy",
        images: [ai_academy1, ai_academy2, ai_academy3],
        liveLink: "https://ai-academy-m8m2.onrender.com",
        repoLink: "https://github.com/sudeeparyan/ai-academy",
        projectDetails: {
          challenge: "Many aspiring AI learners lack access to structured, practical, and up-to-date learning resources. Most platforms focus on theoretical content, leaving a gap when it comes to real-world project implementation, mentorship, and staying updated with fast-evolving AI technologies.",
          roleActions: "I co-founded AI Academy with the vision of turning it into a startup platform that bridges the gap between theory and practice. I led the creation of the curriculum structure, integrated recorded classes, and designed a mentorship program connecting learners with AI professionals. I also planned features to share AI tech news, project walkthroughs, and community-based learning, focusing on keeping content relevant to current AI trends and tools.",
          projectOutcome: "Although still under development, AI Academy has successfully launched as a working POC and continues to grow as a startup project. It now offers recorded courses, hands-on project guidance, and mentor support. The platform is laying the foundation for a scalable AI learning hub tailored to modern industry needs."
        },
      },
      {
        name: "AI Knowledge Base",
        objective: "To create a centralized and intelligent documentation hub that captures AI research, best practices, reusable components, and expert insights—making it easier for teams to build, scale, and collaborate on Generative AI solutions..",
        tools: "React, GraphQL, MongoDB, Semantic Search, Vector Databases",
        outcome: "Empowers developers to build GenAI solutions efficiently and collaboratively by providing centralized access to AI knowledge resources.",
        category: "aiAcademy",
        images: [ai_knowledge_base],
        liveLink: "https://ai-knowledgebase.onrender.com",
        repoLink: "https://github.com/Sudeeparyan/AI_Knowledge_Base",
        projectDetails: {
          challenge: "AI knowledge within teams was fragmented, spread across various tools, and often undocumented—leading to lost insights, duplicated effort, and inefficiencies in AI solution development. There was a strong need to preserve, organize, and share R&D learnings and methodologies in one centralized place.",
          roleActions: "I created the AI Knowledge Base to serve as a comprehensive documentation platform for all the insights gained through research and real-world AI projects. I integrated foundational content from the RAG360 initiative, including domain-specific best practices, data pipelines, embedding strategies, and retrieval techniques. I designed the platform to support intelligent search, collaborative editing, prototype references, and AI community contributions. All recorded videos from AI Academy link back to relevant documentation in the Knowledge Base, making both platforms complementary.",
          projectOutcome: "The AI Knowledge Base now acts as the central repository for all AI documentation, reusable components, and process knowledge. It enables faster solution development and collaboration, with a 30% reduction in development time reported by early users. It continues to grow as a shared knowledge hub across teams and projects."
        },
      },
      {
        name: "AI Notebook",
        objective: "To develop an AI-powered note-taking and study assistant that helps students upload, analyze, and interact with their academic content—delivering personalized insights, summaries, and academic recommendations through a custom language model.",
        tools: "Python, React, TensorFlow, NLP, Data Visualization Libraries",
        outcome: "Enables uploads, dynamic data visualizations, and personalized academic recommendations. Notes are saved and anchored in the central AI Knowledge Base.",
        category: "aiAcademy",
        images: [ai_notebook, ai_notebook1],
        liveLink: "https://studio--ai-notebook-for-bharat.us-central1.hosted.app/",
        repoLink: "https://github.com/aiacademylearninghub/Teacher_AI_Notebook",
        projectDetails: {
          challenge: "Traditional note-taking tools lack intelligence and integration, making it difficult for students to interact with their study material in meaningful ways. Students often miss the opportunity to extract key insights or ask questions based on their notes.",
          roleActions: "I designed and built AI Notebook as a smart academic assistant where students can upload documents, notes, or PDFs. I developed a custom Notebook Language Model (Notebook LM) that analyzes the uploaded content to extract key concepts, summarize material, answer student questions, and suggest learning resources. I also added features for dynamic data visualizations and automatic linking to relevant content in the AI Knowledge Base.",
          projectOutcome: "The AI Notebook enables students to go beyond traditional note-taking by transforming their study material into an interactive learning experience. It supports personalized academic recommendations and intelligent content exploration. The tool is actively used as part of the AI Academy ecosystem, helping students learn more effectively with AI-driven support."
        },
      },
      {
        name: "AI Solution Builder",
        objective: "To develop a smart, question-driven platform that guides developers in designing and implementing optimal AI application architectures—reducing research time and enabling faster, more accurate solution building through automated suggestions and visual diagrams.",
        tools: "JavaScript, React, Node.js, D3.js, AI Decision Systems",
        outcome: "Provides a structured workflow for selecting optimal techniques, generates tailored suggestions, and produces architecture diagrams as references for development.",
        category: "aiAcademy",
        images: [ai_solution_builder1, ai_solution_builder2],
        liveLink: "https://ai-solutionbuilder.onrender.com",
        repoLink: "https://github.com/Sudeeparyan/AI_SolutionBuilder",
        projectDetails: {
          challenge: "Developers often face multiple ways to solve a single AI problem, leading to extensive time spent on researching architectures, tools, and techniques. This trial-and-error approach, especially for those new to AI development, slows down the process and increases complexity, often without a clear path to the best solution.",
          roleActions: "I designed and built the AI Solution Builder—a platform that simplifies AI application design through a question-based framework. I implemented decision tree logic and dynamic filtering to help developers refine their use case and receive the most relevant solutions. The tool uses libraries like LangChain and LlamaIndex to offer tailored architecture suggestions based on user input. I also developed an interactive D3.js-based visualization system that dynamically generates system architecture diagrams in real-time. Additionally, the platform provides downloadable starter code, allowing developers to immediately begin customization and implementation.",
          projectOutcome: "AI Solution Builder drastically reduces the time developers spend on research by guiding them through an intelligent, structured workflow. It enables faster prototyping, ensures use of best practices, and lowers the learning curve for building AI systems. The tool has evolved into a highly responsive solution that helps users move from problem statement to deployable architecture with minimal overhead—saving both time and effort in the AI development process."
        },
      },
      
      {
        name: "AI Finance",
        objective: "To build a secure, intelligent AI finance platform that transforms structured financial data into real-time, personalized insights—empowering individuals and families to make smarter financial decisions through an AI-powered assistant.",
        tools: "React, Python, GraphQL, Google Vertex AI, Firebase(Database&Auth), Gemini, ADK, MCP Server, GCP",
        outcome: "Empowers developers to build GenAI solutions efficiently and collaboratively by providing centralized access to AI knowledge resources.",
        category: "aiAcademy",
        images: [ai_finance, ai_finance2, ai_finance3, ai_finance4, ai_finance5],
        liveLink: "https://demo-deploy-v0-628017598884.us-central1.run.app",
        repoLink: "https://github.com/Sudeeparyan/AI-money",
        projectDetails: {
          challenge: "Financial institutions and users alike lacked intelligent tools that could provide real-time financial reasoning while maintaining data privacy. The challenge was to develop an AI-powered agent that integrates with Fi Money's new MCP Server, interprets structured financial data, and delivers deeply personalized insights—without exposing raw user data or compromising on compliance and security.",
          roleActions: "I led the development of an AI agent that acts as a secure financial partner. To ensure privacy, I implemented a schema-driven approach—streaming logic to the AI rather than sending raw financial data. I used tools like Gemini, Vertex AI, and Firebase to power reasoning, memory, and secure user experiences. I built a Family Dashboard to support collaborative financial planning, allowing suggestions like tax-saving strategies for family members. With Vertex AI Memory Bank, the agent evolves with the user—remembering goals and improving over time. I also developed dynamic What If simulations that allow users to explore the impact of major financial decisions (e.g., loans, investments) in real-time via conversational interfaces.",
          projectOutcome: "The result is a comprehensive AI Finance platform that blends security, personalization, and intelligence. It enables users to engage with their finances collaboratively, make informed decisions faster, and plan long-term with the help of an AI that learns over time. Financial institutions using the solution reported a 25% improvement in decision-making speed and an 18% boost in forecast accuracy. More importantly, the platform redefines how users interact with money—positioning AI not just as a tool, but as a trusted financial partner."
        },
      },
    ],
    personal: [
      {
        name: "S-Cart (E-commerce Prototype)",
        objective: "Created an e-commerce web page that incorporates all the concepts and skills I acquired during my internship.",
        tools: "HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB, Express, Heroku, Docker, Kubernetes, Prometheus",
        outcome: "All my learning in are kept in one website it is a fully functional e-commerce site with product listings, cart functionality, and checkout process.",
        category: "personal",
        images: [s_cart, s_cart1, s_cart2, s_cart3],
        liveLink: "https://Sudeeparyan.github.io/SudeepCart",
        repoLink: "https://github.com/Sudeeparyan/SudeepCart",
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
        liveLink: "https://Sudeeparyan.github.io/SudeepCart",
        repoLink: "https://github.com/Sudeeparyan/S-Movies",
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
        liveLink: "https://Sudeeparyan.github.io/SudeepCart",
        repoLink: "https://github.com/Sudeeparyan/WeatherApp.github.io",
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
        liveLink: "https://Sudeeparyan.github.io/SudeepCart",
        repoLink: "https://github.com/Sudeeparyan/Planner_final",
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