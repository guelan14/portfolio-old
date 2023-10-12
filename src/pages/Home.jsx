import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <section id="home">
      <header className="homeTittle">
        <p>
          Hello<span>o.</span>
        </p>
      </header>
      <div className="contenido">
        <div className="customContainer">
          <div className="homeInfo">
            <h1>I am Migue</h1>
            <p className="text-bold">Frontend / Backend developer</p>
            <p>System engineering student</p>
          </div>
          <div className="homePhoto">
            <img
              className="profilePhoto "
              src="../../images/profilePhoto.jpg"
            />
            <div className="socialBox">
              <div className="socialIcons">
                <div className="icon">
                  <a href="https://github.com/guelan14">
                    <FontAwesomeIcon icon={faSquareGithub} />
                  </a>
                </div>
                <div className="icon">
                  <a href="https://www.linkedin.com/in/miguel-angel-neumann-a45639229">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
                <div className="icon">
                  <a href="https://instagram.com/migue_neumann?igshid=YTQwZjQ0NmI0OA==">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
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
