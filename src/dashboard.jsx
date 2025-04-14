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
import Chatbot from './chatbot.jsx';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

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

// Component for Experience items
const ExperienceItem = ({ image, caption, title, period, description }) => (
  <article>
    <figure>
      <div>
        <img src={image} alt={`Workplace - ${caption}`} width="100%" />
        <figcaption>Workplace - {caption}</figcaption>
      </div>
    </figure>
    <h3 className="work-expreinece-subheading">{title}</h3>
    <div>{period}</div>
    <p className="work-expreinece-innercontent">{description}</p>
  </article>
);

// Component for Project Carousel Items
const ProjectItem = ({ isActive, name, objective, tools, outcome, image, children }) => (
  <div className={`item ${isActive ? 'active' : ''}`} data-interval="false">
    <div>
      <p className="projectname">{name}</p>
      {objective && <p className="projectobjective">{objective}</p>}
      {tools && <p className="projecttools">{tools}</p>}
      {outcome && <p className="projectoutcome">{outcome}</p>}
      {image && (
        <div className="projectImg">
          <img alt={name} src={image} className={`${name.includes('Rover') ? 'RoverImg' : 'droneImg'}`} />
        </div>
      )}
      {children}
    </div>
  </div>
);

// Certificate Link Component
const CertificateLink = ({ href, title }) => (
  <h3>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </h3>
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

  // Certificates data
  const certificates = [
    { href: "https://learn.microsoft.com/en-us/users/gaddameedisudeeparyan-0368/credentials/ae910c93a6319ac3", title: "Microsoft Azure Cloud Computing" },
    { href: "https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8", title: "Machine Learning" },
    { href: "https://coursera.org/share/fcb4031aa63c0af7e4b748f3048b5cc6", title: "Neural Networks and Deep Learning" },
    { href: "https://www.edureka.co/certificates/mycertificate/3a96f454fcc70b6179e000e39acb12db", title: "Full Stack Web Development" },
    { href: "https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8", title: "Data structures and Algorithms" },
    { href: "https://coursera.org/share/6df1859e3ed67b74db0b2fcd49b0e245", title: "Google Professional Workspace Administrator" },
    { href: "https://learn.deeplearning.ai/accomplishments/2f77cd4e-0b44-4781-8326-22c620e64886?usp=sharing", title: "Prompt Engineering" },
    { href: "https://learn.deeplearning.ai/accomplishments/2f2020ba-f867-4db9-b564-7ae394d50541?usp=sharing", title: "Large Language Model" },
    { href: "https://learn.deeplearning.ai/accomplishments/6c2f4b32-a3d5-4dad-bd92-2be4aa8f8a7c?usp=sharing", title: "Fine Tuning" },
    { href: "https://academy.langchain.com/certificates/oax3vhmzud", title: "Agents - Lang Graph Agents" },
    { href: "https://ieeexplore.ieee.org/document/10404782", title: "IEEE Conference Paper on Deep Learning" },
  ];

  // Projects data
  const projects = [
    {
      name: "S-Cart (A Prototype of E commerce website)",
      isActive: false,
      children: (
        <>
          <iframe
            title="project"
            className="scart"
            src="https://sudeeparyan.github.io/SudeepCart/"
            width="1000px"
            height="370px"
            allowFullScreen
          ></iframe>
          <h4>
            HTML, CSS, Bootstrap, JavaScript, React, Nodejs, MongoDB,
            Express, Heroku, Docker, Kubernites, Prometheus are the tools
            used in the project
          </h4>
          <h4>
            Created an e-commerce web page that incorporates all the
            concepts and skills I acquired during my internship.
          </h4>
          <h3>
            <a
              href="https://sudeeparyan.github.io/SudeepCart/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to go to Scart
            </a>
          </h3>
        </>
      ),
    },
    {
      name: "Device Vision (Soliton) (Jan 2023 - Nov 2023)",
      objective: "Customer asked to develop Data analyzing and Visualization tool for Validation Enginners.",
      tools: "Front-End: React(Advanced Redux Tool kit-RTKQuery), Back-End: Python, Machine Learning: Regression, MLOPS and DevOps Tools.",
      outcome: "Tool that Visualization and Analyzing data which is given by Validation Engineer so that they can easily train any data and Predict the values which is beyond the range of his collected data.",
      isActive: false,
      children: (
        <p>
          (Due to the confidentiality of company operations, further
          details cannot be disclosed.)
        </p>
      ),
    },
    {
      name: "Texas Instruments - Battery Management System (Soliton) (Nov 2023 - Present)",
      objective: "Working on Agile Methodology : Connecting with customer & getting the requirements, Backlog refinement, Development, Testing & Release.",
      tools: "Completed the mandatory Training that should be done before joining the project. Worked on Polymer JS and completed SDLC project",
      outcome: "Currently Developing a graphical user interface (GUI) and working on Hardware Validation and chips testing given by Texas Instruments",
      isActive: false,
      children: (
        <p>
          And also working on Generative AI chat bot assistant.(Due to
          the confidentiality of company operations, further details
          cannot be disclosed.)
        </p>
      ),
    },
    {
      name: "Self-Driving Rover Amrita(Aug 2022-Jun 223)",
      objective: "Implementation of self driving rover using ML(Reinforcement learning) with Raspberry pi,which is able to detect and avoid obstacles in its path and also able to move in the given lane.",
      tools: "Raspberry Pi 3b+,NVIDIAs CNN model, Ultra-sonic sensor,Pi camera,Servo motor,DC motors.",
      image: rover,
      isActive: true,
    },
    {
      name: "Quadcopter Amrita (May 2019 Jan 2020)",
      objective: "To build a drone with four wings and complete the given task.",
      tools: "Arduino UNO,ESC,Bluetooth Module,PDB.",
      outcome: "Quad copter is capable to fly in air and flips, rotates in its same position.",
      image: drone,
      isActive: false,
    },
  ];

  return (
    <div className="main-body">      
      <div id="home">
        <Assistant/>
      </div>

      <div id="intro">
        <div className="container">
          <div className="row jumbotron" style={{ marginTop: "140px" }}>
            <div className="col-md-6 bar">
              <img src={sudeep1} alt="Myphoto" className="img-rounded" id="Myphoto" />
            </div>
            <div className="col-md-5 bar">
              <span style={{ fontSize: "60px", fontFamily: "Papyrus" }}>
                Hello, I am <span style={{ color: "red" }}>Sudeep Aryan </span>
                Welcome to my World.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="aboutme">
        <div className="container" >
          <div className="row jumbotron" style={{ marginTop: "140px" }}>
            <div className="col-md-6 bar">
              <span style={{ fontSize: "60px", fontFamily: "Papyrus" }}>
                About me !
              </span>
              <p style={{ fontSize: "18px", fontFamily: "Lucida Console" }}>
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
            <div className="col-md-6 bar">
              <img src={sudeep} className="img-rounded" id="Myphoto" alt="Myphoto" border="0" />
            </div>
          </div>
        </div>
      </div>

      <div id="Experience">
        <section className="work-experience container">
          <h2 className="headline">Work Experience</h2>
          <div className="jobs">
            <ExperienceItem 
              image={soliton}
              caption="Soliton Technologies"
              title="Project Engineer (Full-Time Employee)"
              period="Jun 2023 - Present" 
              description="Working as Project Engineer in Soliton Technology. Trained on Generative AI, Machine Learning"
            />
            <ExperienceItem 
              image={soliton}
              caption="Soliton Technologies"
              title="Internship"
              period="Jun 2022 - May 2023" 
              description="Worked as Intern in Soliton Technology. Trained on DevOps, Full-Stack Web Development"
            />
            <ExperienceItem 
              image={edureka}
              caption="Edureka"
              title="Full Stack Web Developer (Internship)"
              period="Jul 2021 - Feb 2022" 
              description="Eight months Internship on Full-Stack Web Development with React Front-end and NodeJs Backend."
            />
            <ExperienceItem 
              image={vtps}
              caption="Dr. Narla Tatarao Thermal Power Station"
              title="Implant Training"
              period="May 2021 - Jul 2021" 
              description="Industrial Visits and Familiarization in working of thermal power plant."
            />
          </div>
        </section>
      </div>
      
      <Skills skillImages={skillImages} />
      <Education />
      <Projects projects={projects} />
      <Certifications certificates={certificates} />

      <div id="contact">
        <h1 className="headline">Contact</h1>
        <div className="container">
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.96565998386!2d78.45949881466605!3d14.714533589730038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb389efd41ca6ad%3A0xd21e447105818ff3!2sAF%20APARTMENT!5e0!3m2!1sen!2sin!4v1660049458028!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-md-6">                
              <div className="contactform" style={{ marginTop: "12px" }}>
                <form>
                  <input type="text" name="Name" placeholder="Name" required></input>
                  <input className="email" name="Email" placeholder="Email" required></input>
                  <input className="phone" name="Phone" placeholder="Phone" required></input>
                  <textarea className="messages" name="Message" placeholder="Message" required></textarea>
                  <input type="submit" value="SUBMIT"></input>
                </form>
              </div>
              <div id="socialnetwork" style={{ marginTop: "20px" }}>
                <a href="https://github.com/Sudeeparyan" target="_blank">
                  <img src="https://i.postimg.cc/D0jsHk21/Github.png" height="30px" width="30px" alt="Github"/>
                </a>
              </div>
              <div>                  
                <p>
                  <span style={{ fontSize: "20px", color: "white" }}>
                    Mobile : +91 8309135484
                  </span>
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ fontSize: "20px", color: "white" }}>
                    E-mail :{" "}
                    <a
                      href="mailto:sudeeparyang@gmail.com"
                      style={{
                        fontFamily: "Roboto Condensed",
                        fontSize: "20px",
                        color: "white",
                      }}
                    >
                      sudeeparyang@gmail.com
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="chatBot">
        <Chatbot/>          
      </div>
      
      <div className="bottom">
        <h2>&copy; Sudeep Aryan Website</h2>
      </div>
    </div>
  );
}