import React from 'react';
import { Home } from './pages/home';
import './styles.css';

export const Website = () => {
  return (
    <>
      <Home />
      <a href="#home" className="scroll-top btn-hover">
        <i className="lni lni-chevron-up-circle scroll-top-icon"></i>
      </a>
    </>
  );
};
