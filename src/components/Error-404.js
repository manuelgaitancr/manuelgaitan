import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/Error-404.css";

const Error404 = () => {
  let location = useLocation();

  return (
    <section className="error my-5 py-5">
      <div className="container error__container">
        <div className="row">
          <div className="col-12 p-3 d-flex justify-content-center align-items-center">
            <div className="text-center error__container--text">
              <h1 className="display-3 error__title text-white">
                ¡Error 404 página no encontrada!
              </h1>
              <p className="display-6">
                <code>{location.pathname}</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
