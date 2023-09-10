import React from "react";

export const Home = () => {
  return (
    <section id="home" className="m-0">
      <div className="verticalOrange">Migue</div>
      <div className="container">
        <p className="hello pt-4">
          Hello<p className="hello2">o.</p>
        </p>
        <div className="row rowMarginTop">
          <div className="col-4">
            <h2>I am Migue</h2>
            <p>Frontend / Backend developer</p>
          </div>
          <div className="col-7 text-center">
            <img className="profilePhoto" src="../../images/profilePhoto.jpg" />

            <div className="row text-center mt-4">
              <div className="col">
                <a
                  href="../../files/NeumannMiguelAngelCV.pdf"
                  class="myButton"
                  download
                >
                  Download CV
                </a>
              </div>
              <div className="col">
                <a
                  href="../../files/NeumannMiguelAngelCV.pdf"
                  target="blank"
                  class="myButton"
                >
                  View CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
