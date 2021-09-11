import React from 'react';
import history from '../../history';

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">
            Pricing
          </h2>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-xs-12 wow fadeInLeft"
            data-wow-delay="1.2s"
          >
            <div className="table">
              <div className="icon-box">
                <i className="lni lni-package"></i>
              </div>
              <div className="pricing-header">
                <p className="price-value">
                  ₹5000-₹9999
                </p>
              </div>
              <div className="title">
                <h3>Pro</h3>
              </div>
              <ul className="description">
                <li>5%-8% ROI Monthly</li>
                <li>70%-130% CAGR</li>
                <li>7:3 Profit Sharing</li>
                <li>Referral Opportunities</li>
                <li>Life Time Investment Plan</li>
                <li>Easy Withdrawal After One Month</li>
              </ul>
              <a
                href="#"
                onClick={() => history.push('/coming-soon')}
                className="main-btn btn-hover border-btn"
              >
                Purchase Now
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12 active">
            <div
              className="table wow fadeInUp"
              id="active-tb"
              data-wow-delay="1.2s"
            >
              <div className="icon-box">
                <i className="lni lni-drop"></i>
              </div>
              <div className="pricing-header">
                <p className="price-value">
                  ₹10000-₹24999
                </p>
              </div>
              <div className="title">
                <h3>Plus</h3>
              </div>
              <ul className="description">
                <li>5%-8% ROI Monthly</li>
                <li>70%-130% CAGR</li>
                <li>8:2 Profit Sharing</li>
                <li>Referral Opportunities + Credit Scores</li>
                <li>Life Time Investment Plan</li>
                <li>Easy Withdrawal After One Month</li>
              </ul>
              <a
                href="#"
                onClick={() => history.push('/coming-soon')}
                className="main-btn btn-hover border-btn"
              >
                Purchase Now
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="table wow fadeInRight" data-wow-delay="1.2s">
              <div className="icon-box">
                <i className="lni lni-star"></i>
              </div>
              <div className="pricing-header">
                <p className="price-value">
                  ₹25000+
                </p>
              </div>
              <div className="title">
                <h3>Premium</h3>
              </div>
              <ul className="description">
              <li>5%-8% ROI Monthly</li>
                <li>70%-130% CAGR</li>
                <li>9:1 Profit Sharing</li>
                <li>Referral Opportunities + Credit Scores + Bonus Issue</li>
                <li>Life Time Investment Plan</li>
                <li>Easy Withdrawal After One Month</li>
              </ul>
              <a
                href="#"
                onClick={() => history.push('/coming-soon')}
                className="main-btn btn-hover border-btn"
              >
                Purchase Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
