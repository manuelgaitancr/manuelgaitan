import React from "react";
import "./styles/About.css";
import Image from "../assets/images/about.jpg";
import Head from "./Head";

const About = () => {
  return (
    <React.Fragment>
      <Head
        title="Manuel Gaitán | Acerca de mí"
        description="Hola, soy Manuel Gaitán, 👨🏽‍💻 Técnico en Desarrollo Web Front End. Soy de Punatrenas, Costa Rica."
      />
      <section className="about my-lg-5 p-3">
        <div className="container about__container py-5">
          <div className="row">
            <div className="col-12 col-lg-6 text-white">
              <h1 className="about__title text__bright--pink mb-3">
                Acerca de mí
              </h1>
              <p className="lead about__p">
                Hola, soy <strong className="fw-bold">Manuel Gaitán</strong>, 👨🏽‍💻
                Técnico en Desarrollo Web Front End. Soy de Punatrenas, Costa
                Rica.
              </p>
              <p className="lead about__p">
                Puedes encontrarme en LinkedIn y en Facebook como{" "}
                <strong className="fw-bold">@manuelgaitancr</strong>.
              </p>
              <p className="lead about__p">
                Acerca de <strong className="fw-bold">manuelgaitan.com</strong>,
                nace en Febrero de 2021, con la finalidad de compartir mis
                proyectos, mostrar lo que hago e ir mejorando día con día mi
                marca personal 🚀.
              </p>
            </div>
            <div className="col col-lg-6">
              <img src={Image} className="about__image img-fluid" alt="Foto" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
