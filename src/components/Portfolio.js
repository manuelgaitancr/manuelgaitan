import React from "react";
import "./styles/Portfolio.css";
import Card from "./Card";

const Portfolio = () => {
  return (
    <section className="portfolio my-lg-5 p-3">
      <div className="container portfolio__container py-5">
        <div className="row">
          <h1 className="portfolio__title text__bright--pink mb-3">
            Portafolio
          </h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center my-5">
            <Card
              src="https://via.placeholder.com/300X200"
              title="Card title"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center my-5">
            <Card
              src="https://via.placeholder.com/300X200"
              title="Card title"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center my-5">
            <Card
              src="https://via.placeholder.com/300X200"
              title="Card title"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center my-5">
            <Card
              src="https://via.placeholder.com/300X200"
              title="Card title"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center my-5">
            <Card
              src="https://via.placeholder.com/300X200"
              title="Card title"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center my-5">
            <Card
              src="https://via.placeholder.com/300X200"
              title="Card title"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
