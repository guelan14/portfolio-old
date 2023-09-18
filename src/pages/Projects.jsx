import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="customTittle">
        <h2 className="">Projects</h2>
      </div>
      <div className="contenido">
        <div className="customContainer text-center">
          <p>asdsad</p>
        </div>
      </div>
      <div className="homeStart text-center">
        <p>Welcome to my portfolio! </p>
        <a href="#contact">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
    </section>
  );
};
