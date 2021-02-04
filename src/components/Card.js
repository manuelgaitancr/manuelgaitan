import React from "react";
import "./styles/Card.css";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.src} className="card-img-top" alt="Placeholder" />
      <div className="card-body">
        <h3 className="h5 card-title text-white">{props.title}</h3>
      </div>
    </div>
  );
};

export default Card;
