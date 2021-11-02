import React from 'react';
import emailjs from 'emailjs-com';

export default function Footer() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_x8ilhi3',
        'template_j65jf9m',
        e.target,
        'user_i2lLlOqID6yTi04leJGH0'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  }
  return (
    <footer className="footer pt-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
            <div className="footer-widget">
              <div className="logo">
                <a href="#home">
                  <img src="assets/images/logo.png" alt="logo" width="100%" />
                </a>
              </div>
              <p className="desc">
                You can connect us through the social media platforms.
              </p>
              <ul className="social-links">
                <li>
                  <a href="https://m.facebook.com/profile.php?ref=wizard">
                    <i className="lni lni-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/smart-funds-1a80a5220/">
                    <i className="lni lni-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/smartfunds_/">
                    <i className="lni lni-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/smartfunds54">
                    <i className="lni lni-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto: info@smartfunds.co.in">
                    <i className="material-icons">mail_outline</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-2 col-md-6 col-sm-6 offset-xl-1">
            <div className="footer-widget">
              <h3>About Us</h3>
              <ul className="links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#feature-1">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="footer-widget">
              <h3>Subscribe Newsletter</h3>
              <form action="#" onSubmit={sendEmail}>
                <input type="email" placeholder="Email" name="email" />
                <button className="main-btn btn-hover">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center">
        <p className="text">
        &copy; 2021  &nbsp;
          <a href="https://smartfunds.co.in" rel="nofollow">
            SMART FUNDS .
          </a>
          &nbsp;&nbsp; Inc, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
