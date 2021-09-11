import React from 'react';
import history from '../../history';

export default function Features() {
  return (
    <>
      <section id="feature-1" className="feature-section-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-last order-lg-first wow fadeInLeftBig">
              <div className="feature-image text-center text-lg-start">
                <img
                  src="assets/images/undraw_All_the_data_re_hh4w (1).svg"
                  alt="Feature"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-10 wow fadeInRightBig">
              <div className="feature-content-wrapper">
                <div className="section-title">
                  <h2 className="mb-20">
                    The Most Skilled & Experienced Investors In India
                  </h2>
                  <p className="mb-30">
                    You can Invest your funds in the most trusted company run by
                    professional investors, who can manage your funds by
                    mastering the market conditions and invest your funds in a
                    diversified portfolio including growing companies that can
                    generate highly profitable returns on your investment
                  </p>
                  <a
                    href="#"
                    onClick={() => history.push('/coming-soon')}
                    className="main-btn btn-hover border-btn"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature-2" className="feature-section-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="feature-content-wrapper">
                <div className="section-title wow fadeInLeftBig">
                  <h2 className="mb-30">
                    Risk Free Investment
                    <br className="d-none d-sm-block" />
                    Plans With More benefits
                  </h2>
                  <p className="mb-30">
                    We are introducing you the most unique thing in the system.
                    It is we are providing risk less investment plans that
                    investors are not going to face any sort of loss in their
                    investment and we can assure about their funds are in safe
                    hands. Investors can enjoy bonuses, credit scores, referral
                    opportunities and many more benefits as long as they are a
                    part of SMART FUNDS
                  </p>
                  <a
                    href="#"
                    onClick={() => history.push('/coming-soon')}
                    className="main-btn btn-hover border-btn"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRightBig">
              <div className="feature-image text-lg-end">
                <img
                  src="assets/images/Graphic Chart_Monochromatic.svg"
                  alt="Feature-Image2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
