import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="customTittle w-100 text-center">
        <h2>My Pojects</h2>
      </div>

      <div className="swiperContent mt-5 text-center ">
        <h3>Exploring My Creativity: Featured Projects</h3>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
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
                <p>Center court system</p>
              </div>
              <div className="projectImg">
                <img src="../../images/futbol.jpg" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="projectCard">
              <div className="projectTittle">
                <p>Web Page Hairdressing</p>
              </div>
              <div className="projectImg">
                <img src="../../images/peluqueriaMarlene.png" />
              </div>
              <div className="projectTecnologies">
                <div className="projectLenguaje">
                  <p>Django</p>
                </div>
                <div className="projectLink">
                  <p>Links:</p>
                  <a
                    href="https://github.com/guelan14/peluqueria-web-complete"
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
                <p>Hairdressing Internal System</p>
              </div>
              <div className="projectImg">
                <img src="../../images/peluqueriaC.png" />
              </div>
              <div className="projectTecnologies">
                <div className="projectLenguaje">
                  <p>C</p>
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
