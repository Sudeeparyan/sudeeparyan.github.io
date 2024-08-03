"use client";
import { useState } from "react";
import P5logo from "./p5logo";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import imgtest from './Images/logo/name.jpg'
import Dashboard from "./dashboard";

export default function Home() {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([
		{
			role: 'assistant',
			content: 'How can i help you?'
		}
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages })
      }
    ).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div>
      <Router>
        <Routes>
            <Route path="/logo" element={<P5logo />} />
            <Route path='/' element={<Dashboard/>} />          
        </Routes>
        <nav className="navbar navbar-fixed-top" style={{ backgroundColor: "rgb(0, 153, 153)" }}>
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" >
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
              <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
                  </svg>
              </a>
            </div>
              <ul id="menu" className={`nav navbar-nav navbar-right ${isMenuActive ? 'active' : ''}`}>
                  <li><NavLink to="/#home" style={{ color: "black", fontFamily: "Georgia" }}>Home</NavLink></li>
                  <li><a href="/#home" style={{ color: "black", fontFamily: "Georgia" }}>Baby Bot</a></li>
                  <li><a href="/#Experience" style={{ color: "black", fontFamily: "Georgia" }}>Experience</a></li>
                  <li><a href="/#skills" style={{ color: "black", fontFamily: "Georgia" }}>Skills</a></li>
                  <li><a href="/#education" style={{ color: "black", fontFamily: "Georgia" }}>Education</a></li>
                  <li><a href="/#projects" style={{ color: "black", fontFamily: "Georgia" }}>Projects</a></li>
                  <li><a href="/#certifications" style={{ color: "black", fontFamily: "Georgia" }}>Certifications</a></li>
                  <li><a href="/#contact" style={{ color: "black", fontFamily: "Georgia" }}>Contact</a></li>
                  <li><a href="/#chatBot" style={{ color: "black", fontFamily: "Georgia" }}>Chat Bot</a></li>
              </ul>
          </div>
        </nav>
    </Router>
    </div>

    
    
  );
}
