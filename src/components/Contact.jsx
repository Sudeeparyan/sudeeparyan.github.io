import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use EmailJS to send form data
      const result = await emailjs.sendForm(
        'service_91mshsc',
        'template_05n9bz2',
        form.current,
        'ao1YV6klxEiQCbsx8'
      );
      
      if (result.text === 'OK') {
        // Reset form
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          message: ''
        });
        
        // Show success message
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
        
        toast.success("Message sent successfully!");
      }
    } catch (error) {
      console.error('Email error:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      <ToastContainer position="bottom-right" />
      <div className="stars-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}></div>
        ))}
      </div>
      <h1 className="headline">Get In Touch</h1>
      <div className="container">
        <div className="row">
          {/* Left Column - Map and Contact Info */}
          <div className="col-md-6 fade-in-left">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.96565998386!2d78.45949881466605!3d14.714533589730038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb389efd41ca6ad%3A0xd21e447105818ff3!2sAF%20APARTMENT!5e0!3m2!1sen!2sin!4v1660049458028!5m2!1sen!2sin"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="map-frame"
              ></iframe>
            </div>

            {/* Social links and contact info now placed directly below map */}
            <div className="left-contact-container">
              <div id="socialnetwork" className="fade-in-up">
                <a href="https://github.com/Sudeeparyan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                  <img src="https://i.postimg.cc/D0jsHk21/Github.png" alt="Github"/>
                </a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"/>
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter"/>
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram"/>
                </a>
              </div>
              
              <div className="contact-info fade-in-up">                  
                <p>
                  <span className="contact-label">Mobile: </span>
                  <a href="tel:+918309135484" className="contact-link">+91 8309135484</a>
                </p>
                <p>
                  <span className="contact-label">E-mail: </span>
                  <a href="mailto:sudeeparyang@gmail.com" className="contact-link">sudeeparyang@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="col-md-6 fade-in-right">                
            <div className="contactform">
              
              <form ref={form} onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="user_name" 
                  placeholder="Name" 
                  required
                  value={formData.user_name}
                  onChange={handleChange}
                  className="input-animate"
                />
                <input 
                  type="email" 
                  className="email input-animate" 
                  name="user_email" 
                  placeholder="Email" 
                  required
                  value={formData.user_email}
                  onChange={handleChange}
                />
                <input 
                  type="tel" 
                  className="phone input-animate" 
                  name="user_phone" 
                  placeholder="Phone" 
                  required
                  value={formData.user_phone}
                  onChange={handleChange}
                />
                <textarea 
                  className="message input-animate" 
                  name="message" 
                  placeholder="Message" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  <span className="btn-text">{isSubmitting ? "SENDING..." : "SUBMIT"}</span>
                  <span className="btn-icon">→</span>
                </button>
              </form>
              {success && (
                <div className="form-success active">
                  <div className="success-icon">✓</div>
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}