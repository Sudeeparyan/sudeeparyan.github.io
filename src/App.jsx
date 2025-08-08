"use client";
import { useState } from "react";
import P5logo from "./p5logo";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import imgtest from './Images/logo/name.jpg';
import Dashboard from "./dashboard";
import './App.css';

export default function Home() {
  const [ messageInput, setMessageInput ] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'How can i help you?' }]);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
    // Toggle body class to prevent scrolling when menu is open
    document.body.classList.toggle('menu-open', !isMenuActive);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages })
    }).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }

  return (
    <div>
      <Router>
        {/* Backdrop for menu overlay */}
        <div 
          className={`menu-backdrop ${isMenuActive ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
        />
        
        <nav className="navbar navbar-fixed-top" style={{ backgroundColor: "rgb(0, 153, 153)" }}>
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" style={{ padding: '0px 5px' }}>
                <NavLink to="/logo">
                  <img
                    src={imgtest}
                    alt="Myphoto"
                    id="Myphoto"
                    className="logo"
                    style={{ height: '50px', width:'120px' }} 
                  />
                </NavLink>
              </a>
              <button 
                className={`mobile-menu-toggle ${isMenuActive ? 'active' : ''}`} 
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation"
              >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </button>
            </div>
            <ul  
              id="menu" 
              className={`nav navbar-nav navbar-right ${isMenuActive ? 'active' : ''}`}
            >
              <li><a href="/#home" style={{ color: "black", fontFamily: "Georgia" }} onClick={toggleMobileMenu}>Home</a></li>
              <li><a href="/#Experience" style={{ color: "black", fontFamily: "Georgia" }} onClick={toggleMobileMenu}>Experience</a></li>
              <li><a href="/#skills" style={{ color: "black", fontFamily: "Georgia" }} onClick={toggleMobileMenu}>Skills</a></li>
              <li><a href="/#projects" style={{ color: "black", fontFamily: "Georgia" }} onClick={toggleMobileMenu}>Projects</a></li>
              <li><a href="/#certifications" style={{ color: "black", fontFamily: "Georgia" }} onClick={toggleMobileMenu}>Achievements</a></li>
              <li><a href="/#education" style={{ color: "black", fontFamily: "Georgia" }} onClick={toggleMobileMenu}>Education</a></li>
              <li><a href="/#chatBot" style={{ color: "black", fontFamily: "Georgia" }} onClick={toggleMobileMenu}>Chat Bot</a></li>
              <li><a href="/#contact" style={{ color: "black", fontFamily: "Georgia" }} onClick={toggleMobileMenu}>Contact</a></li>
              {/* <li><a href="https://sudeep-knowledge-base.onrender.com/index.html" style={{ color: "black", fontFamily: "Georgia" }}>Knowledge Base</a></li> */}
            </ul>
          </div>
        </nav>
        
        <div className="content-wrapper">
          <Routes>
            <Route path="/logo" element={<P5logo />} />
            <Route path='/' element={<Dashboard/>} />          
          </Routes>
        </div>
      </Router>
    </div>
  );
}