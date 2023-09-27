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
          <div className="skillCards">
            <div className="skillCard skillCard1">
              <div className="skillTittle">
                <h2>Programming Lenguajes</h2>
              </div>
              <div>
                <ul>
                  <li>C/C++</li>
                  <li>Python</li>
                  <li>Sql</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Html</li>
                  <li>Css</li>
                  <li>Js</li>
                </ul>
              </div>
            </div>
            <div className="skillCard skillCard2">
              <div className="skillTittle">
                <h2>Lenguajes</h2>
              </div>
              <table>
                <tr>
                  <td>English: B2</td>
                  <td>German: B1</td>
                </tr>
                <tr>
                  <td colspan="3">Spanish: Native</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="skillCard skillCard3">
            <p>All courses i've taken</p>
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
