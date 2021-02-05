import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 text-center text-lg-start align-items-center">
            <span className="text-light">© 2021 Manuel Gaitán 🇨🇷</span>
          </div>
          <div className="col-12 col-lg-6 d-none d-lg-block">
            <ul className="nav justify-content-center align-items-center">
              <li className="nav-item">
                <NavLink
                  className="nav-link nav__link--mg py-0"
                  to="/acerca-de-mi"
                >
                  <span className="icon-user"></span> Acerca de mí
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link nav__link--mg py-0"
                  to="/portafolio"
                >
                  <span className="icon-briefcase"></span> Portafolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav__link--mg py-0" to="/contacto">
                  <span className="icon-mobile2"></span> Contacto
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 text-lg-start col-lg-3 d-none d-lg-block">
            <ul className="nav justify-content-end align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link nav__link--mg nav__link--linkedin py-0"
                  href="https://www.linkedin.com/in/manuelgaitancr/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linked <span className="icon-linkedin"></span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav__link--mg nav__link--facebook py-0"
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
      </div>
    </footer>
  );
};

export default Footer;
