import React from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <section id="contact" className=" pb-5">
      <div className="content">
        <h2>contact me</h2>
        <p>
          ASDASDASDPIKASDIO KASOIDJ ASOIUDJ ASOIDJ ASOIJDASOIJD OAISJD IOASDJ
          AOISJD OSAIDJ OIAS
        </p>
      </div>
      <div className="customContainer">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <a href="https://wa.me/+543743567768/" target="blank">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+543743567768</p>
            </div>
          </div>

          <div className="box">
            <div className="icon">
              <a href="https://github.com/guelan14">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <div className="text">
              <h3>Adress</h3>
              <p>miguelangelneumann@gmail.com</p>
            </div>
          </div>
          <div className="socialBox">
            <div className="text ">
              <h3>Socials Media</h3>
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
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name="" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea type="text" name="" required />
              <span>Type your Message </span>
            </div>
            <div className="inputBox">
              <input type="submit" value="send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
