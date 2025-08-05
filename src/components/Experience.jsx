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
      'senior project engineer': "R&D and Mentorship"
    };
    
    const rolePrefix = roleMapping[selectedRole.toLowerCase()];
    
    if (rolePrefix) {
      filteredDetails = details.filter(detail => 
        detail.startsWith(rolePrefix)
      );
    }
  }

  return (
    <div className="experience-details-panel">
      <h3 className="work-experience-subheading">{title}</h3>
      <div className="experience-period">{period}</div>
      <p className="work-experience-innercontent">{description}</p>
      
      <div className="experience-details">
        {filteredDetails && filteredDetails.map((detail, idx) => {
          // Parse the detail string to extract role title and content
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
        title: "Career Progression: Intern → Project Engineer → Senior Project Engineer",
        period: "Jan 2023 - Present",
        // description: "Comprehensive journey from AI & DevOps Intern (Jan-May 2023) to Project Engineer (Jun 2023-Apr 2025) to Senior Project Engineer (May 2025-Present)",
        details: [
          "R&D and Mentorship (Current Focus): In my current role within the R&D team, I am focused on pioneering next-generation AI solutions. I lead pilot projects, give demos to prospective clients like Qualcomm and Renesas, and drive internal innovation. A major initiative I took ownership of was creating \"RAG360,\" a centralized knowledge base and training framework that consolidates our team's expertise. I now actively mentor junior engineers, helping to build a skilled, AI-fluent workforce and scale our team's capabilities.",
          "Project Engineer (Jan 2023 – Present): As a Project Engineer, I took on significant responsibilities, leading the development of AI-powered solutions for industry giants like Texas Instruments. I engineered an AI assistant to interpret complex datasheets and built a VS Code extension to automate C++ test code generation. A key achievement was solving a critical performance bottleneck by designing a multi-region deployment with Docker and Kubernetes, slashing API processing time from 300 seconds to under 10 seconds. This role solidified my expertise in applying Generative AI to solve real-world engineering challenges.",
          "Internship (Jan-May 2023): I began my journey at Soliton by immersing myself in the foundations of MLOps, cloud infrastructure, and full-stack development. My primary focus was contributing to a high-impact project for Intel, where I helped develop an offline GUI tool for device validation. This foundational experience was my launchpad into building enterprise-grade, data-driven applications and automating complex ML workflows."
        ]
      },
      {
        image: edureka,
        caption: "Edureka",
        title: "Full Stack Web Developer (Internship)",
        period: "Jul 2021 - Feb 2022",
        description: "Eight months Internship on Full-Stack Web Development with React Front-end and NodeJs Backend.",
        details: [
          "Built a full-stack application using React, Node.js, and Python.",
          "Focused on backend development and seamless API integration.",
          "Strengthened understanding of scalable, user-focused web solutions."
        ]
      },
      {
        image: vtps,
        caption: "Dr. Narla Tatarao Thermal Power Station",
        title: "Implant Training",
        period: "May 2021 - Jul 2021",
        description: "Industrial Visits and Familiarization in working of thermal power plant.",
        details: [
          "Attended industrial visits and training sessions to understand thermal power plant operations.",
          "Gained foundational experience in engineering systems and large-scale infrastructure."
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