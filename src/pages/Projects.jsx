import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="customTittle">
        <h2>My Pojects</h2>
      </div>
      <div className="contenido">
        <div className="projectsContainer">
          <div className="projectCard">
            <div className="projectTittle">
              <p>Hairdressing System</p>
            </div>
            <div className="projectImg">
              <img src="../../public/images/peluqueriaC.png" />
            </div>
            <div className="projectTecnologies ">
              <div className="projectLenguaje">
                <p>C</p>
              </div>
              <div className="projectLink ">
                <p>Links:</p>
                <a
                  href="https://github.com/guelan14/sistema-peluqueria"
                  target="__blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div
            className="projectCard"
            href="https://github.com/guelan14/sistema-Canchas-Reservas/tree/main"
            target="__blank"
          >
            <div className="projectTittle">
              <p>Center court system</p>
            </div>
            <div className="projectImg">
              <img src="../../public/images/futbol.jpg" />
            </div>
            <div className="projectTecnologies">
              <div className="projectLenguaje">
                <p>Python</p>
              </div>
              <div className="projectLink">
                <p>Links:</p>
                <a
                  href="https://github.com/guelan14/sistema-peluqueria"
                  target="__blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectTittle">
              <p>My first Proyect</p>
            </div>
            <div className="projectImg">
              <img src="../../public/peluqueriaC.png" />
            </div>
            <div className="projectTecnologies">
              <div className="projectLenguaje">
                <p>REACT</p>
              </div>
              <div className="projectLink">
                <p>Links:</p>
                <a
                  href="https://github.com/guelan14/sistema-peluqueria"
                  target="__blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectTittle">
              <p>My first Proyect</p>
            </div>
            <div className="projectImg">
              <img src="../../public/peluqueriaC.png" />
            </div>
            <div className="projectTecnologies">
              <div className="projectLenguaje">
                <p>REACT</p>
              </div>
              <div className="projectLink">
                <p>Links:</p>
                <a
                  href="https://github.com/guelan14/sistema-peluqueria"
                  target="__blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectTittle">
              <p>My first Proyect</p>
            </div>
            <div className="projectImg">
              <img src="../../public/peluqueriaC.png" />
            </div>
            <div className="projectTecnologies">
              <div className="projectLenguaje">
                <p>REACT</p>
              </div>
              <div className="projectLink">
                <p>Links:</p>
                <a
                  href="https://github.com/guelan14/sistema-peluqueria"
                  target="__blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <div className="projectTittle">
              <p>My first Proyect</p>
            </div>
            <div className="projectImg">
              <img src="../../public/peluqueriaC.png" />
            </div>
            <div className="projectTecnologies">
              <div className="projectLenguaje">
                <p>REACT</p>
              </div>
              <div className="projectLink">
                <p>Links:</p>
                <a
                  href="https://github.com/guelan14/sistema-peluqueria"
                  target="__blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeStart text-center">
        <p>About</p>
        <a href="#about">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
    </section>
  );
};
