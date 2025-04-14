import React from 'react';
import './Skills.css';

const SkillCategory = ({ title, skills }) => (
  <div className="skill-category">
    <h3>{title}</h3>
    <div className="skill-tags">
      {skills.map((skill, index) => (
        <div className="skill-tag" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const SkillImage = ({ src, alt, title, index }) => (
  <div className="skill-image-container" style={{ animationDelay: `${index * 0.1}s` }}>
    <img src={src} className="skillimage" title={title} alt={alt} />
    <div className="skill-tooltip">{title}</div>
  </div>
);

export default function Skills({ skillImages }) {
  // Define skill categories and their respective skills
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C", "C++", "C#"]
    },
    {
      title: "Data Engineering",
      skills: ["Data Modeling", "Database Design", "Data Visualization (Power BI)"]
    },
    {
      title: "Database Management",
      skills: ["MongoDB", "SQL Databases"]
    },
    {
      title: "Web Technologies",
      skills: ["React", "Redux Toolkit", "VueJS", "RTKQuery", "Polymer", "HTML", "CSS", "NodeJS", ".NET"]
    },
    {
      title: "Artificial Intelligence",
      skills: ["Prompt Engineering", "Lang Chain", "Open AI", "Ollama", "Hugging Face", "RAG", "Llama Index", "Fine Tuning", "NLP", "Deep Learning Architectures"]
    },
    {
      title: "Cloud Platforms",
      skills: ["Microsoft Azure (Azure Databricks, ADLS Gen2, Azure Data Factory)", "AWS (EC2, EKS, S3, etc.)"]
    },
    {
      title: "DevOps Tools",
      skills: ["Docker", "Kubernetes", "Git", "Prometheus", "Jenkins", "Ansible"]
    }
  ];

  return (
    <div id="skills">
      <div className="heading-container">
        <h1 className="headline">Skills</h1>
      </div>
      
      <div className="skills-carousel">
        <div className="carousel-track">
          {skillImages.map((skill, index) => (
            <SkillImage 
              key={index} 
              src={skill.src} 
              title={skill.title} 
              alt={skill.alt} 
              index={index}
            />
          ))}
          {/* Duplicate images for seamless loop */}
          {skillImages.map((skill, index) => (
            <SkillImage 
              key={`duplicate-${index}`} 
              src={skill.src} 
              title={skill.title} 
              alt={skill.alt} 
              index={index}
            />
          ))}
        </div>
      </div>
      
      <div className="skills-content">
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              skills={category.skills} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}