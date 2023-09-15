import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <section id="home">
      <div className="homeTittle">
        <p>
          Hello<p>o.</p>
        </p>
      </div>
      <div className="customContainer">
        <div className="homeInfo">
          <h2>I am Migue</h2>
          <p className="text-bold">Frontend / Backend developer</p>
          <p>System engineering student</p>
          <button>Dowload CV</button>
        </div>
        <div className="homePhoto">
          <img
            className="profilePhoto img-fluid"
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
      <div className="homeStart">
        <p className="m-5 text-center">
          Welcome to my portfolio! Lets start whit the journey
        </p>
      </div>
    </section>
  );
};
