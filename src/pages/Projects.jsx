import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="custonContainer text-center">
        <h2>Projects</h2>
        <div className="justify-content-center"></div>
        <div className="hola bg-light">asdadd</div>
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
