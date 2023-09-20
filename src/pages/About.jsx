import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal/Modal";

export const About = () => {
  return (
    <section id="about">
      <div className="customTittle">
        <h2 className="">About Me</h2>
      </div>
      <div className="contenido">
        <div className="customContainer">
          <div className="aboutPhoto">
            <img
              className="img-fluid aboutPhotoImg"
              src="../../images/abouteMePhoto.jpg"
            />
            <div className="imgName">
              <h3>Miguel Angel Neumann </h3>
            </div>
          </div>
          <div className="aboutInfo">
            <p>
              I'm a creative and dedicated person. Now, Im studying Engeneering,
              and using all this knowladge to
            </p>
            <p>
              Beyond coding and studing, I immerse myself in music, sports, and
              drawing, channeling my creativity and enhancing my well-rounded
              perspective.
            </p>
          </div>
        </div>
        <div className="aboutSkills">
          <h2>Skills</h2>
          <div className="skillCards">
            <div className="skillCard skillCard1">
              <h2>Programming Lenguajes</h2>
              <ul>
                <li>C / C++</li>
                <li>Python</li>
                <li>Sql</li>
                <li>Html</li>
                <li>Css</li>
                <li>Microsoft Office</li>
              </ul>
            </div>

            <div className="skillCard skillCard2">
              <h2>Lengauges</h2>
              <ul>
                <li>Native Spanish</li>
                <li> English B2 </li>
                <li>German B1</li>
              </ul>
            </div>
            <div className="skillCard">
              <p>asdasd</p>
            </div>
            <Modal />
          </div>
        </div>
      </div>
      <div className="homeStart text-center">
        <p>Projects</p>
        <a href="#projects">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
    </section>
  );
};
