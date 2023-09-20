import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <section id="about">
      <div className="homeTittle">
        <h2>My Pojects</h2>
      </div>
      <div className="contenido">
        <div className="projectsContainer">
          <div className="projectCard">
            <p>asdasd</p>
          </div>
          <div className="projectCard">
            <p>asdasd</p>
          </div>
          <div className="projectCard">
            <p>asdasd</p>
          </div>
          <div className="projectCard">
            <p>asdasd</p>
          </div>
        </div>
      </div>
      <div className="homeStart text-center">
        <p>Welcome to my portfolio! </p>
        <a href="#about">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
    </section>
  );
};
