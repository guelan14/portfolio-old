import React from "react";

export const Home = () => {
  return (
    <section id="home">
      <div className="homeTittle">
        <p>
          Hello<p>o.</p>
        </p>
      </div>
      <div className="customContainer">
        <div className="homeInfo">
          <h2>I am Migue</h2>
          <p className="text-bold">Frontend / Backend developer</p>
          <p>System engineering student</p>
        </div>
        <div className="homePhoto">
          <img
            className="profilePhoto img-fluid"
            src="../../images/profilePhoto.jpg"
          />
        </div>
      </div>
      <div className="homeStart">
        <p className="m-5 text-center">
          Welcome to my portfolio! Lets start whit the journey
        </p>
      </div>
    </section>
  );
};
