import React from "react";
import "./styles/Hero.css";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero__overlay">
        <div className="text-center">
          <h1 className="display-4 hero__text--shadow mb-3">{props.title}</h1>
          <h2 className="h3 hero__text--shadow mb-3">{props.description}</h2>
          <a href={props.href} className="btn btn__mg btn-lg">
            {props.button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
