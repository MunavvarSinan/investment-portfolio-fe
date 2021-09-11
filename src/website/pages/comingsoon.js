import React from 'react';
import './comingsoon.css';
import history from '../../history'

export const ComingSoon = () => {
  setTimeout(() => {
    history.push('/');
  }, 3000);
  return (
    <main className="main-14">
      <div className="main-wrapper demo-14">
        <img src="assets/images/" alt="" className="shape shape-1" />
        <img src="assets/images/shape-2.svg" alt="" className="shape shape-2" />
        <img src="assets/images/shape-3.svg" alt="" className="shape shape-3" />
        <img src="assets/images/shape-4.svg" alt="" className="shape shape-4" />
        <img src="assets/images/shape-5.svg" alt="" className="shape shape-5" />
        <img src="assets/images/shape-6.svg" alt="" className="shape shape-6" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 col-md-6">
              <div className="img-wrapper wow fadeInLeft" data-wow-delay=".2s">
                <img src="assets/images/img-1.svg" alt="" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 odd-col">
              <div className="content-wrapper">
                <h1 className="wow fadeInDown" data-wow-delay=".2s">
                  Coming Soon
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
