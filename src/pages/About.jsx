import React from "react";

export const About = () => {
  return (
    <section id="about">
      <div className="container bg-light p-0 h-100  ">
        <h2 className="pt-4 pb-4 ">About Me</h2>

        <div className="row ">
          <div className="col-4 text-center">
            <img className="aboutPhoto" src="../../images/abouteMePhoto.jpg" />
          </div>
          <div className="col-4 text-left ">
            <p>
              I'm a creative and dedicated web developer on a continuous journey
              of learning and growth. My passion for web development is fueled
              by an insatiable curiosity, driving me to create innovative
              digital solutions that captivate users.
            </p>
            <p>
              Beyond coding, I immerse myself in music, sports, and drawing,
              channeling my creativity and enhancing my well-rounded
              perspective. Welcome to my portfolio, where you'll find a blend of
              technical expertise and artistic flair.
            </p>
          </div>
        </div>
        <div className="row-fluid text-center">
          <p>Tecnologies</p>
          <div>React Django </div>
          <p>programming languages </p>
          <div>• C / C++ • Python • Sql • Html • Css • Microsoft Office</div>
          <p>Curses</p>
          <p>Idioms</p>
          <p>Native Spanish, English B2 and German B1</p>
        </div>
      </div>
    </section>
  );
};
