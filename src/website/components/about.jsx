import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-area pt-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div
              className="about-title text-center wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <h3 className="title">
                <span>Invest In India's </span> Leading Companies With Us.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="about-image mt-60 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <img
                src="assets/images/undraw_Investing_re_bov7.svg"
                alt="about"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="about-content pt-45">
              <p
                className="text wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                Invest in India's growing IT, Pharma, Auto, Metal, Banking, Real
                Estate, Media, Energy and many more sectors with us.
              </p>

              <div className="about-counter pt-60">
                <div className="row">
                  <div className="col-sm-4">
                    <div
                      className="
                        single-counter
                        counter-color-1
                        mt-30
                        d-flex
                        wow
                        fadeInUp
                      "
                      data-wow-duration="1s"
                      data-wow-delay="0.3s"
                    >
                      <div className="counter-shape">
                        <span className="shape-1"></span>
                        <span className="shape-2"></span>
                      </div>
                      <div className="counter-content media-body">
                        <span className="counter-count">
                          <span className="counter">350</span>
                        </span>
                        <p className="text">Clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="
                        single-counter
                        counter-color-2
                        mt-30
                        d-flex
                        wow
                        fadeInUp
                      "
                      data-wow-duration="1s"
                      data-wow-delay="0.6s"
                    >
                      <div className="counter-shape">
                        <span className="shape-1"></span>
                        <span className="shape-2"></span>
                      </div>
                      <div className="counter-content media-body">
                        <span className="counter-count">
                          <span className="counter">99</span>%
                        </span>
                        <p className="text">Satisfaction</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="
                        single-counter
                        counter-color-3
                        mt-30
                        d-flex
                        wow
                        fadeInUp
                      "
                      data-wow-duration="1s"
                      data-wow-delay="0.9s"
                    >
                      <div className="counter-shape">
                        <span className="shape-1"></span>
                        <span className="shape-2"></span>
                      </div>
                      <div className="counter-content media-body">
                        <span className="counter-count">
                          <span className="counter">870</span>
                        </span>
                        <p className="text">Projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
