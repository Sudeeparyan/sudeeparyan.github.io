import React from 'react';

const ProjectItem = ({ isActive, name, objective, tools, outcome, image, children }) => (
  <div className={`item ${isActive ? 'active' : ''}`} data-interval="false">
    <div>
      <p className="projectname">{name}</p>
      {objective && <p className="projectobjective">{objective}</p>}
      {tools && <p className="projecttools">{tools}</p>}
      {outcome && <p className="projectoutcome">{outcome}</p>}
      {image && (
        <div className="projectImg">
          <img alt={name} src={image} className={`${name.includes('Rover') ? 'RoverImg' : 'droneImg'}`} />
        </div>
      )}
      {children}
    </div>
  </div>
);

export default function Projects({ projects }) {
  return (
    <div id="projects">
      <h1 className="headline">Projects</h1>
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="500000"
      >
        <ol className="carousel-indicators" style={{ display: "none" }}>
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="0"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
        </ol>

        <div className="carousel-inner projectmain" id="carousel-project-content-text">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>

        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}