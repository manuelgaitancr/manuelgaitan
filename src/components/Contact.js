import React from "react";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact my-lg-5 p-3">
      <div className="container contact__container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="contact__title text__bright--pink mb-3">Contacto</h1>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center mb-3">
                <a
                  href="https://api.whatsapp.com/send?phone=50688810274"
                  className="contact__link m-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact__icon icon-whatsapp"></span>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center mb-3">
                <a
                  href="https://t.me/manuelgaitancr"
                  className="contact__link m-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact__icon icon-telegram"></span>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center mb-3">
                <a
                  href="https://www.linkedin.com/in/manuelgaitancr/"
                  className="contact__link m-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact__icon icon-linkedin2"></span>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center align-items-center mb-3">
                <a
                  href="https://www.facebook.com/manuelgaitancr"
                  className="contact__link m-3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact__icon icon-facebook"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
