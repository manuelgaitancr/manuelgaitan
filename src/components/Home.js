import React from "react";
import "./styles/Home.css";
import Hero from "./Hero";
import Card from "./Card";
import Head from "./Head";

const Home = () => {
  return (
    <React.Fragment>
      <Head
        title="Manuel Gaitán | Desarrollador Web"
        description="Hola, soy Manuel Gaitán, soy Desarrollador Web. Yo diseño y codifico cosas maravillosamente simples, y me encanta lo que hago."
        ogfImage="../assets/images/hero-meta.jpg"
        ogtImage="../assets/images/hero-meta.jpg"
      />
      <Hero
        href="/portafolio"
        title="Manuel Gaitán"
        description="Desarrollador Web"
        button="¡Ver más!"
      />
      <section className="last__projects my-5 p-3" id="last__projects">
        <div className="container last__projects--container py-5">
          <div className="row">
            <div className="col">
              <h2 className="h3 last__projects--title text-center text-white mb-3">
                Algunos de mis últimos proyectos
              </h2>
            </div>
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
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
