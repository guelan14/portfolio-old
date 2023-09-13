import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  return (
    <section id="home" className="m-0">
      <div className="container h-100">
        <p className="hello pt-4 ">
          Hello<p className="hello2">o.</p>
        </p>
        <div className="row rowMarginTop">
          <div className="col-4 text-start">
            <h2>I am Migue</h2>
            <p>Frontend / Backend developer</p>
          </div>
          <div className="col-8  photoContainer text-center">
            <img
              className="profilePhoto img-fluid"
              src="../../images/profilePhoto.jpg"
            />
            <div className="justify-content-evenly d-flex mt-4 socials-media-icons ps-3 pe-3">
              <a href="../../files/NeumannMiguelAngelCV.pdf" class="myButton">
                Curriculum Vitae
              </a>
              <a href="https://github.com/guelan14">
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
              <a href="https://instagram.com/migue_neumann?igshid=YTQwZjQ0NmI0OA==">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/miguel-angel-neumann-a45639229">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <p className="m-5 text-center">
          Welcome to my portfolio! Lets start whit the journey
        </p>
      </div>
    </section>
  );
};
