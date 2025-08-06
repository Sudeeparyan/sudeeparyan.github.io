"use client";
import { useState } from "react";
// Keep original imports
import sudeep from './Images/sudeep.jpg';
import sudeep1 from "./Images/sudeep1.jpg";
import aws from "./Images/skills/aws.png";
import anisbile from "./Images/skills/anisbile.png";
import docker from "./Images/skills/docker.png";
import kubernetes from "./Images/skills/kuberneties.png";
import ml from "./Images/skills/ml.png";
import Prometheus from "./Images/skills/Prometheus.png";
import git from "./Images/skills/git.png";
import edureka from "./Images/experience/edureka.png";
import soliton from "./Images/experience/soliton.jpeg";
import vtps from "./Images/experience/vtps.jpg";
import rover from "./Images/Projects/rover.jpg";
import drone from "./Images/Projects/Quadcopter.jpeg";
import python from "./Images/skills/python.png";
import scart from "./Images/Project Images/S cart.png";
import HTML from "./Images/skills/html.png";
import CSS from "./Images/skills/css.png";
import ReactImg from "./Images/skills/react.png";
import javascript from './Images/skills/Java Script.png';
import nodejs from './Images/skills/node.png';
import mongodb from "./Images/skills/mongo.png";
import Polymer from "./Images/skills/polymer.png";
import Angular from "./Images/skills/angular.png";
import gemeni from './Images/skills/gemeni.png';
import huggingface from "./Images/skills/huggingface.png";
import langchain from "./Images/skills/langchain.png";
import llamaindex from "./Images/skills/llamaindex.png";
import ollama from "./Images/skills/ollama.png";
import openai from "./Images/skills/openai.png";
import Assistant from "./Assistant";
import P5logo from "./p5logo";
import './globals.css';
import './styles/certificates.css';  // Add this import for certificate styles
import Chatbot from './chatbot.jsx';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import IntroSlide from "./components/IntroSilde.jsx";

// Component for Education items
const EducationItem = ({ years, degree, institute, grade }) => (
  <div className="row work-info">
    <div className="col-md-6 work-left" id="work-left">
      <h4>{years}</h4>
    </div>
    <div className="col-md-6 work-right" id="work-right">
      <span className="glyphicon glyphicon-education"></span>
      <h5>{degree}</h5>
      <p>Institute : {institute}</p>
      <p>{grade}</p>
    </div>
  </div>
);

// Certificate Link Component
const CertificateLink = ({ href, title, isNew }) => (
  <h3 className={`certificate-item ${isNew ? 'new-certificate' : ''}`}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {title}
      {isNew && <span className="new-badge">New</span>}
    </a>
  </h3>
);

// Certificate Category Component
const CertificateCategory = ({ title, items, color }) => (
  <div className="certificate-category" style={{ backgroundColor: color }}>
    <h2 className="category-title">{title}</h2>
    <div className="category-items">
      {items.map((cert, index) => (
        <CertificateLink 
          key={index} 
          href={cert.href} 
          title={cert.title} 
          isNew={cert.isNew} 
        />
      ))}
    </div>
  </div>
);

document.addEventListener('DOMContentLoaded', function() {
  // Reveal animations for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `revealSection 0.8s ease forwards`;
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all main sections
  document.querySelectorAll('#intro, #aboutme, #Experience, #skills, #education, #projects, #certifications, #contact').forEach(section => {
    observer.observe(section);
  });
  
  // Create scroll to top button
  const scrollButton = document.createElement('div');
  scrollButton.classList.add('scroll-to-top');
  scrollButton.innerHTML = '↑';
  document.body.appendChild(scrollButton);
  
  // Show/hide scroll button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  });
  
  // Scroll to top on button click
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Skill Image Component
const SkillImage = ({ src, alt, title }) => (
  <img src={src} className="skillimage" title={title} alt={alt} height={100} width={100} border="0" />
);

export default function Dashboard() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMobileMenu = () => setIsMenuActive(!isMenuActive);

  // Skills data for the marquee
  const skillImages = [
    { src: gemeni, title: "Gemeni", alt: "gemeni" },
    { src: huggingface, title: "Huggingface", alt: "huggingface" },
    { src: langchain, title: "Langchain", alt: "langchain" },
    { src: llamaindex, title: "llamaindex", alt: "llamaindex" },
    { src: ollama, title: "ollama", alt: "ollama" },
    { src: openai, title: "openai", alt: "openai" },
    { src: ml, title: "Machine Learning", alt: "ML" },
    { src: python, title: "Python", alt: "python" },
    { src: HTML, title: "HTML", alt: "html" },
    { src: CSS, title: "CSS", alt: "css" },
    { src: ReactImg, title: "React", alt: "react" },
    { src: javascript, title: "Java Script", alt: "javascript" },
    { src: nodejs, title: "Node JS", alt: "node" },
    { src: mongodb, title: "Mongo DB", alt: "mongo" },
    { src: Polymer, title: "Polymer", alt: "Polymer" },
    { src: Angular, title: "Angular", alt: "Angular" },
    { src: aws, title: "AWS", alt: "AWS" },
    { src: anisbile, title: "Ansible", alt: "Ansible" },
    { src: Prometheus, title: "Prometheus", alt: "Prometheus" },
    { src: docker, title: "Docker", alt: "docker" },
    { src: kubernetes, title: "Kubernetes", alt: "kubernetes" },
    { src: git, title: "Git Hub", alt: "git" },
  ];

  // Certificates data - split into categories
  const certificatesData = [
    { href: "https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8", title: "Machine Learning" },
    { href: "https://coursera.org/share/fcb4031aa63c0af7e4b748f3048b5cc6", title: "Neural Networks and Deep Learning" },
    { href: "https://www.edureka.co/certificates/mycertificate/3a96f454fcc70b6179e000e39acb12db", title: "Full Stack Web Development" },
    { href: "https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8", title: "Data structures and Algorithms" },
    { href: "https://coursera.org/share/6df1859e3ed67b74db0b2fcd49b0e245", title: "Google Professional Workspace Administrator" },
    { href: "https://learn.microsoft.com/en-us/users/gaddameedisudeeparyan-0368/credentials/ae910c93a6319ac3", title: "Microsoft Azure Cloud Computing" , isNew: true},
  ];

  const aiCertificatesData = [
    { href: "https://learn.deeplearning.ai/accomplishments/2f77cd4e-0b44-4781-8326-22c620e64886?usp=sharing", title: "Prompt Engineering" },
    { href: "https://learn.deeplearning.ai/accomplishments/2f2020ba-f867-4db9-b564-7ae394d50541?usp=sharing", title: "Large Language Model" },
    { href: "https://learn.deeplearning.ai/accomplishments/6c2f4b32-a3d5-4dad-bd92-2be4aa8f8a7c?usp=sharing", title: "Fine Tuning" },
    { href: "https://academy.langchain.com/certificates/oax3vhmzud", title: "Agents - Lang Graph Agents", isNew: true },
  ];

  const publicationsData = [
    { href: "https://ieeexplore.ieee.org/document/10404782", title: "IEEE Conference Paper on Deep Learning" },
    { href: "https://ieeexplore.ieee.org/document/11077193", title: "IEEE Conference Paper on Generative AI", isNew: true }
  ];

  // New Awards data
  const awardsData = [
    { 
      href: "https://ieeexplore.ieee.org/document/10404782", 
      title: "Best Paper Award (2025)", 
      description: "Awarded Best Paper at the IEEE International AI Conference selected from over 1,000 submissions",
      isNew: true 
    },
    { 
      href: "https://ieeexplore.ieee.org/document/10404782", 
      title: "Innovator of the Year – Soliton", 
      description: "Recognized for introducing cutting‑edge AI techniques, mentoring junior engineers, and leading transformative innovation across projects",
      isNew: false 
    }
  ];

  // Letter of Recommendation data
  const lorData = [
    { href: "https://drive.google.com/file/d/1LOR1/view", title: "LOR from Dr. John Smith (Professor, University A)", isNew: true },
    { href: "https://drive.google.com/file/d/2LOR2/view", title: "LOR from Ms. Jane Doe (Manager, Soliton Technologies)" },
    { href: "https://drive.google.com/file/d/3LOR3/view", title: "LOR from Dr. Emily White (Research Lead, Edureka)" },
    { href: "https://drive.google.com/file/d/4LOR4/view", title: "LOR from Mr. Michael Brown (Director, VTPS)" },
    { href: "https://drive.google.com/file/d/5LOR5/view", title: "LOR from Dr. Alice Green (IEEE Conference Chair)", isNew: true }
  ];

  // Combined data for backwards compatibility with existing components
  const certificates = [...certificatesData, ...aiCertificatesData, ...publicationsData, ...awardsData, ...lorData];

  return (
    <div className="main-body">     
      
      <IntroSlide/>
      <Experience/>
      <Skills skillImages={skillImages} />
      <Projects />    
      {/* Updated Certifications Component with Categories */}
      <div id="certifications" className="certificates-section">
        <div className="container">
          <h2 className="tittle">Achievements</h2>
          <div className="certificate-categories">
            <CertificateCategory 
              title="Professional Certifications" 
              items={certificatesData} 
              color="rgba(25, 118, 210, 0.1)" 
            />
            <CertificateCategory 
              title="Generative AI Certifications" 
              items={aiCertificatesData} 
              color="rgba(156, 39, 176, 0.1)" 
            />
            <CertificateCategory 
              title="Letter of Recommendation" 
              items={lorData} 
              color="rgba(33, 150, 243, 0.1)" 
            />
            <CertificateCategory 
              title="Research Publications" 
              items={publicationsData} 
              color="rgba(76, 175, 80, 0.1)" 
            />
            <CertificateCategory 
              title="Awards" 
              items={awardsData} 
              color="rgba(255, 193, 7, 0.1)" 
            />
            
          </div>
        </div>
      </div>
      <Education />
      <div id="home">
        <Assistant/>
      </div>
      <div id="chatBot">
        <Chatbot/>          
      </div>
      <Contact />
      
      {/* Add scroll-to-top button that appears when scrolling */}
      <div className="scroll-to-top">↑</div>
    </div>
  );
}