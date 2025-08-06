import React, { useState } from 'react';
import './Experience.css';
import edureka from "../Images/experience/edureka.png"
import soliton from "../Images/experience/soliton.jpeg";
import vtps from "../Images/experience/vtps.jpg";

const ExperienceCard = ({ image, caption, title, period, isSelected, onClick }) => {
  return (
    <article 
      className={`experience-card-compact ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <figure>
        <img src={image} alt={`Workplace - ${caption}`} width="100%" />
      </figure>
      <h3 className="work-experience-subheading">{title}</h3>
      <div className="experience-period">{period}</div>
      <div className="selection-indicator"></div>
    </article>
  );
};

const ExperienceDetails = ({ image, caption, title, period, description, details, selectedRole }) => {
  // Determine which details to show based on the selected role
  let filteredDetails = details;
  
  if (caption === "Soliton Technologies" && selectedRole !== "") {
    // For specific roles, filter details based on the role prefix
    const roleMapping = {
      'intern': "Internship",
      'project engineer': "Project Engineer",
      'senior project engineer': "Senior Project Engineer"
    };
    
    const rolePrefix = roleMapping[selectedRole.toLowerCase()];
    
    if (rolePrefix) {
      filteredDetails = details.filter(detail => 
        typeof detail === 'object' ? detail.role === rolePrefix : detail.startsWith(rolePrefix)
      );
    }
  }

  return (
    <div className="experience">
      <div className="experience-details">
        {filteredDetails && filteredDetails.map((detail, idx) => {
          // Handle structured details object (new format)
          if (typeof detail === 'object' && detail.role) {
            return (
              <div key={idx} className="experience-role-section cyber-panel">
                {/* <h4 className="role-title highlight-primary">{detail.title || detail.role}</h4> */}
                <div className="cyber-lines"></div>
                {detail.sections && detail.sections.map((section, secIdx) => (
                  <div key={secIdx} className="experience-subsection fade-in-section">
                    <h5 className="subsection-title highlight-secondary">{section.title}</h5>
                    <div className="subsection-content">
                      <p className="subsection-description">
                        {section.description.split(' ').map((word, wordIdx, arr) => {
                          // Enhanced regex for technical terms with more tech keywords
                          const techTermRegex = /^(AI|RAG|CAG|Graph|Neo4j|Vertex|Docker|Kubernetes|MLOps|POC|Firebase|Studio|Bolt\.ai|vision|models|embedding|pipelines|Agent|MCP|multi-agent|systems|protocols|workflows|deployment|stakeholders|architecture)(\W|$)/i;
                          
                          if (techTermRegex.test(word)) {
                            return (
                              <React.Fragment key={wordIdx}>
                                <span className="highlight-tech glow-effect">{word}</span>
                                {wordIdx < arr.length - 1 ? ' ' : ''}
                              </React.Fragment>
                            );
                          }
                          return (
                            <React.Fragment key={wordIdx}>
                              {word}
                              {wordIdx < arr.length - 1 ? ' ' : ''}
                            </React.Fragment>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            );
          }
          
          // Handle legacy string format
          const titleMatch = detail.match(/^([^:]+):/);
          if (titleMatch) {
            const roleTitle = titleMatch[1];
            const roleContent = detail.substring(titleMatch[0].length).trim();
            
            return (
              <div key={idx} className="experience-role-section">
                <h4 className="role-title">{roleTitle}</h4>
                <div className="role-content">
                  {roleContent.split('. ')
                    .filter(sentence => sentence.trim().length > 0)
                    .map((sentence, sentIdx) => (
                      <div key={sentIdx} className="detail-item">
                        <span className="detail-bullet">→</span>
                        <p>
                          {sentence}
                          {sentIdx < roleContent.split('. ').filter(s => s.trim().length > 0).length - 1 && '.'}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            );
          } else {
            // Handle details without a specific format
            return (
              <div key={idx} className="detail-item">
                <span className="detail-bullet">→</span>
                <p>{detail}</p>
              </div>
            );
          }
        })}
        {/* Show confidentiality note once for Soliton Technologies */}
        {caption === "Soliton Technologies" && (
          <p className="confidentiality-note">
            Note: Specific project names and details are not disclosed due to confidentiality agreements with clients.
          </p>
        )}
      </div>
    </div>
  );
};

const RoleSelector = ({ selectedRole, onRoleChange, isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <div className="role-selector">
      <button 
        className={`role-button ${selectedRole === 'senior project engineer' ? 'active' : ''}`}
        onClick={() => onRoleChange('senior project engineer')}
      >
        Senior Project Engineer
      </button>
      <button 
        className={`role-button ${selectedRole === 'project engineer' ? 'active' : ''}`}
        onClick={() => onRoleChange('project engineer')}
      >
        Project Engineer
      </button>
      <button 
        className={`role-button ${selectedRole === 'intern' ? 'active' : ''}`}
        onClick={() => onRoleChange('intern')}
      >
        Intern
      </button>
    </div>
  );
};

export default function Experience() {
    const [selectedExperience, setSelectedExperience] = useState(0); // Default to Soliton (index 0)
    const [selectedRole, setSelectedRole] = useState('senior project engineer'); // Default to Senior Project Engineer
    
    const experiences = [
      {
        image: soliton,
        caption: "Soliton Technologies",
        title: "Senior Project Engineer",
        period: "Jan 2023 - Present",
        details: [
          {
            role: "Senior Project Engineer",
            title: "Senior Project Engineer — AI R&D & Mentorship",
            sections: [
              {
                title: "Agent Protocols & Systems Architecture",
                description: "Implements cutting-edge frameworks such as Model Context Protocol (MCP) and Agent-to-Agent (A2A) communication protocols to build scalable, interoperable multi-agent systems. These architectures enable seamless integration into evolving open-agent ecosystems without disrupting existing enterprise workflows."
              },
              {
                title: "Business Integration & POCs",
                description: "Collaborates with product leaders and domain experts to identify critical business challenges, design robust AI solutions, and deliver production-ready Proof-of-Concepts (POCs). Combines deep technical experimentation with a strong sense of business feasibility to ensure long-term impact and adoption."
              },
              {
                title: "Mentorship, Knowledge Leadership & Strategic Enablement",
                description: "Drives Soliton’s AI culture by mentoring junior engineers, leading “Knowledge Café” sessions, and building structured onboarding programs. Actively contributes to research publications and represents the team at conferences and hackathons. Plays a strategic role in aligning R&D with delivery by bridging research insights with real-world implementation—ensuring scalable deployment and long-term team capability growth."
              }
            ]
          },
          {
            role: "Project Engineer",
            title: "Project Engineer — AI Solutions & GenAI Systems",
            sections: [
              {
                title: "AI Solutions for Engineering Workflows",
                description: "Engineered AI-powered tools tailored for the semiconductor domain, including an advanced chatbot assistant that interprets complex datasheets to surface key information instantly—reducing manual effort and enabling faster decision-making for engineers. Focused on integrating Generative AI into real-world engineering use cases with tangible productivity gains."
              },
              {
                title: "Infrastructure Optimization & Performance Tuning",
                description: "Solved critical performance bottlenecks by architecting a multi-region deployment using Docker and Kubernetes. Achieved a 30x latency reduction—cutting API processing time from 300 seconds to under 10 seconds—by optimizing model orchestration, caching, and load distribution."
              },
              {
                title: "Generative AI Systems & Advanced Techniques",
                description: "Hands-on with full-stack GenAI development—from prompt engineering and retrieval pipelines to vector search using tools like LlamaIndex, OpenAI APIs, and Qudrant. Transitioned prototypes to production, applying advanced techniques like context-aware prompting, multi-hop reasoning, and embedding optimization to boost accuracy and system performance."
              }
            ]
          },
          {
            role: "Internship",
            title: "Internship — ML Validation Tool, Cloud Migration & Full-Stack Development",
            sections: [
              {
                title: "Built an Intelligent ML-Powered Validation Tool",
                description: "Developed a robust offline GUI application using supervised learning (regression) models to analyze test data, predict device behavior, and assist hardware validation engineers. The tool significantly reduced manual effort, domain dependency, and validation time, driving smarter decision-making across engineering teams."
              },
              {
                title: "Led Cloud Migration & Automated MLOps Pipeline",
                description: "Migrated the entire solution to Microsoft Azure, designing a fully automated MLOps workflow with components like Data Factory, OneLake, and Power BI. Enabled real-time analytics, alerting, and continuous model training—transforming a manual, expert-heavy process into a scalable, data-driven cloud solution."
              },
              {
                title: "Mastered React, Python, and Full-Stack Development",
                description: "Gained deep, hands-on expertise in React.js, Python (Flask/FastAPI), and backend integrations. Strengthened my understanding of DevOps and cloud architecture, and became proficient in designing production-ready, full-stack ML applications with seamless user interfaces and scalable backend infrastructure."
              }
            ]
          }
        ]
      },
      {
        image: edureka,
        caption: "Edureka",
        title: "Full Stack Web Developer (Internship)",
        period: "Jul 2021 - Feb 2022",
        description: "Eight months Internship on Full-Stack Web Development with React Front-end and NodeJs Backend.",
        details: [
          {
            role: "Internship",
            title: "Edureka Internship — Full-Stack Web Development",
            sections: [
              {
                title: "Kickstarted My Software Development Journey During COVID",
                description: "The pandemic gave me the space to deeply explore computer science and web technologies, sparking my passion for building impactful digital solutions. I began this journey with Edureka, where I took my first steps as a software developer."
              },
              {
                title: "Built a Full-Stack Web Application (React, Node.js, Python)",
                description: "Developed a full-stack application from the ground up, focusing on backend logic, API integration, and efficient data handling—laying a strong technical foundation in modern web development."
              },
              {
                title: "Gained Expertise in Scalable Web Architecture",
                description: "Strengthened my understanding of user-centric design, RESTful API development, and scalable backend systems, becoming proficient in React and Python-based full-stack development."
              }
            ]
          }
        ]
      },
      {
        image: vtps,
        caption: "Dr. Narla Tatarao Thermal Power Station",
        title: "Implant Training",
        period: "May 2021 - Jul 2021",
        description: "Industrial Visits and Familiarization in working of thermal power plant.",
        details: [
          {
            role: "Implant Training",
            title: "Thermal Power Plant Training — VTPS",
            sections: [
              {
                title: "Explored Complete Thermal Power Generation Workflow",
                description: "Participated in a structured industrial training program that covered the full thermal power cycle—from coal unloading and pulverization to boiler combustion, steam turbine operation, and power transmission. Understood the operational logic behind each system and how they integrate into a 1,760 MW power plant serving a significant portion of Andhra Pradesh’s energy demand."
              },
              {
                title: "Hands-On Learning in Real Industrial Environment",
                description: "Observed critical areas like the control room, cooling towers, condenser systems, and generator operations. Gained firsthand exposure to how mechanical, electrical, and control systems come together in a high-efficiency, large-scale infrastructure. Engaged with experienced plant engineers to understand routine operations, maintenance strategies, and safety protocols."
              },
              {
                title: "Strengthened Engineering and System-Level Thinking",
                description: "The experience deepened my foundational understanding of thermodynamics, fluid systems, and industrial automation. It also introduced me to large-scale process workflows and systems engineering principles—lessons that continue to shape my problem-solving approach in both software and AI-driven projects."
              }
            ]
          }
        ]
      }
    ];

    // Only show role selector when Soliton experience is selected
    const showRoleSelector = selectedExperience === 0;

    return (
      <div id="Experience">
        <div className="experience-background-effect"></div>
        <section className="work-experience container">
          <h2 className="headline">Work Experience</h2>
          
          <div className="experience-split-view">
            <div className="experience-cards-list">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  image={exp.image}
                  caption={exp.caption}
                  title={exp.title}
                  period={exp.period}
                  isSelected={selectedExperience === index}
                  onClick={() => {
                    setSelectedExperience(index);
                    setSelectedRole(''); // Reset role filter when changing companies
                  }}
                />
              ))}
            </div>
            
            <div className="experience-details-container">
              <RoleSelector 
                selectedRole={selectedRole}
                onRoleChange={setSelectedRole}
                isVisible={showRoleSelector}
              />
              <ExperienceDetails 
                {...experiences[selectedExperience]}
                selectedRole={selectedRole}
              />
            </div>
          </div>
        </section>
      </div>
    );
}