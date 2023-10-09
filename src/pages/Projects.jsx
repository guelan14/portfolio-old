import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="customTittle w-100 text-center">
        <h2>My Pojects</h2>
      </div>

      <div className="swiperContent  text-center ">
        <h3 className="mt-2">Exploring My Creativity: Featured Projects</h3>
        <Swiper
          //breakpoints
          breakpoints={{
            800: { slidesPerView: 2 },
            1050: { slidesPerView: 3 },
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
          autoplay={true}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div
              className="projectCard"
              href="https://github.com/guelan14/sistema-Canchas-Reservas/tree/main"
              target="__blank"
            >
              <div className="projectTittle">
                <h3>Center court system</h3>
              </div>
              <div className="projectImg">
                <img src="../../images/futbol.jpg" />
              </div>

              <div className="projectTecnologies">
                <div className="projectLenguajes">
                  <h4>Lenguajes:</h4>
                  <ul>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="projectLink">
                  <h4>Links:</h4>
                  <a
                    className="btn btn-outline-light btn-sm"
                    href="https://github.com/guelan14/sistema-Canchas-Reservas"
                    target="__blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <div className="projectTittle">
                <h3>Web Page Hairdressing</h3>
              </div>
              <div className="projectImg">
                <img src="../../images/peluqueriaMarlene.png" />
              </div>
              <div className="projectTecnologies">
                <div className="projectLenguajes">
                  <h4>Lenguajes:</h4>
                  <ul>
                    <li>Python</li>
                    <li>Js</li>
                    <li>css</li>
                    <li>sqlite</li>
                  </ul>
                </div>
                <div className="projectLink">
                  <h4>Links:</h4>
                  <a
                    className="btn btn-outline-light btn-sm"
                    href="https://github.com/guelan14/peluqueria-web-complete"
                    target="__blank"
                  >
                    Github
                  </a>
                  <a
                    className="btn btn-outline-light btn-sm"
                    href="https://www.peluqueriamarlene.com.ar/"
                    target="__blank"
                  >
                    WebSite
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <div className="projectTittle">
                <h3>Hairdressing Internal System</h3>
              </div>
              <div className="projectImg">
                <img src="../../images/peluqueriaC.png" />
              </div>
              <div className="projectTecnologies">
                <div className="projectLenguajes">
                  <h4>Lenguajes:</h4>
                  <ul>
                    <li>Python</li>
                  </ul>
                </div>
                <div className="projectLink">
                  <h4>Links:</h4>
                  <a
                    className="btn btn-outline-light btn-sm"
                    href="https://github.com/guelan14/sistema-peluqueria"
                    target="__blank"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <div className="projectTittle">
                <p>My first Proyect</p>
              </div>
              <div className="projectImg">
                <img src="../../peluqueriaC.png" />
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
          </SwiperSlide>
          ...
        </Swiper>
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
