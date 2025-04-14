import React from 'react';
import './Education.css';

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

export default function Education() {
  return (
    <div id="education">
      <h1 className="headline">Education</h1>
      <div className="container">
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