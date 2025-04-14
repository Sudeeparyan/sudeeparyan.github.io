import React from 'react';
import './Experience.css';
import edureka from "../Images/experience/edureka.png"
import soliton from "../Images/experience/soliton.jpeg";
import vtps from "../Images/experience/vtps.jpg";

const ExperienceItem = ({ image, caption, title, period, description }) => (
    <article>
      <figure>
        <img src={image} alt={`Workplace - ${caption}`} width="100%" />
        <figcaption>Workplace - {caption}</figcaption>
      </figure>
      <h3 className="work-expreinece-subheading">{title}</h3>
      <div>{period}</div>
      <p className="work-expreinece-innercontent">{description}</p>
    </article>
  );

export default function Experience() {
    return (
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
    )
}