"use client";
import { useState,useEffect } from "react";
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
import Assistant from "./Assistant"
import HTML from "./Images/skills/html.png";
import CSS from "./Images/skills/css.png";
import React from "./Images/skills/react.png";
import javascript from './Images/skills/Java Script.png'
import nodejs from './Images/skills/node.png'
import mongodb from "./Images/skills/mongo.png"
import Polymer from "./Images/skills/polymer.png";
import Angular from "./Images/skills/angular.png";
import gemeni from './Images/skills/gemeni.png'
import huggingface from "./Images/skills/huggingface.png";
import langchain from "./Images/skills/langchain.png"
import llamaindex from "./Images/skills/llamaindex.png"
import ollama from "./Images/skills/ollama.png"
import openai from "./Images/skills/openai.png"
import P5logo from "./p5logo";
import './globals.css'
import Chatbot from './chatbot.jsx'

export default function Dashboard() {

  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
      <div className="main-body">      
        <div id="home">
          <Assistant/>
        </div>

        <div id="intro">
          <div className="container">
            <div className="row jumbotron" style={{ marginTop: "140px" }}>
              <div className="col-md-6 bar">
              <img
                src={sudeep1}
                alt="Myphoto"
                className="img-rounded"
                id="Myphoto" // Ensure aspect ratio
              />
              </div>
              <div className="col-md-5 bar">
                <span style={{ fontSize: "60px", fontFamily: "Papyrus" }}>
                  Hello, I am <span style={{ color: "red" }}>Sudeep Aryan </span>
                  Welcome to my World.
                </span>
                <p style={{ fontSize: "22px", fontFamily: "Lucida Console" }}></p>
              </div>
            </div>
          </div>
        </div>

        <div id="aboutme">
          <div className="container" >
            <div className="row jumbotron" style={{ marginTop: "140px" }}>
              {/* <div className="col-md-6 bar" ><img src="https://i.postimg.cc/K85vVP8R/My-Photo.jpg" className="img-rounded" id="Myphoto" alt="Myphoto" border="0" style={{ height: '400px' }} /></div> */}
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
                <img
                  src={sudeep}
                  className="img-rounded"
                  id="Myphoto"
                  alt="Myphoto"
                  border="0"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="Experience">
        <section className="work-experience container">
              <h2 className="headline">
                  Work Experience
              </h2>
              <div className="jobs">
                  <article>
                      <figure>
                          <div>
                              {/* <img src="./imgs/workplace-1.jpg" alt="Workplace 1 - Soliton Technologies" width="100%" /> */}
                              <img src={soliton} alt="Workplace 1 - Soliton Technologies" width="100%" />
                              <figcaption>
                                  Workplace - Soliton Technologies
                              </figcaption>
                          </div>
                      </figure>
                      <h3 className="work-expreinece-subheading">Project Engineer (Full-Time Employee)</h3>
                      <div>Jun 2023 - Present</div>
                      <p className="work-expreinece-innercontent">Working as Project Engineer in Soliton Technology.Trained on
                      Generative AI ,Machine Learning</p>
                  </article>
                  <article>
                      <figure>
                          <div>
                          <img src={soliton} alt="Workplace 1 - Soliton Technologies" width="100%" />
                              {/* <img src="./imgs/workplace-2.jpg" alt="Workplace 2 - Soliton Technologies" width="100%" /> */}
                              <figcaption>
                                  Workplace - Soliton Technologies
                              </figcaption>
                          </div>
                      </figure>
                      <h3 className="work-expreinece-subheading">Internship</h3>
                      <div>Jun 2022 - May 2023</div>
                      <p className="work-expreinece-innercontent">Worked as Intern in Soliton Technology. Trained on
                      DevOps,Full-Stack Web Developement</p>
                  </article>
                  <article>
                      <figure>
                          <div>
                            <img src={edureka} alt="Workplace 3 - Edureka" width="100%"  />
                              <figcaption>
                                  Workplace - Edureka
                              </figcaption>
                          </div>
                      </figure>
                      <h3 className="work-expreinece-subheading">Full Stack Web Developer (Internship)</h3>
                      <div>Jul 2021 - Feb 2022</div>
                      <p className="work-expreinece-innercontent">Eight months Internship on Full-Stack Web Development with React
                      Front-end and NodeJs Backend.</p>
                  </article>
                  <article>
                      <figure>
                          <div>
                            <img src={vtps} alt="Workplace 3 - VTPS" width="100%" />
                              <figcaption>
                              Dr. Narla Tatarao Thermal Power Station
                              </figcaption>
                          </div>
                      </figure>
                      <h3 className="work-expreinece-subheading">Implant Training</h3>
                      <div>May 2021 - Jul 2021</div>
                      <p className="work-expreinece-innercontent">Industrial Visits and Familiarization in working of thermal
                      power plant.</p>
                  </article>
              </div>
          </section>
        </div>
        
        {/* Skills */}
        <div id="skills">
          <h1 className="headline">Skills</h1>
          <div className="row marquee">
              <div className="track">
                {/* Your skill logos */}
                <img src={gemeni} className="skillimage" title="Gemeni" alt="gemeni" height={100} width={100} border="0"/>
                <img src={huggingface} className="skillimage" title="Huggingface" alt="huggingface" height={100} width={100} border="0"/>
                <img src={langchain} className="skillimage" title="Langchain" alt="langchain" height={100} width={100} border="0"/>
                <img src={llamaindex} className="skillimage" title="llamaindex" alt="llamaindex" height={100} width={100} border="0"/>
                <img src={ollama} className="skillimage" title="ollama" alt="ollama" height={100} width={100} border="0"/>
                <img src={openai} className="skillimage" title="openai" alt="openai" height={100} width={100} border="0"/>
                <img src={ml} className="skillimage" title="Machine Learning" alt="ML" height={100} width={100} border="0"/>
                <img src={python} className="skillimage" alt="python" title="Python" border="0" height={100} width={100} />
                <img src={HTML} className="skillimage" alt="html" border="0" title="HTML" height={100} width={100} />
                <img src={CSS}className="skillimage" alt="css" border="0" title="CSS" height={100} width={100} />
                <img src={React} className="skillimage" alt="react" border="0" title="React" height={100} width={100}/>
                <img src={javascript} className="skillimage" alt="javascript" height={100} width={100} border="0" title="Java Script" />
                <img src={nodejs} className="skillimage" alt="node" border="0" height={100} width={100} title="Node JS" />
                <img src={mongodb} className="skillimage" alt="mongo" border="0" height={100} width={100} title="Mongo DB" />
                <img src={Polymer} className="skillimage" alt="Polymer" height={100} width={100} border="0" title="Polymer" />
                <img src={Angular} className="skillimage" alt="C" height={100} width={100} border="0" title="Angular" />
                <img src={aws} className="skillimage" alt="AWS" height={100} width={100} border="0" title="AWS"/>
                <img src={anisbile} className="skillimage" alt="Ansible" height={100} width={100} border="0" title="Ansible" />
                <img src={Prometheus} className="skillimage" alt="Prometheus" height={100} width={100} border="0" title="Prometheus" />
                <img src={docker} className="skillimage" alt="C" height={100} width={100} border="0" title="Docker" />
                <img src={kubernetes} className="skillimage" alt="C" height={100} width={100} title="Kubernetes" border="0"/>
                <img src={git} className="skillimage" alt="C" height={100} width={100} border="0" title="Git Hub" />
                
              </div>
          </div>
          <div className="skills-content">
              <section id="skills-innercontent" className="skills container">
                  <div className="holder-blue">
                      <div className="left-column">
                          <h3><u>Programming Languages</u></h3>
                          <ul>
                              <li>Python</li>
                              <li>JavaScript</li>
                              <li>C</li>
                              <li>C++</li>
                              <li>C#</li>
                          </ul>
                          <h3><u>Data Engineering</u></h3>
                          <ul>
                              <li>Data Modeling</li>
                              <li>Database Design</li>
                              <li>Data Visualization (Power BI)</li>
                          </ul>
                          <h3><u>Database Management</u></h3>
                          <ul>
                              <li>MongoDB</li>
                              <li>SQL Databases</li>
                          </ul>
                          <h3><u>Web Technologies</u></h3>
                          <ul>
                              <li>React</li>
                              <li>Redux Toolkit</li>
                              <li>VueJS</li>
                              <li>RTKQuery</li>
                              <li>Polymer</li>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>NodeJS</li>
                              <li>.NET</li>
                          </ul>
                      </div>
                      <div className="right-column">
                          <h3><u>Artificial Intelligence</u></h3>
                          <ul>
                              <li>Prompt Engineering</li>
                              <li>Lang Chain</li>
                              <li>Open AI </li>
                              <li>Ollama</li>
                              <li>Hugging Face</li>
                              <li>RAG</li>
                              <li>Llama Index</li>
                              <li>Fine Tuning</li>
                              <li>NLP</li>
                              <li>Deep Learning Architectures</li>
                          </ul>
                          <h3><u>Cloud Platforms</u></h3>
                          <ul>
                              <li>Microsoft Azure (Azure Databricks, ADLS Gen2, Azure Data Factory)</li>
                              <li>AWS (EC2, EKS, S3, etc.)</li>
                          </ul>
                          <h3><u>DevOps Tools</u></h3>
                          <ul>
                              <li>Docker</li>
                              <li>Kubernetes</li>
                              <li>Git</li>
                              <li>Prometheus</li>
                              <li>Jenkins</li>
                              <li>Ansible</li>
                          </ul>
                      </div>
                  </div>
              </section>
          </div>
        </div>
        {/* education */}
        <div id="education">
          <h1 className="headline">Education</h1>
          <div className="container">
            <div className="row work-info">
              <div className="col-md-6 work-left" id="work-left">
                <h4>2019 - 2023</h4>
              </div>
              <div className="col-md-6 work-right" id="work-right">
                <span className="glyphicon glyphicon-education"></span>
                <h5>Bachelor of Technology</h5>
                <p>Institute : Amrita Vishwa Vidyapeetham, Coimbatore</p>
                <p>CGPA : 7.9/10</p>
              </div>
            </div>
            <div className="row work-info">
              <div className="col-md-6 work-left" id="work-left">
                <h4>2017 - 2019</h4>
              </div>
              <div className="col-md-6 work-right" id="work-right">
                <span className="glyphicon glyphicon-education"></span>
                <h5>Higher Secondary Education</h5>
                <p>Institute : Sri Chaitanya Institutions, Vijayawada</p>
                <p>Percentage : 9.44/10</p>
              </div>
            </div>
            <div className="row work-info">
              <div className="col-md-6 work-left" id="work-left">
                <h4>2016 - 2017</h4>
              </div>
              <div className="col-md-6 work-right" id="work-right">
                <span className="glyphicon glyphicon-education"></span>
                <h5>Secondary Education</h5>
                <p>Institute : Sri Chaitanya High School, Vijayawada</p>
                <p>CGPA : 9.3/10</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}

        <div id="projects">
          <h1 className="headline">ProJects</h1>
          {/* slidebar */}
          <div
            id="myCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="500000"
          >
            <ol className="carousel-indicators" style={{ display: "none" }}>
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="0"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
              <li data-target="#myCarousel" data-slide-to="4"></li>
            </ol>

            <div className="carousel-inner projectmain" id="carousel-project-content-text">
              {/* main slide and first slide,dont remove item active */}

              <div className="item" data-interval="false">
                <div>
                  <p className="projectname">
                    S-Cart (A Prototype of E commerce website)
                  </p>
                  {/* <p className='projectobjective'>• </p> */}
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
                  {/* <p className='projectoutcome'>• Outcome: Designed a E-commerce web page.</p> */}

                  <h3>
                    <a
                      href="https://sudeeparyan.github.io/SudeepCart/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here to go to Scart
                    </a>
                  </h3>
                  {/* <img alt="scart" src={scart} /> */}
                  {/* <iframe id="Scart" width="1000px" height="370px"  src="https://sudeeparyan.github.io/SudeepCart/" title="SudeepCart" frameborder="0" allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  */}
                </div>
              </div>

              <div className="item" data-interval="false">
                <div>
                  <p className="projectname">
                    Device Vision (Soliton) (Jan 2023 - Nov 2023)
                  </p>
                  <p className="projectobjective">
                    Customer asked to develop Data analyzing and Visualization
                    tool for Validation Enginners.
                  </p>
                  <p className="projecttools">
                    Front-End: React(Advanced Redux Tool kit-RTKQuery),
                    Back-End: Python, Machine Learning: Regression, MLOPS and
                    DevOps Tools.
                  </p>
                  <p className="projectoutcome">
                    Tool that Visualization and Analyzing data which is given by
                    Validation Engineer so that they can easily train any data and
                    Predict the values which is beyond the range of his collected
                    data.
                  </p>
                  <p>
                    (Due to the confidentiality of company operations, further
                    details cannot be disclosed.)
                  </p>
                </div>
              </div>

              <div className="item" data-interval="false">
                <div>
                  <p className="projectname">
                    Texas Instruments - Battery Management System (Soliton) (Nov
                    2023 - Present)
                  </p>
                  <p className="projectobjective">
                    Working on Agile Methodology : Connecting with customer &
                    getting the requirements, Backlog refinement, Development,
                    Testing & Release.
                  </p>
                  <p className="projecttools">
                    Completed the mandatory Training that should be done before
                    joining the project. Worked on Polymer JS and completed SDLC
                    project
                  </p>
                  <p className="projectoutcome">
                    Currently Developing a graphical user interface (GUI) and
                    working on Hardware Validation and chips testing given by
                    Texas Instruments
                  </p>
                  <p>
                    And also working on Generative AI chat bot assistant.(Due to
                    the confidentiality of company operations, further details
                    cannot be disclosed.)
                  </p>
                </div>
              </div>

              <div className="item active" data-interval="false">
                <div>
                  <p className="projectname">
                    Self-Driving Rover Amrita(Aug 2022-Jun 223){" "}
                  </p>
                  {/* <iframe id="youtubeVideo" width="200px" height="300px" src="https://youtube.com/embed/4L4pG72sfLM" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                  <p className="projectobjective">
                    Implementation of self driving rover using ML(Reinforcement
                    learning) with Raspberry pi,which is able to detect and avoid
                    obstacles in its path and also able to move in the given lane.
                  </p>
                  <p className="projecttools">
                    Raspberry Pi 3b+,NVIDIAs CNN model, Ultra-sonic sensor,Pi
                    camera,Servo motor,DC motors.
                  </p>
                  <div className="projectImg" >
                    <img alt="Rover" src={rover} className="RoverImg" />
                  </div>
                </div>
              </div>

              <div className="item" data-interval="false">
                <div>
                  <p className="projectname">Quadcopter Amrita (May 2019 Jan 2020) </p>
                  <p className="projectobjective">
                    To build a drone with four wings and complete the
                    given task.
                  </p>
                  <p className="projecttools">
                    Arduino UNO,ESC,Bluetooth
                    Module,PDB.
                  </p>
                  <p className="projectoutcome">
                    Quad copter is capable to fly in air and flips,
                    rotates in its same position.
                  </p>
                  <div className="projectImg" >
                  <img alt="drone" src={drone} className="droneImg" />
                  </div>
                  
                </div>
              </div>

              {/* <div className="item" data-interval="false">
                <div>
                  <p className="projectname">Sudoku Solver May </p>
                  <p className="projectobjective">
                    • Objective: 9*9 Sudoku Solver using Back Tracking Algorithm.
                  </p>
                  <p className="projecttools">
                    • Tools or techniques used: HTML, CSS, JavaScript, Back
                    Tracking Algorithm.
                  </p>
                  <p className="projectoutcome">
                    • Outcome:- Solves partial 9*9 sudoku using back tracking
                    algoritham .
                  </p>
                </div>
              </div> */}

              {/* <div className="item" data-interval="false">
                              <div>
                                  <p className="projectname" >Real-Time Fast Fourier Transform (FFT) Analysis Mar ’23 - Apr ’23</p>
                                  <p className='projectobjective'>• Objective: Obtaining amplitude vs frequency graph of any audio signal
                                      using real time Fast Fourier Transform (FFT).</p>
                                  <p className='projecttools'>• Tools or techniques used: Arduino UNO, Sound Sensor, Arduino IDE,
                                      MATLAB.</p>
                                  <iframe className="projectdoc" src="https://drive.google.com/file/d/1WkMPUVcaB30_-6SQAfOxwMXrmQtvmT4f/preview?usp=embed_googleplus" width="300px" height="300px" allowfullscreen></iframe>
                              </div>
                          </div> */}
              {/* <div className="item" data-interval="false">
                              <div>
                                  <p className="projectname" >Self-Driving Rover Jul ’22 - Nov ’22</p>
                                  <iframe id="youtubeVideo" width="200px" height="300px" src="https://youtube.com/embed/4L4pG72sfLM" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                  <p className='projectobjective'>• Objective: Implementation of self driving rover with Raspberry pi,which is
                                      able to detect its path and also able to move in the given lane.</p>
                                  <p className='projecttools'>• Tools or techniques used : Raspberry Pi 3b+,NVIDIA’s CNN model, Ultrasonic
                                      sensor,Pi camera,DC motors.</p>
                              </div>
                          </div> */}
            </div>

            <a
              className="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div id="certifications">
          <h1 className="headline">Certifications</h1>
          <div className="row" style={{ lineHeight: "150px" }}>
            <h3>
              <a
                href="https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Machine Learning
              </a>
            </h3>
            <h3>
              <a
                href="https://coursera.org/share/fcb4031aa63c0af7e4b748f3048b5cc6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Neural Networks and Deep Learning
              </a>
            </h3>
            <h3>
              <a
                href="https://www.edureka.co/certificates/mycertificate/3a96f454fcc70b6179e000e39acb12db"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Stack Web Development
              </a>
            </h3>
            <h3>
              <a
                href="https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data structures and Algorithms
              </a>
            </h3>
            <h3>
              <a
                href="https://coursera.org/share/6df1859e3ed67b74db0b2fcd49b0e245"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Professional Workspace Administrator
              </a>
            </h3>
            <h3>
              <a
                href="https://ieeexplore.ieee.org/document/10404782"
                target="_blank"
                rel="noopener noreferrer"
              >
                International IEEE Conference Paper
              </a>
            </h3>
            {/* 1: \href{https://coursera.org/share/7c18ea3335bf72b4c18c9c3d4f738ce8}{Machine Learning }\\
          2: \href{https://coursera.org/share/fcb4031aa63c0af7e4b748f3048b5cc6}{Neural Networks and Deep Learning}  \\        
          3: \href{https://www.edureka.co/certificates/mycertificate/3a96f454fcc70b6179e000e39acb12db}{Full Stack Web Development}\\
          4: Data structures and Algorithms\\
          5: \href{https://coursera.org/share/6df1859e3ed67b74db0b2fcd49b0e245}{Google Professional Workspace Administrator} */}
          </div>
        </div>
        <div id="contact">
          <h1 className="headline ">Contact</h1>

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
                <div>
                  <p style={{ fontSize: "20px", color: "white" }}>
                    AF-107, R.T.P.P, V.V.Reddy Nagar, Yerraguntla(MDL),
                    Kadapa(district) AndhraPradesh(St), India. PIN CODE : 516312
                  </p>
                  <p>
                    <span style={{ fontSize: "20px", color: "white" }}>
                      Mobile : +91 8309135484
                    </span>
                    &nbsp;&nbsp;&nbsp;
                    <span style={{ fontSize: "20px", color: "white" }}>
                      E-mail :{" "}
                      <a
                        href="sudeeparyang@gmail.com"
                        target="_blank"
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
                <div id="socialnetwork" style={{ marginTop: "-6px" }}>
                  <a href="https://github.com/Sudeeparyan" target="_blank">
                  <img src="https://i.postimg.cc/D0jsHk21/Github.png"
                      height="30px"
                      width="30px"
                      alt="Github"/>
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="contactform" style={{ marginTop: "12px" }}>
                  <form>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Name"
                      required
                    ></input>
                    <input
                      className="email"
                      name="Email"
                      placeholder="Email"
                      required
                    ></input>
                    <input
                      className="phone"
                      name="Phone"
                      placeholder="Phone"
                      required
                    ></input>
                    <textarea
                      className="messages"
                      name="Message"
                      placeholder="Message"
                      required
                    ></textarea>
                    <input type="submit" value="SUBMIT"></input>
                  </form>
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
