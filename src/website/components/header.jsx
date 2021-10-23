import React from 'react';
import history from '../../history';

export default function Header() {
  return (
    <header className="header">
      <div className="navbar-area headroom wow fadeInDown">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#home">
                  <img src="assets/images/logo.png" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <div className="ms-auto">
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <a className="page-scroll active" href="#home">
                          Home
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="page-scroll" href="#about">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="page-scroll" href="#feature-1">
                          Features
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="" href="#pricing">
                          Pricing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="" href="#contact">
                          Contact
                        </a>
                      </li>
                      <li className="login-btn">
                        <button
                          onClick={() => history.push('/coming-soon')}
                          className="btn btn-common nav-item"
                          style={{ color: '#37c2cc' }}
                        >
                          Login
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-btn">
                  <a
                    href="/users/login"
                    className="main-btn btn-hover"
                  >
                    Login
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
