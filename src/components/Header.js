import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import Brand from "../assets/images/mg-brand.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg__mg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={Brand}
              alt="Logo Manuel Gaitán"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Manuel Gaitán
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/inicio"
                >
                  <span className="icon-home3"></span> Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/acerca-de-mi">
                  <span className="icon-user"></span> Acerca de mí
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portafolio">
                  <span className="icon-briefcase"></span> Portafolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  <span className="icon-mobile2"></span> Contacto
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/manuelgaitancr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linked <span className="icon-linkedin"></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/manuelgaitancr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="facebook">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
