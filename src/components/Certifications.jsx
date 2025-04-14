import React from 'react';
import './Certifications.css';

const CertificateLink = ({ href, title }) => (
  <h3>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  </h3>
);

export default function Certifications({ certificates }) {
  return (
    <div id="certifications">
      <div className="heading-container">
        <h1 className="headline">Certifications</h1>
      </div>
      <div className="certificates">
        {certificates.map((cert, index) => (
          <CertificateLink key={index} href={cert.href} title={cert.title} />
        ))}
      </div>
    </div>
  );
}