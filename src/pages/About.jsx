import React from "react";

export const About = () => {
  return (
    <section id="about">
      <div className="customTittle">
        <h2 className="">About Me</h2>
      </div>
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
        <h2>Skills</h2>
        <div className="skillCards">
          <div className="card">Tenologies</div>
          <div className="card">Programming Lenguajes</div>
          <div className="card">Curses</div>
          <div className="card">Idioms</div>
        </div>
        {/*<ul>
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
          <li>Practical Curse Django: Web Development Backend with Python</li>
          <li>The Complete 2023 Web Development Bootcamp</li>
          <li>Ultimate AWS Certified Cloud Practitioner – 2023</li>
          <li>SQL: Creation of databases</li>
          <li>First steps of frontend development</li>
        </ul>
        <ul>
          <li>Native Spanish</li>
          <li> English B2 and German B1</li>
  </ul>*/}
      </div>
    </section>
  );
};
