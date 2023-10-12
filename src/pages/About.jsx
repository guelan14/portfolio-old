import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal/Modal";

export const About = () => {
  return (
    <section id="about">
      <header className="customTittle">
        <h2 className="">About Me</h2>
      </header>
      <div className="contenido">
        <div className="customContainer">
          <div className="aboutPhoto">
            <img
              className="aboutPhotoImg"
              src="../../images/abouteMePhoto.jpg"
            />
            <div className="imgName">
              <h3>Miguel Angel Neumann </h3>
              <a
                className="btn btn-outline-light"
                href="../../files/NeumannMiguelAngelCV.pdf"
                download
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="aboutInfo ">
            <p>
              I'm a creative and dedicated person. Currently, I'm studying
              Engineering and taking online courses to continuously expand my
              skills and knowledge.
            </p>
            <p>
              Beyond coding and studing, I immerse myself in music, sports, and
              drawing, channeling my creativity and enhancing my well-rounded
              perspective.
            </p>

            <div className="skillCards">
              <div className="skillCard skillCard1">
                <div className="skillTittle">
                  <h2>Programming Lenguages</h2>
                </div>
                <ul>
                  <li>C/C++</li>
                  <li>Python</li>
                  <li>Sql</li>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Js</li>
                  <li>Java</li>
                </ul>
              </div>
              <div className="skillCard skillCard2">
                <div className="skillTittle">
                  <h2>Lenguages</h2>
                </div>
                <ul>
                  <li>English: B2</li>
                  <li> German: B1</li>
                  <li>Spanish: Native</li>
                </ul>
              </div>
              <div className="skillCard skillCard3">
                <p>All courses i've taken</p>
                <Modal />
              </div>
            </div>
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
