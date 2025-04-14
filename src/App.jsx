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
              onClick={toggleMobileMenu}
            >
              <li><a href="/#home" style={{ color: "black", fontFamily: "Georgia" }}>Home</a></li>
              <li><a href="/#Experience" style={{ color: "black", fontFamily: "Georgia" }}>Experience</a></li>
              <li><a href="/#skills" style={{ color: "black", fontFamily: "Georgia" }}>Skills</a></li>
              <li><a href="/#education" style={{ color: "black", fontFamily: "Georgia" }}>Education</a></li>
              <li><a href="/#projects" style={{ color: "black", fontFamily: "Georgia" }}>Projects</a></li>
              <li><a href="/#certifications" style={{ color: "black", fontFamily: "Georgia" }}>Certifications</a></li>
              <li><a href="/#contact" style={{ color: "black", fontFamily: "Georgia" }}>Contact</a></li>
              <li><a href="/#chatBot" style={{ color: "black", fontFamily: "Georgia" }}>Chat Bot</a></li>
              <li><a href="https://sudeep-knowledge-base.onrender.com/index.html" style={{ color: "black", fontFamily: "Georgia" }}>Knowledge Base</a></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/logo" element={<P5logo />} />
          <Route path='/' element={<Dashboard/>} />          
        </Routes>
      </Router>
    </div>
  );
}