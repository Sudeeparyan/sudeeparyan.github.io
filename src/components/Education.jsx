import React from 'react';
import './Education.css';

const EducationItem = ({ years, degree, institute, grade }) => (
  <div className="education-item">
    <div className="timeline-year">
      <h4>{years}</h4>
    </div>
    <div className="timeline-icon">
      <span className="education-icon">
        <i className="fas fa-graduation-cap"></i>
      </span>
    </div>
    <div className="timeline-content">
      <h5>{degree}</h5>
      <p className="institute">Institute: {institute}</p>
      <p className="grade">{grade}</p>
    </div>
  </div>
);

export default function Education() {
  return (
    <div id="education">
      <div className="heading-container">
        <h1 className="headline">Education</h1>
      </div>
      <div className="education-timeline">
        <EducationItem 
          years="2019 - 2023"
          degree="Bachelor of Technology"
          institute="Amrita Vishwa Vidyapeetham, Coimbatore"
          grade="CGPA : 7.9/10"
        />
        <EducationItem 
          years="2017 - 2019"
          degree="Higher Secondary Education"
          institute="Sri Chaitanya Institutions, Vijayawada"
          grade="Percentage : 9.44/10"
        />
        <EducationItem 
          years="2016 - 2017"
          degree="Secondary Education"
          institute="Sri Chaitanya High School, Vijayawada"
          grade="CGPA : 9.3/10"
        />
      </div>
    </div>
  );
}