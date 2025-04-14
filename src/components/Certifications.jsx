import React from 'react';

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
      <h1 className="headline">Certifications</h1>
      <div className="row certificates" style={{ lineHeight: "150px" }}>
        {certificates.map((cert, index) => (
          <CertificateLink key={index} href={cert.href} title={cert.title} />
        ))}
      </div>
    </div>
  );
}