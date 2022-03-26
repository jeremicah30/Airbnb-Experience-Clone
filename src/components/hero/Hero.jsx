import React from "react";
import "./hero.scss";

import heroImage from "../../image/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero--img">
        <img src={heroImage} alt="Pictures" />
      </div>

      <div className="hero--text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
