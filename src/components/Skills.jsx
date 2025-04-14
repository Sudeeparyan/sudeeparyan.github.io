import React from 'react';
import './Skills.css';

const SkillImage = ({ src, alt, title }) => (
  <img src={src} className="skillimage" title={title} alt={alt} height={100} width={100} border="0" />
);

export default function Skills({ skillImages }) {
  return (
    <div id="skills">
      <h1 className="headline">Skills</h1>
      <div className="row marquee">
        <div className="track">
          {skillImages.map((skill, index) => (
            <SkillImage key={index} src={skill.src} title={skill.title} alt={skill.alt} />
          ))}
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
  );
}