import React from 'react';

export default function Banner() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-10">
            <div className="hero-content wow fadeInUp">
              <h1>
                Your Financial Goal Starts Here At <span>SMART FUNDS. </span>
              </h1>
              <p>UNLOCK YOUR FREEDOM.</p>

              <a href="#about" className="main-btn btn-hover">
                Read more
              </a>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 offset-xxl-1">
            <div className="hero-image text-center text-lg-start wow fadeInRightBig">
              <img src="assets/images/about-image.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
