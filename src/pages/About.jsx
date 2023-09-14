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
        </div>
        <div className="aboutInfo">
          <p>
            I'm a creative and dedicated web developer on a continuous journey
            of learning and growth. My passion for web development is fueled by
            an insatiable curiosity, driving me to create innovative digital
            solutions that captivate users.
          </p>
          <p>
            Beyond coding and studing, I immerse myself in music, sports, and
            drawing, channeling my creativity and enhancing my well-rounded
            perspective.
          </p>
        </div>
      </div>
      <div className="aboutSkills">
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
