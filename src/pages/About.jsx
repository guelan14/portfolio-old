import React from "react";

export const About = () => {
  return (
    <section id="about">
      <div className="container  p-0 h-100  ">
        <h2 className="pt-4 pb-4 ">About Me</h2>

        <div className="row ">
          <div className="col-6 text-end">
            <img
              className="aboutPhoto img-fluid"
              src="../../images/abouteMePhoto.jpg"
            />
          </div>
          <div className="col-4 text-left ">
            <p>
              I'm a creative and dedicated web developer on a continuous journey
              of learning and growth. My passion for web development is fueled
              by an insatiable curiosity, driving me to create innovative
              digital solutions that captivate users.
            </p>
            <p>
              Beyond coding and studing, I immerse myself in music, sports, and
              drawing, channeling my creativity and enhancing my well-rounded
              perspective.
            </p>
          </div>
        </div>
        <div className="container text-center text-light">
          <p className="pt-5 p-b3">SKILLS:</p>
          <div className="row-fluid text-start d-flex  ">
            <ul>
              <li>Tecnologies:</li>
              <li>React Django</li>
            </ul>
            <ul>
              <li>Programming Lenguajes</li>
              <li>C / C++</li>
              <li>Python</li>
              <li>Sql</li>
              <li>Html</li>
              <li>Css</li>
              <li>Microsoft Office</li>
            </ul>
            <ul>
              <li>Curses:</li>
              <li>
                Practical Curse Django: Web Development Backend with Python
              </li>
              <li>The Complete 2023 Web Development Bootcamp</li>
              <li>Ultimate AWS Certified Cloud Practitioner – 2023</li>
              <li>SQL: Creation of databases</li>
              <li>First steps of frontend development</li>
            </ul>
            <ul>
              <li>Native Spanish</li>
              <li> English B2 and German B1</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
